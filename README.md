# MELD Toolbox — Web Edition 0.9.3

A community-made, browser-only session management tool for MELD Studio. Not an official MELD product.

## Publish on GitHub Pages

1. Sign into GitHub as `snuggiettv` and create a public repository named `meld-toolbox` (or use another name if desired).
2. Extract this ZIP. Upload the **contents** to the repository root, including `index.html`, all JavaScript and HTML files, and `.nojekyll`. Do not upload the ZIP itself or an enclosing directory. Commit to `main`.
3. Open the repository's **Settings → Pages**. Choose **Deploy from a branch**, then `main` and `/(root)`. Save.
4. Once GitHub reports a successful deployment, open `https://snuggiettv.github.io/meld-toolbox/`. The actual address is shown in Pages settings.

No Python, EXE, npm or backend is required. All paths are relative so the site works in a repository subfolder.

## Updating an existing site

Upload the contents of this ZIP to the repository root and commit the replacements. Delete the obsolete files `effect-manager.html`, `effect-engine.js` and `effect-ui.js` from the repository; uploading replacements does not delete old files. No changes to Pages settings are needed.

## Use the tools

In MELD Studio, choose **File → Export Session** and save the `.json` file. Choose that file inside Toolbox. Use Quick Backup, Import & Merge or Export Scenes; then import the resulting session JSON into MELD Studio. Effects attached to scene layers are preserved when backing up, importing, merging or exporting scenes.

The backup saves the exact bytes of the selected JSON, with a 50 MB limit. The production merge/export engines retain the existing v0.9 conservative support for MELD v3 paired Main/Portrait sessions, known source types and validated dependencies. Inspect warnings before saving. Hardware, fonts and online services are the recipient's responsibility. The JSON tools do not copy or relocate media. Keep your original files.

## Privacy and limits

All file processing is performed in the browser. No file uploads, analytics, external script dependencies or backend APIs are included. The pages use a restrictive Content Security Policy with network connections disabled. GitHub still hosts and serves the application's static code. Do not commit personal session files or private URLs to the repository. Outputs can contain private URLs from your source session: review before distributing.

## Full backups and portable packages

Open Backups & Portable → Create or restore a media package. In MELD, use File → Export Session. Choose that JSON, choose full backup or selected scenes, and scan. Select each media folder using the folder picker, or choose individual files next to missing or ambiguous entries. Folder matches use a relative path suffix, not an absolute path; review all matches, especially if there are files with identical names. Confirm the review checkbox and save the ZIP. Full backup preserves the exact exported JSON as original-session.json; the package session.json uses internal asset paths and is not ready for direct MELD import.

To restore, choose the web-created package, enter the exact absolute path of a new empty destination folder, and create a restored ZIP. Extract its contents directly into that folder (no extra nested directory), then import the extracted session.json in MELD. The browser cannot verify your chosen path or perform extraction for you. Do not import session.json from the original package. Verify media playback and audio before going live.

Limits: 1 GiB total and 256 MiB per file, 32 MiB JSON for media packages. No compression, ZIP64, or desktop-created ZIP restore in the browser. Use the desktop edition for large backups. Existing unresolved Duplicator references survive full backup; selective export blocks them. Remote assets are not fetched; hardware, fonts, browser services and automation remain recipient responsibilities. File-backed text is copied as a snapshot. Review private URLs and media before distributing. Web-created backups use the existing package manifest format, but desktop interoperability has not been certified for this release. No executable or personal files included. PWA/offline installation remains separate.
