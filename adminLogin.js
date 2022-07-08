function validateAdmin(){
    var aid=document.getElementById("InputEmail").value;
    var apass=document.getElementById("InputPassword").value;
    


    if(aid=="admin123@gmail.com")
    {
        if(apass=="admin")
        {
            alert("Admin Login Successful");
            window.location="adminFunctionality.html"
            
        
        }
        else
        {
            alert("Incorerct  Passward");
        }
    }
    else
    {
        alert("Invalid Credentials");
    }
}