console.log('test');

function addNewEmployee (event) {
    event.preventDefault();
    let firstNameText = document.getElementById('first-name-text').value;
    let lastNameText = document.getElementById('last-name-text').value;
    let idText = document.getElementById('id-text').value;
    let jobTitleText = document.getElementById('job-title-text').value;
    let annualSalaryText = document.getElementById('annual-salary-text').value;
    let newEmployeeLocation = document.getElementById('employee-table');

    // console.log (firstNameText);
    // console.log (lastNameText);
    // console.log (idText);
    // console.log (jobTitleText);
    // console.log (annualSalaryText);

    let newEmployee = `
        <tr>
            <td>${firstNameText}</td>
            <td>${lastNameText}</td>
            <td>${idText}</td>
            <td>${jobTitleText}</td>
            <td>${annualSalaryText}</td>
            <td> <button onclick="deleteEmployee(event)">❌</button>
        </tr>
    `;

    newEmployeeLocation.innerHTML += newEmployee;
}

function deleteEmployee (event) {
    event.target.parentElement.parentElement.remove();

}