import inquirer from "inquirer"

class Player {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel -25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100

    }
}
class opponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel -25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt ([
    {
        type:"input",
        name:"name",
        message:"Please Enter Your Name:"
    }
])

let Opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message:"Select Your Opponent",
        choices:["Skeleton"," Aline","Zombie"]
    }
])

let p1 = new Player(player.name)
let o1 = new opponent(Opponent.select)

do{
    //Skeleton
    if(Opponent.select =="Skeleton"){
         let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What would you like to do?",
                choices:["Attack","Drink portion","Run For Your Life.."]
            }
         ]);
         if(ask.opt == "Attack"){
            let num =Math.floor(Math.random()* 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log("You localStorage,Better luck Next Time");
                    process.exit()
                }
            }
            if(num <= 0){
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log("You Win");
                    process.exit()
            }
         }
         if(ask.opt == "Drink Portion"){
             p1.fuelIncrease()
             console.log(`you Drink Health Portion Your Fuel is ${p1.fuel}`);
            
         }
         if(ask.opt == " Run For Your Life.." ){
            console.log("You localStorage,Better luck Next Time") ;
            process.exit()
         }
    }
    }

    //Aline
    if(Opponent.select =="Aline"){
    }

    //Zombie
    if(Opponent.select =="Zombie"){
    }
}    
    while(true)