function tempo() {
    cidade= document.getElementById('cidade')
    var url = 'https://api.hgbrasil.com/weather?format=json-cors&key=3e49f6b1&city_name=SP';

    var servico = new XMLHttpRequest();

    servico.open('GET', url); 

    servico.onload = () => {
        var resposta = JSON.parse(servico.responseText);
        document.getElementById('dadosdotempo').innerHTML = 
        'Cidade: ' + resposta.results.city + '<br>' 
    }
    servico.send();
}