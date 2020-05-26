function hello (world: string) {
  console.log('Hello ' + world)
}

hello('Jon');

const isWinter : boolean = false;

const number : number = 5;
const weird : string = 'Man';

const names : string[] = ['Jon','Cena','Wayn'];
const any : any[] = ['Maya', 1, true, null];

enum Starks {Jon,Brendan,Eddard,Catlyn};
var cat : Starks = Starks.Catlyn;

function getName(): any {
  console.log('winter is coming');
}

class Stark {
  name: string = 'Brandon'
  static castle: string = 'Winterfell'
  saying: string;

  constructor(){
    this.saying = Stark.castle
  }

  hello(person: string) {
    console.log('Hello ' + person)
  }
}

const ned = new Stark;
ned.saying = 'Winter is coming';
ned.hello('Robert');