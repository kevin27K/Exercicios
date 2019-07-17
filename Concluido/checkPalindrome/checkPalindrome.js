const str = 'hlbeeykoqqqokyeeblh'
function checkPalindrome(s){
    function check(s){
        len /= 2
        let dec 
        for(let x = 0; x < len; x++){
            dec = len - x + len
            arr[x] = s[dec-1]
        }
        for(let x = 0; x < arr.length; x++){
            if(arr[x] === s[x]){
                console.log('Igual')
            }else{
                return false
            }
            
        }
        return true
    }
    let arr = []
    let len = s.length
    if(len === 1){
        return true
    }else if(len % 2 === 0){
        return check(s)
    }else if(len % 2 !== 0 ){
        console.log('impar')
        len = Math.ceil(len)
        return check(s)
    }else{

    }

    /*var len = Math.floor(s.length / 2);
  for (var i = 0; i < len; i++){

  }if (s[i] !== s[s.length - i - 1]){
      return false;
    }
  return true;*/
}

console.log(checkPalindrome(str))