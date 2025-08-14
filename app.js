function navigate(page) {
  window.location.href = page;
}

// Load QRMA.txt for review
async function loadQRMA(txtId) {
  const response = await fetch('assets/QRMA.txt');
  const text = await response.text();
  document.getElementById(txtId).textContent = text;
}

// LocalStorage helpers
function saveResult(key, data) {
  let arr = JSON.parse(localStorage.getItem(key)) || [];
  arr.push(data);
  localStorage.setItem(key, JSON.stringify(arr));
}

function getResults(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

// Client Problem functions
function saveClientProblem(clientName, note, date) {
  let problems = JSON.parse(localStorage.getItem('clientProblems')) || {};
  if (!problems[clientName]) problems[clientName] = [];
  problems[clientName].push({ note, date });
  localStorage.setItem('clientProblems', JSON.stringify(problems));
}

function finishClientFromProblem(clientName) {
  let finished = JSON.parse(localStorage.getItem('finishClients')) || {};
  let problems = JSON.parse(localStorage.getItem('clientProblems')) || {};
  finished[clientName] = problems[clientName] || [];
  localStorage.setItem('finishClients', JSON.stringify(finished));
  delete problems[clientName];
  localStorage.setItem('clientProblems', JSON.stringify(problems));
}

// Client Schedule functions
function addClientSchedule(
  name,
  address,
  gender,
  problem,
  medResult,
  day,
  date
) {
  let schedule = JSON.parse(localStorage.getItem('clientSchedule')) || [];
  schedule.push({ name, address, gender, problem, medResult, day, date });
  localStorage.setItem('clientSchedule', JSON.stringify(schedule));
}

// Print helper
function printElement(id) {
  const printContents = document.getElementById(id).innerHTML;
  const originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}
