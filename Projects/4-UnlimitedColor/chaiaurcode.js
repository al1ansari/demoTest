
function randomColor(){
    const hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
// console.log(randomColor());
let interval;
console.log(interval)

document.querySelector('#start').addEventListener('click',()=>{
    
     if(interval==null)  
        interval = setInterval(changeColor,1000)
    
        console.log('Start', interval)

    function changeColor(){
        let colorId = randomColor();
        document.body.style.backgroundColor = colorId
        document.querySelector('#colorId').innerHTML=`<button>${colorId}</button>`;
    }
    
})

document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(interval);
    // console.log('stop1',interval)
    interval = null
    console.log('stop', interval)
})
