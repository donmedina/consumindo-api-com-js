async function buscaEndereco(cep) {
    try{
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let consultaConvertida = await consultaCEP.json();
        if(consultaConvertida.erro){
            throw Error('CEP inválido');
        }
        console.log(consultaConvertida);
        return consultaConvertida
    }catch(erro){
        console.log(erro);
    }
}