const {attendees} = require('./data.json')
// Install xlsx library using npm: npm install xlsx

const XLSX = require('xlsx');

// Create a new workbook
const workbook = XLSX.utils.book_new();

// Convert the array of objects to a worksheet
const worksheet = XLSX.utils.json_to_sheet(attendees);

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Save the workbook to a file
XLSX.writeFile(workbook, 'output.xlsx');

console.log('Excel file created successfully!');


console.log('test',attendees.length===6573?'pass':'fail')