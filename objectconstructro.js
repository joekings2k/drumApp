

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