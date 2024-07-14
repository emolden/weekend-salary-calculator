// console.log('test');

let monthlyCost = 0;

function addNewEmployee (event) {
    event.preventDefault();
    let firstNameText = document.getElementById('first-name-text').value;
    let lastNameText = document.getElementById('last-name-text').value;
    let idText = document.getElementById('id-text').value;
    let jobTitleText = document.getElementById('job-title-text').value;
    let annualSalaryText = document.getElementById('annual-salary-text').value;
    let newEmployeeLocation = document.getElementById('employee-table');
    let monthlyCostLocation = document.getElementById('total-monthly-cost');
    
    monthlyCostLocation.innerHTML = '';

    monthlyCost += Number(annualSalaryText)/12;
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
            <td id="annual-salary-table-text" type="text">${annualSalaryText}</td>
            <td> <button onclick="deleteEmployee(event)">❌</button>
        </tr>
    `;

    let monthlyCostString = '$' + monthlyCost.toLocaleString();

    newEmployeeLocation.innerHTML += newEmployee;
    monthlyCostLocation.innerHTML += monthlyCostString;

    if(monthlyCost > 20000) {
        //document.getElementById("footer").style.color = 'red';
        document.querySelector('.over-budget').style.color = 'red';
    }
    
    document.getElementById("employee-form").reset();
}

function deleteEmployee (event) {
    event.target.parentElement.parentElement.remove();
    let monthlyCostLocation = document.getElementById('total-monthly-cost');
    let annualSalaryTableText = event.target.parentElement.parentElement.children[4].innerText;
    // let annualSalaryTableText = document.getElementById('annual-salary-table-text td').textContent;
    monthlyCostLocation.innerHTML = '';
    // console.log({test: event.target.parentElement.parentElement.children[4].innterText});
    // console.log({test: document.getElementById('annual-salary-table-text').nodeValue});
    // console.log(typeof annualSalarTableText);
    monthlyCost -= Number(annualSalaryTableText)/12;

    monthlyCostString = '$' + monthlyCost.toLocaleString();
    monthlyCostLocation.innerHTML += monthlyCostString;
    if(monthlyCost <= 20000) {
        document.querySelector('.over-budget').style.color = 'black';
    }
}



