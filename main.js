/* 1 - IDENTIFICAÇÃO URL DA API E REQUEST METHOD
Estes dados serão utilizados para todos os métodos Fetch ao longo do ficheiro*/

let url = "https://61dfdad80f3bdb0017934bfb.mockapi.io/api/Menu";

let requestOptions = {
    method: 'GET'
}
////////////////////////////////////////////////////////////////////////////
// 2 -  FETCH + DESENVOLVIMENTO PAGINA PRINCIPAL
fetch (url, requestOptions)
    .then(result=>result.json())
    .then(body=>{
        // 2.1 - OPTION 1
    let local1 = document.querySelector(".option1");
            let novoTitulo1 = document.createElement("h4");
            let novaImagem1 = document.createElement("p");
            let novoPrice1 = document.createElement("p");
            let novoButton1 = document.createElement("p");
          
            novoTitulo1.innerHTML = `${body[0].name}`;
            novaImagem1.innerHTML = `<img src='${body[0].image}'>` ;
            novoPrice1.innerHTML =  `Preço: ${body[0].price} € / dose individual`;
            novoButton1.innerHTML = `<a href='${body[0].link}' target="" class="btn btn-success">Sabe mais e encomenda</a>`;
            
            local1.appendChild(novoTitulo1);
            local1.appendChild(novaImagem1);
            local1.appendChild(novoPrice1);
            local1.appendChild(novoButton1);
            
        // 2.2 - OPTION 2
    let local2 = document.querySelector(".option2");
            let novoTitulo2 = document.createElement("h4");
            let novaImagem2 = document.createElement("p");
            let novoPrice2 = document.createElement("p");
            let novoButton2 = document.createElement("p");
       
            novoTitulo2.innerHTML = `${body[1].name}`;
            novaImagem2.innerHTML = `<img src='${body[1].image}'>` ;
            novoPrice2.innerHTML =  `Preço: ${body[1].price} € / dose individual`;
            novoButton2.innerHTML = `<a href='${body[1].link}' target="" class="btn btn-success">Sabe mais e encomenda</a>`;
           
            local2.appendChild(novoTitulo2);
            local2.appendChild(novaImagem2);
            local2.appendChild(novoPrice2);
            local2.appendChild(novoButton2);
          
        // 2.3 - OPTION 3
   let local3 = document.querySelector(".option3");
            let novoTitulo3 = document.createElement("h4");
            let novaImagem3 = document.createElement("p");
            let novoPrice3 = document.createElement("p");
            let novoButton3 = document.createElement("p");
            

            novoTitulo3.innerHTML = `${body[2].name}`;
            novaImagem3.innerHTML = `<img src='${body[2].image}'>` ;
            novoPrice3.innerHTML =  `Preço: ${body[2].price} € / dose individual`;
            novoButton3.innerHTML = `<a href='${body[2].link}' target="" class="btn btn-success">Sabe mais e encomenda</a>`;
            

            local3.appendChild(novoTitulo3);
            local3.appendChild(novaImagem3);
            local3.appendChild(novoPrice3);
            local3.appendChild(novoButton3);
            
        // 2.4 - OPTION 4
    let local4 = document.querySelector(".option4");
            let novoTitulo4 = document.createElement("h4");
            let novaImagem4 = document.createElement("p");
            let novoPrice4 = document.createElement("p");
            let novoButton4 = document.createElement("p");

            novoTitulo4.innerHTML = `${body[3].name}`;
            novaImagem4.innerHTML = `<img src='${body[3].image}'>` ;
            novoPrice4.innerHTML =  `Preço: ${body[3].price} € / dose individual`;
            novoButton4.innerHTML = `<a href='${body[3].link}' target="" class="btn btn-success">Sabe mais e encomenda</a>`;

            local4.appendChild(novoTitulo4);
            local4.appendChild(novaImagem4);
            local4.appendChild(novoPrice4);
            local4.appendChild(novoButton4);

    });

////////////////////////////////////////////////////////////////////////////
// 3 - FETCH PAGINA OPTION1
fetch (url, requestOptions)
    .then(result=>result.json())
    .then(body=>{
        let local = document.querySelector("#option1_1");
        
            let novoTitulo = document.createElement("h4");
            let novaImagem = document.createElement("p");
            let novoPrice = document.createElement("p");
            let novoStock = document.createElement("p");
            let novaEncomenda = document.createElement("p");
            let novaDescricao = document.createElement("p");
            let novaIntExtras = document.createElement("p");
            let novoExtra0 = document.createElement("p");
            let novoExtra1 = document.createElement("p");
            let retroceder = document.createElement("p");
            let anularEncomenda = document.createElement("p");

            
            novoTitulo.innerHTML = `${body[0].name}`;
            novaImagem.innerHTML = `<img src='${body[0].image}'>`;
            novaEncomenda.innerHTML= 
            `<button id="orderPanquecas" onclick="encomendarPanquecas()" class="btn btn-success">Adiciona ao carrinho</button>
            <button id="cancelaPanquecas" onclick="cancelarPanquecas()" class="btn btn-danger">Retira do carrinho</button>
            <p> Encomendadas:
            <button id="numeroPanquecasEncomendadas" class="btn btn-light">0</button>
            <button class="btn btn-warning">Doses</button>  
                Peço a pagar:                
            <button id="preçoPanquecasEncomendadas" class="btn btn-light"> 0</button>
            <button class="btn btn-warning">€</button>
            </p>`;

            novaDescricao.innerHTML = `<p class="text_left">${body[0].description}</p>`;
            novoPrice.innerHTML =  `Preço: ${body[0].price} € por dose individual`;
            localStorage.setItem("FetchPreçoPanquecas", `${body[0].price}`);
            novoStock.innerHTML = `<p id="stockPanquecas">Stock: ${body[0].stock} unidades disponíveis</p>`;
            localStorage.setItem("FetchStockPanquecas", `${body[0].stock}`);
            novaIntExtras.innerHTML = `<p class="text_left">Podes escolher um acompanhamento ao teu gosto: </p>`;            
            novoExtra0.innerHTML = `<p class="text_left" id="panquecasExtra1"> 
            ${body[0].extras[0]} 
            <button id="orderExtra1" onclick = "encomendaExtraPanqueca1()" class="btn btn-success">Adiciona ao carrinho</button>
            <button id="retiraExtra1" onclick = "retiraExtraPanqueca1()" class="btn btn-danger">Retira do carrinho</button>
                Encomendado:
            <button id="numeroExtra1Encomendado" class="btn btn-light">0</button>
            <button class="btn btn-warning">Unidades</button></p>`;

            novoExtra1.innerHTML = `<p class="text_left" id="panquecasExtra2">
            ${body[0].extras[1]}
            <button id="orderExtra2" onclick = "encomendaExtraPanqueca2()" class="btn btn-success"> Adiciona ao carrinho </button>
            <button id="retireExtra2" onclick = "retiraExtraPanqueca2()" class="btn btn-danger"> Retira do carrinho</button>
                Encomendado:
            <button id="numeroExtra2Encomendado" class="btn btn-light">0</button>
            <button class="btn btn-warning">Unidades</button></p>`;
            retroceder.innerHTML = `<p class="text_left"> Grava a tua encomenda e retrocede à página principal 
            <a class="btn btn-primary" href='${body[0].link2}'>Retroceder</a>
            <a class="btn btn-secondary" onclick="guardaEncomendaPanquecas()">Gravar encomenda</a>
            </p>`
            anularEncomenda.innerHTML = `<p class="text_left">Também podes anular ou recomeçar a tua encomenda do zero
            <a class="btn btn-light" onclick="recomeçarPanquecas()" >Anular/Recomeçar</a></p>`;

            local.appendChild(novoTitulo);
            local.appendChild(novaImagem);
            local.appendChild(novaEncomenda);
            local.appendChild(novoStock);
            local.appendChild(novoPrice);
            local.appendChild(novaDescricao);
            local.appendChild(novaIntExtras);
            local.appendChild(novoExtra0);
            local.appendChild(novoExtra1);
            local.appendChild(retroceder);
            local.appendChild(anularEncomenda);
           

 });
 ////////////////////////////////////////////////////////////////////////////
 // 3.1 - DESENVOLVIMENTO PAGINA OPTION1
 let panquecasEncomendadas = 0;
 let panquecasExtra1Encomendado = 0;
 let panquecasExtra2Encomendado = 0;
 let panquecasStockString = localStorage.getItem("FetchStockPanquecas");
 let panquecasStock = parseInt(panquecasStockString);
 let panquecasPreçoString = localStorage.getItem("FetchPreçoPanquecas");
 let panquecasPreço = parseInt(panquecasPreçoString);
 
 function encomendarPanquecas (){
    panquecasEncomendadas = panquecasEncomendadas + 1;
    if(panquecasEncomendadas > panquecasStock){
        alert("Apenas estão disponíveis " + panquecasStock + " doses.")
        panquecasEncomendadas = panquecasStock;
        console.log ("Nº de doses de Panquecas encomendadas: " + panquecasEncomendadas);
    } else {
        console.log ("Nº de doses de Panquecas encomendadas: " + panquecasEncomendadas);
    }
    document.getElementById("numeroPanquecasEncomendadas").innerHTML = panquecasEncomendadas;
    document.getElementById("preçoPanquecasEncomendadas").innerHTML = (panquecasEncomendadas * panquecasPreço);
 }

 function cancelarPanquecas(){
    panquecasEncomendadas = panquecasEncomendadas - 1;
    panquecasExtra1Encomendado = 0;
    panquecasExtra2Encomendado = 0;
    document.getElementById("numeroExtra1Encomendado").innerHTML = panquecasExtra1Encomendado; 
    document.getElementById("numeroExtra2Encomendado").innerHTML = panquecasExtra2Encomendado;

    if (panquecasEncomendadas < 0){
        alert('Neste momento não tens quaisquer panquecas no teu carrinho.');
        panquecasEncomendadas = 0
        console.log ("Nº de doses de Panquecas encomendadas: " + panquecasEncomendadas);
    }else{
        console.log ("Nº de doses de Panquecas encomendadas: " + panquecasEncomendadas);
    }
    document.getElementById("numeroPanquecasEncomendadas").innerHTML = panquecasEncomendadas;
    document.getElementById("preçoPanquecasEncomendadas").innerHTML = (panquecasEncomendadas * panquecasPreço);

}

