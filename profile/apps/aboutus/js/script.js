document.onkeydown=function(a)
{
  if(a.ctrlKey && a.keyCode==85 || a.ctrlKey && a.keyCode==67)
  {
    return false;
  }
}
const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
menubar.classList.toggle('bx-x');
Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onload = ()=>{
section.forEach(sec=>{
let top = window.scrollY;
let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id')
if(top>offset && top < offset + height){
    sec.classList.add('start-animation');
    navlink.forEach(links=>{
        links.classList.remove('active')
        document.querySelector('header nav a[href*='+id+']').classList.add('active')
      
    })
}
})
var header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY>100)
menubar.classList.remove('bx-x');
Navbar.classList.remove('active')
}


