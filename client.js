let totalMonthlyCost = 0;

function onReady() {
  console.log('client is working...');
}

function formHandler(event) {
  event.preventDefault();
  console.log('handle the form');
  //get values from the form
  //   employee first name, last name, ID number, job title, annual salary.
  const employeeFirstNameEl = document.getElementById('first-name-input');
  const employeeLastNameEl = document.getElementById('last-name-input');
  const employeeIdEl = document.getElementById('id-input');
  const employeeTitleEl = document.getElementById('job-title-input');
  const employeeAnnualSalaryEl = document.getElementById('annual-salary-input');

  //create newEmployee object
  const newEmployee = {
    firstName: employeeFirstNameEl.value,
    lastName: employeeLastNameEl.value,
    id: employeeIdEl.value,
    title: employeeTitleEl.value,
    salary: parseInt(employeeAnnualSalaryEl.value),
  };

  console.log('newEmployee', newEmployee);

  //call displayEmployees with one newEmployee object
  displayEmployees(newEmployee);

  //get total monthly element
  const totalMonthlyEl = document.getElementById('total-monthly');
  //   console.log('total', totalMonthlyEl);

  totalMonthlyCost += parseInt(employeeAnnualSalaryEl.value) / 12;
  //   console.log('totalMonthlyCost', totalMonthlyCost);

  if (totalMonthlyCost > 20000) {
    // add a class to turn the span red
    // totalMonthlyEl.style.background = 'red';
    // totalMonthlyEl.classList.add('red-background');
    document.querySelector('h2').classList.add('red-background');
  }

  totalMonthlyEl.textContent = `$${totalMonthlyCost.toFixed(2)}`;

  //clear form fields
  //   employeeFirstNameEl.value = '';
  //   employeeLastNameEl.value = '';
  //   employeeIdEl.value = '';
  //   employeeTitleEl.value = '';
  //   employeeAnnualSalaryEl.value = '';

  //clears form inputs using form method .reset()
  document.querySelector('form').reset();
}

// function to append employee to the DOM
function displayEmployees(employee) {
  const tableBody = document.getElementById('employee-list');

  tableBody.innerHTML += `
    <tr>
      <td>${employee.firstName}</td>
      <td>${employee.lastName}</td>
      <td>${employee.id}</td>
      <td>${employee.title}</td>
      <td>${parseInt(employee.salary)}</td>
      <td><button onclick="removeEmployee(event, ${parseInt(employee.salary)})">remove emp</button></td>
    </tr>`;
}

// function to remove an employee from the DOM
function removeEmployee(event, salary) {
  // Get the employee row to be deleted
  const employeeRow = event.target.closest('tr');

  //get the total monthly element
  const totalMonthlyEl = document.getElementById('total-monthly');

  totalMonthlyCost -= salary / 12;

  if (totalMonthlyCost < 0.01) {
    // add a class to turn the span red
    // totalMonthlyEl.style.background = 'red';
    // totalMonthlyEl.classList.add('red-background');
    document.querySelector('h2').classList.remove('red-background');
  }

  totalMonthlyEl.textContent = `$${totalMonthlyCost.toFixed(2)}`;
  //update dom with new monthly salary
  totalMonthlyEl.textContent = `$${totalMonthlyCost.toFixed(2)}`;

  // Remove the employee row from the table
  employeeRow.remove();
}

//call onReady when DOM is ready
onReady();
