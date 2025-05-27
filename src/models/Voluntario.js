class Voluntario {
    constructor() {
        this.voluntarios = [];
    }

    create(data){
        const novo = {
            id: this.voluntarios.length + 1,
            ...data
        };
        this.voluntarios.push(novo);
        return novo;
    }

    all(){
        return this.voluntarios;
    }
}

module.exports = Voluntario;