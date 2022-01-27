
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

function modifiedFood() {
    console.log(foods.slice(1,4));

}
 modifiedFood() ;


 const foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

foods.splice(2,0,'noodles','icecream');

console.log(foods);


const numberArray = [12,324,213,4,2,3,45,4234];


let isEven = numberArray.filter(items => items%2 == 0);
console.log(isEven);


let isEven = numberArray.filter(item => item%2==0);
console.log(isEven);

const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray)
{
    let squares_of_no=myArray.map(function(item)
    {
        return item*item;
    });
    return squares_of_no;
}
console.log(findSquareOfNumbers(myArray));


const myArray=[2, 3, 5, 10];
function multiply(myArray)
{
let multvalue=myArray.reduce(function(previousValue,currentValue)
{
    return previousValue*currentValue;
});
return multvalue;
}
console.log(multiply(myArray))