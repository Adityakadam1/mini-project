$(document).ready
(
    function()
    {
        $("#showsts").click(
           
                    function () {
    
                        const tbl = document.querySelector("#reqtable");
                        $.get("http://localhost:3000/appointment", function (data, status) {
    
                            var len = 0;
                            for (var i = 0; i < data.length; i++)
                             {
                                var obj = data[i];
                            var umail= localStorage.getItem("uemail"); 
                            // console.log(obj.uname);
                            if(umail == obj.uname)
                            {
                                tbl.innerHTML +=
                                `<tr>
            <td>${obj.uname}</td>
            <td>${obj.uno}</td>
            <td>${obj.testName}</td>
            <td>${obj.testPrice}</td>
            <td>${obj.aptdate}</td>
            <td id="sess"></td>
            <td><button class="accept" onclick=statusAppointment(${obj.id})>Appointment Status</button></td>
           
           
          
           </tr> `;

                            }
                               
                            
                               
    
                    }
                        } )   
               // console.log("enterd into function");   // <td><input type="text" id="show"></td>
               
    }
)
    }
)

function  statusAppointment(id)
{
    var eid=id;
    console.log(eid);
    $.get("http://localhost:3000/acceptappointment", function (data, status) 
    {

       // var len=0;
       console.log("get called");
           for (var i = 0; i < data.length; i++) 
           {
               var obj=data[i];
               console.log(obj.eid);
               if(obj.id==eid && obj.acceptance==1 )
                {
                    console.log("if called");
                //  document.getElementById("show").innerHTML+=" Appointment Accepted"
                 document.getElementById("sess").innerHTML+=" Appointment Accepted"
                 break;
               }
               else if(obj.id==eid && obj.acceptance==0)
               {
                //  document.getElementById("show").innerHTML+=" Appointment Rejected"
                 document.getElementById("sess").innerHTML+=" Appointment Rejected"
                 break;
               }
            }

}
)
}
