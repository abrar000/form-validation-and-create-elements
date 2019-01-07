//create Element

const li = document.createElement('li');

li.className = 'collection-item'
li.id = 'collection-item';
li.setAttribute('title','New item');
li.appendChild(document.createTextNode('hello gilgit baltistan'));
document.querySelector('ul.collection').appendChild(li);

console.log(li);

let ul = document.querySelector('ul');
ul.style.listStyleType ="none";
ul.style.textAlign ="center";
const list = document.querySelectorAll('li');
list[0].style.color = 'green'
list[0].style.fontWeight = 'bold'
list[1].style.color = 'green'
list[1].style.fontWeight = 'bold'
list[2].style.color = 'green'
list[2].style.fontWeight = 'bold'
list[3].style.color = 'brown'
list[3].style.fontWeight = 'bold'
console.log(list);

// remove Element

// const lists = document.querySelectorAll('li');
// lists[0].remove();
// console.log(lists);

// Classes 
const lis = document.querySelector('ul');
// let a;
a = lis.className;

//Attributes

abr = document.querySelector('ul');
aaa =abr.setAttribute('title', 'collection of items');
aaa =abr.hasAttribute('title', 'collections of items');
console.log(aaa);


// form validation

function validate(){
  var username=document.forms["register"]["uname"].value;
  var key1=document.forms["register"]["pass1"].value;
  var key2=document.forms["register"]["pass2"].value;

  if (username=="" || username.length<4){
    alert('name must be more than four characters');
    return false;
  }
  if (key1=="" || key1.length<4){
    alert('Password must be more than four characters');
    return false;
  }
  if (key2=="" || key2.length<4){
    alert('warning..!! confirm password should not be empty');
    return false;
  }
  if (key1 != key2){
    alert('Password Doesnot Match');
    return false;
  }
  else{
    alert('Form Submit Successfully.!!');
  }
}

let form = document.getElementById('val-form');
form.style.textAlign ='center';
form.style.border='2px solid'

let user = document.getElementById('user');
user.style.fontWeight='bold'
user.style.color='blue'

let pass = document.getElementById('password1');
pass.style.fontWeight='bold'
pass.style.color='brown'

let cnfrmpass= document.getElementById('password2');
cnfrmpass.style.fontWeight='bold'
cnfrmpass.style.color='grey'

let btn = document.getElementsByTagName('input');
 btn[3].setAttribute('id', 'Submit-button');
 btn[3].hasAttribute('id', 'Submit-button');
 btn[3].setAttribute('class', 'Submit-button');
console.log(btn);

let subBtn = document.getElementById('Submit-button');
subBtn.style.color ='white'
subBtn.style.backgroundColor ='red'
subBtn.style.borderRadius ='5px'
subBtn.style.border ='none'
subBtn.style.padding ='10px'
console.log(subBtn);




