export const addItem=Pokemon=>{
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

