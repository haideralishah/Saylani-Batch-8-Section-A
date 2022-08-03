/*
string
numbers
boolean
array is special type of object
*/



// var fruits = ["apple", 'banana', "pineapple"];
// var allStudents = ["akram","ahsan", "abdullah"]



























// var car = {
//     name: "Civic",
//     model: 2022,
//     automatic: true,
//     price: 8000000,
//     color: 'red',
//     accessories: ['parking cover', 'LED', 'sound system']
// };

// console.log(car);






















// var city = {
//     name: 'karachi',
//     population: 35000000,
//     admin: "Murtaza Wahab",
//     problems: [],
//     isNationalCapital: true
// }
// console.log(city.isNationalCapital);
// city.isNationalCapital = false;
// console.log(city.isNationalCapital);


































































// var gymMembership = {
//     name: 'Bodyshape Fitness Gym',
//     fee: 2500,
//     discount: function (numberOfNewMembers) {
//         var discountRate;
//         if (numberOfNewMembers >= 2) {
//             discountRate = 10;
//         }
//         else {
//             discountRate = 0;
//         }
//         var totalFee = this.fee - (this.fee * discountRate / 100)
//         console.log(totalFee);
//     }
// }

// gymMembership.discount(3) // 3, 4


















































// var appartmentBooking = {
//     name: 'flaknaz green',
//     price: 8500000,
//     westOpenCharges: 300000,
//     corner: 250000,
//     roadFacing: 350000,
//     totalBookingAmount: function (isWestOpen, isCorner, isRoadFacing) {
//         var totalPrice = this.price;
//         if (isWestOpen) {
//             totalPrice = totalPrice + this.westOpenCharges;
//         }
//         if (isCorner) {
//             totalPrice = totalPrice + this.corner;
//         }
//         if (isRoadFacing) {
//             totalPrice = totalPrice + this.roadFacing
//         }
//         console.log(totalPrice);
//     }
// }

// appartmentBooking.totalBookingAmount(true, true, false);






































// var allPlans = [];
// var plan1 = {
//     transfer: 1000,
//     price: 3.99,
//     space: 100,
//     pages: 10,
//     name: "basic",
//     isCancelable: true,
//     features: ["SEO", "SSL"],
//     serverInfo: {
//         processor: 5.3,
//         memory: 1
//     }
// };
// // console.log(plan1.features);
// // console.log(plan1.serverInfo.memory);
// plan1.name = "premium";
// // console.log(plan1.name);
// delete plan1.features;
// // console.log(plan1.features);
// allPlans.push(plan1);


// var plan2 = {
//     transfer: 1000,
//     price: 5.99,
//     space: 100,
//     pages: 10,
//     name: "Professional",
//     isCancelable: true,
//     features: ["SEO", "SSL"],
//     serverInfo: {
//         processor: 5.3,
//         memory: 1
//     }
// };
// allPlans.push(plan2);
// console.log(allPlans[1].name);



















































/*
var totalAmount = 0; // 400 + 7000
var allDonations = [];
{
    Donor Name: xyz
    DN Number: 45673
    amount: 400
}
*/





































var donorName = document.querySelector("#donor-name");
var dnNumber = document.querySelector("#dn-number");
var amount = document.querySelector("#donation-amount");
var allDonations = [];
var totalAmount = 0;

function Donations(name, donationNumber, amount) {
    this.donorName = name;
    this.dnNumber = donationNumber;
    this.amount = amount;
}


function donate() {
    totalAmount = totalAmount + Number(amount.value);
    var newDonation = new Donations(donorName.value, dnNumber.value, Number(amount.value));

    allDonations.push(newDonation);

    donorName.value = "";
    dnNumber.value = "";
    amount.value = "";
    console.log(allDonations, totalAmount);

    saveInLocalStorage();
}

function saveInLocalStorage(){
    
}














































// function Student(name, rollnumber, JSSCore) {
//     this.name = name;
//     this.rollNum = rollnumber;
//     this.jsScore = JSSCore;
// }

// var student1 = new Student("taha", 2643, 87);
// var student2 = new Student("zain", 2466, 88);
// var student3 = new Student("akram", 2555, 70);

// console.log(student1, student2, student3);













































