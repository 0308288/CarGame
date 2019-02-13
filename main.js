// Variable

let car = {
    make: 'Thanos',
    model: 'Car',
    color: 'Purple',
    mileage: 0,
    isWorking: true,

    driveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage = this.mileage + 8;
        alert(`New Mileage: ${this.mileage}`);
    },
}


// Functions

const rewriteStats(){

}

/* Captures keyboard input. Depending on the letter pressed  it will "call" (execute) different functions. */

document.onkeyup = (event) => {

    // Captures the key press and converts it to lower case, and saves it to a variable
    let letter = String.fromCharcode(event.keyCode).toLowerCase();

    if (letter === 'd'){
        car.driveToWork();
    }
}