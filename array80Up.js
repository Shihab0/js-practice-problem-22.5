/*
১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
*/

let arr = [20, 50, 93, 83, 38, 99, 32, 79, 80];
for(element of arr){
    if(element < 80){
        continue;
    }
    console.log(element);
}
