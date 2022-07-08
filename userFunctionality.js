$(document).ready
 (
    function()
    {
        // $("#showData").click
        // (
        //     function()
        //     {
                    
                    const tbl=document.querySelector("#showtbl");
                    $.get("http://localhost:3000/Vaccine", function (data, status) {
    
                         var len=0;
                            for (var i = 0; i < data.length; i++) 
                            {
                                var obj=data[i];
                                tbl.innerHTML +=
                     `<tr>
                    <td>${obj.vaccineId}</td>
                    <td>${obj.vaccineName}</td>
                    <td>${obj.vaccineDesc}</td>
                    <td>${obj.vaccineDate}</td>
                    <td>${obj.vaccinePrice}</td>
                    <td>${obj.vlocation}</td>
                    
                    </tr><br> `;
                    //len=len+1;
    
                    // if(data.length==len)
                    // {
                    //     break;
                    // }
                    
                     }
              
                           

                        })
//                  }
//             )

             
        
//  //)
     
 }
  )
// $.getJSON("projectData.json",function(data)
// {
//     var dt='';
//     $.each(data,function(key,value)
//     {
//         dt+='<tr>';
//         dt +='<td>'+
//         value.vaccineId +'<td>';
//         dt +='<td>'+
//         value.vaccineName +'<td>';
//         dt +='<td>'+
//         value.vaccineDesc +'<td>';
//         dt +='<td>'+
//         value.vaccineDate +'<td>';
//         dt +='<td>'+
//         value.vaccinePrice +'<td>';
//         dt +='<td>'+
//         value.vlocation +'<td>';
//         dt+='</tr>';
//     });
//     $("#table1").append(dt);
/* <td><button class="bookapt" onclick=bookAppointment()>Book Appointment</button></td>
                  <td><button class="checkapt" onclick=checkAptStatus(${obj.id})>Check Appointment Status</button></td>
// }) */
// )


// function bookAppointment(id)
// {
//     var getid=id;
  
    
//     $.get("http://localhost:3000/Vaccine", function (data, status) {

//                     for (var i = 0; i < data.length; i++) 
//                     {
//                         var obj=data[i];
//                         if(getid==obj.vaccineId)
//                         {
//                             console.log("entered if");
//                             $.post("http://localhost:3000/appointment", 
//                             {
                            
//                                 aptstatus:1,
//                                 //console.log("book apt")
                               
                               
//                                 vaccineid:vaccineId,
//                                 vaccinenm:vaccineName,
//                                 vaccinedes:vaccineDesc,
//                                 vaccinedate:vaccineDate,
//                                 vaccineprice:vaccinePrice,
//                                 vaccinelocation:vlocation
//                             })


//                         }
           

//                     }
//              }
//         )

         
    

// }

function bookAppointment()
{
    location.href="./bookAppointmentForm.html";
    
}
function checkAptStatus()
{
    location.href="./checkAppointStatus.html";
}

// function checkAptStatus(id)
// {

//     var eid=id;
//     $.get("http://localhost:3000/acceptappointment", function (data, status) 
//                 {
    
//                    // var len=0;
//                        for (var i = 0; i < data.length; i++) 
//                        {
//                            var obj=data[i];
//                            console.log(obj);
//                            if(obj.acceptance==1)
//                            {
//                              document.getElementById("showStatus").innerHTML=+(" Appointment Accepted");
//                            }
//                            else
//                            {
//                              document.getElementById("showStatus").innerHTML=+(" Appointment Rejected");
//                            }
//                         }

//             }
//         )

// }
    

function myFunction() {
    // Declare variables
    console.log("function called");
    
    input = document.getElementById("search").value;
    console.log(input);

    $.get("http://localhost:3000/Vaccine", function (data, status) {
                   console.log("get");
                   var v1=document.getElementById("onedata");
                    for (var i = 0; i < data.length; i++) 
                    {
                        var obj=data[i];
                        console.log(obj.vaccineName);
                        if(input==obj.vaccineName)
                        {
                          console.log("entered if");
                        //   alert(obj.vaccineId+" "+obj.vaccineName+" "+obj.vaccineDesc+" "+obj.vaccineDate+" "+obj.vaccinePrice+" "+obj.vlocation);
                        v1.innerHTML+=obj.vaccineId+" "+obj.vaccineName+" "+obj.vaccineDesc+" "+obj.vaccineDate+" "+obj.vaccinePrice+" "+obj.vlocation 
                          break;
                        }
                    //     else
                    //     {
                    //       alert("Test your are searching for is not available");
                    //        break;
                    //    }
                    }
                    
             }
        )

 }
        
    

   
      
    
  