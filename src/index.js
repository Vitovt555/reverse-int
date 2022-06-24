module.exports = function reverse (n) {
    let res = []
    const arr = n.toString().split('')
    if(n<0) res = arr.splice(0,1).reverse().join('')
    res = arr.reverse().join('')
    return +res
}
