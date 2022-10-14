

function HouseKeper(yearsOfExperience,name,CleanigRepatoire,hobbies){
    this.yearsOfExperience =yearsOfExperience
    this.name = name 
    this.CleanigRepatoire=CleanigRepatoire
    this.hobbies =hobbies
    this.clean = function(){
        alert("cleaning in progress")
    }
}


let houseKeper1 = new HouseKeper(12,"Anny",["toilet","lobby"],["Dancing","Singing"])
console.log(houseKeper1)
let houseKepeer2  = new HouseKeper(20,"jane",["rooms","varanders"],"Sweeping")
console.log(houseKepeer2)




// class HouseKeper {
//   constructor(yearsOfExperience, name, CleanigRepatoire, hobbies) {
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.CleanigRepatoire = CleanigRepatoire;
//     this.hobbies = hobbies;
//     this.clean = function () {
//       alert("cleaning in progress");
//     };
//   }
// }

// let houseKeper1 = new HouseKeper(
//   12,
//   "Anny",
//   ["toilet", "lobby"],
//   ["Dancing", "Singing"]
// );
// console.log(houseKeper1);
// let houseKepeer2 = new HouseKeper(
//   20,
//   "jane",
//   ["rooms", "varanders"],
//   "Sweeping"
// );
// console.log(houseKepeer2);
