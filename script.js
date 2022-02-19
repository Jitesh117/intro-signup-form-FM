function validateForm() {
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;
    let password = document.forms["myForm"]["password"].value;
    
    let wrong = document.getElementsByClassName('wrong');

    let wrongfname = document.getElementById('wrongfname');
    let wronglname = document.getElementById('wronglname');
    let wrongemail = document.getElementById('wrongemail');
    let wrongpassword = document.getElementById('wrongpassword');

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (fname == "") {
    //   alert("Name must be filled out");
    wrongfname.style.display= 'initial';
    wrong[0].style.display = 'initial'
    //   return false;
    }
    else
    {
        wrongfname.style.display  = 'none';
        wrong[0].style.display = 'none'
    }
    if(lname == ""){
        // alert("Last name must be filled out");
        // return false;
        wronglname.style.display = 'initial';
        wrong[1].style.display = 'initial'
    }
    else
    {
        wronglname.style.display  = 'none';
        wrong[1].style.display = 'none'
    }
    if(email == "" || !email.value.match(mailformat)){
        // alert("email must be filled out");
        wrongemail.style.display = 'initial';
        wrong[2].style.display = 'initial'
        // return false;
    }
    else
    {
        wrongemail.style.display  = 'none';
        wrong[2].style.display = 'none'
    }
    if(password == ""){
        // alert("password must be filled out");
        // return false;
        wrongpassword.style.display = 'initial';
        wrong[3].style.display = 'initial'
    }
    else
    {
        wrongpassword.style.display  = 'none';
        wrong[3].style.display = 'none'
    }
  }