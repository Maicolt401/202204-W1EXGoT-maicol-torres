const Personajeishon = class {
  name;
  family;
  age = 0;
  statusLife = "alive";
  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.statusLife = "alive";
  }
};

const namePersonaje = new Personajeishon("joffrey ", "rey", 37);
console.table(namePersonaje);
