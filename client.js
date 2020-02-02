$( document ).ready(readyNow);

//globals
let employeeList = [];

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
}//end submit

function displayEmployeeList() {
    console.log('in displayEmployeeList');
    //console log to see if this is working
    let el= $('#employeesTable');
    el.empty();
    //select and empty output element
    //loop through array
    for (employee of employeeList){
        el.append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td class="id-number">${employee.id}</td>
                <td>${employee.title}</td>
                <td>$${employee.annualSalary}</td>
                <td><button class="deleteButton">Delete</button></td>
            </tr>
        `)   //append inputs to table, add delete button after every employee row
    }//end for loop
    
    
}// end displayEmployeeList

function onDeleteButton() {
    console.log('onDeleteButton');
    
}