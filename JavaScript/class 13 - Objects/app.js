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


















































var appartmentBooking = {
    name: 'flaknaz green',
    price: 8500000,
    westOpenCharges: 300000,
    corner: 250000,
    roadFacing: 350000,
    totalBookingAmount: function (isWestOpen, isCorner, isRoadFacing) {
        var totalPrice = this.price;
        if (isWestOpen) {
            totalPrice = totalPrice + this.westOpenCharges;
        }
        if (isCorner) {
            totalPrice = totalPrice + this.corner;
        }
        if (isRoadFacing) {
            totalPrice = totalPrice + this.roadFacing
        }
        console.log(totalPrice);
    }
}

appartmentBooking.totalBookingAmount(true, true, false);

























