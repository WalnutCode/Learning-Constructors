console.log("I'm learning constructors!")
var Address = function(continent, state, city, zipCode){
    this.continent = continent;
    this.state = state;
    this.city = city;
    this.zipCode = zipCode 
    this.fullAddress = function(){
        return this.continent + " " + this.state + " " + this.city + " " + this.zipCode
    }
}
var myAddress = new Address("North America", "New York", "New York City", 10024)

var sakinasAddress = new Address ("North America", "FLorida", "Apollo Beach", 33578)
console.log(sakinasAddress.fullAddress())