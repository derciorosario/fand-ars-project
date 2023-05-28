const data={
  lancamentos:[
  {id:'64fsdfe57574e7457457',conta:'3456346354',full_value:'4000.00MT',valor:4000,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'debito',natureza:"1"},
  {id:'64e5fsfsd7574e7457457',conta:'3456346354',full_value:'434090.00MT',valor:434090,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'debito',natureza:"11"},
  {id:'64e57fgfdg574e7457457',conta:'3456346354',full_value:'5686.00MT',valor:5686,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'credito',natureza:"4"},
  {id:'64e5757gdvt4e7457457',conta:'3456346354',full_value:'8600.00MT',valor:8600,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'debito',natureza:"1"},
  {id:'64e5757ertvet4e7457457',conta:'3456346354',full_value:'360.00MT',valor:360,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'debito',natureza:"2"},
  {id:'64e5757tvet4e7457457',conta:'3456346354',full_value:'4540.00MT',valor:4540,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'credito',natureza:"5"},
  {id:'64e5757weetve4e7457457',conta:'3456346354',full_value:'9040.00MT',valor:9040,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'debito',natureza:"6"},
  {id:'64e5757ewertvet4e7457457',conta:'3456346354',full_value:'1360.00MT',valor:1360,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'debito',natureza:"12"},
  {id:'64e5757twtrwvet4e7457457',conta:'3456346354',full_value:'94540.00MT',valor:494540,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'credito',natureza:"15"},
  {id:'64e5757rweetve4e7457457',conta:'3456346354',full_value:'430040.00MT',valor:430040,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'debito',natureza:"18"}
],
balanco:{activos_nao_correntes:[{activos_tangiveis:0,activos_intangiveis:0,activos_biologicos:0,investimentos:0}],
        activos_correntes:[{inventarios:0,clientes:0,caixa_e_bancos:0,investimentos:0}],
        outros:[{}]
  }
}

//add lancamentos

function check_and_uncheck_payment_f(element){

  const select_all=document.querySelector('._table .main .select input')

  if(select_all.checked && element){

    let count_checked=0

    document.querySelectorAll('._table .secondary .select input').forEach(e=>{
      if(e.checked) count_checked++
    })

   
    if(count_checked==0){
      select_all.checked=false
    }
    
  }

  
  document.querySelectorAll('._table .secondary .select input').forEach(e=>{
    if(!element) e.checked=select_all.checked
  })
   
}


function search_l(input){

  if(!input) input=""
 
  const filter=data.lancamentos.filter(item=>
    item.conta.toLowerCase().includes(input.toLowerCase()) ||
    item.full_value.toLowerCase().includes(input.toLowerCase()) ||
    item.descricao.toLowerCase().includes(input.toLowerCase()) ||
    item.data_lancamento.toLowerCase().includes(input.toLowerCase()) ||
    item.data_refelexo.toLowerCase().includes(input.toLowerCase()) ||
    item.hora.toLowerCase().includes(input.toLowerCase()) ||
    item.usuario.toLowerCase().includes(input.toLowerCase()) ||
    item.transicao.toLowerCase().includes(input.toLowerCase())
  )

 
  if(!document.querySelector('.search-container input').value){
    add_l(data.lancamentos)
  }else{
    add_l(filter)
  }

  
}


function delete_l(){
  document.querySelectorAll('._table .secondary .select input').forEach(e=>{
    if(e.checked) {
        id=e.parentElement.parentElement.getAttribute('_id')
        data.lancamentos=data.lancamentos.filter(item=>item.id != id)
    }
  })
  search_l(document.querySelector('.search-container input').value)
  update_painel_l()
  add_balanco()
}

let payment_data={}

function update_payment_data(){
  payment_data={
    conta:document.querySelector('.payment_p [name=conta]'),
    descricao:document.querySelector('.payment_p [name=descricao]'),
    data_refelexo:document.querySelector('.payment_p [name=data_refelexo]'),
    transicao:document.querySelector('.payment_p [name=transicao]'),
    valor:document.querySelector('.payment_p [name=valor]'),
    natureza:document.querySelector('.payment_p [name=natureza]')
  }
}

