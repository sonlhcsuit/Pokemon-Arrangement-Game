import '../assets/css/SectionList.css'
import { Section } from '../Components/Section'
export function SectionList(props) {
    return (
        <div className="section-list-cont">
            <Section type="fire" pokemons={props.pokemons}  />
            <Section type="water" pokemons={props.pokemons}/>
            <Section type="grass" pokemons={props.pokemons}/>
        </div>
    )
}