function encomendaExtraPanqueca1(){
 
 if( panquecasExtra1Encomendado + panquecasExtra2Encomendado == panquecasEncomendadas){
     alert("Não podes encomendar um número de extras superior às doses do teu snack.");
 } else {
    panquecasExtra1Encomendado = panquecasExtra1Encomendado + 1;
    console.log("Nº de Extra1 no carrinho:" + panquecasExtra1Encomendado);
}
    document.getElementById("numeroExtra1Encomendado").innerHTML = panquecasExtra1Encomendado;
}

function retiraExtraPanqueca1(){
    panquecasExtra1Encomendado = panquecasExtra1Encomendado - 1;
    if(panquecasExtra1Encomendado < 0){
        alert("Neste momento não tens este Extra em carrinho.")
        panquecasExtra1Encomendado = 0
        console.log("Nº de Extra1 no carrinho:" + panquecasExtra1Encomendado);
    } else {
        console.log("Nº de Extra1 no carrinho:" + panquecasExtra1Encomendado);
    }
    document.getElementById("numeroExtra1Encomendado").innerHTML = panquecasExtra1Encomendado;
}

function encomendaExtraPanqueca2(){
    if( panquecasExtra1Encomendado + panquecasExtra2Encomendado == panquecasEncomendadas){
        alert("Não podes encomendar um número de extras superior às doses do teu snack.");
    } else {
        panquecasExtra2Encomendado = panquecasExtra2Encomendado + 1;
        console.log("Nº de Extra2 no carrinho:" + panquecasExtra2Encomendado);
    }
    document.getElementById("numeroExtra2Encomendado").innerHTML = panquecasExtra2Encomendado;

}

function retiraExtraPanqueca2(){
    panquecasExtra2Encomendado = panquecasExtra2Encomendado - 1;
    if(panquecasExtra2Encomendado < 0){
        alert("Neste momento não este Extra em carrinho.")
        panquecasExtra2Encomendado = 0
        console.log("Nº de Extra2 no carrinho:" + panquecasExtra2Encomendado);
    }else{
        console.log("Nº de Extra2 no carrinho:" + panquecasExtra2Encomendado);
    }
    document.getElementById("numeroExtra2Encomendado").innerHTML = panquecasExtra2Encomendado;
}

function guardaEncomendaPanquecas(){
    localStorage.setItem("panquecasGravadas", panquecasEncomendadas);
    localStorage.setItem("Extra1panquecasGravadas", panquecasExtra1Encomendado);
    localStorage.setItem("Extra2panquecasGravadas", panquecasExtra2Encomendado);
    localStorage.setItem("preçoPanquecasGravadas", (panquecasEncomendadas * panquecasPreço));

    alert("A tua encomenda foi gravada: \n" 
    + localStorage.getItem("panquecasGravadas") + " dose(s) de panquecas ;\n" 
    + localStorage.getItem("Extra1panquecasGravadas") + " unidade(s) de sumo de laranja ;\n"
    + localStorage.getItem("Extra2panquecasGravadas") + " unidade(s) de chocolate quente .\n"
    + "\n Valor da tua encomenda: " + localStorage.getItem("preçoPanquecasGravadas") + " €");

    alert("De seguida podes retroceder para a página principal." 
        + "\n Aí poderás continuar a encomendar ou finalizar a tua encomenda." 
        + "\n Em alternativa, ainda podes anular a tua encomenda de panquecas, ou recomeçá-la do zero.");
}

    function recomeçarPanquecas(){
        localStorage.setItem("panquecasGravadas", "0");
        localStorage.setItem("Extra1panquecasGravadas", "0");
        localStorage.setItem("Extra2panquecasGravadas", "0");

        alert("Neste momento o teu carrinho encontra-se vazio. \n" +
        "\nPodes regressar à página principal ou recomeçar a tua encomenda de panquecas.")
    }