let payment_error_timeout
function check_payment_fields(){
    update_payment_data()

    if(!payment_data.conta.value || !payment_data.descricao.value || !payment_data.data_refelexo.value || !payment_data.transicao.value || !payment_data.valor.value || !payment_data.natureza.value){
        document.querySelector('.container .pop-ups .c .msg').classList.add('show')
        clearTimeout(payment_error_timeout)
        payment_error_timeout=setTimeout(()=>document.querySelector('.container .pop-ups .c .msg').classList.remove('show'),3000)
        return false
    }else{
      document.querySelector('.container .pop-ups .c .msg').classList.remove('show')
      return true
    }

    
}


function add_new_l_f(){
   update_payment_data() 

   let {conta,data_refelexo,descricao,valor,transicao,natureza}=payment_data
   if(!check_payment_fields()) return
  
   data.lancamentos.unshift({
   id:`${Math.random()}${Math.random()}${Math.random()}${Math.random()}${Math.random()}`,
   conta:conta.value,
   data_refelexo:data_refelexo.value,
   descricao:descricao.value,
   valor:parseFloat(valor.value) ? parseFloat(valor.value):0,
   transicao:transicao.value,
   usuario:'Sandra Almeida',
   data_lancamento:new Date().getFullYear() + "-" + new Date().getDay() + "-" + new Date().getMonth(),
   full_value:parseFloat(valor.value) ? parseFloat(valor.value) +".00MT" : 0 +".00MT",
   hora:new Date().getHours()+":"+new Date().getMinutes(),
   natureza:natureza.value
  })




  

  document.querySelector('.pop-ups .payment_p').classList.remove('show')
  add_l()
  update_painel_l()
  add_balanco()
  document.querySelector('.search-container input').value=""
  document.querySelector('.search-container input').classList.remove('show')
  
}



function edit_l_f(id){
  if(!check_payment_fields()) return

   const index=data.lancamentos.findIndex(item=>item.id==id)
   update_payment_data() 
   let {conta,data_refelexo,descricao,valor,transicao,natureza}=payment_data
   data.lancamentos[index].conta=conta.value
   data.lancamentos[index].data_refelexo=data_refelexo.value
   data.lancamentos[index].descricao=descricao.value
   data.lancamentos[index].valor=parseFloat(valor.value)
   data.lancamentos[index].full_value=parseFloat(valor.value) ? parseFloat(valor.value) +".00MT" : 0 +".00MT"
   data.lancamentos[index].transicao=transicao.value
   data.lancamentos[index].natureza=natureza.value

   search_l(document.querySelector('.search-container input').value)
   update_painel_l()
   document.querySelector('.pop-ups .payment_p').classList.remove('show')

}



