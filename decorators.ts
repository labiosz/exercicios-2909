// Decorador para medir o tempo de execução de um método
function medirTempoDeExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Armazena a função original para ser chamada posteriormente
    const metodoOriginal = descriptor.value;

    // Substitui o método original por uma versão que mede o tempo de execução
    descriptor.value = function (...args: any[]) {
        console.time(propertyKey);  // Inicia a medição do tempo com uma label associada ao nome do método
        const resultado = metodoOriginal.apply(this, args);  // Executa o método original com os argumentos fornecidos
        console.timeEnd(propertyKey);  // Finaliza a medição e exibe o tempo no console
        return resultado;  // Retorna o resultado do método original
    };

    return descriptor;  // Retorna o descriptor atualizado
}

// Classe Calculadora com um método que soma números e tem o tempo de execução medido
class Calculadora {
    @medirTempoDeExecucao
    somarNumeros(array: number[]): number {
        // Soma todos os números do array
        return array.reduce((a, b) => a + b, 0);
    }
}

// Exemplo de uso da classe Calculadora e medição do tempo de execução
const calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]);  //
