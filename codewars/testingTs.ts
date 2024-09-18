class Chameleon {
  static colorChange(newColor: any) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor(public newColor  = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.colorChange("orange"));