////////////////////////////////////////////////////////////////////////////
// 4- FETCH PAGINA OPTION2
fetch (url, requestOptions)
    .then(result=>result.json())
    .then(body=>{
        let local = document.querySelector("#option2_2");
        
            let novoTitulo = document.createElement("h4");
            let novaImagem = document.createElement("p");
            let novoPrice = document.createElement("p");
            let novoStock = document.createElement("p");
            let novaEncomenda = document.createElement("p");
            let novaDescricao = document.createElement("p");
            let novaIntExtras = document.createElement("p");
            let novoExtra0 = document.createElement("p");
            let novoExtra1 = document.createElement("p");
            let retroceder = document.createElement("p");
            let anularEncomenda = document.createElement("p");

            
            novoTitulo.innerHTML = `${body[1].name}`;
            novaImagem.innerHTML = `<img src='${body[1].image}'>`;
            novaEncomenda.innerHTML= 
            `<button id="orderOption2" onclick="encomendarOption2()" class="btn btn-success">Adiciona ao carrinho</button>
            <button id="cancelaOption2" onclick="cancelarOption2()" class="btn btn-danger">Retira do carrinho</button>
            <p> Encomendados:
            <button id="numeroOption2Encomendadas" class="btn btn-light">0</button>
            <button class="btn btn-warning">Doses</button>  
                Preço a pagar:                
            <button id="preçoOption2Encomendadas" class="btn btn-light"> 0</button>
            <button class="btn btn-warning">€</button>
            </p>`;

            novaDescricao.innerHTML = `<p class="text_left">${body[1].description}</p>`;
            novoPrice.innerHTML =  `Preço: ${body[1].price} € por dose individual`;
            localStorage.setItem("FetchPreçoOption2", `${body[1].price}`);
            novoStock.innerHTML = `<p id="stockOption2">Stock: ${body[1].stock} unidades disponíveis</p>`;
            localStorage.setItem("FetchStockOption2", `${body[1].stock}`);
            novaIntExtras.innerHTML = `<p class="text_left">Podes escolher um acompanhamento ao teu gosto: </p>`;            
            novoExtra0.innerHTML = `<p class="text_left" id="Option2Extra1"> 
            ${body[1].extras[0]} 
            <button id="orderExtra1Option2" onclick = "encomendaExtra1Option2()" class="btn btn-success">Adiciona ao carrinho</button>
            <button id="retiraExtra1Option2" onclick = "retiraExtra1Option2()" class="btn btn-danger">Retira do carrinho</button>
                Encomendado: 
            <button id="numeroExtra1Option2Encomendado" class="btn btn-light">0</button>
            <button class="btn btn-warning">Unidades</button></p>`;

            novoExtra1.innerHTML = `<p class="text_left" id="Option2Extra2">
            ${body[1].extras[1]}
            <button id="orderExtra2Option2" onclick = "encomendaExtra2Option2()" class="btn btn-success"> Adiciona ao carrinho </button>
            <button id="retireExtra2Option2" onclick = "retiraExtra2Option2()" class="btn btn-danger"> Retira do carrinho </button>
                Encomendado:
            <button id="numeroExtra2Option2Encomendado" class="btn btn-light">0</button>
            <button class="btn btn-warning">Unidades</button></p>`;
            retroceder.innerHTML = `<p class="text_left"> Grava a tua encomenda e retrocede à página principal 
            <a class="btn btn-primary" href='${body[1].link2}'>Retroceder</a>
            <a class="btn btn-secondary" onclick="guardaEncomendaOption2()">Gravar encomenda</a>
            </p>`
            anularEncomenda.innerHTML = `<p class="text_left">Também podes anular ou recomeçar a tua encomenda do zero
            <a class="btn btn-light" onclick="recomeçarOption2()" >Anular/Recomeçar</a></p>`;

            local.appendChild(novoTitulo);
            local.appendChild(novaImagem);
            local.appendChild(novaEncomenda);
            local.appendChild(novoStock);
            local.appendChild(novoPrice);
            local.appendChild(novaDescricao);
            local.appendChild(novaIntExtras);
            local.appendChild(novoExtra0);
            local.appendChild(novoExtra1);
            local.appendChild(retroceder);
            local.appendChild(anularEncomenda);
           

 });
 ////////////////////////////////////////////////////////////////////////////
 // 4.1 - DESENVOLVIMENTO PAGINA OPTION2
 let Option2Encomendadas = 0;
 let Option2Extra1Encomendado = 0;
 let Option2Extra2Encomendado = 0;
 let Option2StockString = localStorage.getItem("FetchStockOption2");
 let Option2Stock = parseInt(Option2StockString);
 let Option2PreçoString = localStorage.getItem("FetchPreçoOption2");
 let Option2Preço = parseInt(Option2PreçoString);
 
 function encomendarOption2 (){
    Option2Encomendadas = Option2Encomendadas + 1;
    if(Option2Encomendadas > Option2Stock){
        alert("Apenas estão disponíveis " + Option2Stock + " doses.")
        Option2Encomendadas = Option2Stock;
        console.log ("Nº de doses de Option2 encomendadas: " + Option2Encomendadas);
    } else {
        console.log ("Nº de doses de Option2 encomendadas: " + Option2Encomendadas);
    }
    document.getElementById("numeroOption2Encomendadas").innerHTML = Option2Encomendadas;
    document.getElementById("preçoOption2Encomendadas").innerHTML = parseInt((Option2Encomendadas * Option2Preço));
 }

 function cancelarOption2(){
    Option2Encomendadas = Option2Encomendadas - 1;
    Option2Extra1Encomendado = 0;
    Option2Extra2Encomendado = 0;
    document.getElementById("numeroExtra1Option2Encomendado").innerHTML = Option2Extra1Encomendado; 
    document.getElementById("numeroExtra2Option2Encomendado").innerHTML = Option2Extra2Encomendado;
    if (Option2Encomendadas < 0){
        alert('Neste momento não tens quaisquer gelados no teu carrinho.');
        Option2Encomendadas = 0
        console.log ("Nº de doses de Option2 encomendadas: " + Option2Encomendadas);
    }else{
        console.log ("Nº de doses de Option2 encomendadas: " + Option2Encomendadas);
    }
    document.getElementById("numeroOption2Encomendadas").innerHTML = Option2Encomendadas;
    document.getElementById("preçoOption2Encomendadas").innerHTML = parseInt((Option2Encomendadas * Option2Preço));

}

function encomendaExtra1Option2(){
    if( (Option2Extra1Encomendado + Option2Extra2Encomendado) == Option2Encomendadas ){
        alert("Não podes encomendar um nº de extras superior às doses do teu snack.");
    } else {
        Option2Extra1Encomendado = Option2Extra1Encomendado + 1;
        console.log("Nº de Extra1 no carrinho:" + Option2Extra1Encomendado);
    }
    document.getElementById("numeroExtra1Option2Encomendado").innerHTML = Option2Extra1Encomendado;
}

function retiraExtra1Option2(){
    Option2Extra1Encomendado = Option2Extra1Encomendado - 1;
    if(Option2Extra1Encomendado < 0){
        alert("Neste momento não tens este Extra em carrinho.");
        Option2Extra1Encomendado = 0
        console.log("Nº de Extra1 no carrinho:" + Option2Extra1Encomendado);
    } else {
        console.log("Nº de Extra1 no carrinho:" + Option2Extra1Encomendado);
    }
    document.getElementById("numeroExtra1Option2Encomendado").innerHTML = Option2Extra1Encomendado;
}

