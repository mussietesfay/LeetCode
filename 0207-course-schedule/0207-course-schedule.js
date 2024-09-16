/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// let adj = [];
// let state = {};
// let cycleFound = false;

// function canFinish(numCourses, prerequisites) {
// adj = [];
// state = {};
// cycleFound = false;

//   for (let i = 0; i < numCourses; i++) {
//     adj.push([]);
//     state[i] = "u";
//   }

//   for (let i = 0; i < prerequisites.length; i++) {
//     let [toNode, fromNode] = prerequisites[i];
//     adj[fromNode].push(toNode);
//   }

//   for (let i = 0; i < numCourses; i++) {
//     if (state[i] === "u") {
//       dfs(i);
//     }
//     if (cycleFound === true) {
//       return false;
//     }
//   }

//   return !cycleFound;
// }

// function dfs(node) {
//   if (state[node] === "u") {
//     state[node] = "v";
//     for (let i = 0; i < adj[node].length; i++) {
//         let nei=adj[node][i]
//       dfs(nei);
//     }
//     state[node] = "p";
//   } else if (state[node] === "v") {
//     cycleFound = true;
//   }
// }
let adj = [];
let state = {};
let cycleFound = false;
function canFinish(numCourses, prerequisites){
    adj = [];
    state = {};
    cycleFound = false; 

    for(let i=0; i<numCourses; i++){
        adj.push([]);
        state[i]='u';
    }
    for(let i=0; i<prerequisites.length; i++){
        let[ toNode , fromNode] = prerequisites[i]
        adj[fromNode].push(toNode)
    }
    for(let i=0; i<numCourses; i++){
        if(state[i]==='u'){
            dfs(i)
        }
        if(cycleFound === true){
            return false;
        }
    }
    return !cycleFound;
}
function dfs(x){
if(state[x]==='u'){
    state[x]='v';

    for(let i=0; i<adj[x].length; i++){
        let nei = adj[x][i];
        if(state[nei]==='u'){
            dfs(nei)
        }else if(state[nei]==='v'){
            cycleFound=true;
        }
    }
    state[x]='p'
}
}