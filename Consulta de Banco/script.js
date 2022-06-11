  bancos=()=>{
    var codbanco =document.getElementById('codbanco').value;
    var url=`https://brasilapi.com.br/api/banks/v1/${codbanco}`;
  

    var servico=new XMLHttpRequest();
    servico.open('GET' ,url)

    servico.onload =()=>{
        var resposta =JSON.parse(servico.responseText);
        document.getElementById("dadosbancos").innerHTML=
        `Código do banco : ${resposta.code}<br/>
         Nome do banco: ${resposta.name}<br/>
         Nome Completo: ${resposta.fullName}<br/>
        `
    }
        

    servico.send();



}