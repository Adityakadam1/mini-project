$(document).ready
(
    function()
    {
        $("#feedback").click
        (
            function()
            {
                $.post("http://localhost:3000/feedback", 
                {
                    feedback:$("message").val(),
                        }
                        ,function(data,status)
                        {
                            alert("feedback sent");
                        }            
                       )

            }
        )
    }
)