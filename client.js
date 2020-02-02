$( document ).ready(readyNow);

//globals
let employeeList = [];

function readyNow(){
    console.log('in readyNow');
    $( '#submitButton').on('click',submit);

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

}//end submit

function displayEmployeeList() {
    console.log('in displayEmployeeList');
    //select and empty output element
    let el= $('#employeesOut');
    el.empty();
    //loop through array
    for (let i = 0; i < employeeList.length; i++) {
        //append each employee to the DOM
        el.append(`<li>${employeeList[i].firstName} ${employeeList[i].lastName} 
        ${employeeList[i].id} ${employeeList[i].title} ${employeeList[i].annualSalary}
        </li>`);
    }//end for loop
    
    
    
}// end displayEmployeeList