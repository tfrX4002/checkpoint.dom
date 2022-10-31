// maximum
// function test(arr) {
//     let max = arr[0];
    // for (let i = 0; i < arr.length; i++) {
    //    if (max < arr[i]){
    //        max = arr[i];
    //    }
    // }
//   return max
// }
// console.log(test([1, 3, 5, 7]))


//minimum 
// function minMax(arr) {
// let min = arr[0] ;
// let max = arr[0]
// for (let i = 0; i < arr.length; i++) {
//    if (min > arr[i]) {
//        min = arr[i];
  
//     }
//         if (max < arr[i]){
//             max = arr[i];
//         }

// }
// return [min , max]
// }
// console.log(minMax([1, 3, 5, 7]))


// let tab = [
//     {
//         name: "Karim",
//         job : "dev"
//     },

//     { 
//         name: "Thomas",
//         job : "dev"
//     },
//     {
//         name: "Ryan",
//         job :"dev"
//     },

// ]
// function presentation() {


//     for (let i = 0; i < tab.length; i++) {
//         console.log('the name is :' +tab[i].name)
//         console.log('my job is :'+tab[i].job)
//     }
   
 
// }

// presentation()

function generateOtp() {
    let num = Math.floor(Math.random() * 10000)
    return num
}

function send() {
    var number = generateOtp();
    sendSms(number)

}
send() 

function sendSms(otp) {
    console.log('votre otp est le '+otp )
}

