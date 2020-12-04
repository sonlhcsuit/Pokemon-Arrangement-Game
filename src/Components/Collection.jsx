import '../assets/css/Collection.css'
import { Pokemon } from './Pokemon'
export function Collection(props) {
    console.log(props.pokemons)
    return (
        <div className="border collection-cont">
            {
                props.pokemons.map(pokemon => {
                    return (
                        <Pokemon {...pokemon} />
                    )
                })
            }
        </div>
    )
}