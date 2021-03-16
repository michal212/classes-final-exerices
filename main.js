// שאלה מהמצגת שקופית 20

// סעיף 1

class Viacle {
    constructor(weelAmount, engineCC, color) {
        this.weelAmount = weelAmount
        this.engineCC = engineCC
        this.color = color
    }
    ViacleDeatails() {
        return `the amount of weels is ${this.weelAmount} the engine valoume is
         ${this.engineCC} and it color is ${this.color} `
    }
    static maxValoume(viacleObj) {

        let sorttedViacle = viacleObj.sort((car1, car2) => {
            return car2.engineCC - car1.engineCC
        });
        return sorttedViacle[0];
    }
}






class Plan extends Viacle {
    constructor(name, weelAmount, engineCC, color) {
        super(weelAmount, engineCC, color)
        this.name = name;


    }
    carDeatails() {
        return `the car name is${this.name} ${super.ViacleDeatails()}`
    }


    bigLetters() {
        return this.name.toUpperCase()
    }

    get getBigLetters() {
        return this.bigLetters()
    }


}

class Track extends Viacle {
    constructor(name, weelAmount, engineCC, color) {
        super(weelAmount, engineCC, color)
        this.name = name;


    }

    carDeatails() {
        return `the car name is${this.name} ${super.ViacleDeatails()}`
    }

}
class Bus extends Viacle {
    constructor(name, weelAmount, engineCC, color) {
        super(weelAmount, engineCC, color)
        this.name = name;


    }
    carDeatails() {
        return `the car name is${this.name} ${super.ViacleDeatails()}`
    }

}



let planObj = new Plan("air-force", 4, 300, "white")
let trackObj = new Track("track-shark", 8, 200, "red",)
let busObj = new Bus("magic-bus", 4, 100, "yellow",);


console.log(planObj.ViacleDeatails())
console.log(trackObj.ViacleDeatails())
console.log(busObj.ViacleDeatails())


//סעיף 2

console.log(planObj.getBigLetters);


// סעיף 3
console.log(Viacle.maxValoume([planObj, trackObj, busObj]));



// סעיף 4
let viacle1;
function classCreater() {
    viacle1 = new Viacle(weels.value, enginge.value, color.value)
    console.log(viacle1)
    objectTable.innerHTML +=
        `<tr> 
    <td>${weels.value}</td>
    <td>${enginge.value}</td>
    <td>${color.value}</td>

     </tr>`



}



