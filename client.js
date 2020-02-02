$( document ).ready(readyNow);

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
    }// newObject
    console.log('adding:', newObject);
    

}//end submit