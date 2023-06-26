let settings={
  lang:'pt',
  dark_mode:false
}

function save_settings(){
  settings={
    lang:document.querySelector('.settings .option.lang select').value,
    dark_mode:document.querySelector('.container').classList.contains('dark-theme') ? true : false

  }
  localStorage.setItem('ars-settings',JSON.stringify(settings))
}
 
function setup(){
      settings=JSON.parse(localStorage.getItem('ars-settings')) ? JSON.parse(localStorage.getItem('ars-settings')) : settings
      document.querySelector('.settings .option.lang select').value=settings.lang
      if (settings.dark_mode) {
        document.querySelector('.container').classList.add('dark-theme')
        document.querySelector('.settings .option.night-mode .switch').classList.add('active')
      }
      set_f('change-lang')
      document.querySelector('.container').classList.add('show-translated-content')
}
setup()



const data={
  company_settings:{
     img_src:'',
     name:''
  },
  lancamentos:[
    /*
  {id:'1',conta_deb:'56890978964',conta_cred:'56890978964',cred_full_value:'4000.00MT',valor:4000,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'debito',natureza:"1"},
  {id:'64e5fsfsd7574e7457457',conta_deb:'3456346354',conta_cred:'56890978964',full_value:'434090.00MT',valor:434090,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'debito',natureza:"11"},
  {id:'64e57fgfdg574e7457457',conta_deb:'3456346354',conta_cred:'56890978964',full_value:'5686.00MT',valor:5686,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'credito',natureza:"4"},
  {id:'64e5757gdvt4e7457457',conta_deb:'3456346354',conta_cred:'56890978964',full_value:'8600.00MT',valor:8600,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'debito',natureza:"1"},
  {id:'64e5757ertvet4e7457457',conta_deb:'3456346354',conta_cred:'56890978964',full_value:'360.00MT',valor:360,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'debito',natureza:"2"},
  {id:'64e5757tvet4e7457457',conta_deb:'3456346354',conta_cred:'56890978964',full_value:'4540.00MT',valor:4540,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'credito',natureza:"5"},
  {id:'64e5757weetve4e7457457',conta_deb:'3456346354',conta_cred:'56890978964',full_value:'9040.00MT',valor:9040,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'debito',natureza:"6"},
  {id:'64e5757ewertvet4e7457457',conta_deb:'3456346354',conta_cred:'56890978964',full_value:'1360.00MT',valor:1360,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'debito',natureza:"12"},
  {id:'64e5757twtrwvet4e7457457',conta_deb:'3456346354',conta_cred:'56890978964',full_value:'94540.00MT',valor:494540,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'credito',natureza:"15"},
  {id:'64e5757rweetve4e7457457',conta_deb:'3456346354',conta_cred:'56890978964',full_value:'430040.00MT',valor:430040,descricao:'Compra',data_lancamento:'2023-04-30',data_refelexo:'2023-06-30',hora:'12:60',usuario:'Gabriel Macamo',transicao:'debito',natureza:"18"}
*/
],

backup:{
  lancamentos:[

  ]
},
accounts:[
 /*
 {id:'1',name:'Despesas',number:'56890978964'},
 {id:'2',name:'Caixa e Bancos',number:'766807890'},
 {id:'3',name:'Activos',number:'123245657345'},
 {id:'4',name:'Inventario',number:'43490978964'},
 {id:'5',name:'Forbecedores',number:'766807890'},
 {id:'6',name:'Emprestimo',number:'99845657345'}*/
],
groups:[
 /* {id:'1',name:'Global',to:['1','2']},
  {id:'2',name:'Managers',to:['1','2','6','3']}*/
],
balanco:{activos_nao_correntes:[{activos_tangiveis:0,activos_intangiveis:0,activos_biologicos:0,investimentos:0}],
        activos_correntes:[{inventarios:0,clientes:0,caixa_e_bancos:0,investimentos:0}],
        outros:[{}]
},
users:[
  {
    id:'1',
    name:'Gabriela Mateus',
    email:'gabriela@gmail.com',
    contact:'+258 84 4735 353',
    password:'123',
    active:true,
    role:'----------',
    account_access: [],
    group_access:[],
    access:[]
  }
],

country_rates:{
   MZN:64
},

history:[
/*
      {
        user_id:'1',
        id:'1',
        user:'Gabriela Mateus',
        l_id:'1',
        changes:1,
        change:1,
        type:'added',
        time:'12:70',
        date:'2023-04-30'
      }
      */
  ]

}


function test(pop_up){
  if(pop_up=="l"){
     

    document.querySelector('.payment_p [name=conta_deb]').value=`${Math.random().toString().slice(2,9)}`
    document.querySelector('.payment_p [name=conta_cred]').value=`${Math.random().toString().slice(2,9)}`
    document.querySelector('.payment_p [name=descricao]').value="hfasjdghjasdghjasdhgasjlghsdfjgh"
    document.querySelector('.payment_p [name=data_refelexo]').value="2023-05-08"
    document.querySelector('.payment_p [name=valor_deb]').value=`${Math.random().toString().slice(2,9)}`
    document.querySelector('.payment_p [name=valor_cred]').value=`${Math.random().toString().slice(2,9)}`
    document.querySelector('.payment_p [name=natureza]').value="2"

  }
}




let acccount_filter=[]
let current_editing;
let current_editing_a=[...data.accounts]
let current_editing_g=[...data.groups]



function s_accounts(input){
  if (!data.accounts.length) {
     document.querySelector('.pop-ups .users  .account-div .list').innerHTML=`<span class="empty">(Nenhuma conta disponível)</span>`
  }else{
     document.querySelector('.pop-ups .users  .account-div .list').innerHTML=``
  }



  let filter=current_editing_a.filter(a=>a.name.toLowerCase().includes(input.toLowerCase()) || a.number.toLowerCase().includes(input.toLowerCase()))

  for (let i = 0; i < filter.length; i++) {

    const item=filter[i]
    let label_id=Math.random()
    let a_access=current_editing.account_access
    document.querySelector('.pop-ups .users .account-div .list').innerHTML+=`
      <div class="account_option">
          <input  id="${label_id}" type="checkbox" _id="${item.id}" ${a_access.includes(item.id) ? 'checked':''} onclick="check_and_uncheck_user_access(this,'${item.id}','${current_editing.id}','account')"/>
          <label for="${label_id}">
            <div>
                <span class="name">${item.name}</span>
                <span class="account">${item.number}</span>
            </div>
          <label>

      </div>
    `
    
  }
  
}

function s_g(input,a_id){
 
  let filter=current_editing_g.filter(a=>a.name.toLowerCase().includes(input.toLowerCase()))

  if (!data.groups.length) {
     document.querySelector('.groups_and_accounts .group-div .list').innerHTML=`<span class="empty">(Nenhum grupo disponível)</span>`
  }else{
    document.querySelector('.groups_and_accounts .group-div .list').innerHTML=``
  }

  for (let i = 0; i < filter.length; i++) {

    const item=filter[i]
    let label_id=Math.random()
    document.querySelector('.groups_and_accounts .group-div .list').innerHTML+=`
      <div class="account_option">
          <input id="${label_id}" type="checkbox" _id="${item.id}" ${item.to.includes(a_id) ? 'checked':''} onclick="check_and_uncheck_g_access(this,'${item.id}','${a_id}')"/>
          <label for="${label_id}">
            <div>
                <span class="name">${item.name}</span>
            </div>
          </label>
      </div>
    `
  }
}


function s_a(input,g_id){
  if (!data.accounts.length) {
    document.querySelector('.groups_and_accounts .account-div .list').innerHTML=`<span class="empty">(Nenhuma conta disponível)</span>`
  }else{
    document.querySelector('.groups_and_accounts .account-div .list').innerHTML=``
  }
  let filter=current_editing_a.filter(a=>a.name.toLowerCase().includes(input.toLowerCase()))
  console.log({g_id,current_editing_a})
  for (let i = 0; i < filter.length; i++) {
    const item=filter[i]
    const g_access=current_editing_g.filter(g=>g.id==g_id)[0].to
    let label_id=Math.random()
    document.querySelector('.pop-ups .groups_and_accounts .account-div .list').innerHTML+=`
      <div class="account_option">
        <input id="${label_id}" type="checkbox"  _id="${item.id}" ${g_access.includes(item.id) ? 'checked':''}  onclick="check_and_uncheck_a_access(this,'${item.id}','${g_id}')"/>
        <label for="${label_id}">
        <div>
             <span class="name">${item.name}</span>
             <span class="account">${item.number}</span>
        </div>
        </label>
      </div>
    `
  }
}

function s_groups(input){

  if (!data.groups.length) {
   document.querySelector('.pop-ups .users  .group-div .list').innerHTML=`<span class="empty">(Nenhum grupo disponível)</span>`
  }else{
    document.querySelector('.pop-ups .users  .group-div .list').innerHTML=``
  }

 
  let filter=data.groups.filter(a=>a.name.toLowerCase().includes(input.toLowerCase()))

  for (let i = 0; i < filter.length; i++) {

    const item=filter[i]
    let label_id=Math.random()
    let g_access=current_editing.group_access
    document.querySelector('.pop-ups .users .group-div .list').innerHTML+=`
      <div class="account_option">
          <input id="${label_id}" type="checkbox" _id="${item.id}" ${g_access.includes(item.id) ? 'checked':''} onclick="check_and_uncheck_user_access(this,'${item.id}','${current_editing.id}','group')"/>
          <label for="${label_id}">
            <div>
                <span class="name">${item.name}</span>
            </div>
          </label>
      </div>
    `
    
  }
  
}










function check_and_uncheck_g_access(element,id,a_id){

    /* let index=data.groups.findIndex(g=>g.id==id)
    if(element.checked){
      data.groups[index].to.push(a_id)
    }else{
      let g_index=data.groups[index].to.indexOf(a_id)
      data.groups[index].to.splice(g_index,1)
    }*/

    let index=current_editing_g.findIndex(g=>g.id==id)
    if(element.checked){
      current_editing_g[index].to.push(a_id)
    }else{
      let g_index=current_editing_g[index].to.indexOf(a_id)
      current_editing_g[index].to.splice(g_index,1)
    }
}





