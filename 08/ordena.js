let numeros = [40, 10, 50, 20, 30];

function bubbleSort(array) {

    for (let limite = array.length - 1; limite > 0; limite--) { // diminui o tamanho/comprimento do array para -1, pois assim que o código funciona, o maior número vai sempre para o índice final
        let verificacaoCompleta = true;
        for (let i = 0; i < limite; i++) {
            if (array[i] > array[i + 1]) { // i é o índice 0, e i + 1 pega o próximo número da lista
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                verificacaoCompleta = false;
            }
        }
        if (verificacaoCompleta) {
            break; // faz o bubble sort parar de verificar se já estiver organizado
        }
    }
    return array;
}

console.log(bubbleSort(numeros));
