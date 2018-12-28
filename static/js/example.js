console.log("Client side running.....");
$(document).ready(()=>{
    $("#form").submit((e)=>{
        e.preventDefault();
        $.ajax({
            url: '/',
            type:'post',
            contentType:'application/json',
            data:JSON.stringify($('#form').serializeArray()),
            success:(response)=>{                
                console.log(response);
            }
        });
    });
});