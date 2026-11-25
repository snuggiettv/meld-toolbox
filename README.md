# MELD Toolbox · Web 0.9.6

A free community tool for managing MELD Studio sessions in your browser.

**[Open MELD Toolbox](https://snuggiettv.github.io/meld-toolbox/)**

In MELD Studio, choose **File → Export Session** and save the `.json` file. Keep this original export.

| Tool | What it does |
| --- | --- |
| Backups & Portable | Bundle all or selected scenes and their local media. Restore packages and verify extracted files. |
| Import & Merge | Copy scenes from one exported session into another. |
| Export Scenes | Save selected scenes and their required dependencies. |

## Media packages
1. Open an exported session JSON and scan all or selected scenes.
2. Choose media folders and review matched paths, file sizes and the estimated ZIP size.
3. Resolve missing or oversized files, or explicitly allow manual media copies. You may mark additional files for manual copying to reduce the ZIP size. A manual-copy package is incomplete until all listed files are copied.
4. Save the ZIP. Keep `REQUIRED MEDIA.txt` and any manual media files with your backup; the list gives the original source and unique relative destination for each file.
5. Restore the original package using this website, entering the exact full extraction folder path. Extract the resulting ZIP directly into that folder. Copy manual media to the exact paths listed in `RESTORE INSTRUCTIONS.txt` (create `Manual Media` if needed). Keep manually copied media with your backup if moving it elsewhere.
6. Use Verify extracted folder and confirm the actual folder path. Included files are checked by SHA-256; manual files are checked for presence and known size only. Check manual contents yourself. Test the restored `session.json` in MELD before going live.

## Privacy and limits
All file processing happens in your browser. Your files are not uploaded. Review private URLs and original file paths before sharing exports. Package session JSONs are limited to 32 MiB; merge and scene export JSONs to 50 MiB. ZIPs are uncompressed, limited to 1 GiB total, with a 256 MiB per-file inclusion limit. The estimate is conservative and may overcount duplicate files; manual copying or smaller scene selections can reduce the size. Browser memory, unreadable files or unsupported session structures can stop creation. Remote assets, fonts, external scripts and hardware setup are not bundled. The browser cannot read the absolute extraction folder path automatically. Previously created web packages can still be restored.

Community tool; not affiliated with or endorsed by MELD Studio.
