async function buscaEndereco(cep) {
    let msgErro = document.getElementById('erro');
    msgErro.innerHTML = "";
    try{
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let consultaConvertida = await consultaCEP.json();
        
        if(consultaConvertida.erro){
            throw Error('CEP inválido');
        }

        preencheCampos(consultaConvertida);

    }catch(erro){
        msgErro.innerHTML = `<p>Cep inválido. Tente novamente</p>`;
    }
}

function preencheCampos(dados) {
    let endereco = dados.logradouro;
    let bairro = dados.bairro;
    let cidade = dados.localidade;
    let uf = dados.uf;
    
    document.getElementById('endereco').value = endereco;
    document.getElementById('bairro').value = bairro;
    document.getElementById('cidade').value = cidade;
    document.getElementById('estado').value = uf;

}

let campoCEP = document.getElementById('cep');
campoCEP.addEventListener('focusout', () => buscaEndereco(campoCEP.value));