function add_l(new_data){



  
  for (let i = 0; i < data.lancamentos.length; i++) {

    const item=data.lancamentos[i]
   
    document.querySelector('.payment_print_preview div.data').innerHTML+=`
        <div><span style="font-weight:600"></span><span>${i+1}</span>:</div>
        <div class="conta"><span style="font-weight:600">Conta: </span><span>${item.conta}</span></div>
        <div class="valor"><span style="font-weight:600">Valor: </span><span style="color:rgb(66, 169, 209)">${item.full_value}</span></div>
        <div class="desc"><span style="font-weight:600">Descrição: </span><span>${item.descricao}</span></div>
        <div class="d_l"><span style="font-weight:600">Data de lançamento: </span><span>${item.data_lancamento}</span></div>
        <div class="_time"><span style="font-weight:600">Data de reflexo: </span><span>${item.data_refelexo}</span></div>
        <div class="hora"><span style="font-weight:600">Hora: </span><span>${item.hora}</span></div>
        <div class="_user"><span style="font-weight:600">Usuário: </span><span>${item.usuario}</span></div>
        <div><span style="font-weight:600">Transição: </span><span style="color:${item.transicao == "debito" ? 'orange':'green'}">${item.transicao == "debito" ? 'Débito':'Crédito'}</span></div>
        <div style="color:#ddd">____________________________</div>
    `
   
}

 
  

  let ldata=new_data ? new_data : data.lancamentos
  


  const l_container=document.querySelector('.payment ._table_container')

   const title_bar=`
    <div class="item main">
      <div class="select"><input type="checkbox" onclick="check_and_uncheck_payment_f()"/></div>
      <div class="_name"><span>Conta</span></div>
      <div class="_date"><span>Valor</span></div>
      <div class="_desc"><span>Descrição</span></div>
      <div class="_total"><span>D. lançamento</span></div>
      <div class="_time"><span>D. reflexo</span></div>
      <div class="hora"><span>Hora</span></div>
      <div class="_user"><span>Usuário</span></div>
      <div class="_status"><span>Transição</span></div>
      <div></div>
    </div>
   `

   l_container.innerHTML=title_bar

  for (let i = 0; i < ldata.length; i++) {

     const item=ldata[i]
     
      l_container.innerHTML+=`
      
        <div class="item secondary" _id="${item.id}">
          <div class="bg" onclick="l_edit('${item.id}','${item.conta}',${item.valor},'${item.descricao}','${item.data_refelexo}','${item.transicao}',${item.natureza})"></div>
          <div class="select"><input type="checkbox" onclick="check_and_uncheck_payment_f(this)"/></div>
          <div class="conta"><span>${item.conta}</span></div>
          <div class="valor"><span>${item.full_value}</span></div>
          <div class="desc"><span>${item.descricao.length < 13 ? item.descricao: item.descricao.slice(0,13)+"..." }</span></div>
          <div class="d_l"><span>${item.data_lancamento}</span></div>
          <div class="_time"><span>${item.data_refelexo}</span></div>
          <div class="hora"><span>${item.hora}</span></div>
          <div class="_user"><span>${item.usuario}</span></div>
          <div class="status ${item.transicao == "debito" ? 'debito':'credito'}"><span>${item.transicao == "debito" ? 'Débito':'Crédito'}</span></div>
          <div></div>
      </div>
      `
     
  }








  //add count
  document.querySelector('.payment .item_count span').innerHTML=ldata.length
 

  
 

}
add_l()
update_painel_l()



