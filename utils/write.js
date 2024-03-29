/**
 * Appends data to a Google Sheets document, handling existing column headings and appending new rows.
 * @param {Object} resource - The resource object containing values to be written.
 * @param {Object} sheets - The Google Sheets API instance.
 * @returns {Promise<void>} - A promise that resolves when data is successfully appended to the sheet.
 */

export const write = async (resource, sheets) => {
    let index = 2;

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SHEET_ID,
        range: `Sheet1!A${index}:T${index}`,
        valueInputOption: "RAW",
        resource: {
            values: [[...resource.values[0]]]
        }
    })

}
