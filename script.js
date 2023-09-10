// Initialize local storage array
let records = [];

// Array of student names
const studentNames = [
  'Antolin, Grace',
  'Burgett, Armani',
  'Crawford Guzman, Desaire',
  'Hall, Sahara',
  'Love III, Dwayne',
  'Olguin Aguilar, Ixayahuani',
  'Silva, Emanuel',
  'Agredano, Adonias',
  'Aguilera, Marco',
  'Ahmad, Amari',
  'Arias, Gisselle',
  'Branche, Mark',
  'Campbell, La\'Teacha',
  'Crawford, A\'niya',
  'Cruz, Elisa',
  'Dear, Dragon',
  'Ebron, Denisse',
  'Garcia, Avi',
  'Gildersleeve, Miles',
  'Gohlke, Winter',
  'Hamilton, Deveicho',
  'Jackson, Janiah',
  'Lopez, Christopher',
  'Martin, O\'cean',
  'Orozco, Alejandra',
  'Perez Gutierrez, George',
  'Robinson, Jade',
  'Veliz, Manik',
  'Washington, Dajon',
  'Bautista, Juan',
  'Bryant JR., Michael',
  'Chheang-SAR, Alynna',
  'Cortez, Rylen',
  'Cruz, Aiden',
  'Everett, Norisha',
  'Galeana, Orlando',
  'Isaac, Jahdique',
  'Martinez Garcia, Sophie',
  'Quesada, Ruben',
  'Spencer, Semajay',
  'Streicker, Spencer',
  'Talavera-Almaraz, Antonio',
  'Young, Kamarrie',
  'Chupin, Ashley',
  'Collins, Danisha',
  'Huehuetlahtoa, Akinyemi',
  'Isaac, Malejah',
  'Martinez Garcia, Jonathan',
  'Powell, Aniyyah'
];

// Function to populate student names
function populateStudentNames() {
  const dataList = document.getElementById('studentNames');
  studentNames.forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    dataList.appendChild(option);
  });
}

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

// Call the function when the page loads
window.onload = populateStudentNames;
