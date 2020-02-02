$( document ).ready(readyNow);

//globals
let employeeList = [];
let monthlyCost= 0;

function readyNow(){
    console.log('in readyNow');
    $( '#submitButton').on('click',submit);
    $( '#deleteButton').on('click', onDeleteButton);

}//end readyNow

function submit() {
    console.log('in addItem');
    //get user input and create object
    let newObject= {
        firstName: $( '#firstNameIn' ).val(),
        lastName: $( '#lastNameIn' ).val(),
        id: $( '#idIn' ).val(),
        title: $( '#titleIn' ).val(),
        annualSalary: $( '#annualSalaryIn' ).val(),
    }// end newObject
    console.log('adding:', newObject);
    employeeList.push(newObject);
    //push newObject into employeeList array
    displayEmployeeList();
    //show the employeeList
    $( '#firstNameIn' ).val('');
    $( '#lastNameIn' ).val('');
    $( '#idIn' ).val('');
    $( '#titleIn' ).val('');
    $( '#annualSalaryIn' ).val('');
    //clear the inputs with .val. Use ; to end statement instead of , 
    monthlyCostCalculator();
    //create variables to add up total monthly cost
    let el= $('#monthlyCost');
    el.empty();
    el.append(`${monthlyCost}`);

}//end submit

function displayEmployeeList() {
    console.log('in displayEmployeeList');
    //console log to see if this is working
    let el= $('#employeeInfo');
    el.empty();
    //select and empty output element
    //loop through array
    for (let i=0; i<employeeList.length; i++){
        el.append(`
            <tr>
                <td>${employeeList[i].firstName}</td>
                <td>${employeeList[i].lastName}</td>
                <td class="id-number">${employeeList[i].id}</td>
                <td>${employeeList[i].title}</td>
                <td>$${employeeList[i].annualSalary}</td>
                <td><button class="deleteButton">Delete</button></td>
            </tr>
        `)   //append inputs to table, add delete button after every employee row
    }//end for loop
    
}// end displayEmployeeList

function monthlyCostCalculator() {
    console.log('in monthlyCostCalculator');
    for (let i = 0; i < employeeList.length; i++) {
        monthlyCost += employeeList[i].annualSalary / 12;
    //have monthlyCost add up annualSalary, then have annualSalary divide 12 for months in year
    }//end for loop
    if (monthlyCost > 20000) {
        //document.getElementById("totalMonthlyCost").style.backgroundColor = "red";
        $('#totalMonthlyCost').css({"color":"red"});
    }
}//end monthlyCostCalculator

function onDeleteButton() {
    console.log('onDeleteButton');
    
}