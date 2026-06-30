const celular = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);

if (celular) {
    alert("📱 O Revisa+ foi desenvolvido para computadores. Algumas funções podem não funcionar corretamente no celular.");
}

let whiteTheme = document.body;
let buttonTheme = document.querySelector(".theme-button");

buttonTheme.addEventListener ("click", function() {
    whiteTheme.classList.toggle("dark");
});

let botaoLogin = document.querySelector(".botao-login")
let loginContainer = document.querySelector("#login-container")
let site = document.querySelector("#site")


botaoLogin.addEventListener("click", () => {

    let email = document.querySelector(".email").value.trim()
    let senha = document.querySelector(".senha").value.trim()

    let emailSalvo = localStorage.getItem("email")
    let senhaSalva = localStorage.getItem("senha")

    if (email === "" || senha === "") {
        alert("Preencha E-mail e Senha!")
        return
        }

    else {
        loginContainer.classList.add("hidden")
        site.classList.remove("hidden")
        }
    })

    let buttonThemeSite = document.querySelector(".theme-button-site");

    buttonThemeSite.addEventListener ("click", function() {
    whiteTheme.classList.toggle("dark");
});

//Redação

let redacaoButton = document.querySelector(".redacao");
let redacaoContainer = document.querySelector("#redacao-container")

redacaoButton.addEventListener("click", function() {
    site.classList.add("hidden")
    redacaoContainer.classList.remove("hidden")
})

let buttonRevisãoR = document.querySelector(".button-revisao-r");
let redacaoContainerRevisao = document.querySelector("#redacao-container-revisao");

buttonRevisãoR.addEventListener ("click", function() {
    redacaoContainer.classList.add("hidden");
    redacaoContainerRevisao.classList.remove("hidden");
})

let gabaritoRedacao = document.querySelector(".gabarito-redacao");
let gabaritoContainerRedacao = document.querySelector("#gabarito-container-redacao")

gabaritoRedacao.addEventListener("click", function(event) {
    event.preventDefault();

    redacaoContainerRevisao.classList.add("hidden");
    gabaritoContainerRedacao.classList.remove("hidden");
});

//História

let historiaButton = document.querySelector(".historia");
let historiaContainer = document.querySelector("#historia-container")

historiaButton.addEventListener("click", function() {
    site.classList.add("hidden")
    historiaContainer.classList.remove("hidden")
})

let buttonRevisãoH = document.querySelector(".button-revisao-h");
let historiaContainerRevisao = document.querySelector("#historia-container-revisao");

buttonRevisãoH.addEventListener ("click", function() {
    historiaContainer.classList.add("hidden");
    historiaContainerRevisao.classList.remove("hidden");
})

let gabaritoHistoria = document.querySelector(".gabarito-historia");
let gabaritoContainerHistoria = document.querySelector("#gabarito-container-historia")

gabaritoHistoria.addEventListener("click", function(event) {
    event.preventDefault();

    historiaContainerRevisao.classList.add("hidden");
    gabaritoContainerHistoria.classList.remove("hidden");
});

let cienciasButton = document.querySelector(".ciencias");
let cienciasContainer = document.querySelector("#ciencias-container")
let buttonTeoriaC = document.querySelector(".button-teoria-c")

cienciasButton.addEventListener("click", function() {
    site.classList.add("hidden")
    cienciasContainer.classList.remove("hidden")
})

buttonTeoriaC.addEventListener("click", function() {
    alert ("INFELIZMENTE POR O CONTEÚDO SER MUITO EXTENSO EU NÃO CONSEGUI FAZER AS TEORIAS MAS A REVISÃO ESTÁ TODO O CONTEÚDO...")
})

// ESPANHOL

let espanholButton = document.querySelector(".espanhol");
let espanholContainer = document.querySelector("#espanhol-container")

espanholButton.addEventListener("click", function() {
    site.classList.add("hidden")
    espanholContainer.classList.remove("hidden")
})
