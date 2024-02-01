var missingNumber = function(nums){
    let numHash = {}
    for(let i = 0;i < nums.length; i++){
        numHash[nums[i]] = true
    }
    for(let i = 0; i < nums.length; i++){
        if(!numHash[i]){
            return i;
        }
    }
}