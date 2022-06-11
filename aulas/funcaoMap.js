let valores = [1,2,3,4,5];

let Potencia = valores.map(function(item){
    return Math.pow(item,3);
});

document.write(Potencia)

let clients= [
    {
        id: 3,
        nome: 2
    },
    {
        id: 9,
        nome: 6
    },
    {
        id: 6,
        nome: 6
    },
    {
        id: 10,
        nome: 10 
    },
    {
        id: 20,
        nome: 6
    },
];

let clientName= clients.map(function(item){
    return item.nome *item.id;
})

document.write(clientName)