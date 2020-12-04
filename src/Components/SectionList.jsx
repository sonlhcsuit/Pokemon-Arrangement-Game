import '../assets/css/SectionList.css'
import { Section } from '../Components/Section'
export function SectionList() {
    return (
        <div className="section-list-cont">
            <Section type="fire" />
            <Section type="water" />
            <Section type="grass" />
        </div>
    )
}