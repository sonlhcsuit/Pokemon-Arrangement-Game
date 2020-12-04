import '../assets/css/Section.css'
import { Pokemon } from './Pokemon'
export function Section(props) {
    return (
        <div className="section-cont">
            <div className={` type-cont ${props.type}`}>
                <p>{props.type || 'Fire'}</p>
            </div>
            <div className="pokemons-cont"
                onDrop={(e) => {
                    console.log(e.dataTransfer.getData('from'), props.type)
                }}
                onDragOver={(e) => {
                    e.preventDefault()
                }}
            >
                {
                    props.pokemons.map(pokemon => {
                        return (
                            <Pokemon {...pokemon} type={props.type} />
                        )
                    })
                }
            </div>
        </div>
    )
}