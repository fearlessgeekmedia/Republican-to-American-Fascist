# Republican to American Fascist Replacer

A Chrome extension that automatically replaces the word "Republican" with "American Fascist" on all websites you visit.

## Installation Instructions

Since this extension is not currently on the Chrome Web Store, you must install it manually using "Developer Mode":

1. **Download the files**: 
   - Ensure you have both `manifest.json` and `content.js` in a folder on your computer.
2. **Open Chrome Extensions**:
   - In your Chrome address bar, type `chrome://extensions/` and press Enter.
3. **Enable Developer Mode**:
   - Locate the toggle switch in the top right corner labeled **Developer mode** and turn it **ON**.
4. **Load the Extension**:
   - Click the **Load unpacked** button that appears in the top left.
   - Select the folder containing the `manifest.json` and `content.js` files.
5. **Usage**:
   - The extension is now active. Refresh any open tabs to see the changes take effect.

## Support this Project

If you find this extension useful, you can support its development on Ko-fi:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/fearlessgeekmedia)

## How it Works

The extension uses a `MutationObserver` to watch for new content being added to the page (like in social media feeds or infinite scrolling sites) and performs a case-sensitive replacement of the target terms.
