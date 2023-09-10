// Initialize local storage array
let records = [];

// Function to record action
function recordAction(action) {
  const studentName = document.getElementById('studentName').value;
  const timestamp = new Date().toISOString();
  records.push({studentName, action, timestamp});
  localStorage.setItem('records', JSON.stringify(records));
}

// Function to export data as CSV
function exportData() {
  // Convert records to CSV format and download
}
