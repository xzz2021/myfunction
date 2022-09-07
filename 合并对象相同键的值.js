let aa = {rr: '6', pp: 'ert',plugins:[{hh:'67'},{ll:'5gf'}]}
let bb = {rr: '77', nn: 'iy', plugins:[{oo:'6548'}]}


// aa2 = {rr: '77', pp: 'ert',nn: 'iy', plugins:[{hh:'67'},{ll:'5gf'},{oo:'6548'}]}

let aa2 = Object.assign(aa,bb,{plugins:[...aa.plugins,...bb.plugins]})
console.log('aa2: ', aa2);


