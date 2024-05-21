class Car {
    //constructor
    constructor(make,speed) {  
        this.makeName=make;
        this.speedValue=speed;
    }

     // implementing accelerate method to increase speed by 10 km
    accelerate() {
        this.speedValue= this.speedValue+10;
        console.log("Car model:"+ this.makeName);
        console.log("New speed: " + this.speedValue);

    }//END

// Implementing brake method that decreases car speed
brake() {
    this.speedValue=this.speedValue-5;
    console.log("Car model:"+this.makeName);
    console.log("Reduced speed:" +this.speedValue);  

    
}



}





    

    
