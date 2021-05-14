//Conversor de numero em binário
function conversion(decNumber){
    let binary = [],
    genBinary = '';

    while(decNumber > 0){
        genBinary = Math.floor(decNumber % 2);
        binary.push(genBinary);
        decNumber = Math.floor(decNumber / 2);
    }
    
    return binary.reverse().join('');
}

console.log(conversion(25));
