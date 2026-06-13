# Sidekick & da.live Library Setup

This documents the manual da.live configuration required to enable the block Library panel for authors.

## One-time project setup (da.live admin)

These steps are done once per project in da.live and cannot be automated via code.

### 1. Create the library sheet

Go to `da.live` → Files → your project, create a new **sheet** at:
```
tools/sidekick/library
```

Rename the default sheet tab to `helix-blocks` and add:

| name | path |
|------|------|
| Teaser | https://content.da.live/{org}/{site}/tools/sidekick/blocks/teaser |

Replace `{org}` and `{site}` with your GitHub org and repo name (e.g. `joeripeeters` / `eds-tutorial`).

Click **Preview**.

### 2. Configure the project config sheet

Go to the project settings (gear icon next to the project name in da.live Files).

Add a sheet tab named `library` with:

| title | path |
|-------|------|
| Blocks | https://main--{site}--{org}.aem.page/tools/sidekick/library.json |

Keep the existing `data` sheet intact. Click **Save**.

### 3. Create block documents

For each block, create a sample document in da.live at:
```
tools/sidekick/blocks/{blockname}
```

The document should contain a filled-in example of the block table with placeholder content. This is what gets inserted into the page when an author picks the block from the Library panel.

Click **Preview** on each block document.

## Adding a new block to the library

1. Create the block document at `tools/sidekick/blocks/{blockname}` in da.live with example content, then **Preview** it
2. Add a row to the `tools/sidekick/library` sheet (tab: `helix-blocks`):

| name | path |
|------|------|
| Block Name | https://content.da.live/{org}/{site}/tools/sidekick/blocks/{blockname} |

3. **Preview** the library sheet

## Currently registered blocks

| Block | Library document |
|-------|-----------------|
| Teaser | tools/sidekick/blocks/teaser |
