//  适用浏览器的操作函数

// 1. cookies封装


const Cookies = {
    set(name,value,{ maxAge, domain} ={}){
        //传入的值可能是中文,故需要编码
        let CookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
        if(typeof maxAge === 'number'){
            cookieText += `; max-age=${maxAge}`
        }
        if(domain){
            cookieText += `; domain=${domain}`
        }

        document.cookie = cookieText
    },

    get(name){
       name =  `${encodeURIComponent(name)}`
       //将原生cookie拆分转换成数组
       const myCookies = document.cookie.split(';')
       //遍历数组每一项并再次拆分,对比解构后的键值对
       for(const item of myCookies) {
        const [cookieName, cookieValue] = item.split('=')
        if(cookieName === name){
            // 返回解码之后的值
            return decodeURIComponent(cookieValue)
        }
        //没有则返回任意自定义值
        return
       }
    },

    remove(name,{domain} = {}){
        this.set(name,'',{domain,maxAge: -1})
    }



}

  //  清除所有cookies
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));



//  2.  localStorage封装
const storage = window.localStorage

const locStor = {
    set(key,value) {
        storage.setItem(key,JSON.stringify(value))
    },
    get(key){
        return JSON.parse(storage.getItem(key))
    },
    rm(key){
        storage.removeItem(key)
    },
    clear(){
        storage.clear()
    }
}


//  3.获取视频时长
//------------only-----run-----in----chrome-----runtime-----------(H5 web)--------------
//---------------只能在浏览器端执行-------------------

const videoDura = async  function (url) {
    if (url) {
        url.startsWith('http:') ? null : url = url.replace(/.*?\//, 'https:/')
        return new Promise((resolve, reject) => {
            const video = document.createElement('video')
            video.src = url
            video.oncanplay = function () {
                // console.log("本视频时长是:" + video.duration)
                resolve(video.duration)
            }
            video.onerror = function() {
                resolve('视频加载出错')
              }
        })
    }
}


//   4.  获取图片大小
function  imgInfo(url){
    return new Promise(async (reslove, reject) => {
    try {
        let size = {}
        let space = {}
        const image = new Image()
        image.src = url
        image.onload = await function () {
            size.width = image.width
            size.height = image.height
            fetch(url).then(function (res) {
                return res.blob()
            }).then(function (data) {
                space.space = parseFloat((data.size / 1024).toFixed(2))
                let imgInfo = { ...size, ...space }
                reslove(imgInfo)
            })
        }

    }
    catch (error) {
        reject('获取失败')
    }
})
}
