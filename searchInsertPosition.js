var searchInsert = function(nums, target) {

    let leftPointer = 0;
    let rightPointer = nums.length - 1;
 
    while(leftPointer <= rightPointer){
        let currentNumber = Math.floor((leftPointer + rightPointer)/2)
 
        if(nums[currentNumber] === target){
            return currentNumber
        }
        else if(nums[currentNumber] < target){
            leftPointer = currentNumber + 1;
        }
        else{
            rightPointer = currentNumber - 1;
        }
    }
    return leftPointer
     
 };

console.log(searchInsert(nums = [1,3,5,6], target = 5))
// Example:
// Input: nums = [1,3,5,6], target = 5
// Output: 2