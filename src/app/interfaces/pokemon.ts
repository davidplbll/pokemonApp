export interface Pokemon {
    abilities:Array<any>,
    base_experience:Number,
    forms:Array<any>,
    game_indices:Array<any>,
    height:Number,
    held_items:Array<any>,
    id:Number,
    is_default:Boolean,
    location_area_encounters:String,
    moves:Array<any>,
    name:String,
    order:Number,
    species:any,
    sprites:{
        back_default:String,
        front_default:String,
        back_shiny:String,
        front_shiny:String,
    },
    stats:Array<any>,
    types:Array<any>,
    weight:Number
}
export interface PokemonHome{
    name:String,
    url:String,
    id:Number
}

export interface storagePokemon{
    allPokemons:PokemonHome[],
    vibilityFilter:"SHOW_ALL"
}
