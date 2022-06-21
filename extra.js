/* 1) Fortune Teller:

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." */
let numOfChildren = 2
let partner = "Sylwia"
let geolocation = "Poland"
let jobtitle = "web developer"

let future = "You will be a " + jobtitle + " in " + geolocation + ", and married to " + partner + " with " + numOfChildren + " kids."
console.log(future)

/* 2) The Age Calculator
Want to find out how old you'll be? Calculate it!

Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.
 */
let birthYear = 1988
let futureYear = 2030
let myAge = futureYear - birthYear
console.log("I will be either " + myAge + " or " + (myAge-1) + " in " + futureYear)


/* 3) The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X". */
let currentAge = 34
let maxiAge = 75
let dailyAmount = 3

let totalSnack = (dailyAmount * 365) + (maxiAge - currentAge)
console.log("You will need " + totalSnack + " Mango " + "to last you until the ripe old age of " + maxiAge)

/* 4) The Geometrizer
Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN". */
let radius = 6
let cir = Math.PI * 2 * radius
console.log("The circumference is " + cir)

let area = Math.PI * radius * radius
console.log("The area is " + area)


/* 5) The Temperature Converter
It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C." */
let cel = 60;
let celToFah = (cel*9) /5 + 32
console.log(cel + "°C is " + celToFah + "°F")

let fah = 100;
let fahToCel = ((fah - 32) *5) /9
console.log(fah + "°F is " + fahToCel + "°C")
