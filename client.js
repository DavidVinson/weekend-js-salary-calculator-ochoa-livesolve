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
}

//call onReady when DOM is ready
onReady();
