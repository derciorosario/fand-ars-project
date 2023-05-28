document.querySelector('form').addEventListener('submit',(e)=>{

  e.preventDefault()
  

  const username=document.querySelector('input[name=username]').value;
  const password=document.querySelector('input[name=password]').value;

 
     
     if(!password || !username){
         document.querySelector('.login-error span').innerHTML="Preencha todos os campos!"
         document.querySelector('.login-error').classList.add('show')
     }else{
        document.querySelector('.login-error').classList.remove('show') 
        e.target.classList.add('loading')  
        setInterval(()=>{
         
         window.location.href="dashboard.html"
        },4000)

     }

     //Usuário ou senha incorrecta
  


})