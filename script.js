// Practice: Represent your Pet
// Create an object that represents your pet.

const petJackiTheDog = {
// 1. Name property with a string value.
    petName: "Jacki",
// 2. Species property with a string value.
    petSpecies: "Mixed Breed",
// 3. Nicknames property with an array value. Array contains strings.
    petNickNames: ["Poops", "Poo-Poo Head", "Stinky"],
// 4. Age property with an integer value
    petAge: 9,
    petBio: function bio(yourName){
        console.log(`Hello ${yourName}!  My name is "${this.petName}", and I am a ${this.petAge}-year-old, ${this.petSpecies} dog.  My owners call me "${this.petNickNames[0]}", "${this.petNickNames[1]}", and "${this.petNickNames[2]}-butt"!`)
    }
}

petJackiTheDog.petBio("Joey Wellman");

// 5. Personal function test (console)
// const pet = function(name){
//     var getName = function(){
//         return name;
//     }
//     return getName;
// }
// myPet = pet("Jacki");

// myPet()

