MR Residence – Tenant Exit Form  (Google Sheets version)
=========================================================

FILES
-----
  index.html   ← The exit form  (host anywhere or open locally)
  Code.gs      ← Google Apps Script  (copy-paste into Google)
  README.txt   ← This guide

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 SETUP TAKES ABOUT 3 MINUTES – FOLLOW THESE STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 1 – Create a Google Sheet
  1. Go to  https://sheets.google.com
  2. Click  "+ Blank"  to create a new spreadsheet
  3. Rename it to  "MR Residence Exit Records"  (top-left, click "Untitled")

STEP 2 – Open Apps Script
  1. In your Google Sheet, click  Extensions  →  Apps Script
  2. A new tab opens with a code editor

STEP 3 – Paste the script
  1. Delete everything in the editor (Ctrl+A, Delete)
  2. Open  Code.gs  (from this ZIP) in any text editor
  3. Copy ALL the text and paste it into the Apps Script editor
  4. Click  💾 Save  (or Ctrl+S)
  5. Name the project  "MR Residence Form"  when prompted

STEP 4 – Deploy as Web App
  1. Click  Deploy  →  New deployment
  2. Click the ⚙️ gear icon next to "Select type"  →  choose  Web app
  3. Fill in:
       Description   : MR Residence Exit Form
       Execute as    : Me  (your Google account)
       Who has access: Anyone          ← important!
  4. Click  Deploy
  5. Click  Authorize access  → choose your Google account → Allow
  6. COPY the Web App URL shown  (looks like: https://script.google.com/macros/s/ABC.../exec)

STEP 5 – Paste the URL into index.html
  1. Open  index.html  in any text editor (Notepad, VS Code, etc.)
  2. Find this line near the bottom:
       const SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL';
  3. Replace  YOUR_APPS_SCRIPT_URL  with the URL you copied:
       const SCRIPT_URL = 'https://script.google.com/macros/s/ABC.../exec';
  4. Save  index.html

STEP 6 – Done! Open the form
  • Double-click  index.html  to open it in your browser, OR
  • Upload it to any static web host (GitHub Pages, Netlify, etc.)
  • Fill the form and click Submit → check your Google Sheet!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 HOW TO VIEW / DOWNLOAD THE DATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  • All submissions appear instantly in your Google Sheet
  • To download as Excel: File → Download → Microsoft Excel (.xlsx)
  • To download as CSV:   File → Download → CSV

━━━━━━━━━━━━━━━━━━━━━━━━
 FREE HOSTING OPTIONS
━━━━━━━━━━━━━━━━━━━━━━━━
  If you want a permanent link (not just opening the file on your PC):

  Option A – GitHub Pages (free, permanent URL)
    1. Create a free account at https://github.com
    2. New repository → upload index.html
    3. Settings → Pages → Branch: main → Save
    4. Your URL: https://yourusername.github.io/repo-name/

  Option B – Netlify Drop (easiest, 30 seconds)
    1. Go to https://app.netlify.com/drop
    2. Drag and drop  index.html  onto the page
    3. Get a free URL instantly (e.g. https://random-name.netlify.app)

  Option C – Just share the file
    Send index.html to anyone — they can open it locally in their browser.
    Submissions always go to YOUR Google Sheet regardless.

━━━━━━━━━━━━━━━━━━━━━━━
 TROUBLESHOOTING
━━━━━━━━━━━━━━━━━━━━━━━
  "Could not reach server"
    → Check that SCRIPT_URL is correctly pasted in index.html
    → Make sure you chose "Anyone" for Who has access when deploying

  Data not appearing in Sheet
    → Open Apps Script → Executions (left sidebar) to see error logs
    → Re-deploy: Deploy → Manage deployments → Edit → New version → Deploy

  Need to update the script later?
    → Edit Code.gs in Apps Script → Deploy → Manage deployments
    → Click ✏️ Edit → set Version to "New version" → Deploy

━━━━━━━━━━━━━━━━━━━━━━━
 SHARE WITH YOUR TEAM
━━━━━━━━━━━━━━━━━━━━━━━
  Share the Google Sheet with colleagues:
    Share → Add email → Editor
  They will see all new rows appear in real time.
