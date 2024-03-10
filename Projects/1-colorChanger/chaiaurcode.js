const buttons = document.querySelectorAll(".button")
const bdy = document.querySelector("body")
console.log(bdy)

buttons.forEach((button)=>{
    // console.log(button)
    button.addEventListener("click",(e)=>{
        // console.log(e)
        console.log(e.target)
        if(e.target.id=='grey')
            bdy.style.background="grey"
        if(e.target.id=='white')
            bdy.style.background="#212121"
        if(e.target.id=='blue')
            bdy.style.background="#313145"
        if(e.target.id=='yellow')
            bdy.style.background="#984292"
    });
});