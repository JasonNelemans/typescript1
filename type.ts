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
