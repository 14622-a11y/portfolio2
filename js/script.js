// =====================================
// Portfolio Website
// script.js
// =====================================

// เปลี่ยนสี Navbar เมื่อ Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "#0b1120";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";

    }else{

        header.style.background = "#0f172a";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.15)";
    }

});

// =====================================
// Back To Top Button
// =====================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2563eb";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
topButton.style.transition = ".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";
    }

});

topButton.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// =====================================
// Fade In Animation
// =====================================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements=document.querySelectorAll("section");

hiddenElements.forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});

// =====================================
// Active Menu
// =====================================

const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".menu a");

links.forEach(link=>{

const file = link.getAttribute("href");

if(file === currentPage){

link.classList.add("active");

}

});

// =====================================
// Footer Year
// =====================================

const footer = document.querySelector("footer p");

if(footer){

footer.innerHTML =

`© ${new Date().getFullYear()} Portfolio Website | จัดทำโดย ชื่อ-นามสกุล`;

}