function check_and_uncheck_a_access(element,a_id,id){
   /*let index=data.groups.findIndex(g=>g.id==id)
   if(element.checked){
     data.groups[index].to.push(a_id)
   }else{
     let g_index=data.groups[index].to.indexOf(a_id)
     data.groups[index].to.splice(g_index,1)
   }*/

   let index=current_editing_g.findIndex(g=>g.id==id)

   console.log(data.groups)
   if(element.checked){
     current_editing_g[index].to.push(a_id)
   }else{
     let g_index=current_editing_g[index].to.indexOf(a_id)
     current_editing_g[index].to.splice(g_index,1)
   }
}



function check_and_uncheck_user_access(element,id,userid,type){
     if(type=="account"){
          if(element.checked){
            current_editing.account_access.push(id)
           
          }else{
            if(current_editing.account_access.indexOf(id) != -1) current_editing.account_access.splice(current_editing.account_access.indexOf(id),1)
          }

         

          for (let i = 0; i < data.groups.length; i++) {

            let list_count=[]
            
            for (let j = 0; j < current_editing.account_access.length; j++) {
                 if(data.groups[i].to.includes(current_editing.account_access[j])){
                    list_count.push(current_editing.account_access[j])
                    document.querySelector(`.pop-ups .users  .group-div .list input[_id='${data.groups[i].id}']`).checked=true
                    if(!current_editing.group_access.includes(data.groups[i].id)) current_editing.group_access.push(data.groups[i].id)
                }
            }

            for (let j = 0; j < data.groups[i].to.length; j++) {
              if(!list_count.includes(data.groups[i].to[j]))  {
                document.querySelector(`.pop-ups .users  .group-div .list input[_id='${data.groups[i].id}']`).checked=false
                if(current_editing.group_access.indexOf(data.groups[i].id) != -1) current_editing.group_access.splice(current_editing.group_access.indexOf(data.groups[i].id),1)
              }
           }

           
            
          }

          
     }else{

       document.querySelectorAll('.pop-ups .users  .account-div .list input').forEach(e=>{
               let group_id=data.groups.findIndex(g=>g.id==id)
               if(element.checked){
                     if(data.groups[group_id].to.includes(e.getAttribute('_id'))){
                         e.checked=true
                         if(!current_editing.group_access.includes(id)) current_editing.group_access.push(id)
                         if(!current_editing.account_access.includes(e.getAttribute('_id'))) current_editing.account_access.push(e.getAttribute('_id'))  
                     }
               }else{
                    if(data.groups[group_id].to.includes(e.getAttribute('_id'))){
                         e.checked=false
                         if(current_editing.group_access.indexOf(id) != -1) current_editing.group_access.splice(current_editing.group_access.indexOf(id),1)
                         if(current_editing.account_access.indexOf(e.getAttribute('_id')) != -1) current_editing.account_access.splice(current_editing.account_access.indexOf(e.getAttribute('_id')),1)
                    }
               }
              
        })
       }
}




function toggle_show_passowd(e){
  e.classList.toggle('show')
  if(e.classList.contains('show')){
      document.querySelector('.users input[name=password]').type="text"
  }else{
      document.querySelector('.users input[name=password]').type="password"
  }
}



function check_and_uncheck_users(element){

  const select_all=document.querySelector('[p=users] .main .select input')

  if(select_all.checked && element){

    let count_checked=0

    document.querySelectorAll('[p=users] .secondary .select input').forEach(e=>{
      if(e.checked) count_checked++
    })

    if(count_checked==0){
      select_all.checked=false
    }
    
  }
  document.querySelectorAll('[p=users] .secondary .select input').forEach(e=>{
    if(!element) e.checked=select_all.checked
  })


}


function check_and_uncheck_groups(element){
  const select_all=document.querySelector('[p=accounts_and_groups] ._g .main .select input')

  if(select_all.checked && element){

    let count_checked=0

    document.querySelectorAll('[p=accounts_and_groups] ._g .secondary .select input').forEach(e=>{
      if(e.checked) count_checked++
    })

    if(count_checked==0){
      select_all.checked=false
    }
    
  }
  document.querySelectorAll('[p=accounts_and_groups] ._g .secondary .select input').forEach(e=>{
    if(!element) e.checked=select_all.checked
  })
}


