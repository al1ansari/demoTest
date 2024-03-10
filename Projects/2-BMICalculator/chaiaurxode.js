const result = document.querySelector("#results")
// document.querySelector("body").style.background = "black"
// console.log(result)
const button = document.querySelector("button")
// console.log(button)
// console.log(`Hi \n World`)
setInterval(()=>{
let date = new Date();
// console.log(date.toLocaleTimeString())
document.getElementById("clock").innerHTML = date.toLocaleTimeString()
},1000)


button.addEventListener('click',(e=>{
    e.preventDefault();
    // console.log("Hello")
    const h =document.querySelector("#height").value
    const w =document.querySelector("#Weight").value
    // console.log(h)
    // console.log(w)
    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    // console.log(bmi);
    // console.log(typeof h)

    if(h=="" || isNaN(h) || h<0){
        result.innerHTML = `<p>Please give a valid input ${typeof h}</p>`
    }else if(h=="" || isNaN(h) || h<0){
        result.innerHTML = `<p>Please give a valid input ${w}</p>`
    }else{
        let stat;
        if(bmi<18.6)
            stat="under weight"
        else if(bmi>18.6 && bmi<24.9)
            stat ="Normal weight"
        else
            stat = "Over Weight"
            
        result.innerHTML = `<h3 id="result">Your BMI is: ${bmi} \n Which indicate that you are ${stat}</h3>`
        
    }
}))