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

> **Important**: This "backend" is **not** a remote server - it's a local background process/worker that handles database operations, business logic, and sync.

## High-Level Architecture

```mermaid
graph LR
    subgraph "Actual Budget App"
        Desktop["Desktop App<br/>(Electron)"]
        Web["Web App<br/>(Browser)"]
        SyncServer["Sync Server<br/>(Node.js)<br/>[Optional]"]
    end

    classDef app fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef optional fill:#fff3e0,stroke:#f57c00,stroke-width:2px,stroke-dasharray: 5 5

    class Desktop,Web app
    class SyncServer optional
```

## Package Structure

The project uses **Yarn workspaces** with these main packages:

```mermaid
graph TB
    subgraph "packages/"
        subgraph "Frontend"
            DC["desktop-client/<br/>React UI (shared)"]
            DE["desktop-electron/<br/>Electron main process"]
            CL["component-library/<br/>Shared UI components"]
        end

        subgraph "Backend"
            LC["loot-core/<br/>Core business logic & database"]
            SS["sync-server/<br/>Optional sync server"]
            API["api/<br/>Public API for developers"]
        end

        subgraph "Utilities"
            CRDT["crdt/<br/>Conflict-free data structures"]
        end
    end

    subgraph "Desktop Client Structure"
        DC_COMP["src/components/<br/>React components"]
        DC_HOOKS["src/hooks/<br/>Custom React hooks"]
        DC_STYLE["src/style/<br/>CSS and themes"]
        DC_PUBLIC["public/<br/>Static assets"]
    end

    subgraph "Loot Core Structure"
        LC_SERVER["src/server/<br/>Backend logic"]
        LC_CLIENT["src/client/<br/>Frontend communication"]
        LC_SHARED["src/shared/<br/>Shared utilities"]
        LC_PLATFORM["src/platform/<br/>Platform-specific code"]
    end

    DC --> DC_COMP
    DC --> DC_HOOKS
    DC --> DC_STYLE
    DC --> DC_PUBLIC

    LC --> LC_SERVER
    LC --> LC_CLIENT
    LC --> LC_SHARED
    LC --> LC_PLATFORM

    classDef frontend fill:#e1f5fe,stroke:#0277bd
    classDef backend fill:#e8f5e8,stroke:#388e3c
    classDef utility fill:#f3e5f5,stroke:#7b1fa2
    classDef structure fill:#fff3e0,stroke:#f57c00

    class DC,DE,CL frontend
    class LC,SS,API backend
    class CRDT utility
    class DC_COMP,DC_HOOKS,DC_STYLE,DC_PUBLIC,LC_SERVER,LC_CLIENT,LC_SHARED,LC_PLATFORM structure
```

## Core Components Deep Dive

### 1. Desktop Client (`packages/desktop-client/`)

**What it does**: React-based UI that works in both desktop and web environments.

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

**What it does**: The "backend" that runs locally - handles all business logic, database operations, and sync.

**Architecture**:

```mermaid
graph TB
    subgraph "loot-core/"
        subgraph "src/server/ - Backend Logic"
            ACCOUNTS["accounts/<br/>Account management"]
            BUDGET["budget/<br/>Budget calculations"]
            DB["db/<br/>Database layer"]
            IMPORTERS["importers/<br/>File import logic"]
            SYNC["sync/<br/>CRDT sync engine"]
            MAIN["main.ts<br/>Server entry point"]
        end

        subgraph "src/client/ - Frontend Communication"
            ACTIONS["actions.ts<br/>Redux actions"]
            TYPES["state-types/<br/>TypeScript types"]
            QUERIES["queries.ts<br/>Database queries for UI"]
        end

        subgraph "src/shared/ - Shared Utilities"
            MONTHS["months.ts<br/>Date utilities"]
            QUERY["query.ts<br/>Query builder"]
            UTIL["util.ts<br/>Common helpers"]
        end

        subgraph "src/platform/ - Platform Abstractions"
            PLATFORM_SERVER["server/<br/>Server-side platform code"]
            PLATFORM_CLIENT["client/<br/>Client-side platform code"]
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

**What it does**: Optional Node.js server for multi-device sync and bank connections.

**Features**:
- CRDT-based conflict resolution
- End-to-end encryption
- Multi-user support
- Bank sync integrations (GoCardless, SimpleFin, Pluggy)

## Data Flow & Communication

### Desktop App Flow
```mermaid
graph LR
    User["User Input"] --> ElectronRenderer["Electron Renderer<br/>(React)"]
    ElectronRenderer --> IPC["IPC"]
    IPC --> MainProcess["Main Process"]
    MainProcess --> BackgroundProcess["Background Process<br/>(Loot Core)"]
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
    PostMessage --> WebWorker["Web Worker<br/>(Loot Core)"]
    WebWorker --> AbsurdSQL["AbsurdSQL<br/>(SQLite in browser)"]

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
        Desktop[Desktop App<br/>Electron]
        Web[Web App<br/>Browser PWA]
        Mobile[Mobile Web<br/>Responsive]
    end

    %% Frontend Layer
    subgraph "Frontend Layer"
        subgraph "Desktop Client"
            MainProc[Main Process<br/>Window Management]
            RendProc[Renderer Process<br/>React UI]
            BgProc[Background Process<br/>Loot Core]
        end

        subgraph "Web Client"
            ReactUI[React UI<br/>Components & State]
            ServiceWorker[Service Worker<br/>PWA & Offline]
            WebWorker[Web Worker<br/>Loot Core & DB]
        end
    end

    %% Core Engine
    subgraph "Loot Core Engine"
        subgraph "Platform Layer"
            SQLite[SQLite Database]
            FileSystem[File System]
            Crypto[Encryption]
        end

        subgraph "Business Logic"
            Database[Database Schema<br/>Transactions, Accounts]
            Sync[CRDT Sync Engine<br/>Merkle Trees]
            Spreadsheet[Spreadsheet Engine<br/>Formulas & Calculations]
            Budget[Budget Engine<br/>Envelope & Tracking]
            Importers[Import Engine<br/>CSV, OFX, QIF, YNAB]
        end
    end

    %% Backend Layer
    subgraph "Sync Server (Optional)"
        subgraph "Core Server"
            ExpressJS[Express.js Server]
            Auth[Authentication<br/>JWT, OpenID]
            UserMgmt[User Management<br/>Multi-user, Permissions]
        end

        subgraph "Bank Integrations"
            GoCardless[GoCardless<br/>EU/UK Banks, PSD2]
            SimpleFin[SimpleFin<br/>US Banks, Open Banking]
            PluggyAI[Pluggy AI<br/>Brazilian Banks]
        end

        FileStorage[File Storage<br/>Encrypted Budget Files]
    end

    %% External Systems
    subgraph "External Data Sources"
        BankAPIs[Bank APIs<br/>500+ Institutions]
        FileImports[File Imports<br/>CSV, OFX, QIF]
        ManualEntry[Manual Entry<br/>User Input]
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
        SS_CRDT[CRDT Engine]
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
