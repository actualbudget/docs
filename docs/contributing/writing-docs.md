# Writing Documentation

## Documentation Structure

### Documentation Map

Below is the documentation structure for the Actual Community Docs.

```
#################################
#
# TODO: This does not reflect the real world anymore - maybe we should do a generic
#       writeups on when to use folder and when not to. If we go down this road it
#       is impeartive that the naming of the folders reflect the title in the sidebar.
#     
#       Anyway - if we where to keep it here, I suggest we put this information into
#       an "expand box"
#
#################################
```


```
website # the root directory of the documentation site
├── docs
│   └── index.md # the introduction file
│   └── faq.md
│   └── releases.md # release notes
    └── accounts # Anything relating to accounts, account management or transactions
        ...
    └── advanced # Some more advanced guides for Actual
        └── scripts
        ...
    └── backup-restore
        ...
    └── budgeting # Budget specific, including rules, schedules etc.
        └── rules
        ...
    └── contributing # How to contribute, project structures etc.
        ...
    └── experimental # Documentation for experimental features
        ...
    └── getting-started # Getting started with Actual
        ...
    └── install # Documentation around installing actual
        ...
    └── migration # Migrating into Actual and using the tools available.
        ...
    └── reports
        ...
    └── tour
        ...
    └── transactions
        ...
    └── troubleshooting
        ...
│
└── static
    └── img
```

### Document Frontmatter

Front matter is used to add metadata to your documentation file. The front matter is used to enrich the default metadata inferred from the content or other configuration.

```markdown
---
title: My Doc Title
more_data:
  - Can be provided
  - as: objects
    or: arrays
---
```

### Document Headings

The below shows how a document should be laid out.

`# A single heading`

Each document should only have one single heading. When a title is not provided in the front matter of the document, the heading provided is used instead and displayed in the documentation tree.

`## Sub Headings to split out sections of your document`

Subheadings are used to split the document into meaningful "chapters." These are then used in the right sidebar when viewing a document to allow the reader to easily navigate the document content.

`### Section subheadings.`

Each "chapter" can then be split into subsections using three-gate headings.



## Document Guidelines

Below are some basic guidelines on how the documentation should be formatted. Everyone has their own writing style, but the layout of the documents should be the same across all documents.

### Language

When writing your documentation, please use the English language. At this time, the documentation team doesn't have any translators available to translate documents into other languages, but this is something we would like to do in the future.

Docusaurus 2 provides translation using [i8n](https://docusaurus.io/docs/i18n/introduction). If this is something you would like to pursue, please feel free to open a PR.

### Tone and Voice

* **Friendly and Approachable**: Write in a conversational and welcoming tone. The goal is to make users feel comfortable and supported.

* **Active Voice**: Use active voice to make sentences more direct and engaging.

 * Example: "Install Actual Budget on your computer" instead of "Actual Budget should be installed on your computer".

* **Time Neutral**: Use present voice, unless documentation is for experimental or unreleased features. Where time references are made, remove them upon release or removal of the feature.
  
  * Example: "Filters can be used..."Instead of "As of June 2022 update, you can...".

### Format

* Keep paragraphs short and focused. Each paragraph should convey a single idea or concept.

* Use bullet points or numbered lists to break down information into digestible chunks.

* **Consistent Terminology**: Use consistent terminology throughout the documentation. Refer to the product as "Actual Budget" or "Actual."


## Formatting text

All documentation is written in Markdown, and there is a specific Markdown items that is specific to Docusaurus (the system we use to create this documentation).


### Call Outs

If you would like to highlight a section of your document with a note, you can use the following:

```markdown
:::notes
Your note content
:::
```

If you want to make a reader aware of a cautionary item in your documentation, you can use this:

```markdown
:::caution
Your cautionary item
:::
```

### Quotes & Code Blocks

Using quotes within your documentation is easy to do using:

```markdown
> Your quote goes here
> another line of your quote
> and another
```

## Using Images

Using images improves documentation. It is easier for people who read documentation to see what is 
in the accompanying description.

When taking screenshots, there are a few things to keep in mind:

* Ensuring that the image is crystal clear and directly relevant is crucial. 
  Blurry or muddled images can detract from the user's understanding and confidence in the documentation.
* Striking the right balance is key. Too much information can overwhelm the reader, 
  while too little can leave them without the necessary context. Your judgment in 
  this matter is crucial to the effectiveness of the documentation.
* Avoid taking screenshots on a big screen when the browser is in full-screen mode. 
  Try to make images at most 1100 pixels wide and 700 pixels long.
* Images must always be saved in the PNG format.
* Take only images using the _light_ mode, not _dark_.
* If you need to address more than one part of the screenshot, annotate the image. See below for more details.

:::info
Screenshots taken on a retina screen should be titled as such: image-name@2x.png. This allows Docusaurus 
to rescale the images where appropriate.
:::


### Annotating Images

The clearest way to highlight areas on a screenshot is the 'transparency' box.

![](/static/img/repo/highlighting.png)

If a transparency box isn't available in your image editor, use an arrow or a colored box with hex: `#d5805a` / rgb: `213, 128, 90` (an analogous shade of orange to Actual's purple). If it's not practical to be that precise, just pick one as close as you can.



#### Generic Images and Directory Structures

In order to minimize the workload for adding images and make updating images easier, there's a directory containing regularly used images.

For example, many feature instructions may first require the user to navigate to a standard menu, e.g.,

> "Click on 'Settings' in the sidebar"  
> [inserted image of the settings button in the sidebar]

In this case, the relevant screenshot is found at `/static/img/elements/sidebar/sidebar-settings@2x.png`, along with all other possible menu selections in the sidebar.

If there's an image missing from any of the respective folders in `elements/`, feel free to add one yourself following the same naming scheme.

All other screenshots for the page you are working on should be placed in the respective folder in the `img/` directory. e.g., when working on a page titled 'cool-feature', images should be placed in the `static/img/cool-feature/` folder.

