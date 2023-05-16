
document.querySelectorAll('form ._input_div input').forEach(e=>{
    e.addEventListener('blur',()=>{
        if(e.value) {
            e.nextElementSibling.classList.add('move')
        }else{
            e.nextElementSibling.classList.remove('move')
        }
    })
})


document.querySelector('form').addEventListener('submit',(e)=>{
  e.preventDefault()
  window.location.href="dashboard.html"
})