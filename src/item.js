import './item.css'

function Item(props){
    return (
        <div>
            <h3 className="item-name">{props.name}......{props.price}</h3>
            <p className="description">{props.description}</p>
        </div>
    )
}

export default Item