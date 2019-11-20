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
    species:Object,
    sprites:Object,
    stats:Array<any>,
    types:Array<any>,
    weight:Number
}

export interface storagePokemon{
    allPokemons:Pokemon[],
    vibilityFilter:"SHOW_ALL"
}
