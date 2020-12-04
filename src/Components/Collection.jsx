import '../assets/css/Collection.css'
import { Pokemon } from './Pokemon'
export function Collection(props) {
    return (
        <div className="border collection-cont"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                console.log(e.dataTransfer.getData('from'), props.type)
            }}>
            {
                props.pokemons.map(pokemon => {
                    return (
                        <Pokemon {...pokemon} type={props.type}/>
                    )
                })
            }
        </div>
    )
}