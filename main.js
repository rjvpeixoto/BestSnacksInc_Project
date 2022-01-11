

function breakfastDetailsPanquecas() {
    var selectedBreakfast = document.querySelector (".Panquecas");
        selectedBreakfast.classList.remove("hidden");
    var AllOptions = document.querySelector(".Ovos", ".Tosta", ".Fruta", ".Ingles", ".Alemao" );
        if(AllOptions.classList.contains("hidden")){
        }else{
            AllOptions.classList.add("hidden");  
        }
}


function breakfastDetailsOvos() {
    var selectedBreakfast = document.querySelector (".Ovos");
    selectedBreakfast.classList.remove("hidden");

    var AllOptions = document.querySelector(".Panquecas", ".Tosta", ".Fruta", ".Ingles", ".Alemao" );
    if(AllOptions.classList.contains("hidden")){
    }else{
        AllOptions.classList.add("hidden");  
    }
}
function breakfastDetailsTosta() {
    var selectedBreakfast = document.querySelector (".Tosta");
    selectedBreakfast.classList.remove("hidden");

    var AllOptions = document.querySelector(".Panquecas", ".Ovos", ".Fruta", ".Ingles", ".Alemao" );
    if(AllOptions.classList.contains("hidden")){
    }else{
        AllOptions.classList.add("hidden");  
    }
}

function anterioresOpçoes(){
    let NonVisible = document.querySelector(".primeiroSet");
    let Visible = document.querySelector(".segundoSet");
        NonVisible.classList.remove("hidden");
        Visible.classList.add("hidden");
}

function proximasOpçoes(){
    let NonVisible = document.querySelector(".segundoSet");
    NonVisible.classList.remove("hidden");
    let Visible = document.querySelector(".primeiroSet");
           
            Visible.classList.add("hidden");
}
