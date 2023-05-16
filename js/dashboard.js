//change page


document.querySelectorAll('._nav-link').forEach(e=>{
    
    e.addEventListener('click',()=>{
         document.querySelectorAll('.main-dashboard > .content').forEach(e=>{
            e.style.display="none"
         })
         document.querySelectorAll('[link_page]').forEach(e=>{
            e.classList.remove('active')
         })

         e.classList.add('active')
         document.querySelector(`[page="${e.getAttribute('link_page')}"]`).style.display="block"
    })
})



const horizontal_scroll_div = document.querySelectorAll('.horizontal_scroll');

   horizontal_scroll_div.forEach(element=>{
     element.addEventListener('wheel', (event) => {
      event.preventDefault();
      element.scrollLeft += event.deltaY;

     });
  })




let isMouseDown = false;
let startX;
let scrollLeft;

horizontal_scroll_div.forEach(element=>{
  

  element.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    startX = event.pageX - element.offsetLeft;
    scrollLeft = element.scrollLeft;
  });
  
  element.addEventListener('mouseup', () => {
    isMouseDown = false;
  });
  
  element.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });
  
  element.addEventListener('mousemove', (event) => {
    if (!isMouseDown) return;
    event.preventDefault();
    const x = event.pageX - element.offsetLeft;
    const walk = (x - startX) * 2; 
    element.scrollLeft = scrollLeft - walk;
  });




})



function show_popup_f(element,e){

  document.querySelectorAll('.pop-ups > div').forEach(e=>{
    e.style.display="none"
  })

  const popUp=document.querySelector('.pop-ups')
  popUp.style.display="flex"

  document.querySelector(`.pop-ups .${element}`).style.display="block"


  if(element == "edit-payment"){
     const {name,date,time,transation,status,value} = e
    
     document.querySelector('.pop-ups .edit-payment input[name=name]').value=name
     document.querySelector('.pop-ups .edit-payment input[name=date]').value=date
     document.querySelector('.pop-ups .edit-payment input[name=value]').value=value
     document.querySelector('.pop-ups .edit-payment select[name=status]').value=status
     document.querySelector('.pop-ups .edit-payment input[name=time]').value=time
     document.querySelector('.pop-ups .edit-payment input[name=transation]').value=transation

  }

}


function add_payment_f(){
  

}










