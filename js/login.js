

if(localStorage.getItem('ars-data')){
   window.location.href=`dashboard.html`
}else{
   document.querySelector('.container').style.display="flex"
}




let logErrTimeout
document.querySelector('form').addEventListener('submit',(e)=>{

  e.preventDefault()
  

  const username=document.querySelector('input[name=username]').value;
  const password=document.querySelector('input[name=password]').value;

   clearTimeout(logErrTimeout)
   document.querySelector('.login-error').classList.remove('show')
     
     if(!password || !username){
         document.querySelector('.login-error span').innerHTML="Preencha todos os campos!"
         document.querySelector('.login-error').classList.add('show')
     }else{
        /*document.querySelector('.login-error').classList.remove('show') 
        e.target.classList.add('loading')  
        setInterval(()=>{
         window.location.href="dashboard.html"
        },4000)*/
       e.target.classList.add('loading') 
       fetch(`https://ars-server.onrender.com/login/${username}/${password}`)
         .then(response => response.json())
         .then(responseData => {
              

                   

                  if(responseData.res){
                     window.location.href=`dashboard.html`
                     localStorage.setItem('ars-data',JSON.stringify(responseData))

                     return
                  }else{
                     e.target.classList.remove('loading')
                     document.querySelector('.login-error span').innerHTML="Usuário ou senha incorretos!"
                     document.querySelector('.login-error').classList.add('show')
                     clearTimeout(logErrTimeout)
                     logErrTimeout=setTimeout(()=> document.querySelector('.login-error').classList.remove('show'),3000)
                  }

           
         })
         .catch(error => {
            clearTimeout(logErrTimeout)
            e.target.classList.remove('loading')
            document.querySelector('.login-error span').innerHTML="Erro de internet, tente novamente!"
            document.querySelector('.login-error').classList.add('show')
         });

       }




})