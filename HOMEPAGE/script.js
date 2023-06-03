let click = 0;
function menu(){
  
  let open = document.getElementById('section');
  if (click == 0){
    open.innerHTML = "<div class='menu'><div class='items'><img src='IMAGES/pg.jpg' alt='' width='100' onclick='passwordgenerater()'><br><p>PASSWORD GENERATOR</p></div><div class='items'><img src='IMAGES/todo.png' alt='' height='100' onclick='todolist()'><br><p>TODO LIST</p></div><div class='items'><img src='IMAGES/currency.jpg' alt='' height='100' onclick='currencyconverter()'><br><p>CURRENCY CONVERTER</p></div><div class='items'><img src='IMAGES/wordtopdf.PNG' alt='' width='100' height='100' onclick='wordtopdf()'><br><p>WORD TO PDF</p></div><div class='items'><img src='IMAGES/clock.png' alt='' width='100' height='100' onclick='clock()'><br><p>CLOCK</p></div><div class='items'><img src='IMAGES/pdftoim.PNG' alt='' width='100' height='100' onclick='pdftoimg()'><br><p>PDF TO IMAGE</p></div><div class='items'><img src='IMAGES/imtopdf.PNG' alt='' width='100' height='100' onclick='imgtopdf()'><br><p>IMAGE TO PDF</p></div></div>"
  // open.innerHTML= "<div class='menu'><div class='items'><img src='IMAGES/pg.jpg' alt='' width='100'><br><p>PASSWORD GENERATOR</p></div><div class='items'><img src='IMAGES/todo.png' alt='' height='100'><br><p>TODO LIST</p></div><div class='items'><img src='IMAGES/currency.jpg' alt='' height='100'><br><p>CURRENCY CONVERTER</p></div><div class='items'><img src='IMAGES/wordtopdf.PNG' alt='' width='100' height='100'><br><p>WORD TO PDF</p></div><div class='items'><img src='IMAGES/clock.png' alt='' width='100' height='100'><br><p>CLOCK</p></div><div class='items'><img src='IMAGES/pdftoim.PNG' alt='' width='100' height='100'><br><p>PDF TO IMAGE</p></div><div class='items'><img src='IMAGES/imtopdf.PNG' alt='' width='100' height='100'><br><p>IMAGE TO PDF</p></div></div>"
  click += 1;
  }
  else{
    open.innerHTML="";
    click -= 1; 

  }
}




function wallpaper(){
  let open = document.getElementById('section');
  if (click == 0){
  open.innerHTML= "<div class='menu'><p id='headcenter'>WALLPAPERS</p><img src='IMAGES/aki.jpg' alt='' width='400' height='200' onclick='firstwall()'><img src='IMAGES/background.jpg' alt='' width='400' height='200' onclick='secondwall()' ><img src='IMAGES/window.jpg' alt='' width='400' height='200' onclick='thirdwall()'><img src='IMAGES/mu.jpg' alt='' width='400' height='200' onclick='fourthwall()' ></div>"
  click += 1;
  }
  else{
    open.innerHTML="";
    click -= 1; 
  }
}

function about(){
  let open = document.getElementById('section');
  if (click == 0){
  open.innerHTML= "      <div class='menu'><div class='about'><h1>WEB BASED UTILITY APPLICATION DEVELOPMENT</h1><h2>TEAM MEMBERS</h2><ul><li>VIKRAMAN G</li><li>ARUNVISHWA R</li><li>BHARATHRAJA V</li><li>KARTHIKEYEN S</li></ul><p>OUR PURPOSE FOR DEVELOPING THESE WEB APPLICATIONS IS TO MAKE THE USERS BE PRODUCTIVE AND SAVE THEIR STORAGE WITHOUT NEEDING TO INSTALL ANY SOFTWARE EXTERNALLY WE PROVIDE THESE VARIOUS TYPE OF PRODUCTIVE USER FRIENDLY APPLICATIONS IN THE SAAS&lpar;SOFTWARE AS A SERVICE&rpar; PLATFORM.</p><p>THIS TEAM PROJECT IS SUBMITTED TO: <br/>DR.M.SORNAM,<br/>PROFESSOR,<br/>DEPARTMENT OF COMPUTER SCIENCE.</p></div></div>"
  click += 1;
  }
  else{
    open.innerHTML="";
    click -= 1; 
  }
}

function time(){
const date = new Date()
const outdate = document.querySelector('#day')
outdate.innerText = date.getDate()
const outmonth = document.querySelector('#month')
outmonth.innerText=date.getMonth()+1
const outyear =document.querySelector('#year')
outyear.innerText=date.getFullYear()
const outhours =document.querySelector('#hours')
outhours.innerText=date.getHours();
const outminutes =document.querySelector('#minutes')
outminutes.innerText=date.getMinutes();
const outseconds =document.querySelector('#seconds')
outseconds.innerText=date.getSeconds();
}
setInterval(time,1000)

function firstwall(){
  document.body.style.backgroundImage = "url('IMAGES/aki.jpg')"
}
function secondwall(){
  document.body.style.backgroundImage = "url('IMAGES/background.jpg')"
}
function thirdwall(){
  document.body.style.backgroundImage = "url('IMAGES/window.jpg')"
}
function fourthwall(){
  document.body.style.backgroundImage = "url('IMAGES/mu.jpg')"
}

// let b2 = document.querySelector('.b2');
let b2 = document.querySelector('.b2');
  let special = document.querySelector('#special');

function passwordgenerater(){
  let section = document.getElementById('section');
  section.innerHTML = "<div class='contain'><iframe src='../password_generator/index.html'></div></iframe></div>";
  
}
function todolist(){
  let section = document.getElementById('section');
  section.innerHTML = "<div class='contain'><iframe src='../todo/index.html'></div></iframe></div>";
}
function currencyconverter(){
  let section = document.getElementById('section');
  section.innerHTML = "<div class='contain'><iframe src='../Currency Converter/index.html'></div></iframe></div>"
}

function clock(){
  let section = document.getElementById('section');
  section.innerHTML = "<div class='contain'><iframe src='../clock/clock.html'></div></iframe></div>"
}

function imgtopdf(){
  let section = document.getElementById('section');
  section.innerHTML = "<div class='contain'><iframe src='../imagetopdf.html'></div></iframe></div>"
}

function pdftoimg(){
  let section = document.getElementById('section');
  section.innerHTML = "<div class='contain'><iframe src='../pdftoimage.html'></div></iframe></div>"
}

function wordtopdf(){
  let section = document.getElementById('section');
  section.innerHTML = "<div class='contain'><iframe src='http://127.0.0.1:5000/'></div></iframe></div>"
}

