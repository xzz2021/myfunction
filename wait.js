

const wait = async (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export default {wait}





// function sleep(time){
//     const sleep = Date.now() + time * 1000
//     while(Date.now() < sleep ){}
//     return
// }

// sleep(4)
// console.log('-------------loading----------------')