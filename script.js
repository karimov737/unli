function unli(value) {
    let counter = 0;
    for (let i = 0; i < value.length; i++) {
        let char = value[i];

        if ((char === 'e' || char === 'E') || 
            (char === 'u' || char === 'U') || 
            (char === 'i' || char === 'I') || 
            (char === 'o' || char === 'O') || 
            (char === 'a' || char === 'A')) {
            counter++;
        }
    }
    return counter;
}

let unlilar = prompt('Matn kriting');
console.log(unli(unlilar));
 