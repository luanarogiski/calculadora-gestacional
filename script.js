function formataData(dataHora) {
    let dia = dataHora.getDate().toString().padStart(2, '0');
    let mes = (dataHora.getMonth() + 1).toString().padStart(2, '0');
    let ano = dataHora.getFullYear();
    return `${ano}-${mes}-${dia}`; 
}

document.getElementById("dataAtual").value = formataData(new Date());

document.getElementById("btnCalcular").onclick = function() {
    let dumUS = document.getElementById("dumUS").value;
    let dataAtual = document.getElementById("dataAtual").value

    let dif = new Date(dataAtual) - new Date(dumUS)
    let difDias = dif / (1000 * 60 * 60 * 24);
    console.log(difDias);

    if (difDias) {
        let diasSemana = 7;
        let qtdSemanas = Math.trunc(difDias / diasSemana);
        let qtdDias = difDias - (diasSemana * qtdSemanas);
        let mensagem = `${qtdSemanas} semanas`;
        if (qtdDias > 0) {
            mensagem += ` e ${qtdDias} dias`; 
        }
        document.getElementById("resultado").innerHTML= mensagem;
    }             
}  