function encomendaExtra2Option2(){
    if( (Option2Extra1Encomendado + Option2Extra2Encomendado) == Option2Encomendadas ){
        alert("Não podes encomendar um número de extras superior às doses do teu snack.");
    }else{
        Option2Extra2Encomendado = Option2Extra2Encomendado + 1;
        console.log("Nº de Extra2 no carrinho:" + Option2Extra2Encomendado);
    }
        document.getElementById("numeroExtra2Option2Encomendado").innerHTML = Option2Extra2Encomendado;

}

function retiraExtra2Option2(){
    Option2Extra2Encomendado = Option2Extra2Encomendado - 1;
    if(Option2Extra2Encomendado < 0){
        alert("Neste momento não este Extra em carrinho.")
        Option2Extra2Encomendado = 0
        console.log("Nº de Extra2 no carrinho:" + Option2Extra2Encomendado);
    }else{
        console.log("Nº de Extra2 no carrinho:" + Option2Extra2Encomendado);
    }
    document.getElementById("numeroExtra2Option2Encomendado").innerHTML = Option2Extra2Encomendado;
}

function guardaEncomendaOption2(){
    localStorage.setItem("Option2Gravadas", Option2Encomendadas);
    localStorage.setItem("Extra1Option2Gravadas", Option2Extra1Encomendado);
    localStorage.setItem("Extra2Option2Gravadas", Option2Extra2Encomendado);
    localStorage.setItem("preçoOption2Gravadas", (Option2Encomendadas * Option2Preço));

    alert("A tua encomenda foi gravada: \n" 
    + localStorage.getItem("Option2Gravadas") + " dose(s) de gelados ;\n" 
    + localStorage.getItem("Extra1Option2Gravadas") + " unidade(s) de topping de baunilha ;\n"
    + localStorage.getItem("Extra2Option2Gravadas") + " unidade(s) de topping de chocolate e avelã .\n"
    + "\n Valor da tua encomenda: " + localStorage.getItem("preçoOption2Gravadas") + " €");

    alert("De seguida podes retroceder para a página principal." 
        + "\n Aí poderás continuar a encomendar ou finalizar a tua encomenda." 
        + "\n Em alternativa, ainda podes anular a tua encomenda de panquecas, ou recomeçá-la do zero.");
}

    function recomeçarOption2(){
        localStorage.setItem("Option2Gravadas", "0");
        localStorage.setItem("Extra1Option2Gravadas", "0");
        localStorage.setItem("Extra2Option2Gravadas", "0");

        alert("Neste momento o teu carrinho encontra-se vazio. \n" +
        "\nPodes regressar à página principal ou recomeçar a tua encomenda de gelados.")
    }

 
////////////////////////////////////////////////////////////////////////////
// 5 - FETCH PAGINA OPTION3
    fetch (url, requestOptions)
    .then(result=>result.json())
    .then(body=>{
        let local = document.querySelector("#option3_3");
        
            let novoTitulo = document.createElement("h4");
            let novaImagem = document.createElement("p");
            let novoPrice = document.createElement("p");
            let novoStock = document.createElement("p");
            let novaEncomenda = document.createElement("p");
            let novaDescricao = document.createElement("p");
            let novaIntExtras = document.createElement("p");
            let novoExtra0 = document.createElement("p");
            let novoExtra1 = document.createElement("p");
            let retroceder = document.createElement("p");
            let anularEncomenda = document.createElement("p");

            novoTitulo.innerHTML = `${body[2].name}`;
            novaImagem.innerHTML = `<img src='${body[2].image}'>`;
            novaEncomenda.innerHTML= 
            `<button id="orderOption3" onclick="encomendarOption3()" class="btn btn-success">Adiciona ao carrinho</button>
            <button id="cancelaOption3" onclick="cancelarOption3()" class="btn btn-danger">Retira do carrinho</button>
            <p> Encomendados:
            <button id="numeroOption3Encomendadas" class="btn btn-light">0</button>
            <button class="btn btn-warning">Doses</button>  
                Preço a pagar:                
            <button id="preçoOption3Encomendadas" class="btn btn-light"> 0</button>
            <button class="btn btn-warning">€</button>
            </p>`;

            novaDescricao.innerHTML = `<p class="text_left">${body[2].description}</p>`;
            novoPrice.innerHTML =  `Preço: ${body[2].price} € por dose individual`;
            localStorage.setItem("FetchPreçoOption3", `${body[2].price}`);
            novoStock.innerHTML = `<p id="stockOption3">Stock: ${body[2].stock} unidades disponíveis</p>`;
            localStorage.setItem("FetchStockOption3", `${body[2].stock}`);
            novaIntExtras.innerHTML = `<p class="text_left">Podes escolher um acompanhamento ao teu gosto: </p>`;            
            novoExtra0.innerHTML = `<p class="text_left" id="Option3Extra1"> 
            ${body[2].extras[0]} 
            <button id="orderExtra1Option3" onclick = "encomendaExtra1Option3()" class="btn btn-success">Adiciona ao carrinho</button>
            <button id="retiraExtra1Option3" onclick = "retiraExtra1Option3()" class="btn btn-danger">Retira do carrinho</button>
                Encomendado: 
            <button id="numeroExtra1Option3Encomendado" class="btn btn-light">0</button>
            <button class="btn btn-warning">Unidades</button></p>`;

            novoExtra1.innerHTML = `<p class="text_left" id="Option3Extra2">
            ${body[2].extras[1]}
            <button id="orderExtra2Option3" onclick = "encomendaExtra2Option3()" class="btn btn-success"> Adiciona ao carrinho </button>
            <button id="retireExtra2Option3" onclick = "retiraExtra2Option3()" class="btn btn-danger"> Retira do carrinho </button>
                Encomendado:
            <button id="numeroExtra2Option3Encomendado" class="btn btn-light">0</button>
            <button class="btn btn-warning">Unidades</button></p>`;
            retroceder.innerHTML = `<p class="text_left"> Grava a tua encomenda e retrocede à página principal 
            <a class="btn btn-primary" href='${body[2].link2}'>Retroceder</a>
            <a class="btn btn-secondary" onclick="guardaEncomendaOption3()">Gravar encomenda</a>
            </p>`
            anularEncomenda.innerHTML = `<p class="text_left">Também podes anular ou recomeçar a tua encomenda do zero
            <a class="btn btn-light" onclick="recomeçarOption3()" >Anular/Recomeçar</a></p>`;

            local.appendChild(novoTitulo);
            local.appendChild(novaImagem);
            local.appendChild(novaEncomenda);
            local.appendChild(novoStock);
            local.appendChild(novoPrice);
            local.appendChild(novaDescricao);
            local.appendChild(novaIntExtras);
            local.appendChild(novoExtra0);
            local.appendChild(novoExtra1);
            local.appendChild(retroceder);
            local.appendChild(anularEncomenda);
           

 });
 ////////////////////////////////////////////////////////////////////////////
 // 5.1 - DESENVOLVIMENTO PAGINA OPTION3
 let Option3Encomendadas = 0;
 let Option3Extra1Encomendado = 0;
 let Option3Extra2Encomendado = 0;
 let Option3StockString = localStorage.getItem("FetchStockOption3");
 let Option3Stock = parseInt(Option3StockString);
 let Option3PreçoString = localStorage.getItem("FetchPreçoOption3");
 let Option3Preço = parseInt(Option3PreçoString);
 
 function encomendarOption3 (){
    Option3Encomendadas = Option3Encomendadas + 1;
    if(Option3Encomendadas > Option3Stock){
        alert("Apenas estão disponíveis " + Option3Stock + " doses.")
        Option3Encomendadas = Option3Stock;
        console.log ("Nº de doses de Option3 encomendadas: " + Option3Encomendadas);
    } else {
        console.log ("Nº de doses de Option3 encomendadas: " + Option3Encomendadas);
    }
    document.getElementById("numeroOption3Encomendadas").innerHTML = Option3Encomendadas;
    document.getElementById("preçoOption3Encomendadas").innerHTML = parseInt((Option3Encomendadas * Option3Preço));
 }

 function cancelarOption3(){
    Option3Encomendadas = Option3Encomendadas - 1;
    Option3Extra1Encomendado = 0;
    Option3Extra2Encomendado = 0;
    document.getElementById("numeroExtra1Option3Encomendado").innerHTML = Option3Extra1Encomendado; 
    document.getElementById("numeroExtra2Option3Encomendado").innerHTML = Option3Extra2Encomendado;
    if (Option3Encomendadas < 0){
        alert('Neste momento não tens quaisquer tostas mistas no teu carrinho.');
        Option3Encomendadas = 0
        console.log ("Nº de doses de Option3 encomendadas: " + Option3Encomendadas);
    }else{
        console.log ("Nº de doses de Option3 encomendadas: " + Option3Encomendadas);
    }
    document.getElementById("numeroOption3Encomendadas").innerHTML = Option3Encomendadas;
    document.getElementById("preçoOption3Encomendadas").innerHTML = parseInt((Option3Encomendadas * Option3Preço));

}

