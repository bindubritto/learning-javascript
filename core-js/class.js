// Instantiation

class Player {
    constructor(name, type) {
        console.log('within player',this)
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, I'm a ${this.type}`);
    }
}

const wizard1 = new Player('Sabbir', 'Healer');

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('Inside Wizard', this);
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}

const wizard2 = new Wizard('Zannat', 'Black Magic');
