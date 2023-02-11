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

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  setNotes(notes) {
    this.notes = notes;
  }

  canPass() {
    return moyenne(this.notes) >= 10;
  }

  //création du getter
  get name() {
    return `${this.firstname} ${this.lastname}`;
  }
}

const sofian = new Student("Sofian", "Achbabi");
const charline = new Student("Charline", "Galthié");

sofian.setNotes([18, 16, 17]);
charline.setNotes([15, 19, 16]);
console.log(charline.canPass(), sofian.canPass());
console.log(sofian.name);
