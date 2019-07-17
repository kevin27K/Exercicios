//exibir o seculo com base em ano
const ano = 2001
function centuryFromYear(year) {
    const cent = parseInt(year / 100)
    const centF = year / 100
    if(cent * 100 === year){
        return cent
    }else if(centF * 100 === year){
        return cent + 1 
    }else{
        year /=100
        year = parseInt(year)
        year += 1
        return year
    }
    
}

console.log(centuryFromYear(ano))