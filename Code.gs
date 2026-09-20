/**
 * MR Residence – Google Apps Script
 * ===================================
 * Paste this entire file into your Apps Script editor.
 * It receives form submissions and appends rows to your Google Sheet.
 */

// ── CONFIG ────────────────────────────────────────────────────────────────────
const SHEET_NAME = 'Exit Records';   // tab name inside your Google Sheet
// ─────────────────────────────────────────────────────────────────────────────

const HEADERS = [
  'S.No', 'Tenant Name', 'Room No', 'Phone',
  'Date of Admission', 'Date of Exit',
  'Advance Paid (₹)', 'Advance Returned (₹)',
  'Deduction Reason', 'Damage Reason', 'Damage Amount (₹)',
  'Key Handed Over', 'Clearance Status', 'Remarks', 'Submitted At'
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const row  = data.row;                          // array sent from index.html
    if (!row || !Array.isArray(row)) throw new Error('Invalid payload');

    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    let   sheet = ss.getSheetByName(SHEET_NAME);

    // Create the sheet + header row if it doesn't exist yet
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);

      // Style header row
      const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
      headerRange.setBackground('#7a1032')
                 .setFontColor('#ffffff')
                 .setFontWeight('bold')
                 .setFontSize(11)
                 .setHorizontalAlignment('center')
                 .setVerticalAlignment('middle');
      sheet.setFrozenRows(1);

      // Column widths (pixels)
      const widths = [60, 160, 80, 110, 130, 110, 130, 150, 220, 200, 130, 110, 130, 220, 160];
      widths.forEach((w, i) => sheet.setColumnWidth(i + 1, w));
    }

    // Append the data row
    sheet.appendRow(row);

    // Alternate row shading
    const lastRow = sheet.getLastRow();
    const rowRange = sheet.getRange(lastRow, 1, 1, HEADERS.length);
    rowRange.setBackground(lastRow % 2 === 0 ? '#f5ede4' : '#ffffff')
            .setVerticalAlignment('middle');

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: open the sheet directly from the Script editor
function openSheet() {
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
}
