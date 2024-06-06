
let colorButton=document.getElementById(`cButton`)
let box1=document.getElementById(`box1`)
let box2=document.getElementById(`box2`)
let box3=document.getElementById(`box3`)

let colorArray=[`A`,`B`,`C`,`D`,`E`,`F`,0,1,2,3,4,5,6,7,8,9]

const colorGenerator=()=>{

    let merger1=`#`
    let merger2=`#`
    let merger3=`#`

    for(let i=0; i<6; i++){
    let  randomCode=Math.floor(Math.random()*16)
    let  random=Math.floor(Math.random()*16)
    let  code=Math.floor(Math.random()*16)
    let colorStore=colorArray[randomCode]
    let color=colorArray[random]
    let store=colorArray[code]
    
    merger1+=colorStore
    merger2+=color
    merger3+=store
    }
    
    box1.style.backgroundColor=merger1
    box1.textContent=merger1
    box2.style.backgroundColor=merger2
    box2.textContent=merger2
    box3.style.backgroundColor=merger3
    box3.textContent=merger3
}


colorButton.addEventListener(`click`,colorGenerator)









