const fs = require('fs')
const util = require('util')
const myReadFile =  util.promisify(fs.readFile)


//---------同步分方法------------------
// fs.readFile('./11copy.txt',(err, data1) => {
//     if(err) throw err
//     fs.readFile('./22copy.txt',(err, data2) => {
//     if(err) throw err
//         console.log(data1 + data2);
//     })
// })


//-----------异步方法------------------------
async function myread(){
    try{
        let data1 = await myReadFile('./11copy.txt')
        let data2 = await myReadFile('./22copy4.txt')
        console.log(data1 + data2);
    }catch(err){
        //---------错误会自动穿透----------无需回调嵌套捕获-------
        console.log('err: ', err);
    }
}
myread()