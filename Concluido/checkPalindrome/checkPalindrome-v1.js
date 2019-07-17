const str = 'hlbeeykoqqqqokyeeblh'

function checkPalindrome(s){
    function stringLength(stl){
        let size = stl.length
        size = parseInt(size)
        if(oddOrEven(size) === false){
            size = Math.ceil(size)
            return size
        }
        return size
    }
    const len = stringLength(s)
    const lenBrk = len / 2
    let norm = s.slice(0, lenBrk)
}
console.log(checkPalindrome(str))