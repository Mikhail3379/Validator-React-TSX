const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  async function sendEmail() {
    if (emailRegex.test(email) && data)
      
        await fetch("http://localhost:4000/send-email", {
         method: 'POST', 
         headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json',
           'Access-Control-Allow-Origin': 'http://localhost:3000',
         },
      
        
         
         body: JSON.stringify({message:data,email}) 
       }).then(data=>{
         console.info(data)
         if(data)
         Swal.fire(
             
             'success'
           )
           else
           Swal.fire(
             'Error!',
             "Please enter valid email !"
           )
       }).catch(error=> {
         console.log("error send "+error)
         Swal.fire(
             'Error!',
             
             'error'
           )
         });
