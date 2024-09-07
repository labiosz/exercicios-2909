class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmailInvalidoError';  // Nome do erro customizado
    }
}

function verificarEmail(email: string): void {
    // Verificamos se o email contém o caractere '@'
    if (!email.includes('@')) {
        // Lançamos o erro personalizado caso o email seja inválido
        throw new EmailInvalidoError('Email inválido: O email deve conter o caractere "@"');
    }

    console.log('Email válido!');
}

// Exemplo de uso:
try {
    verificarEmail('usuario.com');  // Não contém '@', então lançará o erro
} catch (error) {
    // Captura o erro e imprime a mensagem
    if (error instanceof EmailInvalidoError) {
        console.error(error.message);  // Deve imprimir "Email inválido"
    }
}