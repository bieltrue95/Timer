// setInterval irá rodar uma função por tempo indeterminado.
//depois de x milissegundos

const timeOut = 1000
const checking = () => console.log('Checking!')

setInterval(checking,timeOut)