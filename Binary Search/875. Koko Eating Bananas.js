// https://leetcode.com/problems/koko-eating-bananas/

// 875. Koko Eating Bananas

// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Example 1:
// Input: piles = [3,6,7,11], h = 8
// Output: 4

// Example 2:
// Input: piles = [30,11,23,4,20], h = 5
// Output: 30

// Example 3:
// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

// Constraints:
// 1 <= piles.length <= 104
// piles.length <= h <= 109
// 1 <= piles[i] <= 109

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    /**
    * Use binary search to find the minimum eating speed `k` such that Koko can eat all bananas within `h` hours.
    * The lower bound is 1 (slowest speed), and the upper bound is the largest pile (fastest possible to finish in 1 hour).
    * For each speed guess (midpoint), simulate the total hours needed to eat all piles at that speed.
    * If the total hours is less than or equal to `h`, try smaller speeds (move `end`).
    * If the total hours is more than `h`, we need a faster speed (move `start`).
    * The first `k` that works is our answer.
    */
    let result = Number.MAX_SAFE_INTEGER, max=Number.MIN_SAFE_INTEGER;
    for(let n of piles) max=Math.max(n, max);
    let start = 1, end=max;
    while(start<end){
        let mid = Math.floor((start+end)/2);
        let hr=0;
        for(let pile of piles){
            hr += Math.ceil(pile/mid);
        }
        if(hr<=h)    end = mid;
        else    start = mid+1;
    }
    return start;
};
