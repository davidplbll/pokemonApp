export const addItem=Pokemon=>{
 console.log("Pokemon ", Pokemon);
    return{
        type:"ADD_ITEM",
        Pokemon
    }
}
export const setfilter=filter=>{
    return{
        type:"SET_VISIBILITY_FILTER",
        filter
    }
}

