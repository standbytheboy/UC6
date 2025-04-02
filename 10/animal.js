class Animal {
    emiteSom() {
        console.log(`O animal fez barulho`)
    }
}

class Cachorro extends Animal {
    emiteSom() {
        console.log("AU! AU! AU!");
    }
}

class Gato extends Animal {
    emiteSom() {
        super.emiteSom(); // usa o que vem da classe pai (superclasse) ou base class
        console.log("MIAAAAAAAAAAUUUUUUUUU!");  
    }
}

let animal1 = new Cachorro();
animal1.emiteSom();
let animal2 = new Gato();
animal2.emiteSom();