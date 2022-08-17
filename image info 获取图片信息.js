

//------------only-----run-----in----chrome-----runtime-----------(H5 web)--------------
//---------------只能在浏览器端执行-------------------
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