function encomendaExtra1Option3(){
    if( (Option3Extra1Encomendado + Option3Extra2Encomendado) == Option3Encomendadas ){
        alert("Não podes encomendar um número de extras superior às doses do teu snack.");
    } else {
    Option3Extra1Encomendado = Option3Extra1Encomendado + 1;
    console.log("Nº de Extra1 no carrinho:" + Option3Extra1Encomendado);
    }
    document.getElementById("numeroExtra1Option3Encomendado").innerHTML = Option3Extra1Encomendado;
    }

function retiraExtra1Option3(){
    Option3Extra1Encomendado = Option3Extra1Encomendado - 1;
    if(Option3Extra1Encomendado < 0){
        alert("Neste momento não tens este Extra em carrinho.");
        Option3Extra1Encomendado = 0
        console.log("Nº de Extra1 no carrinho:" + Option3Extra1Encomendado);
    } else {
        console.log("Nº de Extra1 no carrinho:" + Option3Extra1Encomendado);
    }
    document.getElementById("numeroExtra1Option3Encomendado").innerHTML = Option3Extra1Encomendado;
}

function encomendaExtra2Option3(){
    if( (Option3Extra1Encomendado + Option3Extra2Encomendado) == Option3Encomendadas ){
        alert("Não podes encomendar um nº de extras superior às doses do teu snack.");
    } else {
    Option3Extra2Encomendado = Option3Extra2Encomendado + 1;
    console.log("Nº de Extra2 no carrinho:" + Option3Extra2Encomendado);
    }
    document.getElementById("numeroExtra2Option3Encomendado").innerHTML = Option3Extra2Encomendado;

}

function retiraExtra2Option3(){
    Option3Extra2Encomendado = Option3Extra2Encomendado - 1;
    if(Option3Extra2Encomendado < 0){
        alert("Neste momento não este Extra em carrinho.")
        Option3Extra2Encomendado = 0
        console.log("Nº de Extra2 no carrinho:" + Option3Extra2Encomendado);
    }else{
        console.log("Nº de Extra2 no carrinho:" + Option3Extra2Encomendado);
    }
    document.getElementById("numeroExtra2Option3Encomendado").innerHTML = Option3Extra2Encomendado;
}

function guardaEncomendaOption3(){
    localStorage.setItem("Option3Gravadas", Option3Encomendadas);
    localStorage.setItem("Extra1Option3Gravadas", Option3Extra1Encomendado);
    localStorage.setItem("Extra2Option3Gravadas", Option3Extra2Encomendado);
    localStorage.setItem("preçoOption3Gravadas", (Option3Encomendadas * Option3Preço));

    alert("A tua encomenda foi gravada: \n" 
    + localStorage.getItem("Option3Gravadas") + " dose(s) de tosta mista ;\n" 
    + localStorage.getItem("Extra1Option3Gravadas") + " unidade(s) de cobertura com ovo estrelado ;\n"
    + localStorage.getItem("Extra2Option3Gravadas") + " unidade(s) de cobertura com queijo fresco.\n"
    + "\n Valor da tua encomenda: " + localStorage.getItem("preçoOption3Gravadas") + " €");

    alert("De seguida podes retroceder para a página principal." 
        + "\n Aí poderás continuar a encomendar ou finalizar a tua encomenda." 
        + "\n Em alternativa, ainda podes anular a tua encomenda de tosta mista, ou recomeçá-la do zero.");
}

    function recomeçarOption3(){
        localStorage.setItem("Option3Gravadas", "0");
        localStorage.setItem("Extra1Option3Gravadas", "0");
        localStorage.setItem("Extra2Option3Gravadas", "0");

        alert("Neste momento o teu carrinho encontra-se vazio. \n" +
        "\nPodes regressar à página principal ou recomeçar a tua encomenda de tosta mista.")
    }


