const dots = document.getElementById("dots");
const extraText = document.getElementById("more-text");
const buton = document.getElementById("show");

function showMore(){
    if(dots.style.display == "none"){
        dots.style.display = "inline";
        extraText.style.display = "none";
        buton.innerHTML = "Show More";
    }
    else{
        dots.style.display = "none";
        extraText.style.display = "inline";
        buton.innerHTML = "Show Less";
    }
}

const mainEl = document.getElementById('main');
const menuIconEl = document.getElementById('menu-icon')
const navbar = document.getElementById('vertical-navbar')
function showNav(){
    if(navbar.style.display === "none"){
        navbar.style.display = "flex";
        //attempt to create the overlay effect when the nav menu opens...
        // mainEl.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))"
    }else{
        navbar.style.display = "none";
    }
}
menuIconEl.addEventListener("click", ()=>{
    // alert("the menu has been clicked")
    showNav();
})

const navShowMoreBtnEl = document.getElementById("show-btn");
const moreNavlinksEl = document.getElementById("more");

navShowMoreBtnEl.addEventListener("click", ()=>{
    if(moreNavlinksEl.style.display==="none"){
        moreNavlinksEl.style.display="flex";
        navShowMoreBtnEl.innerText = "Show less"
    }
    else{
        moreNavlinksEl.style.display="none";
        navShowMoreBtnEl.innerText = "Show more"
    }
})