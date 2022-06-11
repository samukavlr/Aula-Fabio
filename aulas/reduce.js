
let compras= [
    {
        id: 3,
        quant: 2,
        valor: 60.20    
    },
    {
        id: 9,
        quant: 1,
        valor: 50.30
    },
    {
        id: 6,
        quant: 3,
        valor: 80.40
    },
    {
        id: 10,
        quant: 1,
        valor: 10.20
    },
    {
        id: 20,
        quant: 1,
        valor: 54.66
    },
];

let total = compras.map(function(item){
    return item.valor * item.quant;
});


let total2 = total.reduce(function(soma, item){
    return soma + item; 
});
document.write(total2);

