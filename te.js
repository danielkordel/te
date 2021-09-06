let newTodo, acceptBtn, editElem;

const prepareElements = () => {
  input = document.createElement('input');
  ulList = document.createElement('ul');
  msg = document.createElement('p');
  document.body.append(input,msg,ulList);
  lis = document.querySelectorAll('li');
}

const prepareEvents = () => {
  input.addEventListener('keydown',enter);
  ulList.addEventListener('click',checker);
  msg.textContent = 'Input details and hit Enter';
}

const enter = e => {
  if (e.key === 'Enter'){
    if (ulList.style.display === "none"){
      editElem.textContent = input.value;
      ulList.style.display = 'block';
      input.value = '';
    } else {    
      add();
    }
  }
}

const msgCheck = () => {
  if (ulList.firstChild){
    msg.textContent = '';
  } else if (!ulList.firstChild){
    msg.textContent = 'Input details and hit Enter';
  }
}

const add = () => {
  if (input.value != ''){
    newTodo = document.createElement('li');
    newTodo.textContent = input.value;
    tools();
    ulList.append(newTodo);
    input.value = '';
    msgCheck();
  }
}

const tools = () => {
  toolbar = document.createElement('div');
  toolbar.style.display = 'inline';
  edit = document.createElement('button');
  edit.classList.add('edit');
  edit.textContent = 'Edit';
  edit.style.marginLeft = 10;
  rem = document.createElement('button');
  rem.classList.add('rem');
  rem.textContent = 'Remove';
  rem.style.marginLeft = 10;
  toolbar.append(edit,rem);
  newTodo.append(toolbar);
}

const main = () => {
  prepareElements();
  prepareEvents();
}

const checker = e => {
if (e.target.matches('.rem')){
  e.target.closest('li').remove();
  msgCheck();
} else if (e.target.matches('.edit')){
  ulList.style.display = "none";
  editElem = e.target.closest('li').firstChild;
  input.value = editElem.textContent; 
  input.focus();
  msg.textContent = 'Input changes and hit Enter';
}
}

window.addEventListener('DOMContentLoaded',main);