function add_balanco(new_data){



  
 /* for (let i = 0; i < data.lancamentos.length; i++) {

    const item=data.lancamentos[i]
   
    document.querySelector('.payment_print_preview div.data').innerHTML+=`
        <div><span style="font-weight:600"></span><span>${i+1}</span>:</div>
        <div class="conta"><span style="font-weight:600">Conta: </span><span>${item.conta}</span></div>
        <div class="valor"><span style="font-weight:600">Valor: </span><span style="color:rgb(66, 169, 209)">${item.full_value}</span></div>
        <div class="desc"><span style="font-weight:600">Descrição: </span><span>${item.descricao}</span></div>
        <div class="d_l"><span style="font-weight:600">Data de lançamento: </span><span>${item.data_lancamento}</span></div>
        <div class="_time"><span style="font-weight:600">Data de reflexo: </span><span>${item.data_refelexo}</span></div>
        <div class="hora"><span style="font-weight:600">Hora: </span><span>${item.hora}</span></div>
        <div class="_user"><span style="font-weight:600">Usuário: </span><span>${item.usuario}</span></div>
        <div><span style="font-weight:600">Transição: </span><span style="color:${item.transicao == "debito" ? 'orange':'green'}">${item.transicao == "debito" ? 'Débito':'Crédito'}</span></div>
        <div style="color:#ddd">____________________________</div>
    `
}*/

 
  



  const l_container1=document.querySelector('.balance .t1 ._table_container')
  const l_container2=document.querySelector('.balance .t2 ._table_container')
  const l_container3=document.querySelector('.balance .t3 ._table_container')
  const l_container4=document.querySelector('.balance .t4 ._table_container')
  const l_container5=document.querySelector('.balance .t5 ._table_container')

   const title_bar1=`
    <div class="item main">
      <div class="_name"><span>Activos tagivel</span></div>
      <div class="_date"><span>Activos intagiveis</span></div>
      <div class="_desc"><span>Actvos biológicos</span></div>
      <div class="_total"><span>Invesntimentos</span></div>
      <div class="_desc"><span>Outros</span></div>
      <div></div>
    </div>
   `
   l_container1.innerHTML=title_bar1

   const title_bar2=`
    <div class="item main">
      <div class="_name"><span>Inventarios</span></div>
      <div class="_date"><span>Clientes</span></div>
      <div class="_desc"><span>Caixa e Bancos</span></div>
      <div class="_desc"><span>Outros</span></div>
      <div></div>
    </div>
   `
   l_container2.innerHTML=title_bar2


   const title_bar3=`
   <div class="item main">
     <div class="_name"><span>Provisoes</span></div>
     <div class="_date"><span>Emprestimo obtido</span></div>
     <div class="_desc"><span>Outros</span></div>
     <div></div>
   </div>
  `
  l_container3.innerHTML=title_bar3


  const title_bar4=`
  <div class="item main">
    <div class="_name"><span>Imprestimos</span></div>
    <div class="_date"><span>Fornecedores</span></div>
    <div class="_desc"><span>Outros</span></div>
    <div></div>
  </div>
 `
 l_container4.innerHTML=title_bar4

 const title_bar5=`
 <div class="item main">
   <div class="_name"><span>Dividendos</span></div>
   <div class="_date"><span>Despesas</span></div>
   <div class="_desc"><span>Outros</span></div>
   <div></div>
 </div>
`
l_container5.innerHTML=title_bar5



   let activos_tangiveis=0
   let activos_intangiveis=0
   let activos_biologicos=0
   let investimentos=0
   let outros_activos_nao_correntes=0
   let inventarios=0
   let clientes=0
   let caixa_e_bancos=0
   let outros_activos_correntes=0
   let provisoes=0
   let emprestimo_obtido=0
   let outros_passivos_nao_correntes=0
   let impostos=0
   let fornecedores=0
   let outros_passivos_correntes=0
   let dividendos=0
   let despesas=0
   let outros=0



   for (let i = 0; i < data.lancamentos.length; i++) {
     if(data.lancamentos[i].natureza=="1") activos_tangiveis+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="2") activos_intangiveis+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="3") activos_biologicos+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="4") investimentos+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="5") outros_activos_nao_correntes+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="6") inventarios+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="7") clientes+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="8") caixa_e_bancos+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="9") outros_activos_correntes+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="10") provisoes+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="11") emprestimo_obtido+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="12") outros_passivos_nao_correntes+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="13") impostos+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="14") fornecedores+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="15") outros_passivos_correntes+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="16") dividendos+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="17") despesas+=data.lancamentos[i].valor
     if(data.lancamentos[i].natureza=="18") outros+=data.lancamentos[i].valor
   }



  l_container1.innerHTML+=`
    <div class="item secondary"">
        <div class="_name"><span>${activos_tangiveis}.00MT</span></div>
        <div class="_date"><span>${activos_intangiveis}.00MT</span></div>
        <div class="_desc"><span>${activos_biologicos}.00MT</span></div>
        <div class="_total"><span>${investimentos}.00MT</span></div>
        <div class="_total"><span>${outros_activos_nao_correntes}.00MT</span></div>
        <div></div>
    </div>
  `
  l_container2.innerHTML+=`
    <div class="item secondary"">
        <div class="_name"><span>${inventarios}.00MT</span></div>
        <div class="_date"><span>${clientes}.00MT</span></div>
        <div class="_desc"><span>${caixa_e_bancos}.00MT</span></div>
        <div class="_date"><span>${outros_activos_correntes}.00MT</span></div>
        <div></div>
    </div>
  `

    l_container3.innerHTML+=`
    <div class="item secondary"">
        <div class="_name"><span>${provisoes}.00MT</span></div>
        <div class="_date"><span>${emprestimo_obtido}.00MT</span></div>
        <div class="_date"><span>${outros_passivos_nao_correntes}.00MT</span></div>
        <div></div>
    </div>
  `

    l_container4.innerHTML+=`
    <div class="item secondary"">
        <div class="_name"><span>${impostos}.00MT</span></div>
        <div class="_date"><span>${fornecedores}.00MT</span></div>
        <div class="_desc"><span>${outros_passivos_correntes}.00MT</span></div>
        <div></div>
    </div>
    `

    l_container5.innerHTML+=`
    <div class="item secondary"">
        <div class="_name"><span>${dividendos}.00MT</span></div>
        <div class="_date"><span>${despesas}.00MT</span></div>
        <div class="_desc"><span>${outros}.00MT</span></div>
        <div></div>
    </div>
    `


}

add_balanco()

