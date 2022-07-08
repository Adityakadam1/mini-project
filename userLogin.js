$(document).ready(
    function()
    {
        $("#userlogin").click(
            function()
            {
                var uemail=document.getElementById("userEmail").value;
                var upas=document.getElementById("userPassword").value;
                console.log(uemail+" "+upas);

                $.get("http://localhost:3000/user", function (data, status) {

                    for (var i = 0; i < data.length; i++)
                    {
                        var obj=data[i];
                        console.log("get method");
                        if(uemail==obj.uemail && upas==obj.upass)
                        {
                            
                                console.log(obj.upass);
                                // alert("login successful");
                                location.replace("userFunctionality.html");
                                localStorage.setItem("uemail",obj.uemail);
                         }
                        else if(uemail==obj.uemail && upas!= obj.upass)
                            {
                                
                                    console.log(obj.upass);
                                    alert("login Unsuccessful Incorrect Passward");
                                   
                            }
                        // else if (uemail !=obj.umail && upas!= obj.upass)
                        //     {
                        //         //alert("You are not register user");
                        //         location.replace("userregistration.html");
                        //     }

                            } 
                        

                        }

                    )
                })
            }
        )
    
