var checkifPalindrome = function(s){
    let left = 0;
    let right = s.length-1;
    while(left<right){
        if (s[left] != s[right]){
        return false;
        }
        left++;
        right --;
    }
    
    return true; 
}

// Time complexity = O(n)
// Space complexity = O(1) -> No matter how big the input we will never use more than two variables in this algorithm
//This algorithm works with both arrays and strings
