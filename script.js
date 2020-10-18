document.querySelector(".hbg").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")   
);
document.querySelector("#qtde").addEventListener("change", AtualizarPreco)
document.querySelector("#js").addEventListener("change", AtualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", AtualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", AtualizarPreco)
document.querySelector("#prazo").addEventListener("change", function (){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    AtualizarPreco ()
})

function AtualizarPreco(){
    const quant = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value 

    let preco = quant * 100;
    if (temJS) preco *= 1.1
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}
