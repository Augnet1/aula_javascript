function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse('').join('');
}

verificaPalindromo('Cat');
verificaPalindromo('Ana');

console.log(verificaPalindromo('cat'));
console.log(verificaPalindromo('ana'));
console.log(verificaPalindromo(''));