# Actual Budget App - Developer Architecture Guide

> **Welcome to Actual!** This guide explains how the Actual budget app is architected and organized to help new developers understand the codebase and contribute effectively.

## Quick Start for Developers

Actual is a **local-first personal finance app** with these key characteristics:

- **Multi-platform**: Desktop (Electron) and Web (PWA) apps
- **Local-first**: Works offline with SQLite database
- **Real-time sync**: Optional server for multi-device synchronization
- **Bank integration**: Connects to 500+ banks worldwide
- **Privacy-focused**: End-to-end encryption, zero-knowledge sync

### Key Insight: Frontend + Backend in One App

When Actual runs, it actually runs **two things simultaneously**:
1. **Frontend**: React-based web UI
2. **Backend**: Local database server (called "Loot Core")

> **Important**: This "backend" is **not** a remote server - it's a local background process/worker that handles database operations, shared logic, and sync.

## High-Level Architecture

```mermaid
graph LR
    subgraph "Actual Budget App"
        SyncServer["Sync Server
        (Node.js)"]
        Web["Web App
        (Browser)"]
        Desktop["Desktop App
        (Electron)"]
    end

    classDef app fill:#e3f2fd,stroke:#1976d2,stroke-width:2px

    class Desktop,Web app,SyncServer
```

## Package Structure

The project uses **Yarn workspaces** with these main packages:

```mermaid
graph TB
    subgraph "External Systems"
        BankAPIs["Bank API Connectors"]
        OpenID["OpenID Providers"]
        APIClient["Api Clients"]
    end

    subgraph "Core Engine"
        LC["📊 loot-core
        • Shared logic
        • SQLite database
        • CRDT sync
        • Budget calculations
        • Import/export logic
        • Spreadsheet engine"]
    end

    subgraph "Backend Services"
        SS["🔄 sync-server
        • Integrated Web Client
        • Multi-device Sync
        • Express.js server
        • User management
        • End-to-end encryption"]
        API["🔌 api
        • Programmatic control
        • Data Import
        • Data Export"]
    end

    subgraph "Frontend Layer"
        DC["🎨 desktop-client
        • React UI Components
        • Shared web/desktop UI
        • Redux state management
        • Themes & styling"]
        CL["🧩 component-library
        • Reusable Components
        • Design system
        • UI primitives
        • Shared components"]
    end

    subgraph "Platform Wrappers"
        DE["🖥️ desktop-electron
        • integrated sync-server
        • Desktop App Shell
        • Electron main process
        • File system access"]
    end

    subgraph "User Applications"
        DesktopApp["Desktop App
        Windows, Mac, Linux"]
        WebApp["Web Client
        Browser PWA"]
    end

    %% External connections
    BankAPIs <--> SS
    OpenID <--> SS
    APIClient <--> API

    %% Backend flow
    SS <--> LC
    SS <--> LC
    API <--> LC

    %% Frontend flow
    LC <--> DC
    CL --> DC

    %% Platform connections
    DE --> DC
    DE --> LC

    %% User app connections
    DesktopApp --> DE
    WebApp --> DC
    WebApp --> LC

    %% Styling
    classDef external fill:#fce4ec,stroke:#e91e63,stroke-width:2px
    classDef core fill:#e8f5e8,stroke:#4caf50,stroke-width:3px
    classDef backend fill:#fff3e0,stroke:#ff9800,stroke-width:2px
    classDef frontend fill:#e1f5fe,stroke:#2196f3,stroke-width:2px
    classDef platform fill:#f3e5f5,stroke:#9c27b0,stroke-width:2px
    classDef userapp fill:#e0f2f1,stroke:#009688,stroke-width:3px

    class BankAPIs,DevTools external
    class LC core
    class SS,API backend
    class DC,CL frontend
    class DE platform
    class DesktopApp,WebApp userapp
```

### Package Responsibilities

| Package | Type | Primary Role | Key Technologies |
|---------|------|--------------|------------------|
| **loot-core** | Core Engine | Shared logic, database communication, sync | SQLite, CRDT, Custom spreadsheet engine |
| **sync-server** | Backend Service | Multi-device sync, bank integrations | Express.js, OAuth, End-to-end encryption |
| **api** | Backend Service | API for developers | Programmatic access |
| **desktop-client** | Frontend | Shared React UI for web & desktop | React, Redux |
| **desktop-electron** | Platform Wrapper | Desktop app shell and native features | Electron, IPC, File system |
| **component-library** | Frontend | Reusable UI components | React components, Design system |

## Core Components Deep Dive

### 1. Desktop Client (`packages/desktop-client/`)

**What it does**: React-based UI that works in both desktop app and web environments.

**Key directories**:
- `src/components/` - All React components organized by feature
- `src/hooks/` - Custom React hooks for state management
- `src/style/` - CSS modules and theme system
- `src/browser-preload.browser.js` - Web app initialization
- `src/browser-server.js` - Web worker setup

**Entry points**:
- **Web**: `index.html` → React app with Web Worker
- **Desktop**: Same React app but in Electron renderer process

