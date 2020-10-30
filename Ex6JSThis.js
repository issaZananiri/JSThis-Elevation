const coffeeShop = {
    beans: 50,
    money: 100,
  
    drinkRequirements: {
        latte: {beanRequirement: 10, price: 5},
        americano: {beanRequirement: 5, price: 3},
        doubleShot: {beanRequirement: 15, price: 9},
        frenchPress: {beanRequirement: 12, price: 7},
    },

    buyDrink: function (drinkType) {
        this.money += this.drinkRequirements[drinkType].price
    },

    makeDrink: function (drinkType) {
        if(!this.drinkRequirements[drinkType]){
            console.log("Sorry, we don't make " + drinkType)
        }
        else if(this.drinkRequirements[drinkType].beanRequirement <= this.beans){
            console.log("Here's your " + drinkType + "!")
            this.beans -= this.drinkRequirements[drinkType].beanRequirement
            this.buyDrink(drinkType)
        }
        else{
            console.log("Sorry, we're all out of beans")
        }
    },

    buyBeans: function (numBeans) {
        this.money -= numBeans * 0.5
        this.beans += numBeans
    },
}
  
coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
console.log("We now have " + coffeeShop.money + " .")
coffeeShop.makeDrink("filtered"); 
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); 
console.log("We now have " + coffeeShop.money + " .")
coffeeShop.buyBeans(100)
console.log("Beans purchased. We now have " + coffeeShop.money + " .")
coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
console.log("We now have " + coffeeShop.money + " .")
coffeeShop.makeDrink("filtered"); 
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
console.log("We now have " + coffeeShop.money + " , " + coffeeShop.beans + " beans.")
coffeeShop.buyBeans(100)
console.log("Beans purchased. We now have " + coffeeShop.money + " ," + coffeeShop.beans + " beans profits.")