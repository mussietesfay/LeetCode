/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

function findOrder (numCourses, prerequisites){
    let adj = [];
    let state = {}; 
    let result =[];
    let cycleFound = { value : false };
    for(let i = 0; i < numCourses; i++){
        adj.push([]);
        state[i] = 'u';
    }
    for(let i = 0; i < prerequisites.length; i++){
        let[ toNode , fromNode] = prerequisites[i]
        adj[fromNode].push(toNode)
    }
    for(let i = 0; i < numCourses; i++){
        if(state[i] === 'u'){
            dfs(i , adj ,state , result , cycleFound)
        }

    }
    return cycleFound.value === false ? result.reverse() : [];
}
function  dfs(x , adj ,state , result , cycleFound){
if(state[x]==='u'){
    state[x]='v';

    
    for(let i=0; i<adj[x].length; i++){
        let nei = adj[x][i];
        if(state[nei]==='u'){
           dfs(nei , adj ,state , result , cycleFound)
        }else if(state[nei]==='v'){
            cycleFound.value=true;
        }
    }
    state[x]='p'
    result.push(x);
}
}