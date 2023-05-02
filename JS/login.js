const inputUser = document.querySelector("input[type='text']");

inputUser .addEventListener("focus", ()=>{
    inputUser.setAttribute("style","outline-color:#ff0000;")
});

inputUser .addEventListener("keyup", ()=>{

    const labelUser = document.querySelector("label[for='idNm']");

    if(inputUser.value.lenght < 5){
    inputUser.setAttribute("style","outline-color:#ff0000;")

    }else{
        inputUser.setAttribute("style","outline-color:#00ff00;")
    }
});


