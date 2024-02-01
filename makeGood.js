var makeGood = function(s) {
    let stack = []; //Last In First Out
    
    for (const char in s){
        if (stack.length && areCharsOppositeCase(stack[stack.length - 1], s[char])){
            stack.pop()
        } else {
            stack.push(s[char])
        }
        
    }

    return stack.join("");

};

//Helper Funks for Code Readability

function isUppercase(char){
    return char.toUpperCase() === char
}

function isLowercase(char){
    return char.toLowerCase() === char
}

function areCharsOppositeCase(char1, char2){
    if(isUppercase(char1)){
        return char1.toLowerCase() === char2
    } 
    
    if(isLowercase(char1)){
        return char1.toUpperCase() === char2
    }
}