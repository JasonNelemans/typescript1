function hello(world) {
    console.log('Hello ' + world);
}
hello('Jon');
var isWinter = false;
var number = 5;
var weird = 'Man';
var names = ['Jon', 'Cena', 'Wayn'];
var any = ['Maya', 1, true, null];
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Brendan"] = 1] = "Brendan";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
function getName() {
    console.log('winter is coming');
}
