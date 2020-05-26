class Person {
  name: string;
  constructor(name:string) {
    this.name = name
  }
  dance(){
    console.log(this.name + " is dancing")
  }
}

var john = new Person('John');
john.dance();

class AwesomePerson extends Person {
  dance(){
    super.dance()
    console.log('So awesome');
  }
}

var rob = new AwesomePerson('Rob');
rob.dance();