// document.getElementById("fPara").style.color = "blue"

// document.getElementsByClassName("para").style.color = "red"

// console.log(document.getElementsByClassName("para"))

// var tableau = document.getElementsByClassName("para")
// tableau[0].style.color = "green"





// var paragraphes = document.getElementsByTagName("p")

// console.log(paragraphes)

// var titre = document.getElementById('titre')

// console.log(titre)


// var par = document.querySelector('.para')

// console.log(par)


// var par = document.querySelectorAll('.para')

// // console.log(par)

// par[0].style.color = "red"

// var divM = document.querySelector('#main')

// // console.log(divM)
// // console.log(divM.innerText)
// console.log(divM.innerHTML)

// var title = document.querySelector("#titre")

// // console.log(title.nextElementSibling.nextElementSibling)
// // title.parentElement.firstElementChild.style.color = 'red'
// console.log(title.parentElement.lastElementChild.previousElementSibling)



// var btn = document.createElement('button')

// var divM = document.getElementById('main')


// btn.innerText = "Essia"

// divM.appendChild(btn)

// btn.setAttribute("id","ahmer")

// btn.remove()

function PopUp(){
    alert("A7la fedi")
}

// var btnPlus =   document.querySelector('.btnPlus')

// btnPlus.addEventListener('click',function(){
//     btnPlus.previousElementSibling.innerText++
// })


// var btnMoins = document.querySelector('.btnMoins')

// btnMoins.addEventListener("click",function(){

//     if(btnMoins.nextElementSibling.innerText>0){
//         btnMoins.nextElementSibling.innerText-- 
//     }    
// })


var TableaubtnsPlus = document.querySelectorAll('.btnPlus')


for(let i = 0; i<TableaubtnsPlus.length;i++){
    TableaubtnsPlus[i].addEventListener('click',function(){
        TableaubtnsPlus[i].previousElementSibling.innerText++
    })
}


var btnsMoins = document.querySelectorAll(".btnMoins")


for(let i = 0; i<btnsMoins.length;i++){
    btnsMoins[i].addEventListener('click',function(){
        
        if(btnsMoins[i].nextElementSibling.innerText>0){
            btnsMoins[i].nextElementSibling.innerText--
        }

    })
}


