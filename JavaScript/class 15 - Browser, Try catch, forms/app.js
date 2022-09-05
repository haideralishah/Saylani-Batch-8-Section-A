// aler("hello world");


// console.log("Pakistan");




// try {
//     aler("hello world");
// } catch (e) {
//     console.error(e);
//     // console.warn(e);
// }



// console.log("Pakistan");

































// var userEmail = "abc@gmail.com";
// var passCode = "abcd@123456";
// var emailInput = prompt('write your email');
// var passCodeInput = prompt('what is passcode?');
// try {
//     if (emailInput === userEmail && passCodeInput === passCode) {
//         console.log('Authenticated');
//     }
//     else {
//         throw "Email or pass code is incorrect."
//     }
// } catch (e) {
//     console.error(e);
//     document.write(e);
// }


























// var whereWeAre = window.location;
// console.log(whereWeAre);
var youTubeAddress = "https://www.youtube.com/c/jsguru";

// function changeHref() {
//     // whereWeAre.href = "https://www.youtube.com/c/jsguru";
//     window.location.assign(youTubeAddress);

// }


// console.log(history);


















































// var monkeyWindow;
// function openMonkeyWindow() {
//     // window.open(youTubeAddress, "YouTube Short Window", "height=400, width=400, top=200, left=400");
//     // window.open("./monkey.html", "YouTube Short Window", "height=400, width=400");
//     monkeyWindow = window.open("", "", "height=400, width=400");
//     var windowContent = `<h1>Capuchin monkey</h1><p>The word capuchin derives from a
//     group of friars <br /> named the Order of Friars Minor Capuchin who wear <br /> brown
//     robes with large hoods covering their heads.</p > `;
//     monkeyWindow.document.write(windowContent);
// }

// function closeMonkeyWindow() {
//     monkeyWindow.close();
// }











// function checkForLastName() {
//     var formField = document.getElementById("lastNameField");

//     // if (formField.value.length === 0) {

//     if (formField.value.match(/^\s+$/)) {
//         console.log("Please enter your last name");
//         formField.focus();
//         formField.style.backgroundColor = "red";
//         formField.style.color = "white";

//         return false;
//     }
// }
























































// function checkForSelection() {
//     if (document.getElementById("states").selectedIndex === 0) {
//         console.log("Please select a state.");
//         return false;
//     }

// }























// function validateRadios() {
//     var radios = document.getElementsByName("r1");
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             return true;
//         }
//     }
//     console.log("Please check one.");
//     return false;
// }



























function validateEmail() {
    var eEntered = document.getElementById("address").value;
    var emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    if (!(eEntered.match(emailCorrectPattern))) {
        alert("Please correct email address");
        return false;
    }
}





































