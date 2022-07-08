$(document).ready
(

    function()
    {
        $("#aptbook").click
        (
            function()
            {
           
            $.post("http://localhost:3000/appointment", 
                {
                uname:$("#uname1").val(),
                uno:$("#uno1").val(),
                testName:$("#tname").val(),
                testPrice:$("#tprice").val(),
                aptdate:$("#date").val(),
                
                        }
                        ,function(data,status)
                        {
                         alert("Appointment Requested");
                        //  location.replace("userLogin.html");
                      
                         
                         
                        }            
                       )
                      
                }
            )
    }
)
           

