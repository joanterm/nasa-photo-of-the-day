import {useState, useEffect} from "react"
import Card from "./Card"
import axios from "axios"

const Info = () => {
    const [data, setData] = useState([])
    const [displayCard, setDisplayCard] = useState(false)

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=kS5jEVbIabbFhTf2XTaiQ0ujqE22w7US0yP0f5g0")
        .then((response) => {
            console.log(response.data); 
            setData(response.data)          
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const display = () => {
        console.log("displayed")
        setDisplayCard((prev) => {
            return !prev
        })
    }

    return ( 
        <div>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h1>
            <button onClick={display}>{!displayCard ? "Click TO REVEAL" : "CLOSE"}</button>
            {displayCard && <Card title={data.title} explanation={data.explanation} date={data.date} imageUrl={data.url}/>}
        </div>
     );
}
 
export default Info;