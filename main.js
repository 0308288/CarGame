// VARIABLES
const car = {
    make: 'Thanos',
    model: 'Car',
    color: 'purple',
    mileage: 0,
    isWorking: true,

    driveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 10;
        alert(`New Mileage: ${this.mileage}`);
    },

    driveAroundUSA(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 6000;
        alert(`New Mileage: ${this.mileage}`);
        aler('Car needs a tuneup!')
        this.isWorking = false;
    },

    getTuneUp(){
        alert('Car is fixed and ready to go!');
        this.isWorking = true;
    },

    honk(){
        alert('Honk! Honk!');
    }
}


// FUNCTIONS

const reWriteStats = () =>{
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Color: ${car.color}`);
    console.log(`Mileage: ${car.mileage}`);
    console.log(`Is Working: ${car.isWorking}`);
    console.log(`-----------------------------------`);
}

// Logs all of our car's current stats to the console
/*
function reWriteStats(){

}
*/

// MAIN PROCESS
// Captures keyboard input. Depending on the letter pressed  it will "call" (execute) different functions. 

document.onkeyup = (event) => {

    // Captures the key press and converts it to lower case, and saves it to a variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();
    
    if (letter === "h"){
        car.honk();
        reWriteStats();
    }
    
    
    if (letter === "d"){
        car.driveToWork();
        reWriteStats();
    }

    if (letter === "r"){
        car.driveAroundUSA();
        reWriteStats();
    }

    if (letter === "t"){
        car.getTuneUp();
        reWriteStats();
    }
}