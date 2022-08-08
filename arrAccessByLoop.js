/*
৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
*/

// let arr = [ 1, 2, 3, 4, 5, 6, 7];
// for(let i=0; i<arr.length; i++){
//     let element = arr[i];
//     console.log(element);
// }


// By using for of

let arr = [ 1, 2, 3, 4, 5, 6, 7];
for(elemet of arr){
    console.log(elemet);
}