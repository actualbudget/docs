# Writing Documentation

Except for a few sections, most of the documentation is aimed at end users. It is important to keep this in mind when writing documentation. In practice, this means that it is better to be a bit verbose and write out every step in a process than assume that the reader is on the writer's technical level.

<details><summary>Read example</summary>

For those with experience, the process is straightforward and familiar: _To update with our latest releases, simply use the `git pull` command from the `master` branch of your local directory of Actual. Once the changes are updated, execute the `yarn install` to download the latest updates from the releases._

A better approach for inexperienced people, as it explains what each step is doing and the expected outcome.:

1. Stop the server if it's running. You can use the keyboard shortcut <Key mod= "ctrl" k= "c"/> (even on macOS) to stop the server or close the terminal window it's running from.
2. Run `git pull` from the directory you cloned the project into. This will download the latest server code.
3. Run `yarn install` from that same directory. This will download the latest web client code and any updated dependencies for the server.
4. Restart the server by running `yarn start`.

</details>

We generate our website using the [Docosaurus](https://docusaurus.io/) system, and our documentation is written in Markdown (+ some Docosaurus specifics).


If you want to contribute, you need to know about the following to items:

* [Actual documentation repository on GitHub](https://github.com/actualbudget/docs)
* [Actual Budget #documentation channel on Discord](https://discord.com/channels/937901803608096828/1027831463103696928) 


## Documentation Structure

We follow a strict, mandatory, structure in our documents.

`# The document title`

Each document must only have one heading or title. When a title is not provided in the document's front matter (see below), 
the heading provided is used instead and displayed in the documentation tree.


`## Sub Headings to split out sections of your document`

Subheadings divide the document into meaningful chapters or sections. When viewing a document, they are displayed in the right sidebar to allow the reader to navigate the content easily.

`### Section subheadings.`

Each chapter can then be split into subsections using three-gate headings. Is is also pos

It is possible to have the fourth level if needed.


### Document Frontmatter

Front matter is used to add metadata to your documentation file. The front matter enriches the default metadata inferred from the content or other configuration.

Using front matter is not mandatory.

```markdown
---
title: My Doc Title
more_data:
  - Can be provided
  - as: objects
    or: arrays
---
```


### Documentation folder structure

The documentation folder structure should follow the structure in the left of the screen. 
This means sections with more than one page have their own directories. 


<details><summary>Click here to get an overview of the folder structure</summary>

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
    └── experimental # Documentation for experimental features.
        ...
    └── getting-started # Getting started with Actual.
        ....
    └── install # Documentation around installing actual.
        ...
    └── migration # Migrating into Actual and using the tools available.
        ...
    └── reports # Everything reporting.
        ...
    └── tour # The Actual Tour.
        ...
    └── transactions # Handling transactions.
        ...
    └── troubleshooting # Hints and tips regarding troubles.
        ...
│
└── static
    └── img
```

</details>

## Document Guidelines

Below are some basic guidelines on how the documentation should be formatted. Everyone has their own writing style, but the layout of the documents should be the same across all documents.

### Language

When writing your documentation, please use the English language. At this time, the documentation team doesn't have any translators available to translate documents into other languages, but this is something we would like to do in the future.

Docusaurus 2 provides translation using [i8n](https://docusaurus.io/docs/i18n/introduction). If this is something you would like to pursue, please feel free to open a PR.

### Tone and Voice

* **Friendly and Approachable**: Write in a conversational and welcoming tone. The goal is to make users feel comfortable and supported.

* **Active Voice**: Use active voice to make sentences more direct and engaging. Example: _Install Actual Budget on your computer_ instead of _Actual Budget should be installed on your computer_.

* **Time Neutral**: Use present voice, unless documentation is for experimental or unreleased features. Where time references are made, remove them upon release or removal of the feature. Example: _Filters can be used..._ instead of _As of June 2022 update, you can..._.

### Format

* **Keep paragraphs short and focused**. Each paragraph should convey a single idea or concept.

* **Use bullet points** or numbered lists to break down information into digestible chunks.

* **Consistent Terminology**: Use consistent terminology throughout the documentation. Refer to the product as "Actual Budget" or "Actual."


## Formatting text

All documentation is written in Markdown, and there is a specific Markdown items that is specific to Docusaurus.

If you have never used Markdown, please consult [CommonMark](https://commonmark.org/) and the 
[Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features) guide. You can learn more about Markdown in 
[The Markdown Guide](https://www.markdownguide.org/).

### Keyboard shortcuts


```markdown
<Key k="f" /> shows the f-key.
<Key k="enter" /> shows the Enter-key.
<Key mod="shift" k="enter" /> shows the Shift-Enter key combination.
<Key mod="cmd" k="enter" /> shows the Command-Enter key combination.
```

#### The above will be rendered as follows

* <Key k="f" /> shows the f-key.
* <Key k="enter" /> shows the Enter-key.
* <Key mod="shift" k="enter" /> shows the Shift-Enter key combination.
* <Key mod="cmd" k="enter" /> shows the Command-Enter key combination.


### Highlights 

If you would like to highlight a section of your document you can use the following:

```markdown
:::tip
Your tip content
:::
```


```markdown
:::note
Your note content
:::
```

If you want to make a reader aware of a cautionary item in your documentation, you can use this:

```markdown
:::caution
Your cautionary item
:::
```

#### The above highlights will be rendered as follows
:::tip
Your tip content
:::

:::note
Your note content
:::

:::caution
Your cautionary item
:::


### Hiding and showing  information


<details><summary>Click here to see how this is made</summary>

`<details><summary>The title of the summary</summary>`

Place your content inside the details-tags.

`</details>`


</details>


## Naming Standards

### For documents

* Filenames should be self-explanatory and reflect the title of the file.
* A longer filename is preferred over a shorter one.
* Folder names must reflect the naming in the sidebar.

### For images

* Images must be placed in the `/static/img/` folder.
* Except for logos and such, all images related to the documentation must be placed in a folder corresponding to where the document is stored. Let's say you want to add an image to a document in the `/docs/budgeting/` folder - the corresponding images must be stored in the `/static/img/budgeting/` folder.
* Image names must be prefixed to correspond with the document they primarily belong to. Let's say you are adding an image to the `/docs/budgeting/categories.md` file, then all image names need to be prefixed with `categories-`.
* For regularly used images, these can be put into `/static/img/elements/`, inside it's own folders. Let's say you want to store images related to the sidebar; then all _sidebar_ images need to be placed in `/static/images/elements/sidebar/`. We have decided to do it this way to minimize the workload for adding images and updating easier.


## Using Images

Using images accompanying the description makes the documentation more accessible, thus improving its readability.

The way to do this is to take good screenshots.  When taking screenshots, there are a few things to keep in mind:

* It is crucial to ensure that the image is crystal clear and directly relevant. 
  Blurry or muddled images can detract from the user's understanding and confidence in the documentation.
* Striking the right balance on how much a screenshot should include is vital. Too much information can overwhelm the reader, 
  while too little can leave them without the necessary context. Your judgment in 
  this matter is crucial to the effectiveness of the documentation.
* Avoid taking screenshots on a big screen when the browser is in full-screen mode. 
  Try to take screenshots at most 1100 pixels wide and 700 pixels long. By this, we do not mean the size of the 
  finished images but how much of the screen you are taking a picture of.
* Images must always be saved in the PNG format.
* Take only images using the _light_ mode, not _dark_.
* If you need to address more than one part of the screenshot, annotate the image. See below for more details.

:::info
Screenshots taken on a retina screen should be titled as such: image-name@2x.png. This allows Docusaurus 
to rescale the images where appropriate.
:::




### Annotating Images


There are several reasons why you need to annotate your screenshots.
One reason is that you need your readers to pay attention to some aspects of the GUI. This is true if you have a screenshot of an area (for context) and you need to highlight one part of that area. Another reason is that you must address more than one element in the GUI, but presenting several variants of the same screenshot is unfavourable.
We have a few suggestions when annotating screenshots:


#### Do use boxes over arrows
Arrows can inadvertently be misunderstood as pointing _from_ something rather than _to_. As we see in the example below, the reader can not be sure if the arrow means the column, the column header or if _To Budget_ is involved.

![](/static/img/repo/annotation-boxes-over-arrows.png)


#### Use "steps" for several elements

Use running numbers or letters inside circles, also known as "steps", when addressing more than one element in the screenshot. If there is a sequence to what a user is going to click on, use step numbers; if you want to address various elements, letters are preferred. 

![](/static/img/repo/annotation-steps.png)

If your annotation tool doesn't support 'steps ', use boxes in different colours and incorporate these colours into your explanation. This will help guide the reader's attention effectively.

![](/static/img/repo/annotation-colour-boxes.png)


<details><summary>Read example description of this way of annotating</summary>


**Using _steps_**

a. Formatting numbers. We support most formats that are commonly used.

b. Choose the date format that you are most comfortable with.

c. The first day of the week controls grouping on reports.

----


**Using coloured boxes**:

* Formatting numbers (indicated by the red box). We support most formats that are commonly used.
* If you want to change the date format you are most comfortable with, you can use the dropdown in the green box.
* The first day of the week controls grouping on reports. You will find this control indicated in the yellow box.

</details>


#### Do not draw annotations using "free hand" 

Do not use free hand "marker pens", boxes or arrows, as these kind of annotations just look sloppy. Ask for help on the 
[Actual Budget #documentation Discord channel](https://discord.com/channels/937901803608096828/1027831463103696928) 
if you need to annotate your images but are not able to do it yourself.

![](/static/img/repo/annotation-free-hand.png)


#### Annotation Colours

Use strong, clear, and crisp colours to create good contrasts. Do not use pure white or pure black. Even if we want 
all screenshots taken using the light theme, there are dark elements like the sidebar and particular dropdowns in the 
GUI. Avoid annotating these elements using dark colours.

Remember that colours are tricky for colour blind people.

We suggest using the following colours (RGB values):

| Color name | Decimal       | Hex      |
|------------|---------------|----------|
| Red        | 255,  89,  75 | FF 59 4B |
| Green      |   0, 187, 161 | 00 BB A1 | 
| Yellow     | 251, 186,   0 | FB BA 00 |
| Purple     | 119,  64, 154 | 77 40 9A |
| Blue       | 112, 175, 253 | 70 AF FD |

![](/static/img/repo/annotation-colours.png)

#### Avoid using _transparency_ or _spotlight_ annotations

Different annotation tools handle this in various ways, which means we will get inconsistent screenshots. Secondly, unless you can control the opacity and colour of the highlight, using highlighting could easily confuse more than enlighten the reader. Can you quickly find the highlighted number in the screenshot below?


![](/static/img/repo/annotation-highlights-are-bad.png)

<details><summary>It might work when using the light theme</summary>

However, because we dim down the rest of the image, this breaks over the notion that images should be clear and crisp.

![](/static/img/repo/annotation-highlights-ligth-theme.png)

</details>



### Software For Taking and Annotating Screenshots

There are many software packages available to help you take screenshots. Both Windows and Mac systems come with some rudimentary tools for this (like [Windows Snipping Tool](https://support.microsoft.com/en-us/windows/use-snipping-tool-to-capture-screenshots-00246869-1843-655f-f220-97299b865f6b) or in [MacOS](https://support.apple.com/en-us/102646)). For various Linuxes, [this Fosspost.com article](https://fosspost.org/take-screenshot-linux) can be consulted.

Some of the mentioned tools will let you annotate your screenshots, others will not.

If you are serious about your screenshots (and outside helping out with the Actual documentation), you might want to consider tools created explicitly for taking screenshots and having good annotation support. This list is not an endorsement from the Actual Budget project team but is meant as a starting point for such tools.

**For Windows and Mac**:

* [Greenshot](https://getgreenshot.org/) is a simple and effective open-source solution.
* [Flameshot](https://flameshot.org/) is a complete open-source package for taking and annotating screenshots. This program is more complex than Greenshot.
* Many consider [SnagIt](https://www.techsmith.com/screen-capture.html) the best tool in this category, but it comes at a cost.

**For Linux**, please see this [Fosspost.com article](https://fosspost.org/take-screenshot-linux).