### 2. Loot Core (`packages/loot-core/`)

**What it does**: The "backend" that runs locally - handles all shared logic, database operations, and sync.

**Architecture**:

```mermaid
graph TB
    subgraph "loot-core/"
        subgraph "src/server/ - Backend Logic"
            ACCOUNTS["accounts/
            Account management"]
            BUDGET["budget/
            Budget calculations"]
            DB["db/
            Database layer"]
            IMPORTERS["importers/
            File import logic"]
            SYNC["sync/
            CRDT sync engine"]
            MAIN["main.ts
            Server entry point"]
        end

        subgraph "src/client/ - Frontend Communication"
            ACTIONS["actions.ts
            Redux actions"]
            TYPES["state-types/
            TypeScript types"]
            QUERIES["queries.ts
            Database queries for UI"]
        end

        subgraph "src/shared/ - Shared Utilities"
            MONTHS["months.ts
            Date utilities"]
            QUERY["query.ts
            Query builder"]
            UTIL["util.ts
            Common helpers"]
        end

        subgraph "src/platform/ - Platform Abstractions"
            PLATFORM_SERVER["server/
            Server-side platform code"]
            PLATFORM_CLIENT["client/
            Client-side platform code"]
        end
    end

    classDef backend fill:#e8f5e8,stroke:#388e3c
    classDef frontend fill:#e1f5fe,stroke:#0277bd
    classDef shared fill:#fff3e0,stroke:#f57c00
    classDef platform fill:#f3e5f5,stroke:#7b1fa2

    class ACCOUNTS,BUDGET,DB,IMPORTERS,SYNC,MAIN backend
    class ACTIONS,TYPES,QUERIES frontend
    class MONTHS,QUERY,UTIL shared
    class PLATFORM_SERVER,PLATFORM_CLIENT platform
```

**Communication**:
- **Desktop**: Background process communicates via WebSocket/IPC
- **Web**: Web Worker communicates via `postMessage`

### 3. Desktop Electron (`packages/desktop-electron/`)

**What it does**: Electron main process that creates windows, manages files, and spawns the Loot Core background process.

**Key files**:
- `index.ts` - Main entry point, window creation
- `menu.ts` - Application menu setup
- `preload.ts` - Secure communication bridge
- `server.ts` - Manages Loot Core background process

### 4. Sync Server (`packages/sync-server/`)

**What it does**: Node.js server for multi-device sync and bank connections.

**Features**:
- CRDT-based conflict resolution
- End-to-end encryption
- Multi-user support
- Bank sync integrations (GoCardless, SimpleFin, Pluggy)

## Data Flow & Communication

### Desktop App Flow
```mermaid
graph LR
    User["User Input"] --> ElectronRenderer["Electron Renderer
    (React)"]
    ElectronRenderer --> IPC["IPC"]
    IPC --> MainProcess["Main Process"]
    MainProcess --> BackgroundProcess["Background Process
    (Loot Core)"]
    BackgroundProcess --> SQLite["SQLite"]

    classDef user fill:#e1f5fe
    classDef process fill:#e8f5e8
    classDef data fill:#fff3e0

    class User user
    class ElectronRenderer,MainProcess,BackgroundProcess process
    class SQLite data
```

### Web App Flow
```mermaid
graph LR
    User["User Input"] --> ReactUI["React UI"]
    ReactUI --> PostMessage["postMessage"]
    PostMessage --> WebWorker["Web Worker
    (Loot Core)"]
    WebWorker --> AbsurdSQL["AbsurdSQL
    (SQLite in browser)"]

    classDef user fill:#e1f5fe
    classDef process fill:#e8f5e8
    classDef data fill:#fff3e0

    class User user
    class ReactUI,WebWorker process
    class AbsurdSQL data
```

### Sync Flow
```mermaid
graph LR
    LocalChanges["Local Changes"] --> CRDTMessages["CRDT Messages"]
    CRDTMessages --> SyncServer["Sync Server"]
    SyncServer --> OtherDevices["Other Devices"]
    OtherDevices --> MergeApply["Merge & Apply"]

    classDef local fill:#e8f5e8
    classDef sync fill:#f3e5f5
    classDef remote fill:#fff3e0

    class LocalChanges,MergeApply local
    class CRDTMessages,SyncServer sync
    class OtherDevices remote
```

## Architecture Diagrams

### System Overview

