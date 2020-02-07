//This kew word 

var myObj = {
    name: "Dre",
    hello: function(){
        return "Hello " + this. name;
    }
}

document.write(myObj.hello());

//Object Creation

var person = function(name, age){
    this.name = name;
    this.age = age;
}

var Andre = new person("Andre", 38);
console.log(Andre);

var Jane = new person("Jane", 30);
console.log(Jane);

var Ree = new person();
console.log(Ree);

//Prototyping

var sports = function(){

}

sports.prototype.game = "Basketball";
console.log(sports.prototype.game);

sports.prototype.yearsPlayed = 3;
console.log(sports.prototype.yearsPlayed);

var Mike = new sports();
console.log(Mike);
console.log(Mike.game, Mike.yearsPlayed);

sports.prototype.name = function(){
    return "I like " + this.game
}
console.log(sports.prototype.name);

console.log(Mike.name());