function check_and_uncheck_accounts(element){

  const select_all=document.querySelector('[p=accounts_and_groups] ._a .main .select input')

  if(select_all.checked && element){

    let count_checked=0

    document.querySelectorAll('[p=accounts_and_groups] ._a .secondary .select input').forEach(e=>{
      if(e.checked) count_checked++
    })

    if(count_checked==0){
      select_all.checked=false
    }
    
  }
  document.querySelectorAll('[p=accounts_and_groups] ._a .secondary .select input').forEach(e=>{
    if(!element) e.checked=select_all.checked
  })


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


function filter_h(l_id){
    document.querySelector('.content.history ._table').classList.toggle('f')
    document.querySelector('.content.history ._table').setAttribute('l_id',l_id)
    if(document.querySelector('.content.history ._table').classList.contains('f')){
      add_history(data.history.filter(h=>h.l_id==l_id))
    }else{
      add_history()
    }
    
}


function search_l(input){

  if(!input) input=""
 
  const filter=data.lancamentos.filter(item=>
    item.conta_deb.toLowerCase().includes(input.toLowerCase()) ||
    item.conta_cred.toLowerCase().includes(input.toLowerCase()) ||
    item.deb_full_value.toLowerCase().includes(input.toLowerCase()) ||
    item.cred_full_value.toLowerCase().includes(input.toLowerCase()) ||
    item.descricao.toLowerCase().includes(input.toLowerCase()) ||
    item.data_lancamento.toLowerCase().includes(input.toLowerCase()) ||
    item.data_refelexo.toLowerCase().includes(input.toLowerCase()) ||
    item.hora.toLowerCase().includes(input.toLowerCase()) ||
    item.usuario.toLowerCase().includes(input.toLowerCase())
  )

 
  if(!document.querySelector('.payment .search-container input').value){
    add_l(data.lancamentos)
  }else{
    add_l(filter)
  }

  
}


function search_activities(input,action){

  if(action){
     document.querySelectorAll('[p=activities] .table_options span').forEach(e=>e.classList.remove('active'))
     action.classList.add('active')
  }

    

  if(!input) input=""
 
  const filter=data.lancamentos.filter(item=>
    item.conta_deb.toLowerCase().includes(input.toLowerCase()) ||
    item.conta_cred.toLowerCase().includes(input.toLowerCase()) ||
    item.deb_full_value.toLowerCase().includes(input.toLowerCase()) ||
    item.cred_full_value.toLowerCase().includes(input.toLowerCase()) ||
    item.descricao.toLowerCase().includes(input.toLowerCase()) ||
    item.data_lancamento.toLowerCase().includes(input.toLowerCase()) ||
    item.data_refelexo.toLowerCase().includes(input.toLowerCase()) ||
    item.hora.toLowerCase().includes(input.toLowerCase()) ||
    item.usuario.toLowerCase().includes(input.toLowerCase())
  )

 
  if(!document.querySelector('[p=activities] .search-container input').value){
    add_activities(data.lancamentos)
  }else{
    add_activities(filter)
  }

  
}



function search_a(input){

  if(!input) input=""
 
  const filter=data.accounts.filter(item=>
    item.name.toLowerCase().includes(input.toLowerCase()) ||
    item.number.toLowerCase().includes(input.toLowerCase())
  )

 
  if(!document.querySelector('[p=accounts_and_groups] ._a .search-container input').value){
    add_accounts(data.accounts)
  }else{
    add_accounts(filter)
  }

  
}

search_a()


function search_g(input){

  if(!input) input=""
 
  const filter=data.groups.filter(item=>
    item.name.toLowerCase().includes(input.toLowerCase())
  )

 
  if(!document.querySelector('[p=accounts_and_groups] ._g .search-container input').value){
    add_groups(data.groups)
  }else{
    add_groups(filter)
  }

  
}

search_g()


function search_history(input){

  if(!input) input=""
 
  const filter=data.history.filter(item=>
    item.l_id.toLowerCase().includes(input.toLowerCase()) ||
    item.user.toLowerCase().includes(input.toLowerCase()) ||
    item.type.toLowerCase().includes(input.toLowerCase()) ||
    item.time.toLowerCase().includes(input.toLowerCase()) ||
    item.date.toLowerCase().includes(input.toLowerCase())
  )


 
  if(!document.querySelector('.history .search-container input').value){
    add_history(data.history)
  }else{
    add_history(filter)
  }

  
}

function search_users(input){

  if(!input) input=""
 
  const filter=data.users.filter(item=>
    item.name.toLowerCase().includes(input.toLowerCase()) ||
    item.email.toLowerCase().includes(input.toLowerCase()) ||
    item.role.toLowerCase().includes(input.toLowerCase()) ||
    item.contact.toLowerCase().includes(input.toLowerCase())
  )

 
  if(!document.querySelector('[p=users] .search-container input').value){
    add_users(data.users)
  }else{
    add_users(filter)
  }

  
}



function delete_l(){

  document.querySelectorAll('.payment .secondary .select input').forEach(e=>{
    if(e.checked) {
        id=e.parentElement.parentElement.getAttribute('_id')
         add_new_h('delete',id,data.lancamentos.filter(l=>l.id==id)[0])
        data.lancamentos=data.lancamentos.filter(item=>item.id != id)
    }
  })

  

  search_l(document.querySelector('.payment .search-container input').value)
  update_painel_l()
  add_balanco()
}

function delete_a(){
  document.querySelectorAll('[p=accounts_and_groups] ._a .secondary .select input').forEach(e=>{
    if(e.checked) {
        id=e.parentElement.parentElement.getAttribute('_id')
        data.accounts=data.accounts.filter(item=>item.id != id)

        for (let i = 0; i < data.groups.length; i++) {
          
          if(data.groups[i].to.includes(id)) data.groups[i].to.splice(data.groups[i].to.indexOf(id),1)
          
        }
    }
  })
  search_a(document.querySelector('[p=accounts_and_groups] ._a .search-container input').value)
}

function delete_g(){
  document.querySelectorAll('[p=accounts_and_groups] ._g .secondary .select input').forEach(e=>{
    if(e.checked) {
        id=e.parentElement.parentElement.getAttribute('_id')
        data.groups=data.groups.filter(item=>item.id != id)
    }
  })
  search_g(document.querySelector('[p=accounts_and_groups] ._g .search-container input').value)
}

function delete_user(){
  document.querySelectorAll('[p=users] .secondary .select input').forEach(e=>{
    if(e.checked) {
        id=e.parentElement.parentElement.getAttribute('_id')
        data.users=data.users.filter(item=>item.id != id)
    }
  })
  search_users(document.querySelector('[p=users] .search-container input').value)
 
}

function delete_single_a(id){
   
  data.accounts=data.accounts.filter(item=>item.id != id)
  for (let i = 0; i < data.groups.length; i++) {
          
    if(data.groups[i].to.includes(id)) data.groups[i].to.splice(data.groups[i].to.indexOf(id),1)
    
  }
  document.querySelector('.pop-ups .groups_and_accounts').classList.remove('show')
  search_a(document.querySelector('[p=accounts_and_groups] ._a .search-container input').value)

}
function delete_single_g(id){

  data.groups=data.groups.filter(item=>item.id != id)
  document.querySelector('.pop-ups .groups_and_accounts').classList.remove('show')
  search_g(document.querySelector('[p=accounts_and_groups] ._g .search-container input').value)

}

function delete_single_l(id){
  add_new_h('delete',id,data.lancamentos.filter(l=>l.id==id)[0])
  data.lancamentos=data.lancamentos.filter(item=>item.id != id)
  document.querySelector('.pop-ups .payment_p').classList.remove('show')
  search_l(document.querySelector('.payment .search-container input').value)
  update_painel_l()
  add_balanco()
}

let payment_data={}
let user_data={}
let a_data={}
let g_data={}

function update_payment_data(){
  payment_data={
    conta_deb:document.querySelector('.payment_p [name=conta_deb]'),
    conta_cred:document.querySelector('.payment_p [name=conta_cred]'),
    descricao:document.querySelector('.payment_p [name=descricao]'),
    data_refelexo:document.querySelector('.payment_p [name=data_refelexo]'),
    valor_deb:document.querySelector('.payment_p [name=valor_deb]'),
    valor_cred:document.querySelector('.payment_p [name=valor_cred]'),
    natureza:document.querySelector('.payment_p [name=natureza]')
  }

  user_data={
    name:document.querySelector('.users [name=name]'),
    email:document.querySelector('.users [name=email]'),
    contact:document.querySelector('.users [name=contact]'),
    password:document.querySelector('.users [name=password]'),
    role:document.querySelector('.users [name=role]')
  }

  a_data={
    name:document.querySelector('.groups_and_accounts [name=name]'),
    number:document.querySelector('.groups_and_accounts [name=number]')
  }

  g_data={
    name:document.querySelector('.groups_and_accounts [name=name]')
  }
}

let payment_error_timeout
function check_payment_fields(){
    update_payment_data()

    //console.log(!payment_data.conta_cred.value ||  !payment_data.conta_deb.value || !payment_data.descricao.value || !payment_data.data_refelexo.value  || !payment_data.valor_deb.value || !payment_data.valor_cred.value || !payment_data.natureza.value)

    if(!payment_data.conta_cred.value ||  !payment_data.conta_deb.value || !payment_data.descricao.value || !payment_data.data_refelexo.value  || !payment_data.valor_deb.value || !payment_data.valor_cred.value || !payment_data.natureza.value){
        document.querySelector('.container .pop-ups .payment_p .msg').classList.add('show')
        clearTimeout(payment_error_timeout)
        payment_error_timeout=setTimeout(()=>document.querySelector('.container .pop-ups .payment_p .msg').classList.remove('show'),3000)
        return false
    }else{
      document.querySelector('.container .pop-ups .payment_p .msg').classList.remove('show')
      return true
    }
 
}


function check_user_fields(){
  update_payment_data()
  let {name,email,contact,role,password}=user_data 

  console.log(name.value)

  if(!name.value || !email.value || !contact.value || !password.value){
    document.querySelector('.container .pop-ups .users .msg').classList.add('show')
    clearTimeout(payment_error_timeout)
    payment_error_timeout=setTimeout(()=>document.querySelector('.container .pop-ups .users .msg').classList.remove('show'),3000)
    return false
  }else{
    document.querySelector('.container .pop-ups .users .msg').classList.remove('show')
    return true
  }

}
let d;

function see_history_filter(l_id,h_change){

  document.querySelector('.pop-ups .history_filter .l_container').innerHTML=""
  document.querySelector('.pop-ups .history_filter .l_container').style.transition="0s"
  document.querySelector('.pop-ups .history_filter .l_container').scrollTo(0,0)



  
  const h_data=data.history.filter(h=>h.l_id==l_id).reverse()

  for (let i = 0; i < h_data.length; i++) {
   
      document.querySelector('.pop-ups .history_filter .l_container').innerHTML+=`
        <div class="box">
        <div class="details"><span>${h_data[i].change}/${h_data[i].changes} <label style="color:${h_data[i].type=='add' ? 'green' : h_data[i].type == 'delete' ? 'crimson' : 'orange'}">${h_data[i].type.toUpperCase()}<label></span><span>${h_data[i].date} - ${h_data[i].time}</span></div>
        <div class="item">
          <div class="d">
              <span class="name">Conta (debito)</span><span class="value">${h_data[i==0?i:i-1].l_data.conta_deb}</span>
          </div>
          ${i!=0 && h_data[i-1].l_data.conta_deb != h_data[i].l_data.conta_deb ? `<svg style="transform: rotate(180deg);" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="22"><path d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg>
          <div><span class="change">${h_data[i].l_data.conta_deb}</span></div>`:''}
        </div>


            <div class="item">
            <div class="d">
                <span class="name">Valor (debito)</span><span class="value">${h_data[i==0?i:i-1].l_data.valor_deb}</span>
            </div>
            ${i!=0 && h_data[i-1].l_data.valor_deb != h_data[i].l_data.valor_deb ? `<svg style="transform: rotate(180deg);" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="22"><path d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg>
          <div><span class="change">${h_data[i].l_data.valor_deb}</span></div>`:''}
          </div>

          <div class="item">
          <div class="d">
              <span class="name">Conta (credito)</span><span class="value">${h_data[i==0?i:i-1].l_data.conta_cred}</span>
          </div>
          ${i!=0 && h_data[i-1].l_data.conta_cred != h_data[i].l_data.conta_cred ? `<svg style="transform: rotate(180deg);" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="22"><path d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg>
          <div><span class="change">${h_data[i].l_data.conta_cred}</span></div>`:''}
        </div>

            <div class="item">
            <div class="d"> 
                <span class="name">Valor (credito)</span><span class="value">${h_data[i==0?i:i-1].l_data.valor_cred}</span>
            </div>
            ${i!=0 && h_data[i-1].l_data.valor_cred != h_data[i].l_data.valor_cred ? `<svg style="transform: rotate(180deg);" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="22"><path d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg>
          <div><span class="change">${h_data[i].l_data.valor_cred}</span></div>`:''}
          </div>


            <div class="item">
            <div class="d">
                <span class="name">Data de reflexo)</span><span class="value">${h_data[i==0?i:i-1].l_data.data_refelexo}</span>
            </div>
            ${i!=0 && h_data[i-1].l_data.data_refelexo != h_data[i].l_data.data_refelexo ? `<svg style="transform: rotate(180deg);" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="22"><path d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg>
          <div><span class="change">${h_data[i].l_data.data_refelexo}</span></div>`:''}
          </div>

          <div class="item">
          <div class="d">
              <span class="name">Natureza</span><span class="value">${document.querySelectorAll('.payment_p.c .input_container select option')[h_data[i==0?i:i-1].l_data.natureza].innerHTML}</span>
          </div>
          ${i!=0 && h_data[i-1].l_data.natureza != h_data[i].l_data.natureza ? `<svg style="transform: rotate(180deg);" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="22"><path d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg>
          <div><span class="change">${document.querySelectorAll('.payment_p.c .input_container select option')[h_data[i].l_data.natureza].innerHTML}</span></div>`:''}
          </div>


          <div class="item">
          <div class="d">
              <span class="name">Descrição</span><span class="value">${h_data[i==0?i:i-1].l_data.descricao}</span>
          </div>
          ${i!=0 && h_data[i-1].l_data.descricao != h_data[i].l_data.descricao ? `<svg style="transform: rotate(180deg);" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="22"><path d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg>
          <div><span class="change">${h_data[i].l_data.descricao}</span></div>`:''}
          </div>



        </div>
    `
 
  }


  setTimeout(()=>{
    document.querySelector(`.pop-ups .history_filter`).classList.add('show')
  },100)

  document.querySelector('.pop-ups .history_filter .l_container').style.transition="2s ease-in"
  setTimeout(()=>{
    document.querySelector('.pop-ups .history_filter .l_container').scrollTo(0,document.querySelectorAll('.pop-ups .history_filter .l_container .box')[h_change - 1].offsetTop - document.querySelector('.pop-ups .history_filter .l_container').offsetTop - 16)
  },500)

}

function add_new_l_f(){
   update_payment_data() 

   let {conta_cred,conta_deb,data_refelexo,descricao,valor_cred,valor_deb,natureza}=payment_data
   if(!check_payment_fields()) return

   let l_id=`${Math.random()}${Math.random()}${Math.random()}${Math.random()}${Math.random()}`

   let l_data={
   id:l_id,
   num:data.backup.lancamentos.length + 1,
   conta_cred:conta_cred.value,
   conta_deb:conta_deb.value,
   data_refelexo:data_refelexo.value,
   descricao:descricao.value,
   valor_cred:parseFloat(valor_cred.value) ? parseFloat(valor_cred.value):0,
   valor_deb:parseFloat(valor_deb.value) ? parseFloat(valor_deb.value):0,
   usuario:'Sandra Almeida',
   data_lancamento:new Date().getFullYear() + "-" + new Date().getDay() + "-" + new Date().getMonth(),
   deb_full_value:parseFloat(valor_deb.value) ? parseFloat(valor_deb.value) +".00MT" : 0 +".00MT",
   cred_full_value:parseFloat(valor_cred.value) ? parseFloat(valor_cred.value) +".00MT" : 0 +".00MT",
   hora:new Date().getHours()+":"+new Date().getMinutes(),
   natureza:natureza.value,
   status:0
  }

  data.lancamentos.unshift(l_data)
  data.backup.lancamentos.unshift({...l_data})

  data.history.unshift({
        user_id:'1',
        num:data.backup.lancamentos.filter(l=>l.id==l_id)[0].num,
        id:Math.random().toString().slice(2,8),
        user:'Gabriela Mateus',
        l_id,
        changes:1,
        change:1,
        type:'add',
        time:new Date().getHours()+":"+new Date().getMinutes(),
        date:new Date().getFullYear() + "-" + new Date().getDay() + "-" + new Date().getMonth(),
        l_data:{...l_data}
  })

  add_history()
  add_activities()
  
  document.querySelector('.pop-ups .payment_p').classList.remove('show')
  add_l()
  update_painel_l()
  add_balanco()
  document.querySelector('.payment .search-container input').value=""
  document.querySelector('.payment .search-container input').classList.remove('show')
  
}

function add_new_user(){
  if(!check_user_fields()) return
  update_payment_data()
  let {name,email,contact,role,password}=user_data 
  current_editing.id=Math.random().toString().slice(2,8)
  current_editing.name=name.value
  current_editing.email=email.value
  current_editing.contact=contact.value
  current_editing.password=password.value
  current_editing.role='----------'//role.value
  data.users.unshift(current_editing)
  add_users()
  document.querySelector('.pop-ups .users').classList.remove('show')
  document.querySelector('[p=users] .search-container input').value=""
  document.querySelector('[p=users] .search-container input').classList.remove('show')
}


function add_new_a(){

  update_payment_data()

  let {name,number}=a_data 
  
  if(!name.value || !number.value){
    document.querySelector('.groups_and_accounts .msg').classList.add('show')
    clearTimeout(payment_error_timeout)
    payment_error_timeout=setTimeout(()=>document.querySelector('.groups_and_accounts .msg').classList.remove('show'),3000)
    return
  }

  current_editing_a[0].name=name.value
  current_editing_a[0].number=number.value

  data.accounts=[...current_editing_a]
  data.groups=[...current_editing_g]


  search_a()
  document.querySelector('.pop-ups .groups_and_accounts').classList.remove('show')

}


function add_new_g(){

  update_payment_data()

  let {name}=g_data 

  if(!name.value){
    document.querySelector('.groups_and_accounts .msg').classList.add('show')
    clearTimeout(payment_error_timeout)
    payment_error_timeout=setTimeout(()=>document.querySelector('.groups_and_accounts .msg').classList.remove('show'),3000)
    return
  }
  
  data.groups=[...current_editing_g]
  data.groups[0].name=name.value



  search_g()
  document.querySelector('.pop-ups .groups_and_accounts').classList.remove('show')

}


function add_new_h(type,l_id,l_data){
        let change=data.history.filter(h=>h.l_id==l_id).length + 1

        for (var i = 0; i < data.history.length; i++) {

               if (data.history[i].l_id==l_id) {

                      data.history[i].changes=change
              }
        }

        
        data.history.unshift({
        user_id:'1',
        num:data.backup.lancamentos.filter(l=>l.id==l_id)[0].num,
        id:Math.random().toString().slice(2,8),
        user:'Gabriela Mateus',
        l_id,
        changes:change,
        change,
        type,
        time:new Date().getHours()+":"+new Date().getMinutes(),
        date:new Date().getFullYear() + "-" + new Date().getDay() + "-" + new Date().getMonth(),
        l_data:{...l_data}
  })

  add_history()
}



function edit_l_f(id,isAcceped){
  if(!check_payment_fields()) return

   const index=data.lancamentos.findIndex(item=>item.id==id)
   
   update_payment_data() 
   let {conta_deb,conta_cred,data_refelexo,descricao,valor_deb,valor_cred,natureza}=payment_data

   let hasChanged=false

   if(data.lancamentos[index].conta_cred != conta_cred.value ||
     data.lancamentos[index].conta_deb != conta_deb.value ||
     data.lancamentos[index].data_refelexo != data_refelexo.value ||
     data.lancamentos[index].descricao != descricao.value ||
     data.lancamentos[index].valor_deb != parseFloat(valor_deb.value) ||
     data.lancamentos[index].valor_cred != parseFloat(valor_cred.value) ||
     data.lancamentos[index].natureza != natureza.value){
         hasChanged=true
    }

    
    
    data.lancamentos[index].conta_cred=conta_cred.value
    data.lancamentos[index].conta_deb=conta_deb.value
    data.lancamentos[index].data_refelexo=data_refelexo.value
    data.lancamentos[index].descricao=descricao.value
    data.lancamentos[index].valor_deb=parseFloat(valor_deb.value)
    data.lancamentos[index].valor_cred=parseFloat(valor_cred.value)
    data.lancamentos[index].deb_full_value=parseFloat(valor_deb.value) ? parseFloat(valor_deb.value) +".00MT" : 0 +".00MT"
    data.lancamentos[index].cred_full_value=parseFloat(valor_cred.value) ? parseFloat(valor_cred.value) +".00MT" : 0 +".00MT"
    data.lancamentos[index].natureza=natureza.value
    if(isAcceped) data.lancamentos[index].status=1
    
    let b_index=data.lancamentos.findIndex(item=>item.id==id)
    data.backup.lancamentos[b_index]={...data.lancamentos[index]}




  if(hasChanged)  add_new_h('edit',id,data.lancamentos.filter(l=>l.id==id)[0])

   search_l(document.querySelector('.payment .search-container input').value)
   update_painel_l()

   add_activities()
   document.querySelector('.pop-ups .payment_p').classList.remove('show')

}

function edit_a(id){
  update_payment_data()
  const {name,number}=a_data
  const i=data.accounts.findIndex(u=>u.id==id)
  data.accounts[i].name=name.value
  data.accounts[i].number=number.value
  data.groups=[...current_editing_g]

  search_a(document.querySelector('[p=accounts_and_groups] ._a .search-container input').value)
  document.querySelector('.pop-ups .groups_and_accounts').classList.remove('show')

}



function edit_g(id){
  update_payment_data()
  const {name}=a_data
  data.groups=[...current_editing_g]
  const i=data.groups.findIndex(u=>u.id==id)
  data.groups[i].name=name.value
  search_g(document.querySelector('[p=accounts_and_groups] ._g .search-container input').value)
  document.querySelector('.pop-ups .groups_and_accounts').classList.remove('show')

}


function edit_user(id){
    update_payment_data()
    const {name,email,role,contact,password}=user_data
    const i=data.users.findIndex(u=>u.id==id)
    data.users[i]=current_editing
    data.users[i].name=name.value
    data.users[i].email=email.value
    data.users[i].contact=contact.value
    data.users[i].password=password.value
    data.users[i].role='----------'//role.value
    search_users(document.querySelector('[p=users] .search-container input').value)
    document.querySelector('.pop-ups .users').classList.remove('show')

}

  


function add_history(new_data){
  
  let h_data=new_data ? new_data : data.history

  if(document.querySelector('.content.history ._table').classList.contains('f')){
    h_data=h_data.filter(u=>u.l_id==document.querySelector('.content.history ._table').getAttribute('l_id')).reverse()
  }

  const h_container=document.querySelector(`.history ._table_container`)

   const title_bar=`
    <div class="item main">
      <div></div>
      <div class="_type"><span>Nº</span></div>
      <div class="_type"><span>Acção</span></div>
      <div class="_role"><span>Alterações</span></div>
      <div class="_email"><span>Hora</span></div>
      <div class="_password"><span>Data</span></div>
      <div class="_contact"><span>Usuário</span></div>
      <div></div>
    </div>
   `

   h_container.innerHTML=title_bar


   for (let i = 0; i < h_data.length; i++) {

    const item=h_data[i]
    
     h_container.innerHTML+=`
     
       <div class="item secondary" _id="${item.id}">
          <div class="bg" onclick="see_history_filter('${item.l_id}','${item.change}')"></div>
          <div class="_filter" onclick="filter_h('${item.l_id}')">
                  <svg class="filter" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="48"><path d="M440-160q-17 0-28.5-11.5T400-200v-240L161-745q-14-17-4-36t31-19h584q21 0 31 19t-4 36L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-276 240-304H240l240 304Zm0 0Z"/></svg>
                  <svg class="filter-outline" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="48"><path d="M440-160q-17 0-28.5-11.5T400-200v-240L161-745q-14-17-4-36t31-19h584q21 0 31 19t-4 36L560-440v240q0 17-11.5 28.5T520-160h-80Z"/></svg>
          </div>
          <div class="_role"><span>${item.num}</span></div>
          <div class="_type"><span style="color:${item.type=='add' ? 'green' : item.type == 'delete' ? 'crimson' : 'orange'}">${item.type=='add' ? 'Added' : item.type == 'delete' ? 'Deleted' : 'Edited'}</span></div>
          <div class="_role"><span>${item.change}/${item.changes}</span></div>
          <div class="_email"><span>${item.time}</span></div>
          <div class="_password"><span>${item.date}</span></div>
          <div class="_contact"><span>${item.user}</span></div>
          <div></div>
     </div>
     `
    
 }



 document.querySelector('.history .item_count span').innerHTML=h_data.length



}

add_history()





function add_groups(new_data){
  
  let g_data=new_data ? new_data : data.groups

  const g_container=document.querySelector(`.admin  div[p="accounts_and_groups"] ._g ._table_container`)

   const title_bar=`
    <div class="item main">
      <div class="select"><input type="checkbox" onclick="check_and_uncheck_groups()"/></div>
      <div class="_id"><span>ID</span></div>
      <div class="_a"><span>Nome</span></div>
      <div></div>
    </div>
   `

   g_container.innerHTML=title_bar


   for (let i = 0; i < g_data.length; i++) {

    const item=g_data[i]
    
     g_container.innerHTML+=`
     
       <div class="item secondary" _id="${item.id}">
          <div class="bg" onclick="g_edit('${item.id}','${item.name}')"></div>
          <div class="select"><input type="checkbox" onclick="check_and_uncheck_groups(this)"/></div>
          <div class="_id"><span>${item.id}</span></div>
          <div class="_a"><span>${item.name}</span></div>
          <div></div>
          <div></div>
     </div>
     `
    
 }



 document.querySelector('.admin  div[p="accounts_and_groups"] ._g .item_count span').innerHTML=g_data.length



}

add_groups()


function add_accounts(new_data){
  
  let a_data=new_data ? new_data : data.accounts

  const a_container=document.querySelector(`.admin  div[p="accounts_and_groups"] ._a ._table_container`)

   const title_bar=`
    <div class="item main">
      <div class="select"><input type="checkbox" onclick="check_and_uncheck_accounts()"/></div>
      <div class="_id"><span>ID</span></div>
      <div class="_a"><span>Nome</span></div>
      <div class="_n"><span>Número</span></div>
      <div></div>
    </div>
   `

   a_container.innerHTML=title_bar


   for (let i = 0; i < a_data.length; i++) {

    const item=a_data[i]
    
     a_container.innerHTML+=`
     
       <div class="item secondary" _id="${item.id}">
          <div class="bg" onclick="a_edit('${item.id}','${item.name}','${item.number}')"></div>
          <div class="select"><input type="checkbox" onclick="check_and_uncheck_accounts(this)"/></div>
          <div class="_id"><span>${item.id}</span></div>
          <div class="_a"><span>${item.name}</span></div>
          <div class="_n"><span>${item.number}</span></div>
          <div></div>
     </div>
     `
    
 }



 document.querySelector('.admin  div[p="accounts_and_groups"] ._a .item_count span').innerHTML=a_data.length



}

add_accounts()


function add_users(new_data){
  
  let user_data=new_data ? new_data : data.users

  const u_container=document.querySelector(`.admin ._bottom > div[p="users"] ._table_container`)

   const title_bar=`
    <div class="item main">
      <div class="select"><input type="checkbox" onclick="check_and_uncheck_users()"/></div>
      <div class="_id"><span>ID</span></div>
      <div class="_user"><span>Nome</span></div>
      <div class="_role"><span>Função</span></div>
      <div class="_email"><span>Email</span></div>
      <div class="_password"><span>Senha</span></div>
      <div class="_contact"><span>Contacto</span></div>
      <div class="_status"><span>Estado</span></div>
      <div></div>
    </div>
   `

   u_container.innerHTML=title_bar


   for (let i = 0; i < user_data.length; i++) {

    const item=user_data[i]
    
     u_container.innerHTML+=`
     
       <div class="item secondary" _id="${item.id}">
          <div class="bg" onclick="admin_edit_user('${item.id}','${item.name}','${item.role}','${item.email}','${item.password}','${item.contact}','${item.active}','${item.account_access}','${item.group_access}','${item.access}')"></div>
          <div class="select"><input type="checkbox" onclick="check_and_uncheck_users(this)"/></div>
          <div class="_id"><span>${user_data[i].id}</span></div>
          <div class="_user"><span>${user_data[i].name}</span></div>
          <div class="_role"><span>${user_data[i].role}</span></div>
          <div class="_email"><span>${user_data[i].email}</span></div>
          <div class="_password"><span>********</span></div>
          <div class="_contact"><span>${user_data[i].contact}</span></div>
          <div class="_status"><span>${user_data[i].active ? 'Activo' : 'Offline'}</span></div>
          <div></div>
     </div>
     `
    
 }



 document.querySelector('[p=users] .item_count span').innerHTML=user_data.length



}

add_users()



function add_activities(new_data){
  
 
  let ac_data=new_data ? new_data : data.lancamentos.filter(l=>l.status==0)
  
  ac_data=ac_data.filter(a=>a.status==document.querySelector('[p=activities] .table_options span.active').getAttribute('o'))
 
  ac_container=document.querySelector(`.admin ._bottom > div[p="activities"] ._table_container`)

   const title_bar=`
    <div class="item main">
      <div class="select"><input type="checkbox" onclick="check_and_uncheck_payment_f()"/></div>
      <div class="_id"><span>Nº</span></div>
      <div class="_name"><span>Conta (Débito)</span></div>
      <div class="_date"><span>Valor</span></div>
      <div class="_name"><span>Conta (Crédito)</span></div>
      <div class="_date"><span>Valor</span></div>
      <div class="_status"><span>Estado</span></div>
      <div class="_desc"><span>Descrição</span></div>
      <div class="_total"><span>D. lançamento</span></div>
      <div class="_time"><span>D. reflexo</span></div>
      <div class="hora"><span>Hora</span></div>
      <div class="_user"><span>Usuário</span></div>
      <div></div>
    </div>
   `

  ac_container.innerHTML=title_bar

  for (let i = 0; i < ac_data.length; i++) {

     const item=ac_data[i]
     
      ac_container.innerHTML+=`
      
        <div class="item secondary" _id="${item.id}">
          <div class="bg" onclick="l_edit('${item.id}','${item.conta_deb}','${item.conta_cred}','${item.valor_deb}','${item.valor_cred}','${item.descricao}','${item.data_refelexo}','${item.natureza}','${item.status}','activities')"></div>
          <div class="select"><input type="checkbox" onclick="check_and_uncheck_payment_f(this)"/></div>
          <div class="conta"><span>${item.num}</span></div>
          <div class="conta"><span>${item.conta_cred}</span></div>
          <div class="valor"><span>${item.deb_full_value}</span></div>
          <div class="conta"><span>${item.conta_deb}</span></div>
          <div class="valor"><span>${item.cred_full_value}</span></div>
          <div class="status ${item.status == 0 ? 'orange': item.status == 1 ? 'green' : 'red'}"><span>${item.status == 0 ? 'Pendente': item.status == 1 ? 'Aprovado' : 'Rejeitado'}</span></div>
          <div class="desc"><span>${item.descricao.length < 13 ? item.descricao: item.descricao.slice(0,13)+"..." }</span></div>
          <div class="d_l"><span>${item.data_lancamento}</span></div>
          <div class="_time"><span>${item.data_refelexo}</span></div>
          <div class="hora"><span>${item.hora}</span></div>
          <div class="_user"><span>${item.usuario}</span></div>
          
          <div></div>
      </div>
      `
     
  }








  //add count
  document.querySelector('[p=activities] .item_count span').innerHTML=ac_data.length
 

  
 

}
add_activities()





function add_l(new_data){
  
  for (let i = 0; i < data.lancamentos.length; i++) {

    const item=data.lancamentos[i]
   
    document.querySelector('.payment_print_preview div.data').innerHTML+=`
        <div><span style="font-weight:600"></span><span>${i+1}</span>:</div>
        <div class="conta"><span style="font-weight:600">Conta Débito: </span><span>${item.conta_deb}</span></div>
        <div class="conta"><span style="font-weight:600">Conta Crédito: </span><span>${item.conta_cred}</span></div>
        <div class="valor"><span style="font-weight:600">Valor Débito: </span><span style="color:rgb(66, 169, 209)">${item.deb_full_value}</span></div>
        <div class="conta"><span style="font-weight:600">Valor Crédito: </span><span style="color:rgb(66, 169, 209)">${item.cred_full_value}</span></div>
        <div class="desc"><span style="font-weight:600">Descrição: </span><span>${item.descricao}</span></div>
        <div class="d_l"><span style="font-weight:600">Data de lançamento: </span><span>${item.data_lancamento}</span></div>
        <div class="_time"><span style="font-weight:600">Data de reflexo: </span><span>${item.data_refelexo}</span></div>
        <div class="hora"><span style="font-weight:600">Hora: </span><span>${item.hora}</span></div>
        <div class="_user"><span style="font-weight:600">Usuário: </span><span>${item.usuario}</span></div>
        <div><span style="font-weight:600">Estado:</span><span>${item.status == 0 ? 'Pedente': item.status == 0 ? 'Aprovado' : 'Rejeitado'}</span></div>
        <div style="color:#ddd">____________________________</div>
    `
   
}

 
  let ldata=new_data ? new_data : data.lancamentos

  const l_container=document.querySelector('.payment ._table_container')

   const title_bar=`
    <div class="item main">
      <div class="select"><input type="checkbox" onclick="check_and_uncheck_payment_f()"/></div>
      <div class="_id"><span>Nº</span></div>
      <div class="_name"><span>Conta (Débito)</span></div>
      <div class="_date"><span>Valor</span></div>
      <div class="_name"><span>Conta (Crédito)</span></div>
      <div class="_date"><span>Valor</span></div>
      <div class="_status"><span>Estado</span></div>
      <div class="_desc"><span>Descrição</span></div>
      <div class="_total"><span>D. lançamento</span></div>
      <div class="_time"><span>D. reflexo</span></div>
      <div class="hora"><span>Hora</span></div>
      <div class="_user"><span>Usuário</span></div>
      <div></div>
    </div>
   `

   l_container.innerHTML=title_bar

  for (let i = 0; i < ldata.length; i++) {

     const item=ldata[i]
     
      l_container.innerHTML+=`
      
        <div class="item secondary" _id="${item.id}">
          <div class="bg" onclick="l_edit('${item.id}','${item.conta_deb}','${item.conta_cred}','${item.valor_deb}','${item.valor_cred}','${item.descricao}','${item.data_refelexo}','${item.natureza}','${item.status}')"></div>
          <div class="select"><input type="checkbox" onclick="check_and_uncheck_payment_f(this)"/></div>
          <div class="conta"><span>${item.num}</span></div>
          <div class="conta"><span>${item.conta_cred}</span></div>
          <div class="valor"><span>${item.deb_full_value}</span></div>
          <div class="conta"><span>${item.conta_deb}</span></div>
          <div class="valor"><span>${item.cred_full_value}</span></div>
          <div class="status ${item.status == 0 ? 'orange': item.status == 1 ? 'green' : 'red'}"><span>${item.status == 0 ? 'Pendente': item.status == 1 ? 'Aprovado' : 'Rejeitado'}</span></div>
          <div class="desc"><span>${item.descricao.length < 13 ? item.descricao: item.descricao.slice(0,13)+"..." }</span></div>
          <div class="d_l"><span>${item.data_lancamento}</span></div>
          <div class="_time"><span>${item.data_refelexo}</span></div>
          <div class="hora"><span>${item.hora}</span></div>
          <div class="_user"><span>${item.usuario}</span></div>
          
          <div></div>
      </div>
      `
     
  }








  //add count
  document.querySelector('.payment .item_count span').innerHTML=ldata.length
 

  
add_activities()

}
add_l()
update_painel_l()



function add_balanco(new_data){




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
          l_total+=ldata[i].valor_cred+ldata[i].valor_deb
        }
        document.querySelector('.payment .total').innerHTML=l_total+".00MT"
        document.querySelector('.payment_print_preview .total').innerHTML=l_total+".00MT"
        document.querySelector('.payment_print_preview .t_n').innerHTML=data.lancamentos.length

       


        //add debit
        let l_debit=0
        for (let i = 0; i < ldata.length; i++) {
           l_debit+=ldata[i].valor_deb
        }
        document.querySelector('.payment .debito').innerHTML=l_debit+".00MT"
        document.querySelector('.payment_print_preview .d_t').innerHTML=l_debit+".00MT"



        //add credit
        let l_credit=0
        for (let i = 0; i < ldata.length; i++) {
          l_credit+=ldata[i].valor_cred
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


function l_edit(id,conta_deb,conta_cred,valor_deb,valor_cred,descricao,data_refelexo,natureza,status,isFromActivities){

   if(isFromActivities){
      document.querySelector('.pop-ups .payment_p').classList.add('act')
      document.querySelector(`.pop-ups .payment_p .edit`).setAttribute('onclick',`edit_l_f('${id}','accepted')`)
      document.querySelector(`.pop-ups .payment_p .accept`).setAttribute('onclick',`activites_action('accept','${id}')`)
      document.querySelector(`.pop-ups .payment_p .reject`).setAttribute('onclick',`activites_action('reject','${id}')`)
   }else{
      document.querySelector('.pop-ups .payment_p').classList.remove('act')
   }  

   show_popup_f('edit-payment',{id,conta_deb,valor_cred,valor_deb,conta_cred,descricao,data_refelexo,natureza,status})
  
}

function admin_edit_user(id,name,role,email,password,contact,active,account_access,group_access,access){

  show_popup_f('edit-user',{id,name,role,password,email,contact,active,account_access,group_access,access})
 
}

function a_edit(id,name,number){

  show_popup_f('edit-a',{id,name,number})
 
}

function g_edit(id,name){

  show_popup_f('edit-g',{id,name})
 
}


function activites_action(action,id){
  const index=data.lancamentos.findIndex(l=>l.id==id)
   if(action=="accept"){
        data.lancamentos[index].status=1
   }else{
        data.lancamentos[index].status=2
   }

   add_activities()
   add_l()

   document.querySelector(`.pop-ups .payment_p`).classList.remove('show')
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



function get_trans_text(element){
    for (let i = 0; i < element.getAttribute('langs').split(',').length; i++) {
        
      if(element.getAttribute('langs').split(',')[i].split(':')[0]==settings.lang){
           return element.getAttribute('langs').split(',')[i].split(':')[1]
      }
      
    }
}




function show_popup_f(element,e){
 
    let title=document.querySelector(`.pop-ups .payment_p .title`)
    if(element == "edit-payment"){
      
      const {id} = e

      console.log(e)

      document.querySelectorAll('.pop-ups .payment_p [name]').forEach(element=>{
         element.value=e[element.name]
         
      })
  

      
      title.innerHTML=get_trans_text(title)
      document.querySelector(`.pop-ups .payment_p .save`).setAttribute('onclick',`edit_l_f('${id}')`)
      document.querySelector(`.pop-ups .payment_p`).classList.add('edit-mode')
      document.querySelector(`.pop-ups .payment_p .delete-btn`).setAttribute('onclick',`delete_single_l('${id}')`)

      if(e.status==2){
        document.querySelector(`.pop-ups .payment_p`).classList.add('not-editable')   
      }else{
        document.querySelector(`.pop-ups .payment_p`).classList.remove('not-editable')
      }


      setTimeout(()=>{
        document.querySelector(`.pop-ups .payment_p`).classList.add('show')
      },100)
      

      
   }else if(element == "add-payment"){ 
      document.querySelector(`.pop-ups .payment_p`).classList.remove('not-editable')
      document.querySelector('.pop-ups .payment_p').classList.remove('act')
      document.querySelectorAll('.pop-ups .payment_p [name]').forEach(e=>e.value="")
      title.innerHTML="Novo lançamento"
      document.querySelector(`.pop-ups .payment_p .save`).setAttribute('onclick','add_new_l_f()')
      document.querySelector(`.pop-ups .payment_p`).classList.remove('edit-mode')
       
      check_user_chosen_a_validation('all')

      setTimeout(()=>{
        document.querySelector(`.pop-ups .payment_p`).classList.add('show')
       },100)

   }else if(element == "add-user"){ 
     document.querySelectorAll('.pop-ups .users [name]').forEach(e=>e.value="")
     let title=document.querySelector(`.pop-ups .users .title`)
     document.querySelector('.pop-ups .users [name=id]').parentElement.style.display="none"
     title.innerHTML=get_trans_text(title)
     setTimeout(()=>{
      document.querySelector(`.pop-ups .users`).classList.add('show')
     },100)
     document.querySelector(`.pop-ups .users .save`).setAttribute('onclick',`add_new_user()`)

     document.querySelectorAll('.pop-ups .users  .account-div .list input').forEach(e=>e.checked=false)
     document.querySelectorAll('.pop-ups .users  .group-div .list input').forEach(e=>e.checked=false)

     const id=Math.random()

     current_editing={
      id,
      name:'',
      email:'',
      password:'',
      contact:'',
      active:false,
      role:'',
      account_access:[],
      group_access:[],
      access:[]
     }


     //add group
     if (!data.groups.length) {
        document.querySelector('.pop-ups .users  .group-div .list').innerHTML=`<span class="empty">(Nenhum grupo disponível)</span>`
     }else{
        document.querySelector('.pop-ups .users  .group-div .list').innerHTML=``
     }
     
     
     for (let i = 0; i < data.groups.length; i++) {
      let label_id=Math.random()
       const item=data.groups[i]
       document.querySelector('.pop-ups .users .group-div .list').innerHTML+=`
         <div class="account_option">
           <input id="${label_id}" type="checkbox" _id="${item.id}"  onclick="check_and_uncheck_user_access(this,'${item.id}','${id}','group')"/>
           <label for="${label_id}">
            <div>
                <span class="name">${item.name}</span>
            </div>
           </label>
         </div>
       `
       
     }


     //add accounts

     if (!data.accounts.length) {
       document.querySelector('.pop-ups .users  .account-div .list').innerHTML=`<span class="empty">(Nenhuma conta disponível)</span>`
     }else{
       document.querySelector('.pop-ups .users  .account-div .list').innerHTML=``
     }

     for (let i = 0; i < data.accounts.length; i++) {
   
       const item=data.accounts[i]
       let label_id=Math.random()
       document.querySelector('.pop-ups .users .account-div .list').innerHTML+=`
         <div class="account_option">
             <input id="${label_id}" type="checkbox" _id="${item.id}" onclick="check_and_uncheck_user_access(this,'${item.id}','${id}','account')"/>
             <label for="${label_id}">
             <div>
                 <span class="name">${item.name}</span>
                 <span class="account">${item.number}</span>
             </div>
             </label>
         </div>
       `
       
     }

   }else if(element=="edit-user"){
      document.querySelector('.pop-ups .users [name=id]').parentElement.style.display="flex"
      const {id,name,role,contact,email,password,group_access,account_access,access} = e
      current_editing=data.users.filter(u=>u.id==id)[0]
      document.querySelector('.pop-ups .users input[name=id').value=id
      document.querySelector('.pop-ups .users input[name=name]').value=name
      document.querySelector('.pop-ups .users input[name=email]').value=email
      document.querySelector('.pop-ups .users input[name=password]').value=password
      document.querySelector('.pop-ups .users input[name=contact]').value=contact
      document.querySelector('.pop-ups .users select[name=role]').value=role
      document.querySelector(`.pop-ups .users .save`).setAttribute('onclick',`edit_user('${id}')`)


      document.querySelector('.pop-ups .users input[name=s_groups]').value=""
      document.querySelector('.pop-ups .users input[name=s_accounts]').value=""
      document.querySelector(`.pop-ups .users input[name=password]`).type="password"
      document.querySelector(`.pop-ups .users .toggle_show_passowd`).classList.remove('show')


      //add group
      if (!data.groups.length) {
         document.querySelector('.pop-ups .users  .group-div .list').innerHTML=`<span class="empty">(Nenhum grupo disponível)</span>`
      }else{
         document.querySelector('.pop-ups .users  .group-div .list').innerHTML=``
      }
      for (let i = 0; i < data.groups.length; i++) {
        let label_id=Math.random()
        const item=data.groups[i]
        let g_access=group_access.split(',')
        document.querySelector('.pop-ups .users .group-div .list').innerHTML+=`
          <div class="account_option">
            <input id="${label_id}" type="checkbox" ${g_access.includes(item.id) ? 'checked':''} _id="${item.id}"  onclick="check_and_uncheck_user_access(this,'${item.id}','${id}','group')"/>
            <label for="${label_id}">
            <div>
                <span class="name">${item.name}</span>
            </div>
            </label>
          </div>
        `
        
      }


      //add accounts
      if (!data.accounts.length) {
         document.querySelector('.pop-ups .users  .account-div .list').innerHTML=`<span class="empty">(Nenhuma conta disponível)</span>`
      }else{
         document.querySelector('.pop-ups .users  .account-div .list').innerHTML=``
      }
      for (let i = 0; i < data.accounts.length; i++) {
    
        const item=data.accounts[i]
        let a_access=account_access.split(',')
        let label_id=Math.random()
        document.querySelector('.pop-ups .users .account-div .list').innerHTML+=`
          <div class="account_option">
              <input id="${label_id}" type="checkbox" _id="${item.id}" ${a_access.includes(item.id) ? 'checked':''} onclick="check_and_uncheck_user_access(this,'${item.id}','${id}','account')"/>
              <label for="${label_id}">
                <div>
                    <span class="name">${item.name}</span>
                    <span class="account">${item.number}</span>
                </div>
              </label>
          </div>
        `
        
      }


      setTimeout(()=>{
        document.querySelector(`.pop-ups .users`).classList.add('show')
      },100)


   }else if(element=="edit-a"){
       document.querySelector(`.pop-ups .title`).innerHTML=settings.lang=="pt"?"Editar conta":"Edit account"

       document.querySelectorAll('.pop-ups .groups_and_accounts [name]').forEach(element=>{
        element.value=e[element.name]
      })

      document.querySelector(`.pop-ups .groups_and_accounts .save`).setAttribute('onclick',`edit_a('${e.id}')`)
      document.querySelector(`.pop-ups .groups_and_accounts`).classList.add('edit-mode')
      document.querySelector(`.pop-ups .groups_and_accounts .delete-btn`).setAttribute('onclick',`delete_single_a('${e.id}')`)

      document.querySelector(`.pop-ups .groups_and_accounts input.s_g`).setAttribute('oninput',`s_g(this.value,'${e.id}')`)
      
      document.querySelector(`.pop-ups .groups_and_accounts input.s_g`).value=""

      document.querySelector('.pop-ups .groups_and_accounts  .account-div').style.display="none"
      document.querySelector('.pop-ups .groups_and_accounts  .group-div').style.display="flex"
      document.querySelector('.pop-ups .groups_and_accounts .div_number').style.display="flex"


     
      current_editing_a=[...data.accounts]
      current_editing_g=[...data.groups]

      //add group
      if (!data.groups.length) {
      document.querySelector('.pop-ups .groups_and_accounts  .group-div .list').innerHTML=`<span class="empty">(Nenhum grupo disponível)</span>`
      }else{
        document.querySelector('.pop-ups .groups_and_accounts  .group-div .list').innerHTML=``
      }

      for (let i = 0; i < current_editing_g.length; i++) {
        const item=current_editing_g[i]
        let label_id=Math.random()
        
        document.querySelector('.pop-ups .groups_and_accounts .group-div .list').innerHTML+=`
          <div class="account_option">
            <input id="${label_id}" type="checkbox"  _id="${item.id}" ${item.to.includes(e.id) ? 'checked':''}  onclick="check_and_uncheck_g_access(this,'${item.id}','${e.id}')"/>
            <label for="${label_id}">
              <div>
                  <span class="name">${item.name}</span>
              </div>
            </label>
          </div>
        `
      }

      setTimeout(()=>{
        document.querySelector(`.pop-ups .groups_and_accounts`).classList.add('show')
      },100)
   }else if(element=="add-a"){
        document.querySelectorAll('.pop-ups .groups_and_accounts [name]').forEach(e=>e.value="")
        document.querySelector(`.pop-ups .title`).innerHTML=settings.lang=="pt"?"Adicionar conta":"Add account"

        document.querySelector(`.pop-ups .groups_and_accounts .save`).setAttribute('onclick',`add_new_a()`)
        document.querySelector(`.pop-ups .groups_and_accounts`).classList.remove('edit-mode')

        document.querySelector(`.pop-ups .groups_and_accounts input.s_g`).value=""

        document.querySelector('.pop-ups .groups_and_accounts  .account-div').style.display="none"
        document.querySelector('.pop-ups .groups_and_accounts  .group-div').style.display="flex"
        document.querySelector('.pop-ups .groups_and_accounts .div_number').style.display="flex"
        
        const id=Math.random().toString().slice(2,8)
        current_editing_a=[...data.accounts]
        current_editing_a.unshift({
            id,
            name:'',
            number:''
        })

        current_editing_g=[...data.groups]

        //add group
         if (!data.groups.length) {
           document.querySelector('.pop-ups .groups_and_accounts  .group-div .list').innerHTML=`<span class="empty">(Nenhum grupo disponível)</span>`
        }else{
          document.querySelector('.pop-ups .groups_and_accounts  .group-div .list').innerHTML=``
        }
        for (let i = 0; i < current_editing_g.length; i++) {
          const item=current_editing_g[i]
          let label_id=Math.random()
          document.querySelector('.pop-ups .groups_and_accounts .group-div .list').innerHTML+=`
            <div class="account_option">
              <input id="${label_id}" type="checkbox"  _id="${item.id}"  onclick="check_and_uncheck_g_access(this,'${item.id}','${id}')"/>
              <label for="${label_id}">
                <div>
                    <span class="name">${item.name}</span>
                </div>
              </label>
            </div>
          `
        }

        setTimeout(()=>{
          document.querySelector(`.pop-ups .groups_and_accounts`).classList.add('show')
        },100)


}else if(element=="edit-g"){
  document.querySelector(`.pop-ups .title`).innerHTML=settings.lang=="pt"?"Editar grupo":"Edit group"

  document.querySelectorAll('.pop-ups .groups_and_accounts [name]').forEach(element=>{
   element.value=e[element.name]
 })

 document.querySelector(`.pop-ups .groups_and_accounts .save`).setAttribute('onclick',`edit_g('${e.id}')`)
 document.querySelector(`.pop-ups .groups_and_accounts`).classList.add('edit-mode')
 document.querySelector(`.pop-ups .groups_and_accounts .delete-btn`).setAttribute('onclick',`delete_single_g('${e.id}')`)

 document.querySelector(`.pop-ups .groups_and_accounts input.s_a`).setAttribute('oninput',`s_a(this.value,'${e.id}')`)
 
 document.querySelector(`.pop-ups .groups_and_accounts input.s_a`).value=""

 document.querySelector('.pop-ups .groups_and_accounts  .account-div').style.display="flex"
 document.querySelector('.pop-ups .groups_and_accounts  .group-div').style.display="none"
 document.querySelector('.pop-ups .groups_and_accounts .div_number').style.display="none"

 current_editing_a=[...data.accounts]
 current_editing_g=[...data.groups]

 //add group
 if (!data.accounts.length) {
   document.querySelector('.pop-ups .groups_and_accounts  .account-div .list').innerHTML=`<span class="empty">(Nenhuma conta disponível)</span>`
 }else{
    document.querySelector('.pop-ups .groups_and_accounts  .account-div .list').innerHTML=``
 }

 for (let i = 0; i < current_editing_a.length; i++) {
   const item=current_editing_a[i]
   const g_access=current_editing_g.filter(g=>g.id==e.id)[0].to
   let label_id=Math.random()
   
   document.querySelector('.pop-ups .groups_and_accounts .account-div .list').innerHTML+=`
     <div class="account_option">
       <input id="${label_id}" type="checkbox"  _id="${item.id}" ${g_access.includes(item.id) ? 'checked':''}  onclick="check_and_uncheck_a_access(this,'${item.id}','${e.id}')"/>
       <label for="${label_id}">
       <div>
            <span class="name">${item.name}</span>
            <span class="account">${item.number}</span>
       </div>
       </label>
     </div>
   `
 }

 document.querySelector('.pop-ups .groups_and_accounts  .account-div').style.display="flex"
 document.querySelector('.pop-ups .groups_and_accounts  .group-div').style.display="none"
 document.querySelector('.pop-ups .groups_and_accounts .div_number').style.display="none"

 setTimeout(()=>{
   document.querySelector(`.pop-ups .groups_and_accounts`).classList.add('show')
 },100)


}else if(element=="add-g"){
  document.querySelectorAll('.pop-ups .groups_and_accounts [name]').forEach(e=>e.value="")
  document.querySelector(`.pop-ups .title`).innerHTML=settings.lang=="pt"?"Adicionar grupo":"Add group"

  document.querySelector(`.pop-ups .groups_and_accounts .save`).setAttribute('onclick',`add_new_g()`)
  document.querySelector(`.pop-ups .groups_and_accounts`).classList.remove('edit-mode')

  document.querySelector(`.pop-ups .groups_and_accounts input.s_a`).value=""

    
   current_editing_a=[...data.accounts]
   current_editing_g=[...data.groups]

   const id=Math.random().toString().slice(2,8)
   current_editing_g.unshift({
        id,
        name:'',
        to:[]
   })

   document.querySelector(`.pop-ups .groups_and_accounts input.s_a`).setAttribute('oninput',`s_a(this.value,'${id}')`)

  //add accounts

 if (!data.accounts.length) {
    document.querySelector('.pop-ups .groups_and_accounts  .account-div .list').innerHTML=`<span class="empty">(Nenhuma conta disponível)</span>`
 }else{
       document.querySelector('.pop-ups .groups_and_accounts  .account-div .list').innerHTML=``
 }
 for (let i = 0; i < current_editing_a.length; i++) {
   const item=current_editing_a[i]
   let label_id=Math.random()
   
   document.querySelector('.pop-ups .groups_and_accounts .account-div .list').innerHTML+=`
     <div class="account_option">
       <input id="${label_id}" type="checkbox"  _id="${item.id}"  onclick="check_and_uncheck_a_access(this,'${item.id}','${id}')"/>
       <label for="${label_id}">
       <div>
            <span class="name">${item.name}</span>
            <span class="account">${item.number}</span>
       </div>
       </label>

     </div>
   `
 }

  document.querySelector('.pop-ups .groups_and_accounts  .account-div').style.display="flex"
  document.querySelector('.pop-ups .groups_and_accounts  .group-div').style.display="none"
  document.querySelector('.pop-ups .groups_and_accounts .div_number').style.display="none"

  setTimeout(()=>{
    document.querySelector(`.pop-ups .groups_and_accounts`).classList.add('show')
  },100)
}else if(element=="add-h"){


}


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
      table_section_ajustment()
  },300)

  document.querySelector('.payment ._bottom').scrollLeft=0
}




function table_section_ajustment(){
  if(document.querySelector('.payment ._bottom').clientWidth > 1024){
    document.querySelector('.payment ._bottom .options').classList.remove('float')
  }else{
    document.querySelector('.payment ._bottom .options').classList.add('float')
  }

  if(document.querySelector('.history ._bottom').clientWidth > 1024){
    document.querySelector('.history ._bottom .options').classList.remove('float')
  }else{
    document.querySelector('.history ._bottom .options').classList.add('float')
  }

  if(document.querySelector('.admin').clientWidth > 1024){
    document.querySelectorAll('admin .options').forEach(e=>{
      e.classList.remove('float')
    })
  }else{
    document.querySelectorAll('admin .options').forEach(e=>{
      e.classList.add('float')
    })
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

  let history_scroll_left=document.querySelector('.history ._bottom').scrollLeft
  document.querySelector('.history ._bottom .options').style.right=-history_scroll_left+"px"

  let admin_scroll_left=document.querySelector('.admin ._bottom').scrollLeft
  document.querySelectorAll('.admin ._table_c .options').forEach(e=>{
    e.style.right=-admin_scroll_left+"px"
  })

  let balance_scroll_left=document.querySelector('.balance ._center').scrollLeft
  document.querySelectorAll('.balance ._table_c .options').forEach(e=>{
    e.style.right=-balance_scroll_left+"px"
  })


}


payment_scroll=document.querySelector('.payment ._bottom').addEventListener('scroll',()=>{
  let payment_scroll_left=document.querySelector('.payment ._bottom').scrollLeft
  document.querySelector('.payment ._bottom .options').style.right=-payment_scroll_left+"px"
})

admin_scroll=document.querySelector('.admin ._bottom').addEventListener('scroll',()=>{
    let admin_scroll_left=document.querySelector('.admin ._bottom').scrollLeft
    document.querySelectorAll('.admin ._table_c .options').forEach(e=>{
      e.style.right=-admin_scroll_left+"px"
    })
})

history_scroll=document.querySelector('.history ._bottom').addEventListener('scroll',()=>{
  let history_scroll_left=document.querySelector('.history ._bottom').scrollLeft
  document.querySelector('.history ._bottom .options').style.right=-history_scroll_left+"px"
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

document.querySelectorAll('.search-container input').forEach(e=>{
  e.addEventListener('blur',()=>{
    if(!e.value){
        e.classList.remove('show')
    }
  })
})

document.querySelectorAll('.close_input_bg').forEach(e=>{
   e.addEventListener('click',()=>{
      document.querySelectorAll('.search-container input').forEach(f=>{
        f.classList.remove('show')
        setTimeout(()=>f.value="",200)
      })
      
      add_l()
      add_users()
      add_history()
      add_accounts()
      add_groups()
   })
})






function init(){
   window.onresize=()=>{
      table_section_ajustment()
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
     table_section_ajustment()
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
  document.querySelector('.pop-ups .chose-download-file-format').classList.remove('show')
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



let xlsx_content=Array(data.lancamentos.length + 2)
function download_l_file(file_type){

          document.querySelector('.pop-ups .chose-download-file-format').classList.remove('show')

         xlsx_content[1]=[
          'Nº',
          'Conta crédito',
          'Conta débito',
          'Valor crédito',
          'Valor débito',
          'Data de lançamento',
          'Data de reflexo',
          'Descrição',
          'Hora',
          'Natureza de movimento',
          'Usuário',
          'Estado'
        ]

        xlsx_content[0]=[
          'Total: '+data.lancamentos.length,
          'Data: '+new Date().getFullYear() + "-" + new Date().getDay() + "-" + new Date().getMonth(),
          'Hora: '+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds(),
          'ID: '+Math.random().toString().slice(2,8),
        ]
    
    for (let i = 0; i < data.lancamentos.length; i++) {
         let row=[]
         row.push(data.lancamentos[i]['num'])
         row.push(data.lancamentos[i]['conta_cred'])
         row.push(data.lancamentos[i]['conta_deb'])
         row.push(data.lancamentos[i]['cred_full_value'])
         row.push(data.lancamentos[i]['deb_full_value'])
         row.push(data.lancamentos[i]['data_lancamento'])
         row.push(data.lancamentos[i]['data_refelexo'])
         row.push(data.lancamentos[i]['descricao'])
         row.push(data.lancamentos[i]['hora'])
         row.push(data.lancamentos[i]['natureza'])
         row.push(data.lancamentos[i]['usuario'])
         row.push(data.lancamentos[i]['status']== 0 ? 'Pendente' : data.lancamentos[i]['status']== 1 ? 'Aprovado' : 'Rejeitado')
         xlsx_content[i + 2]=row
      
    }



    fetch('https://ill-rose-piglet-fez.cyclic.app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(xlsx_content)
      })
      .then(response => response.json())
      .then(responseData => {
           window.location.href='https://ill-rose-piglet-fez.cyclic.app/'+responseData
      })
      .catch(error => {
        console.log(error);
      });
    

}









const fromCurrency = 'USD'; // Currency to convert from
const toCurrency = 'MZN'; // Currency to convert to

// Construct the URL for the currency conversion
const apiUrl = `https://www.google.com/search?q=${fromCurrency}+to+${toCurrency}`;

// Make a request to fetch the HTML of the currency conversion page
const f_c=fetch(apiUrl)
  .then(response => response.text())
  .then(data => {
  /*  // Parse the HTML response to extract the exchange rate
    const regex = /<span class="DFlfde SwHCTb"[^>]*>([^<]+)<\/span>/;
    const match = data.match(regex);

    if (match && match.length > 1) {
      const exchangeRate = match[1];
      console.log(`1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`);
    } else {
      console.log('Failed to fetch exchange rate');
    }*/

    console.log(data)
  })
  .catch(error => {
    console.error('Error fetching exchange rate:', error);
 });





 //settings

 function set_f(o){

   if(o=="switch-night-mode"){
        document.querySelector('.settings .option.night-mode .switch').classList.toggle('active')
        document.querySelector('.container').classList.toggle('dark-theme')
        
   }else if(o=="change-lang"){
        const lang=document.querySelector('.settings .option.lang select').value
        
        document.querySelectorAll('[langs]').forEach(e=>{
           e.getAttribute('langs').split(',').forEach(l=>{
               if(l.split(':')[0]==lang) e.innerHTML = l.split(':')[1]
           })
        })

       
   }else if(o=="switch-access"){
      document.querySelector('[p=settings] .option.access .switch').classList.toggle('active')
   }

   save_settings()

 }


 document.querySelectorAll('.admin .menu span').forEach(e=>{
    e.addEventListener('click',()=>{
      document.querySelector('.admin ._bottom').scrollLeft=0
     
      if(e.getAttribute('p')=="accounts_and_groups"){
        document.querySelector('.admin ._table_c').style.overflow="hidden"
      }else{
        document.querySelector('.admin ._table_c').style.overflow="auto"
      }

      document.querySelectorAll('.admin .menu span').forEach(f=>f.classList.remove('active'))
      e.classList.add('active')
      document.querySelectorAll('.admin ._bottom > div').forEach(f=>f.style.display="none")
      document.querySelector(`.admin ._bottom > [p='${e.getAttribute('p')}']`).style.display="block"

      
    })
 })








let account_options_div=document.querySelector('.payment_p .div_input .option-div')
let payment_account_1=document.querySelector('.payment_p .div_input input[name=conta_deb]')
let payment_accounts=document.querySelectorAll('.payment_p .div_input input.account')


payment_accounts.forEach(e=>{
   e.addEventListener('focus',()=>{
        e.nextElementSibling.classList.add('show')
        filter_payment_a(e.nextElementSibling,e.value)
   })
})



function check_user_chosen_a_validation(name,only_if_is_valid){

  if (name="all") {
        
          document.querySelectorAll(`.payment_p .div_input input.account`).forEach(e=>{
                if(!data.accounts.filter(a=>a.number==e.value).length && e.value){
                  if (!only_if_is_valid)  e.classList.add('invalid')
                }else{
                  e.classList.remove('invalid')
                }
          })

  }else{
   
       document.querySelectorAll(`.payment_p .div_input input[name=${name}]`).forEach(e=>{
                if(!data.accounts.filter(a=>a.number==e.value).length && e.value){
                  if (!only_if_is_valid)  e.classList.add('invalid')
                }else{
                  e.classList.remove('invalid')
                }
      })

  }

 
} 



payment_accounts.forEach(e=>{
   e.addEventListener('blur',()=>{
        setTimeout(()=>e.nextElementSibling.classList.remove('show'),300)
        check_user_chosen_a_validation()
  })
})

function filter_payment_a(e,input){
       const user=data.users.filter(u=>u.id=="1")[0]
       let a_access=[]
       for (let i = 0; i < user.group_access.length; i++) {
          let group=data.groups.filter(g=>g.id==user.group_access[i])[0]
          for (let f = 0; f < data.accounts.length; f++) {
            if(group.to.includes(data.accounts[f].id) && !a_access.includes(data.accounts[f].id)) {
                 a_access.push(data.accounts[f].id)
            }
          }    
       }

      

       let accounts=data.accounts.filter(a=>user.account_access.includes(a.id))

       for (let f = 0; f < a_access.length; f++) {
           if(!accounts.filter(a=>a.id==a_access[f]).length) {
               accounts.push(data.accounts.filter(a=>a.id==a_access[f])[0])
           }
       }
       
       const filter=accounts.filter(a=>a.name.toLowerCase().toLowerCase().includes(input)  || a.number.toLowerCase().toLowerCase().includes(input))
       e.innerHTML=""
       if(!filter.length) e.innerHTML+=`<span class="no_result">Nenhum resultado encontrado</span>`

       acccount_filter=filter

       for (let i = 0; i < filter.length; i++) {
           e.innerHTML+=`<span onclick="user_chose_account('${e.previousElementSibling.name}','${filter[i].number}')">${filter[i].number} (${filter[i].name})</span>`
       }

       check_user_chosen_a_validation(`${e.previousElementSibling.name}`,'only-if-is-valid')

       
}

function user_chose_account(name,num){
   let input=document.querySelector(`.payment_p .div_input input[name=${name}]`)
   input.nextElementSibling.classList.remove('show')
   input.value=num
   check_user_chosen_a_validation(name)
}



function change_company_logo(input){
  const f=input.files[0]
  const reader=new FileReader()
  reader.addEventListener('load',()=>{
     document.querySelector('.company-details img').src=reader.result
  })
  reader.readAsDataURL(f)

  console.log(input.files)
}


function open_tech_info(){
    document.querySelector('.notification_content.support').classList.remove('show')
    setTimeout(()=>document.querySelector('.pop-ups .tech-info').classList.add('show'),100)
}



function Clipboard(text){
  let clipboard=document.querySelector('#copy-to-clipboard')
  clipboard.value=text
  clipboard.select()
  document.execCommand('copy')
}

function copyTechInfo(text){
  Clipboard(text)
  setTimeout(()=>document.querySelector('.pop-ups .tech-info').classList.remove('show'),100)
}