```mermaid
graph TB
    %% User Layer
    subgraph "User Interfaces"
        Desktop[Desktop App
        Electron]
        Web[Web App
        Browser PWA]
        Mobile[Mobile Web
        Responsive]
    end

    %% Frontend Layer
    subgraph "Frontend Layer"
        subgraph "Desktop Client"
            MainProc[Main Process
            Window Management]
            RendProc[Renderer Process
            React UI]
            BgProc[Background Process
            Loot Core]
        end

        subgraph "Web Client"
            ReactUI[React UI
            Components & State]
            ServiceWorker[Service Worker
            PWA & Offline]
            WebWorker[Web Worker
            Loot Core & DB]
        end
    end

    %% Core Engine
    subgraph "Loot Core Engine"
        subgraph "Platform Layer"
            SQLite[SQLite Database]
            FileSystem[File System]
            Crypto[Encryption]
        end

        subgraph "shared logic"
            Database[Database Schema
            Transactions, Accounts]
            Sync[CRDT Sync
            Merkle Trees]
            Spreadsheet[Spreadsheet Engine
            Formulas & Calculations]
            Budget[Budget Engine
            Envelope & Tracking]
            Importers[Import Engine
            CSV, OFX, QIF, YNAB]
        end
    end

    %% Backend Layer
    subgraph "Sync Server (Optional)"
        subgraph "Core Server"
            ExpressJS[Express.js Server]
            Auth[Authentication
            JWT, OpenID]
            UserMgmt[User Management
            Multi-user, Permissions]
        end

        subgraph "Bank Integrations"
            GoCardless[GoCardless
            EU/UK Banks, PSD2]
            SimpleFin[SimpleFin
            US Banks, Open Banking]
            PluggyAI[Pluggy AI
            Brazilian Banks]
        end

        FileStorage[File Storage
        Encrypted Budget Files]
    end

    %% External Systems
    subgraph "External Data Sources"
        BankAPIs[Bank API Connectors]
        FileImports[File Imports
        CSV, OFX, QIF]
        ManualEntry[Manual Entry
        User Input]
    end

    %% Data Flow Connections
    Desktop --> MainProc
    Web --> ReactUI
    Mobile --> ReactUI

    MainProc <--> RendProc
    RendProc <--> BgProc
    ReactUI <--> ServiceWorker
    ReactUI <--> WebWorker

    BgProc <--> Database
    WebWorker <--> Database

    Database <--> SQLite
    Database <--> Sync
    Database <--> Spreadsheet
    Database <--> Budget
    Database <--> Importers

    Sync <--> ExpressJS
    ExpressJS <--> Auth
    ExpressJS <--> UserMgmt
    ExpressJS <--> FileStorage

    GoCardless <--> BankAPIs
    SimpleFin <--> BankAPIs
    PluggyAI <--> BankAPIs

    Importers <--> FileImports
    Database <--> ManualEntry

    %% Styling
    classDef userInterface fill:#e1f5fe
    classDef frontend fill:#f3e5f5
    classDef core fill:#e8f5e8
    classDef backend fill:#fff3e0
    classDef external fill:#fce4ec

    class Desktop,Web,Mobile userInterface
    class MainProc,RendProc,BgProc,ReactUI,ServiceWorker,WebWorker frontend
    class SQLite,FileSystem,Crypto,Database,Sync,Spreadsheet,Budget,Importers core
    class ExpressJS,Auth,UserMgmt,GoCardless,SimpleFin,PluggyAI,FileStorage backend
    class BankAPIs,FileImports,ManualEntry external
```

### Component Communication Flow

```mermaid
sequenceDiagram
    participant U as User
    participant UI as Frontend UI
    participant LC as Loot Core
    participant SS as Sync Server
    participant BA as Bank API

    Note over U,BA: Transaction Import Flow

    U->>UI: Connects bank account
    UI->>SS: Request bank connection
    SS->>BA: OAuth authentication
    BA-->>SS: Access token
    SS-->>UI: Connection established

    SS->>BA: Fetch transactions
    BA-->>SS: Transaction data
    SS->>SS: Normalize transactions
    SS-->>UI: Processed transactions

    UI->>LC: Import transactions
    LC->>LC: Apply business rules
    LC->>LC: Update database
    LC->>LC: Trigger spreadsheet recalc
    LC-->>UI: Updated state
    UI-->>U: Show imported transactions

    Note over U,BA: Sync Flow

    U->>UI: Makes budget changes
    UI->>LC: Update local data
    LC->>LC: Create CRDT messages
    LC->>SS: Sync messages
    SS->>SS: Merge with other devices
    SS-->>LC: Resolved state
    LC-->>UI: Updated data
    UI-->>U: Real-time updates
```

### Data Synchronization Model

```mermaid
graph LR
    subgraph "Device A"
        DA_UI[UI]
        DA_LC[Loot Core]
        DA_DB[SQLite DB]
        DA_UI <--> DA_LC
        DA_LC <--> DA_DB
    end

    subgraph "Sync Server"
        SS_CRDT[CRDT sync]
        SS_MERGE[Conflict Resolution]
        SS_STORE[File Storage]
        SS_CRDT <--> SS_MERGE
        SS_MERGE <--> SS_STORE
    end

    subgraph "Device B"
        DB_UI[UI]
        DB_LC[Loot Core]
        DB_DB[SQLite DB]
        DB_UI <--> DB_LC
        DB_LC <--> DB_DB
    end

    DA_LC <--> SS_CRDT
    DB_LC <--> SS_CRDT

    classDef device fill:#e3f2fd
    classDef server fill:#f1f8e9

    class DA_UI,DA_LC,DA_DB,DB_UI,DB_LC,DB_DB device
    class SS_CRDT,SS_MERGE,SS_STORE server
```
