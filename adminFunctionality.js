$(document).ready
(
    
    function()
    {
        $("#submitbtn").click
        (
            function()
            {
                console.log($("#eid").val());
                console.log("function called");
   
                $.post("http://localhost:3000/Vaccine", 
                {
                vaccineId:$("#eid").val(),
                vaccineName:$("#ename").val(),
                vaccineDesc:$("#edesc").val(),
                vaccineDate:$("#edate").val(),
                vaccinePrice:$("#eprice").val(),
                vlocation:$("#loc").val()
                        }
                        ,function(data,status)
                        {
                            alert("Data: " + data + "\nStatus: " + status);
                        }            
                       )
            }

        ) 
        // $("#btn").click
        // (
        // function()
        // {
                
                const tbl=document.querySelector("#testtable");
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
                <td><button class="delete" onclick=deleteData(${obj.vaccineId})>DELETE</button></td>
                </tr> `;
                //len=len+1;

                // if(data.length==len)
                // {
                //     break;
                // }
                
                 }
                
                        
                      
                 }
                )
        }
               
                      
        //     )

             
        // }
    );

      

        // $("#testtable").on('click','#delete',
        // function()
        // {
           
            
        //     $(this).closest('tr').remove();
           
        // }  
            
       // )
       
   
        

         
        
    

function deleteData(id)
{
    var getid=id;
   // alert(id);
   console.log(getid);
   var td=event.target.parentNode;
   var tr=td.parentNode;
   tr.parentNode.removeChild(tr);
   // const tbl=document.querySelector("#testtable");
     $.get("http://localhost:3000/Vaccine", function (data, status) {

                  
                    for (var i = 0; i < data.length; i++) 
                    {
                        var obj=data[i];
                        // if(getid==obj.vaccineId)
                        // {
                        //     $.ajax({
                        //         url:'http://localhost:3000/Vaccine',
                        //         method:'DELETE',
                        //         success:function(result)
                        //         {
                        //             alert("record has been deleted");
                        //             console.log("row deleted");
                        //             // if(getid=Vaccine.vaccineId)
                        //             // {
                        
                        //             // }
                        //         },
                        //         error:function(error)
                        //         {

                        //             alert(error);
                        //         }
                        //     })
                         
                        // }
           

                    }
             }
        )
    
    }
   

         
    




