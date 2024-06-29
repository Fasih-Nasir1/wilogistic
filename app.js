document.getElementById("all").style.display="none";


function fn1(){
    document.getElementById("all").style.display="block";
document.getElementById("loader").style.display="none"
}
setTimeout(fn1,4000)

document.addEventListener("scroll", () => {
    var nav = document.getElementById("navbar");
    var links = document.querySelectorAll(".nav-link");
   var logo=document.getElementById("logo");

    if (window.scrollY > 300) {
        nav.classList.add("fixtop");
        links.forEach(link => link.classList.add("scroll-color"));
    logo.src="img/Untitled-1.png"
    } else {
        nav.classList.remove("fixtop");
        links.forEach(link => link.classList.remove("scroll-color"));
       logo.src="img/Untitled-2.png"
    }
});

var num=0
var num1=0
function fn2(){
    var demo1=document.getElementById("demo1").innerHTML=num + "+"
    var demo2=document.getElementById("demo2").innerHTML=num1 + "K"
    num++
    num1++
if(num > 23){
    num=0;
}
else if(num > 18){
    num1=0;
}
}
setInterval(fn2,400)
