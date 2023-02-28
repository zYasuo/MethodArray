const vagas = [];

function listarVagas() {
    //Transformando tudo em um texto que consigo exibir utilizando o reduce
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
        textoFinal += indice + ". "
        textoFinal += vaga.nome 
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto);
}

function newVaga () {
    const nome = prompt("Informe um nome para a vaga");
    const descricao = prompt("Informe uma descricao para a vaga");
    const dataLimite = prompt("Informe uma data limite para a vaga");

    const confirmacao = confirm("Deseja criar uma nova vaga com essas informações?\n"+
    "Nome: " + nome + "\nDescrição: " + "\n Data Limite: " + dataLimite);

    if(confirmacao) {
        const novaVaga = {
            nome, 
            descricao, 
            dataLimite,
            candidatos: []
        };
        vagas.push(novaVaga)
        alert("Vaga Criada");
    }

}

function exibirVaga() {
    //Pegando o indice
    const indice = prompt("Informe o indice da vaga que deseja exibir:");
    
    if (indice >= vagas.length || indice < 0) {

        alert("Indice Inválido")
        return
    }

    const vaga = vagas[indice];

    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => {
        return textoFinal + "\n - " + candidato
    });

    alert(
        "Vaga nº " + indice + 
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos Inscritos: " + candidatosEmTexto
    )
};

function inscreverCandidato () {
    const candidato = prompt("Informe o nome do Candidato(a)?");
    const indice = prompt("Informe o indice da vaga para qual o(a) deseja se inscrever");
    const vaga = vagas[indice]

    const confirm = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\n Data Limite: " + vaga.dataLimite)

        if(confirm) {
            vaga.candidatos.push(candidato);
            alert("Inscrição Realizada")
        }
};

function excluirVaga() {
    const indice = prompt("Informe o indice da vaga que deseja excluir")
    const vaga = vaga[indice];

    const confirmacao = confirm (
        "Tem certeza que deseja 1xcluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\n Data Limite: " + vaga.dataLimite)

        if(confirmacao) {
            vaga.splice(indice, 1)
            alert("Vaga excluida")
        }

}

function exibirMenu () {
    const opcao = prompt ("Cadastro de Vaga de Emprego" + 
    "\n\nEscolha uma das opções:" +
    "\n1. Listar Vagas Disponiveis" +
    "\n2. Criar uma nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um(a) candidato(a)" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair"
    )

    return opcao
}

function executar () {
    let opcao = ""

    do {

        opcao = exibirMenu()

        switch(opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirMenu()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo")
                default:
                    alert("Opção invalida")
        }

    } while( opcao !== "6")
}

executar()