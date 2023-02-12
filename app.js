// const a = { a: 2 };

// (str >> String.prototype) >> Object.prototype;

// calcul de la moyenne
const moyenne = (notes) => {
  let sum = 0;
  for (let note of notes) {
    sum += note;
  }
  return sum / notes.length;
};

class Student {
  ecole = "Jules Ferry";

  //   # => private - pas d'accès en dehors du système sauf avec les getters & setters
  #secret = "Hello";

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  setNotes(notes) {
    this.notes = notes;
  }

  canPass() {
    return moyenne(this.notes) >= Student.moyenne;
  }

  //création du getter
  get name() {
    return `${this.firstname} ${this.lastname}`;
  }

  static moyenne = 10;

  static hello() {
    console.log("Bonjour");
  }
}

class SuperStudent extends Student {
  // Va d'abord chercher les méthodes dans SuperStudent, puis ensuite dans le parent

  constructor(firstname, lastname, notes) {
    super(firstname, lastname);
    this._notes = notes;
  }
  canPass() {
    return true;
    // return super.canPass;
  }

  //pour appeler une méthode parente, on utilise la méthode super

  get name() {
    return "Super " + super.name;
  }
}

const sofian = new Student("Sofian", "Achbabi");
const charline = new Student("Charline", "Galthié");
const batman = new SuperStudent("Bruce", "Wayne", [8, 5, 8]);
sofian.setNotes([18, 16, 17]);
charline.setNotes([15, 19, 16]);
console.log(charline.canPass(), sofian.canPass(), batman.canPass());
console.log(sofian.name);
