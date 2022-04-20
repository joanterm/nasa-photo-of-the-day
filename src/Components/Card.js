const Card = (props) => {
    return ( 
        <div>
            <h1>CARD</h1>
            <p>{props.title}</p>
            <p>{props.explanation}</p>
            <p>{props.date}</p>
            <img src={props.imageUrl}/>
        </div>
     );
}
 
export default Card;