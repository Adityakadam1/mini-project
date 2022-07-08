$(document).ready(
    function () {


        $("#aptreq").click
            (
                function () {

                    const tbl = document.querySelector("#reqtable");
                    $.get("http://localhost:3000/appointment", function (data, status) {

                        var len = 0;
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            tbl.innerHTML +=
                                `<tr>
            <td>${obj.uname}</td>
            <td>${obj.uno}</td>
            <td>${obj.testName}</td>
            <td>${obj.testPrice}</td>
            <td>${obj.aptdate}</td>
            <td><button class="accept" onclick=acceptAppointment(${obj.id})>Accept Appointment</button></td>
            <td><button class="reject" onclick=rejectAppointment(${obj.id})>Reject Appointment</button></td>
          
           
            </tr> `;


                        }



                    }


                    )


                }
            )
        // $(".accept").click
        // (
              // <td><button class="reject" onclick=acceptAppointment(${obj.uname})>Reject</button></td>
        //     function()
        //     {

        //             // console.log($("#eid").val());
        //            console.log("function called");

        //             $.post("http://localhost:3000/acceptappointment", 
        //             {
        //                acceptance:1
        //                     }
        //                     ,function(data,status)
        //                     {
        //                         alert("Data: " + data + "\nStatus: " + status +"\n Request Accepted");
        //                     }            
        //                    )
        //    }

        // )
    }
);

function acceptAppointment(id) 
{
  //  alert(id);
    var uid = id;
    console.log(uid);
    console.log("entered function");
    $.get("http://localhost:3000/appointment", function (data, status) 
    {
        console.log("entered get");
        var len = 0;
        for (var i = 0; i < data.length; i++)
         {
            var obj = data[i];
            if (obj.id == uid) 
            {
                console.log("entered post");
                $.post("http://localhost:3000/acceptappointment",
                    {
                        acceptance: 1
                    }
                    , function (data, status)
                     {
                        alert("Data: " + data + "\nStatus: " + status + "\n Request Accepted");
                    }
                   )
            }

        }
    }
                     
                
)
}
function rejectAppointment(id) 
{
    alert(id);
    var uid = id;
    console.log(uid);
    console.log("entered function");
    $.get("http://localhost:3000/appointment", function (data, status) 
    {
        console.log("entered get");
        var len = 0;
        for (var i = 0; i < data.length; i++)
         {
            var obj = data[i];
            if (obj.id == uid) 
            {
                console.log("entered post");
                $.post("http://localhost:3000/acceptappointment",
                    {
                        acceptance: 0
                    }
                    , function (data, status)
                     {
                        alert("Data: " + data + "\nStatus: " + status + "\n Request rejected");
                    }
                   )
            }

        }
    }
                     
                
)
}