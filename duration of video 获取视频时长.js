
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

