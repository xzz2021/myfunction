
//-----one------arrangement and combination 数组排列与组合


//----------排列---------------
function queue(arr, size) {
    if (size > arr.length) { return; }
    var allResult = [];

    (function myself(arr, size, result) {
        if (result.length == size) {
            allResult.push(result);
        } else {
            for (var i = 0, len = arr.length; i < len; i++) {
                var newArr = [].concat(arr),
                    curItem = newArr.splice(i, 1);
                    myself(newArr, size, [].concat(result, curItem));
            }
        }
    })(arr, size, []);

    return allResult;
}

//------------组合------------
function choose(arr, size) {
    var allResult = [];

    (function myself(arr, size, result) {
        var arrLen = arr.length;
        if (size > arrLen) {
            return;
        }
        if (size == arrLen) {
            allResult.push([].concat(result, arr))
        } else {
            for (var i = 0; i < arrLen; i++) {
                var newResult = [].concat(result);
                newResult.push(arr[i]);

                if (size == 1) {
                    allResult.push(newResult);
                } else {
                    var newArr = [].concat(arr);
                    newArr.splice(0, i + 1);
                    myself(newArr, size - 1, newResult);
                }
            }
        }
    })(arr, size, []);

    return allResult;
}

//   来源: https://juejin.cn/post/6959102042279247909


// -----自己写的-----原始的获取二三组合方法---------

//得到------二词--------
function two(rawarr){
    let res = []
    for(let l = 1; l< ll; l++){
        for (let i = l; i < ll; i++) { 
          res.push( rawarr[l-1] + ' ' + rawarr[i]) 
        }
      }
      return res
}
  //得到----三词-------
function three(rawarr){
  for( let m = 0; m< ll-2; m++){
    for(let l = 1; l< ll-1 -m; l++){
        for (let i = 1; i < ll-1 -m; i++) { 
          res.push( rawarr[m] + ' ' + rawarr[l+m] + ' ' + rawarr[i+m+1]) 
        }
      }
  }
  return res
}



//-----two---------------