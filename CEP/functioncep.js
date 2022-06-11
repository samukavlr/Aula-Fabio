function cep(){

    let cep = document.getElementById("cep").value; 
    let url = 'https://viacep.com.br/ws/'+ cep + '/jason/' ;
    var servico = new XMLHttpRequest();


    servico.open('get', url);

    // servico.onerror =function(e){
    //     document.getElementById("endereco").innerHTML ="erro";
    // }

    servico.onload = () =>{
        

        var resposta=JSON.parse(servico.responseText);

        if(resposta.erro == "true"){
            document.getElementById("endereco").innerHTML = "CEP inválido";
        }
        else{
        document.getElementById("endereco").innerHTML = "CEP:" + resposta.cep +"<br>"+ "Logradouro:" + resposta.logradouro+"<br>"+ "Bairro:"+ resposta.bairro;
        }
    }

    // alert(servico.onload)
    servico.send();
    
}