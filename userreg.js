
$(document).ready
(

    function()
    {
        $("#submit").click
        (
            function()
            {
           
            //     console.log("function called");
            //    // alert("function called");
            let pass=(document.getElementById("pwd").value);
            let cpass=(document.getElementById("cpwd").value);
            
             if(pass === cpass)
            {
              
                    
                $.post("http://localhost:3000/user", 
                {
                uname:$("#name").val(),
                uadd:$("#address").val(),
                ucon:$("#contact").val(),
                uemail:$("#email").val(),
                upass:$("#pwd").val(),
                
                        }
                        ,function(data,status)
                        {
                         alert("Registration Successful");
                         window.location.href="http://127.0.0.1:5500/userLogin.html";
                      
                         
                         
                        }            
                       )
                      
                }
                else
                {
                    alert("password does not match");

                }
            }
           )
    }

)