function update_painel_l(){
         let ldata=data.lancamentos
        //add total
        let l_total=0
        for (let i = 0; i < ldata.length; i++) {
          l_total+=ldata[i].valor
        }
        document.querySelector('.payment .total').innerHTML=l_total+".00MT"
        document.querySelector('.payment_print_preview .total').innerHTML=l_total+".00MT"
        document.querySelector('.payment_print_preview .t_n').innerHTML=data.lancamentos.length

       


        //add debit
        let l_debit=0
        for (let i = 0; i < ldata.length; i++) {
          if(ldata[i].transicao=="debito") l_debit+=ldata[i].valor
        }
        document.querySelector('.payment .debito').innerHTML=l_debit+".00MT"
        document.querySelector('.payment_print_preview .d_t').innerHTML=l_debit+".00MT"



        //add credit
        let l_credit=0
        for (let i = 0; i < ldata.length; i++) {
          if(ldata[i].transicao=="credito") l_credit+=ldata[i].valor
        }
        document.querySelector('.payment .credito').innerHTML=l_credit+".00MT"
        document.querySelector('.payment_print_preview .c_t').innerHTML=l_credit+".00MT"


        //add credit and debit percentage

        let l_credit_p=!l_total ? 0 : (l_credit / l_total * 100)
        let l_debit_p=!l_total ? 0 : (l_debit / l_total * 100)

        document.querySelector('.payment .credito-percentage').innerHTML=Math.round(l_credit_p).toString().length==1? l_credit_p.toString().slice(0,4) +"%" :l_credit_p.toString().slice(0,5) +"%"
        document.querySelector('.payment .debito-percentage').innerHTML=Math.round(l_debit_p).toString().length==1? l_debit_p.toString().slice(0,4) +"%" :l_debit_p.toString().slice(0,5) +"%"
        document.querySelector('.payment_print_preview .c_p').innerHTML=document.querySelector('.payment .credito-percentage').innerHTML
        document.querySelector('.payment_print_preview .d_p').innerHTML=document.querySelector('.payment .debito-percentage').innerHTML

        if(l_total == 0){
          document.querySelector('.payment .debito-percentage').classList.add('black')
          document.querySelector('.payment_print_preview .d_p').style.color="royalblue"
        }else if(l_debit_p >= 50){
          document.querySelector('.payment .debito-percentage').classList.remove('red')
          document.querySelector('.payment .debito-percentage').classList.remove('black')
          document.querySelector('.payment_print_preview .d_p').style.color="green"
        }else if(l_debit_p < 50){
          document.querySelector('.payment .debito-percentage').classList.add('red')
          document.querySelector('.payment .debito-percentage').classList.remove('black')
          document.querySelector('.payment_print_preview .d_p').style.color="red"
        }

        if(l_total == 0){
          document.querySelector('.payment .credito-percentage').classList.add('black')
          document.querySelector('.payment_print_preview .c_p').style.color="royalblue"
        }else if(l_credit_p >= 50){
          document.querySelector('.payment .credito-percentage').classList.remove('red')
          document.querySelector('.payment .credito-percentage').classList.remove('black')
          document.querySelector('.payment_print_preview .c_p').style.color="green"
        }else if(l_credit_p < 50){
          document.querySelector('.payment .credito-percentage').classList.add('red')
          document.querySelector('.payment .credito-percentage').classList.remove('black')
          document.querySelector('.payment_print_preview .c_p').style.color="red"
        }
}


function l_edit(id,conta,valor,descricao,data_refelexo,transicao,natureza){

   show_popup_f('edit-payment',{id,conta,valor,descricao,data_refelexo,transicao,natureza})

   
  
}





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

         if(window.innerWidth <= 640){
                  document.querySelector('.container').classList.add('hide')
         }

    })
})




//share
const horizontal_scroll_div = document.querySelectorAll('.horizontal_scroll');

   horizontal_scroll_div.forEach(element=>{
     element.addEventListener('wheel', (event) => {
      if(element.classList.contains('_bottom')) return
      element.scrollLeft += event.deltaY;

     });
})




let isMouseDown = [false,false];
let startX=[undefined,undefined];
let scrollLeft=[undefined,undefined];
  
