// https://leetcode.com/problems/course-schedule/

// 207. Course Schedule

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
  
// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// Constraints:
// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // DFS on adj list/pre-req list
    // Mainatain a set to detect loop
    let preMap = new Map();
    // Build the adjacency list
    for(let [course, prereq] of prerequisites){
        if(!preMap.has(course)) preMap.set(course, []);
        preMap.get(course).push(prereq);
    }
    let visited = new Set(); // Fully processed and no cycle nodes go here
    let visiting = new Set(); // Nodes that currently in the recursion stack go here
    const dfs = (key)=>{
        if(visited.has(key))    return true; // Already processed and no cycles
        if(visiting.has(key))    return false; // Cycle detected
        visiting.add(key);
        for (let prereq of (preMap.get(key) || [])) {
            if (!dfs(prereq)) return false; // If a cycle is found, return false
        }
        visiting.delete(key);
        visited.add(key);
        return true;
    }

    for(let i=0; i<numCourses; i++){
        if(!dfs(i)) return false;
    }
    return true;
};
