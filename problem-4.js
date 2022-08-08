/*
৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
*/
/*
function bestFriend(arr){
    let lengthyString = '';
    for(let i=0; i<arr.length; i++){
        let element = arr[i];
        console.log(element);
        console.log(arr[i].length);
        if(element.length > lengthyString.length){
            lengthyString = element;
        }
    }
    return lengthyString;
}
let arr = ['abul', 'babuul', 'kibriyaa', 'samir', 'rohit'];
let lengthyName = bestFriend(arr);
console.log('Lengthy String: ', lengthyName);
*/
function bestFriend(arr){
    let lengthyString = '';
   for(element of arr){
    if(element.length > lengthyString.length){
        lengthyString = element;
    }
   }
   return lengthyString;
}
let arr = ['abul', 'babuul', 'kibriyaa', 'samir', 'rohit'];
let lengthyName = bestFriend(arr);
console.log('Lengthy String: ', lengthyName);