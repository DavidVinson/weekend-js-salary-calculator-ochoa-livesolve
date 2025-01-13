let total = 0;

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
  //   console.log(
  //     'employee',
  //     employeeFirstNameEl,
  //     employeeLastNameEl,
  //     employeeIdEl,
  //     employeeTitleEl,
  //     employeeAnnualSalaryEl
  //   );

  //   const newEmployee = {
  //     firstName: employeeFirstNameEl.value,
  //     lastName: employeeLastNameEl.value,
  //     id: employeeIdEl.value,
  //     title: employeeTitleEl.value,
  //     salary: parseInt(employeeAnnualSalaryEl.value),
  //   };

  //   console.log('newEmployee', newEmployee);

  //   <tr>
  //             <td>Joe</td>
  //             <td>Smith</td>
  //             <td>4</td>
  //             <td>Dev</td>
  //             <td>4500</td>
  //           </tr>

  const tableBody = document.getElementById('employee-list');
  tableBody.innerHTML += `
  <tr>
    <td>${employeeFirstNameEl.value}</td>
    <td>${employeeLastNameEl.value}</td>
    <td>${employeeIdEl.value}</td>
    <td>${employeeTitleEl.value}</td>
    <td>${parseInt(employeeAnnualSalaryEl.value)}</td>
    <td><button onclick="removeEmployee(event)">remove emp</button></td>
  </tr>`;

  //clear form fields
  //   employeeFirstNameEl.value = '';
  //   employeeLastNameEl.value = '';
  //   employeeIdEl.value = '';
  //   employeeTitleEl.value = '';
  //   employeeAnnualSalaryEl.value = '';

  //get total monthly element
  const totalMonthlyEl = document.getElementById('total-monthly');
  //   console.log('total', totalMonthlyEl);

  total += parseInt(employeeAnnualSalaryEl.value) / 12;
  console.log('total', total);

  if (total > 20000) {
    //add a class to turn the span red
    // totalMonthlyEl.style.background = 'red';
    totalMonthlyEl.classList.add('red');
  }

  totalMonthlyEl.textContent = `${total.toFixed(2)}`;

  //clears form inputs using form method .reset()
  //   document.querySelector('form').reset();
}

function removeEmployee(event, annualSalary) {
  console.log('remove this employee and subtract this amount');
  event.target.closest('tr').remove();
}

//call onReady when DOM is ready
onReady();
