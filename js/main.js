function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    //window.open("https://web.digitalinnovation.one/home");
    window.location.href = "https://web.digitalinnovation.one/home";
}

function trocar(elemento) {
    //document.getElementById('mousemove').innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui"
        //document.getElementById('mousemove').innerHTML = "Passe o mouse aqui"
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}




/*
function clicou() {
    alert("Obrigado por clicar")
}*/

/*
function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/

/*
function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}*/

/*
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMonth() + 1);
alert(d.getMinutes());
alert(d.getUTCFullYear());
alert(d);*/

/*
var count;
for (count = 0; count <= 5; count++) {
    alert(count)
}*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count = count + 1; //ou count ++ que é a mesma coisa que mais 1, ficando count++
}*/

/*
var idade = prompt("Qual sua idade");
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}*/

/*
var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]
console.log(frutas);
alert(frutas[1].nome);*/

/*
var fruta = { nome: "maça", cor: "vermelha" }
console.log(fruta)
console.log(fruta.nome)
console.log(fruta.cor)*/

/*
var lista = ["maça", "pera", "laranja"];
lista.push("uva");
//lista.pop();

console.log(lista[1]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));*/

/*
var nome = "Rafael Galleani";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2)
console.log(nome);
console.log(idade + idade2);
console.log( frase.replace("Japão", "Brasil"))*/