let v = [1, 1, 2, 2, 1]
function firstDuplicate(a){
    
    const len = a.length
    let num = 0
    let array = []
    for(let x = 0; x < len; x++){
        console.log("Valor de x " + x)
        for(let y = x+1; y < a.length; y++){
            console.log(" valor de y " +y)
            if(a[x] === a[y]){
                num = a[x]
                array[x] = num
            }else{
                for(let i = 0; i < array.length; i++){
                    console.log("Valores Array interno " + array[i])
                    if(array[i] === array[i+1]){
                        num = array[i]
                    }
                }
            }
        }
    }
    if( array.length === 0){
        return -1
    }else{
        return num
    }
}

console.log("Saida final " + firstDuplicate(v))
