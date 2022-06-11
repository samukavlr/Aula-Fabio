const assinc = () =>{
    return new Promise (resolve => {
        setTimeout(() => resolve ('faça alguma coisa depois '))
    })
}
const executeDepois= async () =>{
    console.log(await assinc())
}