////////////////////////////////////////////////////////////////////////////
// 6 - FETCH PAGINA OPTION4
    fetch (url, requestOptions)
    .then(result=>result.json())
    .then(body=>{
        let local = document.querySelector("#option4_4");
        
            let novoTitulo = document.createElement("h4");
            let novaImagem = document.createElement("p");
            let novoPrice = document.createElement("p");
            let novoStock = document.createElement("p");
            let novaEncomenda = document.createElement("p");
            let novaDescricao = document.createElement("p");
            let novaIntExtras = document.createElement("p");
            let novoExtra0 = document.createElement("p");
            let novoExtra1 = document.createElement("p");
            let retroceder = document.createElement("p");
            let anularEncomenda = document.createElement("p");

            
            novoTitulo.innerHTML = `${body[3].name}`;
            novaImagem.innerHTML = `<img src='${body[3].image}'>`;
            novaEncomenda.innerHTML= 
            `<button id="orderOption4" onclick="encomendarOption4()" class="btn btn-success">Adiciona ao carrinho</button>
            <button id="cancelaOption4" onclick="cancelarOption4()" class="btn btn-danger">Retira do carrinho</button>
            <p> Encomendados:
            <button id="numeroOption4Encomendadas" class="btn btn-light">0</button>
            <button class="btn btn-warning">Doses</button>  
                Preço a pagar:                
            <button id="preçoOption4Encomendadas" class="btn btn-light"> 0</button>
            <button class="btn btn-warning">€</button>
            </p>`;

            novaDescricao.innerHTML = `<p class="text_left">${body[3].description}</p>`;
            novoPrice.innerHTML =  `Preço: ${body[3].price} € por dose individual`;
            localStorage.setItem("FetchPreçoOption4", `${body[3].price}`);
            novoStock.innerHTML = `<p id="stockOption4">Stock: ${body[3].stock} unidades disponíveis</p>`;
            localStorage.setItem("FetchStockOption4", `${body[3].stock}`);
            novaIntExtras.innerHTML = `<p class="text_left">Podes escolher um acompanhamento ao teu gosto: </p>`;            
            novoExtra0.innerHTML = `<p class="text_left" id="Option4Extra1"> 
            ${body[3].extras[0]} 
            <button id="orderExtra1Option4" onclick = "encomendaExtra1Option4()" class="btn btn-success">Adiciona ao carrinho</button>
            <button id="retiraExtra1Option4" onclick = "retiraExtra1Option4()" class="btn btn-danger">Retira do carrinho</button>
                Encomendado: 
            <button id="numeroExtra1Option4Encomendado" class="btn btn-light">0</button>
            <button class="btn btn-warning">Unidades</button></p>`;

            novoExtra1.innerHTML = `<p class="text_left" id="Option4Extra2">
            ${body[3].extras[1]}
            <button id="orderExtra2Option4" onclick = "encomendaExtra2Option4()" class="btn btn-success"> Adiciona ao carrinho </button>
            <button id="retireExtra2Option4" onclick = "retiraExtra2Option4()" class="btn btn-danger"> Retira do carrinho </button>
                Encomendado:
            <button id="numeroExtra2Option4Encomendado" class="btn btn-light">0</button>
            <button class="btn btn-warning">Unidades</button></p>`;
            retroceder.innerHTML = `<p class="text_left"> Grava a tua encomenda e retrocede à página principal 
            <a class="btn btn-primary" href='${body[3].link2}'>Retroceder</a>
            <a class="btn btn-secondary" onclick="guardaEncomendaOption4()">Gravar encomenda</a>
            </p>`
            anularEncomenda.innerHTML = `<p class="text_left">Também podes anular ou recomeçar a tua encomenda do zero
            <a class="btn btn-light" onclick="recomeçarOption4()" >Anular/Recomeçar</a></p>`;

            local.appendChild(novoTitulo);
            local.appendChild(novaImagem);
            local.appendChild(novaEncomenda);
            local.appendChild(novoStock);
            local.appendChild(novoPrice);
            local.appendChild(novaDescricao);
            local.appendChild(novaIntExtras);
            local.appendChild(novoExtra0);
            local.appendChild(novoExtra1);
            local.appendChild(retroceder);
            local.appendChild(anularEncomenda);
           

 });
 ////////////////////////////////////////////////////////////////////////////
 // 6.1 -DESENVOLVIMENTO PAGINA OPTION4
 let Option4Encomendadas = 0;
 let Option4Extra1Encomendado = 0;
 let Option4Extra2Encomendado = 0;
 let Option4StockString = localStorage.getItem("FetchStockOption4");
 let Option4Stock = parseInt(Option4StockString);
 let Option4PreçoString = localStorage.getItem("FetchPreçoOption4");
 let Option4Preço = parseInt(Option4PreçoString);
 
 function encomendarOption4 (){
    Option4Encomendadas = Option4Encomendadas + 1;
    if(Option4Encomendadas > Option4Stock){
        alert("Apenas estão disponíveis " + Option4Stock + " doses.")
        Option4Encomendadas = Option4Stock;
        console.log ("Nº de doses de Option4 encomendadas: " + Option4Encomendadas);
    } else {
        console.log ("Nº de doses de Option4 encomendadas: " + Option4Encomendadas);
    }
    document.getElementById("numeroOption4Encomendadas").innerHTML = Option4Encomendadas;
    document.getElementById("preçoOption4Encomendadas").innerHTML = parseInt((Option4Encomendadas * Option3Preço));
 }

 function cancelarOption4(){
    Option4Encomendadas = Option4Encomendadas - 1;
    Option4Extra1Encomendado = 0;
    Option4Extra2Encomendado = 0;
    document.getElementById("numeroExtra1Option4Encomendado").innerHTML = Option4Extra1Encomendado; 
    document.getElementById("numeroExtra2Option4Encomendado").innerHTML = Option4Extra2Encomendado; 
    if (Option4Encomendadas < 0){
        alert('Neste momento não tens quaisquer wraps vegetarianos no teu carrinho.');
        Option4Encomendadas = 0
        console.log ("Nº de doses de Option4 encomendadas: " + Option4Encomendadas);
    }else{
        console.log ("Nº de doses de Option4 encomendadas: " + Option4Encomendadas);
    }
    document.getElementById("numeroOption4Encomendadas").innerHTML = Option4Encomendadas;
    document.getElementById("preçoOption4Encomendadas").innerHTML = parseInt((Option4Encomendadas * Option4Preço));

}

function encomendaExtra1Option4(){
    if((Option4Extra1Encomendado + Option4Extra2Encomendado) ==  Option4Encomendadas){
        alert("Não podes encomendar um nº de extras superior às doses do teu snack.");
    } else {
    Option4Extra1Encomendado = Option4Extra1Encomendado + 1;
    console.log("Nº de Extra1 no carrinho:" + Option4Extra1Encomendado);
    }
    document.getElementById("numeroExtra1Option4Encomendado").innerHTML = Option4Extra1Encomendado;
}

function retiraExtra1Option4(){
    Option4Extra1Encomendado = Option4Extra1Encomendado - 1;
    if(Option4Extra1Encomendado < 0){
        alert("Neste momento não tens este Extra em carrinho.");
        Option4Extra1Encomendado = 0
        console.log("Nº de Extra1 no carrinho:" + Option4Extra1Encomendado);
    } else {
        console.log("Nº de Extra1 no carrinho:" + Option4Extra1Encomendado);
    }
    document.getElementById("numeroExtra1Option4Encomendado").innerHTML = Option4Extra1Encomendado;
}

function encomendaExtra2Option4(){
     if((Option4Extra1Encomendado + Option4Extra2Encomendado) ==  Option4Encomendadas){
        alert("Não podes encomendar um nº de extras superior às doses do teu snack.");
    } else {
    Option4Extra2Encomendado = Option4Extra2Encomendado + 1;
    console.log("Nº de Extra2 no carrinho:" + Option4Extra2Encomendado);
    document.getElementById("numeroExtra2Option4Encomendado").innerHTML = Option4Extra2Encomendado;
    }
}

function retiraExtra2Option4(){
    Option4Extra2Encomendado = Option4Extra2Encomendado - 1;
    if(Option4Extra2Encomendado < 0){
        alert("Neste momento não este Extra em carrinho.")
        Option4Extra2Encomendado = 0
        console.log("Nº de Extra2 no carrinho:" + Option4Extra2Encomendado);
    }else{
        console.log("Nº de Extra2 no carrinho:" + Option4Extra2Encomendado);
    }
    document.getElementById("numeroExtra2Option4Encomendado").innerHTML = Option4Extra2Encomendado;
}

