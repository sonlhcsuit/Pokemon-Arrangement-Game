import '../assets/css/Pokemon.css'
export function Pokemon(props) {
    return (
        <div className="pokemon-cont"
            draggable="true"
            onDragStart={(e)=>e.dataTransfer.setData('from',props.type)}
        >
            <img src={props.avatar} />
        </div>
    )
}