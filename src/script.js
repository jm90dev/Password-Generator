document.getElementById('password-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const lenght = parseInt(document.getElementById('lenght').value);
    const includeUpperCase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;
    const password = generatePassword(lenght, includeUpperCase, includeNumbers, includeSpecial)

    document.getElementById('password').textContent = password;
});

// Captura de dados do formulário, geração da função de criação da senha, impedimento da atualização da página ao
// apertar o botão de submit e exibição da senha.

function getRandomCharacter(character) {
    const randomIndex = Math.floor(Math.random() * character.length);
    return character[randomIndex];
};

// Seleciona aleatoriamente letras, números e caracteres especiais para gerar a senha.

function generatePassword(lenght, includeUpperCase, includeNumbers, includeSpecial) {
    const lowercaseChars = 'abcdefghijklmnopqrstuwvxyz'
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUWXYZ'
    const numberChars = '0123456789'
    const specialChars = '!@#$%¨&*(){}[]<>.,;:/?+-='

    let allChars = lowercaseChars;
    if (includeUpperCase) allChars += uppercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSpecial) allChars += specialChars;

    let password = '';
    for (let i = 0; i <lenght; i++) {
        password += getRandomCharacter(allChars);
    }

    return password;
};

// Parte responsável por gerar as senhas, valor por valor, até o final do número máximo de caracteres escolhidos.