horizontal_scroll_div.forEach((element,i)=>{


  element.addEventListener('mousedown', (event) => {
    isMouseDown[i] = true;
    startX[i] = event.pageX - element.offsetLeft;
    scrollLeft[i] = element.scrollLeft;
  });
  
  element.addEventListener('mouseup', () => {
    isMouseDown[i] = false;
  });
  
  element.addEventListener('mouseleave', () => {
    isMouseDown[i] = false;
  });
  
  element.addEventListener('mousemove', (event) => {
    if (!isMouseDown[i]) return;
    event.preventDefault();
    const x = event.pageX - element.offsetLeft;
    const walk = (x - startX[i]) * 2; 
    element.scrollLeft = scrollLeft[i] - walk;
  });




})



function show_popup_f(element,e){
 
    let title=document.querySelector(`.pop-ups .payment_p .title`)
    if(element == "edit-payment"){
      const {id,conta,valor,descricao,data_refelexo,transicao,natureza} = e
      document.querySelector('.pop-ups .payment_p input[name=conta]').value=conta
      document.querySelector('.pop-ups .payment_p input[name=data_refelexo]').value=data_refelexo
      document.querySelector('.pop-ups .payment_p input[name=valor]').value=valor
      document.querySelector('.pop-ups .payment_p select[name=transicao]').value=transicao
      document.querySelector('.pop-ups .payment_p textarea[name=descricao]').value=descricao
      document.querySelector('.pop-ups .payment_p select[name=natureza]').value=natureza
      title.innerHTML="Editar lançamento"
      document.querySelector(`.pop-ups .payment_p .save`).setAttribute('onclick',`edit_l_f('${id}')`)
      
   }else if(element == "add-payment"){ 
      document.querySelector('.payment_p [name=conta]').value=""
      document.querySelector('.payment_p [name=descricao]').value=""
      document.querySelector('.payment_p [name=data_refelexo]').value=""
      document.querySelector('.payment_p [name=transicao]').value=""
      document.querySelector('.payment_p [name=valor]').value=""
      document.querySelector('.payment_p [name=natureza]').value=""
      title.innerHTML="Novo lançamento"
      document.querySelector(`.pop-ups .payment_p .save`).setAttribute('onclick','add_new_l_f()')
   }



    setTimeout(()=>{
      document.querySelector(`.pop-ups .payment_p`).classList.add('show')
    },100)


 

}


function add_payment_f(){
  

}




//initial loading
let initial_loading_counting_interval
let initial_loading_counting=0

initial_loading_counting_interval=setInterval(()=>{
    document.querySelector('.loading_progress').innerHTML=`${initial_loading_counting+=1}%`
    if(initial_loading_counting == 100){
        clearInterval(initial_loading_counting_interval)

        setTimeout(()=>{
          document.querySelector('.init_loader_container').classList.add('end')
          if(window.innerWidth <= 640){
                  document.querySelector('.container').classList.add('hide')
          }
          setTimeout(()=>{
              document.querySelector('.init_loader_container').style.display="none"
          },2000)
        },500)

        
    }
},24);



function hide_left_menu_f(){
  document.querySelector('.container').classList.toggle('hide')

  setTimeout(()=>{
      payment_section_ajustment()
  },300)

  document.querySelector('.payment ._bottom').scrollLeft=0
}




function payment_section_ajustment(){
  if(document.querySelector('.payment ._bottom').clientWidth > 1024){
    document.querySelector('.payment ._bottom .options').classList.remove('float')
  }else{
    document.querySelector('.payment ._bottom .options').classList.add('float')
  }

  if(document.querySelector('.balance ._center').clientWidth > 1024){
    document.querySelectorAll('.balance ._table_c .options').forEach(e=>{
      e.classList.remove('float')
    })
  }else{
    document.querySelectorAll('.balance ._table_c .options').forEach(e=>{
      e.classList.add('float')
    })
  }

  


  let payment_scroll_left=document.querySelector('.payment ._bottom').scrollLeft
  document.querySelector('.payment ._bottom .options').style.right=-payment_scroll_left+"px"

  let balance_scroll_left=document.querySelector('.balance ._center').scrollLeft
  document.querySelectorAll('.balance ._table_c .options').forEach(e=>{
    e.style.right=-balance_scroll_left+"px"
  })


}


