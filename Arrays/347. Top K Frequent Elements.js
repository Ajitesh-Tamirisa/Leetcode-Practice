/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Create a freq map that maintains count of each element
    let map = new Map();
    for(let i of nums){
        if(!map.has(i))
            map.set(i, 0);
        map.set(i, map.get(i)+1);
    }

    // Create a freq bucket where each index -n  has an array of all elements with frequency n
    let bucket = [];
    for(let [key, value] of map){
        if(!bucket[value])  bucket[value] = [];
        bucket[value].push(key); 
    }

    // Iterate the bucket and find top k
    let result = [];
    for(let i=bucket.length; i>=0; i--){
        if(bucket[i] && bucket[i].length>0)
            result.push(...bucket[i]);
        if(result.length>=k)    break;
    }
    return result;

};