function guardaEncomendaOption4(){
    localStorage.setItem("Option4Gravadas", Option4Encomendadas);
    localStorage.setItem("Extra1Option4Gravadas", Option4Extra1Encomendado);
    localStorage.setItem("Extra2Option4Gravadas", Option4Extra2Encomendado);
    localStorage.setItem("preçoOption4Gravadas", (Option4Encomendadas * Option4Preço));

    alert("A tua encomenda foi gravada: \n" 
    + localStorage.getItem("Option4Gravadas") + " dose(s) de wrap vegetariano ;\n" 
    + localStorage.getItem("Extra1Option4Gravadas") + " unidade(s) de recheio de tofu ;\n"
    + localStorage.getItem("Extra2Option4Gravadas") + " unidade(s) de recheio de seitan.\n"
    + "\n Valor da tua encomenda: " + localStorage.getItem("preçoOption4Gravadas") + " €");

    alert("De seguida podes retroceder para a página principal." 
        + "\n Aí poderás continuar a encomendar ou finalizar a tua encomenda." 
        + "\n Em alternativa, ainda podes anular a tua encomenda de tosta mista, ou recomeçá-la do zero.");
}

    function recomeçarOption4(){
        localStorage.setItem("Option4Gravadas", "0");
        localStorage.setItem("Extra1Option4Gravadas", "0");
        localStorage.setItem("Extra2Option4Gravadas", "0");

        alert("Neste momento o teu carrinho encontra-se vazio. \n" +
        "\nPodes regressar à página principal ou recomeçar a tua encomenda de wrap vegetariano.")
    }



////////////////////////////////////////////////////////////////////////////
 // 7 - DESENVOLVIMENTO PAGINA RESUMO DAS ENCOMENDAS - SNACKS

 fetch (url, requestOptions)
.then(result=>result.json())
.then(body=>{
    let localSnack = document.getElementById("tituloSnacks");

    let tituloSnack = document.createElement("h3");
    let resumoSnack1 = document.createElement("p");
    let resumoSnack2 = document.createElement("p");
    let resumoSnack3 = document.createElement("p");
    let resumoSnack4 = document.createElement("p");
    
            resumoSnack1.innerHTML = `<div id="snack1Container">${body[0].name}: 
            <p>Encomendadas: <button id="resumoSnack1unid" class="btn btn-warning">0</button> 
            <button class="btn btn-warning">Doses</button>
            Preço:<button id="resumoSnack1euro" class="btn btn-warning">0</button> 
            <button class="btn btn-warning">€</button></p></div>`;
            resumoSnack2.innerHTML =`<div id="snack2Container">${body[1].name}: 
            <p>Encomendados: <button id="resumoSnack2unid" class="btn btn-warning">0</button> 
            <button class="btn btn-warning">Doses</button>
            Preço:<button id="resumoSnack2euro" class="btn btn-warning">0</button> 
            <button class="btn btn-warning">€</button></p></div>`;
            resumoSnack3.innerHTML =`<div id="snack3Container">${body[2].name}: 
            <p>Encomendados: <button id="resumoSnack3unid" class="btn btn-warning">0</button> 
            <button class="btn btn-warning">Doses</button>
            Preço:<button id="resumoSnack3euro" class="btn btn-warning">0</button> 
            <button class="btn btn-warning">€</button></p></div>`;        
            resumoSnack4.innerHTML =`<div id="snack4Container">${body[3].name}: 
            <p>Encomendados: <button id="resumoSnack4unid" class="btn btn-warning">0</button> 
            <button class="btn btn-warning">Doses</button>
            Preço:<button id="resumoSnack4euro" class="btn btn-warning">0</button> 
            <button class="btn btn-warning">€</button></p></div>`;
                       
        tituloSnack.innerHTML= `<h3 class="text_center">Encomenda de Snacks</h3>`;
            
        localSnack.appendChild(tituloSnack);
        localSnack.appendChild(resumoSnack1);
        localSnack.appendChild(resumoSnack2);
        localSnack.appendChild(resumoSnack3);
        localSnack.appendChild(resumoSnack4);
        
        let QuantidadeTotalSnack1 = document.querySelector("#resumoSnack1unid");
        QuantidadeTotalSnack1.innerHTML = (localStorage.getItem("panquecasGravadas")*1);
        let PreçoTotalSnack1 = document.querySelector("#resumoSnack1euro");
        PreçoTotalSnack1.innerHTML = (localStorage.getItem("panquecasGravadas") * localStorage.getItem("FetchPreçoPanquecas"));
        
        if( (localStorage.getItem("panquecasGravadas")*1) == 0){
            let snack1ContainerShow = document.getElementById("snack1Container");
            snack1ContainerShow.classList.add("desaparecer");
        } 

        let QuantidadeTotalSnack2 = document.querySelector("#resumoSnack2unid");
        QuantidadeTotalSnack2.innerHTML = (localStorage.getItem("Option2Gravadas")*1);
        let PreçoTotalSnack2 = document.querySelector("#resumoSnack2euro");
        PreçoTotalSnack2.innerHTML = (localStorage.getItem("Option2Gravadas") * localStorage.getItem("FetchPreçoOption2"));

        if( (localStorage.getItem("Option2Gravadas")*1) == 0){
            let snack2ContainerShow = document.getElementById("snack2Container");
            snack2ContainerShow.classList.add("desaparecer");
        } 

        let QuantidadeTotalSnack3 = document.querySelector("#resumoSnack3unid");
        QuantidadeTotalSnack3.innerHTML = (localStorage.getItem("Option3Gravadas")*1);
        let PreçoTotalSnack3 = document.querySelector("#resumoSnack3euro");
        PreçoTotalSnack3.innerHTML = (localStorage.getItem("Option3Gravadas") * localStorage.getItem("FetchPreçoOption3"));

        if( (localStorage.getItem("Option3Gravadas")*1) == 0){
            let snack3ContainerShow = document.getElementById("snack3Container");
            snack3ContainerShow.classList.add("desaparecer");
        } 

        let QuantidadeTotalSnack4 = document.querySelector("#resumoSnack4unid");
        QuantidadeTotalSnack4.innerHTML = (localStorage.getItem("Option4Gravadas")*1);
        let PreçoTotalSnack4 = document.querySelector("#resumoSnack4euro");
        PreçoTotalSnack4.innerHTML = (localStorage.getItem("Option4Gravadas") * localStorage.getItem("FetchPreçoOption4"));

        if( (localStorage.getItem("Option4Gravadas")*1) == 0){
            let snack4ContainerShow = document.getElementById("snack4Container");
            snack4ContainerShow.classList.add("desaparecer");
        } 

});
////////////////////////////////////////////////////////////////////////////
 // 7.1 - DESENVOLVIMENTO PAGINA RESUMO DAS ENCOMENDAS - EXTRAS

 fetch (url, requestOptions)
