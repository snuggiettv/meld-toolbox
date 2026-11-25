# MELD Toolbox — Web Edition 0.9.1

A community-made, browser-only session management tool for MELD Studio. Not an official MELD product.

## Publish on GitHub Pages

1. Sign into GitHub as `snuggiettv` and create a public repository named `meld-toolbox` (or use another name if desired).
2. Extract this ZIP. Upload the **contents** to the repository root, including `index.html`, all JavaScript and HTML files, and `.nojekyll`. Do not upload the ZIP itself or an enclosing directory. Commit to `main`.
3. Open the repository's **Settings → Pages**. Choose **Deploy from a branch**, then `main` and `/(root)`. Save.
4. Once GitHub reports a successful deployment, open `https://snuggiettv.github.io/meld-toolbox/`. The actual address is shown in Pages settings.

No Python, EXE, npm or backend is required. All paths are relative so the site works in a repository subfolder.

## Use the tools

In MELD Studio, choose **File → Export Session** and save the `.json` file. Choose that file inside Toolbox. Use Quick Backup, Import & Merge or Export Scenes; then import the resulting session JSON into MELD Studio. The Effect Manager also accepts MELD `.mfx` files and extracts effects from exported sessions.

The backup saves the exact bytes of the selected JSON, with a 50 MB limit. The production merge/export engines retain the existing v0.9 conservative support for MELD v3 paired Main/Portrait sessions, known source types and validated dependencies. Inspect warnings before saving. Hardware, fonts and online services are the recipient's responsibility. Media files are not copied or relocated. Keep your original files.

## Privacy and limits

All file processing is performed in the browser. No file uploads, analytics, external script dependencies or backend APIs are included. The pages use a restrictive Content Security Policy with network connections disabled. GitHub still hosts and serves the application's static code. Do not commit personal session files or private URLs to the repository. Outputs can contain private URLs from your source session: review before distributing. Effect library entries are stored locally in the browser for this site's origin; save permanent `.mfx` copies.

Full media backups, ZIP restoration, portable media packages, and persistent filesystem libraries still require the desktop edition. Browser media packaging and offline PWA support are planned separately. No executable is included in this web package.
