import {storagePokemon} from './../interfaces'
import {combineReducers,createStore,Reducer} from 'redux'

export const  vibilityFilter=(state='SHOW_ALL', action)=>{
    switch (action["type"]) {
        case 'SET_VISIBILITY_FILTER':
                return action.filter;
        default:
                return state;
    }

}

export const allPokemons=(state=[],action)=>{
 console.log("action ", action);
 console.log("state ", state);
    switch (action.type) {
        case 'ADD_ITEM':
            return state=[...state,action.Pokemon]
        default:
            return state
    }
}

export const reducerPokemon: Reducer<storagePokemon> =combineReducers({vibilityFilter,allPokemons})