/**
 * Appends data to a Google Sheets document, handling existing column headings and appending new rows.
 * @param {Array} vertical - An array containing vertical data to be written to the sheet.
 * @param {Object} resource - The resource object containing values to be written.
 * @param {Object} sheets - The Google Sheets API instance.
 * @param {number} vIndex - The index of the vertical in the sheet.
 * @returns {Promise<void>} - A promise that resolves when data is successfully appended to the sheet.
 */

export const write = async (vertical, resource, sheets, vIndex) => {
    let index = 2;

    for (const [i, data] of vertical.entries()) {
        if (data.members !== null) {
            await sheets.spreadsheets.values.append({
                spreadsheetId: process.env.SHEET_ID,
                range: `vertical${vIndex}!A${index}:M${index}`,
                valueInputOption: "RAW",
                resource: {
                    values: [[...resource.values[0], data.eventName, data.members, data.price]]
                }
            });
            index++;
        }
    }
}
