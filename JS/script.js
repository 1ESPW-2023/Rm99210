// const divElement = document.getElementById("div-box")

// // divElement.addEventListener("click", ()=>{
// //     console.log(divElement);
// // });

// divElement.addEventListener("click", mostraElemento);

// function mostraElemento() {
//     console.log(divElement)
// }

// function soma() {
//     let n1 = 10
//     let n2 = 5
//     console.log(n1 + n2)
// }

//Recuperando elelemtos do html com quary

// const liElement = document.querySelectorAll("li");

//Convertendo notelist em array spread
const arrayElements = [...document.querySelectorAll("li")];

arrayElements.map(  (el,key)=>{

    if (el.textContent.indexOf("item")){
        el.textContent = `[ ${el.textContent} ]`;
}
});

