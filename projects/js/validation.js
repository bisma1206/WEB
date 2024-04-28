function validateForm() 
{
    for (var i = 0; i < myForm.elements.length; i++) 
    {
        if (myForm.elements[i].className == "req" && myForm.elements[i].value.length == 0) 
        {
            alert('Please fill all required fields.');
            return false;
        }
    }

    var Email = document.getElementById('E-mail').value;
    var atpos = Email.indexOf('@');
    var dotpos = Email.lastIndexOf(' ');

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= Email.length)
    {
        alert('Please enter a valid email address.');
        return false;
    }
}