payment_scroll=document.querySelector('.payment ._bottom').addEventListener('scroll',()=>{
  let payment_scroll_left=document.querySelector('.payment ._bottom').scrollLeft
  document.querySelector('.payment ._bottom .options').style.right=-payment_scroll_left+"px"
})

balance_scroll=document.querySelector('.balance ._center').addEventListener('scroll',()=>{
  let balance_scroll_left=document.querySelector('.balance ._center').scrollLeft
  document.querySelectorAll('.balance ._table_c .options').forEach(e=>{
    e.style.right=-balance_scroll_left+"px"
  })
})





function print_l_() {
  var printWindow = window.open('', '', 'width=800,height=800');
  printWindow.document.open();
  printWindow.document.write(`<html><head><title>Print</title></head><body>`);
  printWindow.document.write(document.querySelector('.payment_print_preview').innerHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}


const floatContainer=document.querySelectorAll('.float')

function handleDocumentClick(event) {
  var target = event.target;
  floatContainer.forEach(e=>{
      if (target !== e && !e.contains(target)) {
         if(e.classList.contains('show'))  e.classList.remove('show')
      }
  })

  
}


document.addEventListener("click", handleDocumentClick);


document.querySelector('.search-container input').addEventListener('blur',()=>{
  if(!document.querySelector('.search-container input').value){
      document.querySelector('.search-container input').classList.remove('show')
  }
})
document.querySelector('.close_input_bg').addEventListener('click',()=>{
      document.querySelector('.search-container input').classList.remove('show')
      setTimeout(()=>document.querySelector('.search-container input').value="",200)
      add_l()
  
})



function init(){
   window.onresize=()=>{
      payment_section_ajustment()
      document.querySelector('.payment ._bottom').scrollLeft=0
   }

   document.querySelector('.main-dashboard').addEventListener('scroll',()=>{
     if(document.querySelector('.main-dashboard').scrollTop > document.querySelector('._table').offsetTop){
       document.querySelector('._table .options ._c').style.top=document.querySelector('.main-dashboard').scrollTop - document.querySelector('._table').offsetTop - 3 + "px"
     }else{
       document.querySelector('._table .options ._c').style.top="0"
     }
   })

  window.onload=()=>{
     payment_section_ajustment()
  }
   


}
init()



function send_message(){
  const msg_container=document.querySelector('.notification_content .chat .messages');
  const text=document.querySelector('.notification_content .chat input')

  if(text.value){
    msg_container.innerHTML+=`
      <div class="msg_c">
        <span class="user">Gabriel Macamo</span>
        <span class="msg">- ${text.value}</span>
      </div>
    `
    text.value=""
  }
 
}

function send_message_oninput(event){
 if(event.keyCode==13) send_message()

}







/*
// Function to update the chart data
function updateChartData() {
  // Generate new data
  var newData = [15, 25, 35, 45, 55];
  
  // Update the chart data
  myChart.data.datasets[0].data = newData;
  
  // Redraw the chart
  myChart.update();
}

// Call the updateChartData() function after a specific interval
setInterval(updateChartData, 5000); // Update every 5 seconds





// Specify the target date and the current date
var targetDate = new Date('2023-06-30');
var currentDate = new Date();

// Calculate the time difference in milliseconds
var timeDiff = targetDate.getTime() - currentDate.getTime();

// Calculate the number of days
var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

console.log('There are ' + daysLeft + ' days left until the target date.');


*/
function print_l(){
  // Create a new jsPDF instance
  var doc = new jsPDF();

  // Get the content of the <div> element
  var divContent = document.querySelector('.payment_print_preview') //.insertBefore(document.querySelector('._table'));
  document.querySelector('.payment_print_preview .date').innerHTML=new Date().getFullYear() + "/" + new Date().getDay() + "/" + new Date().getMonth() +" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
  document.querySelector('.payment_print_preview .id').innerHTML=Math.random()
  // Generate PDF from the <div> content
  doc.fromHTML(divContent, 15, 15);

  // Save the PDF file
  doc.save(`ars-tabela-de-lancamento-${new Date().getFullYear() + "-" + new Date().getDay() + "-" + new Date().getMonth() +"-"+new Date().getHours()+"_"+new Date().getMinutes()+"_"+new Date().getSeconds()}.pdf`);
}












