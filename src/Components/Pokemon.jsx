import '../assets/css/Pokemon.css'
export function Pokemon(props){
    return (
        <div className="pokemon-cont border">
            <img src={props.avatar}/>
            
        </div>
    )
}