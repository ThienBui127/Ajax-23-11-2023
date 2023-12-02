
// let a = new Promise((resolve, reject) => {
//     let number = 2;
//     if (number % 2 == 0) {
//         resolve("Number is even")
//     }else {
//         reject("Number is odd")
//     }
// })
// console.log(a);

a.then(message => console.log(message))
let a = new Promise((resolve, reject) => {
    let number = 2;
    if (number % 2 == 0) {
      return  resolve("Number is even")
    }else {
        return reject("Number is odd")
    }
})
a.catch (err => console.error(err)) //bắt lỗi