.then(result=>result.json())
.then(body=>{
        let localExtra = document.getElementById("tituloExtras");
        
        let Option1Extra1 = document.createElement("p");
        let Option1Extra2 = document.createElement("p");
        let Option2Extra1 = document.createElement("p");
        let Option2Extra2 = document.createElement("p");
        let Option3Extra1 = document.createElement("p");
        let Option3Extra2 = document.createElement("p");
        let Option4Extra1 = document.createElement("p");
        let Option4Extra2 = document.createElement("p");
        let tituloExtra = document.createElement("h3");

        Option1Extra1.innerHTML = `<div id="Option1Extra1unidContainer">${body[0].extras[0]}: 
        <p>Encomendados: <button id="resumoOption1Extra1unid"class="btn btn-success" >0</button> 
        <button class="btn btn-success">Doses</button></p></div>`;
        Option1Extra2.innerHTML = `<div id="Option1Extra2unidContainer">${body[0].extras[1]}: 
        <p>Encomendados: <button id="resumoOption1Extra2unid" class="btn btn-success">0</button> 
        <button class="btn btn-success">Doses</button></p></div>`;
        Option2Extra1.innerHTML = `<div id="Option2Extra1unidContainer">${body[1].extras[0]}: 
        <p>Encomendados: <button id="resumoOption2Extra1unid" class="btn btn-success">0</button> 
        <button class="btn btn-success">Doses</button></p></div>`;
        Option2Extra2.innerHTML = `<div id="Option2Extra2unidContainer">${body[1].extras[1]}: 
        <p>Encomendados: <button id="resumoOption2Extra2unid" class="btn btn-success">0</button> 
        <button class="btn btn-success">Doses</button></p></div>`;
        Option3Extra1.innerHTML = `<div id="Option3Extra1unidContainer">${body[2].extras[0]}: 
        <p>Encomendados: <button id="resumoOption3Extra1unid" class="btn btn-success">0</button> 
        <button class="btn btn-success">Doses</button></p></div>`;
        Option3Extra2.innerHTML = `<div id="Option3Extra2unidContainer">${body[2].extras[1]}: 
        <p>Encomendados: <button id="resumoOption3Extra2unid" class="btn btn-success">0</button> 
        <button class="btn btn-success">Doses</button></p></div>`;
        Option4Extra1.innerHTML = `<div id="Option4Extra1unidContainer">${body[3].extras[0]}: 
        <p>Encomendados: <button id="resumoOption4Extra1unid" class="btn btn-success">0</button> 
        <button class="btn btn-success">Doses</button></p></div>`;
        Option4Extra2.innerHTML = `<div id="Option4Extra2unidContainer">${body[3].extras[1]}: 
        <p>Encomendados: <button id="resumoOption4Extra2unid" class="btn btn-success">0</button> 
        <button class="btn btn-success">Doses</button></p></div>`;
        

        tituloExtra.innerHTML = `<h3 class="text_center"> Encomenda de Extras</h3>`;

        localExtra.appendChild(tituloExtra);
        localExtra.appendChild(Option1Extra1);
        localExtra.appendChild(Option1Extra2);
        localExtra.appendChild(Option2Extra1);
        localExtra.appendChild(Option2Extra2);
        localExtra.appendChild(Option3Extra1);
        localExtra.appendChild(Option3Extra2);
        localExtra.appendChild(Option4Extra1);
        localExtra.appendChild(Option4Extra2);
        
        let QuantidadeTotalSnack1Extra1 = document.querySelector("#resumoOption1Extra1unid");
        QuantidadeTotalSnack1Extra1.innerHTML = (localStorage.getItem("Extra1panquecasGravadas")*1);

        if( (localStorage.getItem("Extra1panquecasGravadas")*1) == 0){
            let Option1Extra1unidContainerShow = document.getElementById("Option1Extra1unidContainer");
            Option1Extra1unidContainerShow.classList.add("desaparecer");
        } 

        let QuantidadeTotalSnack1Extra2 = document.querySelector("#resumoOption1Extra2unid");
        QuantidadeTotalSnack1Extra2.innerHTML = (localStorage.getItem("Extra2panquecasGravadas")*1);

        if( (localStorage.getItem("Extra2panquecasGravadas")*1) == 0){
            let Option1Extra2unidContainerShow = document.getElementById("Option1Extra2unidContainer");
            Option1Extra2unidContainerShow.classList.add("desaparecer");
        } 

        let QuantidadeTotalSnack2Extra1 = document.querySelector("#resumoOption2Extra1unid");
        QuantidadeTotalSnack2Extra1.innerHTML = (localStorage.getItem("Extra1Option2Gravadas")*1);

        if( (localStorage.getItem("Extra1Option2Gravadas")*1) == 0){
            let Option2Extra1unidContainerShow = document.getElementById("Option2Extra1unidContainer");
            Option2Extra1unidContainerShow.classList.add("desaparecer");
        } 

        let QuantidadeTotalSnack2Extra2 = document.querySelector("#resumoOption2Extra2unid");
        QuantidadeTotalSnack2Extra2.innerHTML = (localStorage.getItem("Extra2Option2Gravadas")*1);

        if( (localStorage.getItem("Extra2Option2Gravadas")*1) == 0){
            let Option2Extra2unidContainerShow = document.getElementById("Option2Extra2unidContainer");
            Option2Extra2unidContainerShow.classList.add("desaparecer");
        } 
        let QuantidadeTotalSnack3Extra1 = document.querySelector("#resumoOption3Extra1unid");
        QuantidadeTotalSnack3Extra1.innerHTML = (localStorage.getItem("Extra1Option3Gravadas")*1);

        if( (localStorage.getItem("Extra1Option3Gravadas")*1) == 0){
            let Option3Extra1unidContainerShow = document.getElementById("Option3Extra1unidContainer");
            Option3Extra1unidContainerShow.classList.add("desaparecer");
        } 

        let QuantidadeTotalSnack3Extra2 = document.querySelector("#resumoOption3Extra2unid");
        QuantidadeTotalSnack3Extra2.innerHTML = (localStorage.getItem("Extra2Option3Gravadas")*1);

        if( (localStorage.getItem("Extra2Option3Gravadas")*1) == 0){
            let Option3Extra2unidContainerShow = document.getElementById("Option3Extra2unidContainer");
            Option3Extra2unidContainerShow.classList.add("desaparecer");
        }

        let QuantidadeTotalSnack4Extra1 = document.querySelector("#resumoOption4Extra1unid");
        QuantidadeTotalSnack4Extra1.innerHTML = (localStorage.getItem("Extra1Option4Gravadas")*1);

        if( (localStorage.getItem("Extra1Option4Gravadas")*1) == 0){
            let Option4Extra1unidContainerShow = document.getElementById("Option4Extra1unidContainer");
            Option4Extra1unidContainerShow.classList.add("desaparecer");
        }
        let QuantidadeTotalSnack4Extra2 = document.querySelector("#resumoOption4Extra2unid");
        QuantidadeTotalSnack4Extra2.innerHTML = (localStorage.getItem("Extra2Option4Gravadas")*1);

        if( (localStorage.getItem("Extra2Option4Gravadas")*1) == 0){
            let Option4Extra2unidContainerShow = document.getElementById("Option4Extra2unidContainer");
            Option4Extra2unidContainerShow.classList.add("desaparecer");
        }

        let valorFinalEncomenda = document.querySelector("#intValorEncomenda");

        let ValorFinalEuro = document.createElement("p");

        ValorFinalEuro.innerHTML = `<button id="valorFinal" class="btn btn-warning">0</button>
                                <button class="btn btn-warning">€</button>`;

        valorFinalEncomenda.appendChild(ValorFinalEuro);

        let ContasFinais =
        ((localStorage.getItem("preçoOption2Gravadas")*1))+
        ((localStorage.getItem("preçoOption3Gravadas")*1))+
        ((localStorage.getItem("preçoOption4Gravadas")*1))+
        ((localStorage.getItem("preçoPanquecasGravadas")*1));
        console.log(ContasFinais);
    
        let valorFinalEuroApresentar = document.getElementById("valorFinal");
        valorFinalEuroApresentar.innerHTML = ContasFinais ;

        if(ContasFinais == 0){
            alert("Não tens nenhum produto no teu carrinho." +
                    "\n Retrocede para poderes encomendar.");
        }
       
    });


   

    
    
