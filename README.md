# MELD Toolbox · Web 0.9.11

A free community tool for managing MELD Studio sessions in your browser.

**[Open MELD Toolbox](https://snuggiettv.github.io/meld-toolbox/)**

In MELD Studio, choose **File → Export Session** and save the `.json` file. Keep this original export.

| Tool | What it does |
| --- | --- |
| Backups & Portable | Bundle all or selected scenes and their local media. Prepare backups for MELD by updating media paths, then verify extracted files. |
| Import & Merge | Copy scenes from one exported session into another. |
| Export Scenes | Save selected scenes and their required dependencies. |

## Merge preview
Matching scenes are detected by name or identifier. When there are no matches, bulk conflict controls are disabled and new scenes are added. When matches exist, bulk policy changes show the number affected. After a successful preview, the live before/after diagram shows the actual destination and output scene layouts, including new copies, merged and overwritten scenes, skipped imports, required layouts and empty counterparts. Shared audio and device settings are reported separately. The original files are unchanged.

## Canvas support
MELD session JSON version 3: Main-only sessions (empty or absent `verticalScenes`), paired Main and Portrait sessions, and sessions with Portrait disabled but saved paired layouts. The canvas setting and stored layouts are preserved on export and backup. Merges support Main-only and dual-canvas destinations, with independent Main/Portrait selection per source scene. Required Duplicator layouts are automatically included, or block the import if the destination cannot retain them. New scenes in paired sessions get an empty counterpart for an unselected layout; existing unselected layouts are preserved under Merge and Overwrite. Keep Both creates a separate scene; Skip retains the destination. Canvas visibility stays unchanged. Shared audio routing is retained for partial overwrites where possible; review the mixer. Empty counterparts use the known MELD v3 layout structure and destination dimensions. Native MELD import testing is recommended before production use. Malformed pairs, unsupported layer types and unsafe dependency changes remain blocked in selective operations.

## Source compatibility
Widget (`MeldStudio/Widget`) and Game Capture (`MeldStudio/Game capture`) are now recognized. Their exported layer data is retained, subject to the existing reference, audio and schema checks. Widgets may depend on online services or accounts; Game Capture may require selecting the running game again in MELD. These external resources are not bundled. Test the imported layers in MELD before going live. Unrecognized source types are still blocked rather than silently removed.

## Media packages
1. Open an exported session JSON and scan all or selected scenes.
2. Choose media folders and review matched paths, file sizes and the estimated ZIP size.
3. Resolve missing or oversized files, or explicitly allow manual media copies. You may mark additional files for manual copying to reduce the ZIP size. A manual-copy package is incomplete until all listed files are copied.
4. Save the ZIP. Keep `REQUIRED MEDIA.txt` and any manual media files with your backup; the list gives the original source and unique relative destination for each file.
5. Open **Prepare a Backup for MELD** and choose the original backup ZIP. Enter the exact full path of the folder where you intend to extract it. Toolbox rewrites media paths in session.json and downloads a new ZIP; it does not extract files. In File Explorer, use Extract All to extract the new ZIP directly into that folder (no extra nested folder). If the location changes, prepare the original ZIP again. Copy manual media to the exact paths listed in `RESTORE INSTRUCTIONS.txt` (create `Manual Media` if needed). Keep manually copied media with your backup if moving it elsewhere.
6. Use Verify extracted folder and confirm the actual folder path. Included files are checked by SHA-256; manual files are checked for presence and known size only. Check manual contents yourself. Test the restored `session.json` in MELD before going live.

## Privacy and limits
All file processing happens in your browser. Your files are not uploaded. Review private URLs and original file paths before sharing exports. Package session JSONs are limited to 32 MiB; merge and scene export JSONs to 50 MiB. ZIPs are uncompressed, limited to 1 GiB total, with a 256 MiB per-file inclusion limit. The estimate is conservative and may overcount duplicate files; manual copying or smaller scene selections can reduce the size. Browser memory, unreadable files or unsupported session structures can stop creation. Remote assets, fonts, external scripts and hardware setup are not bundled. The browser cannot read the absolute extraction folder path automatically. Previously created web packages can still be restored.

Community tool; not affiliated with or endorsed by MELD Studio.
