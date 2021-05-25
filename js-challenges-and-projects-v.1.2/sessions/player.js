class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }

  introduce() {
    console.log(`${this.name} from ${this.country}`);
  }
}

class BasketballPlayer extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }

  introduce() {
    console.log(`${this.age}-year old basketball player ${this.name} from ${this.country}`);
  }
}

const rondo = new Player("Rondo", "Manila");
rondo.introduce();

const lbj = new BasketballPlayer("Lebron", "QC", 34);
lbj.introduce();
