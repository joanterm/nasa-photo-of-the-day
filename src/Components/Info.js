import {useState, useEffect} from "react"
import Card from "./Card"
import axios from "axios"
import styled from "styled-components"

// STYLING BEGINS
const InfoWrapper = styled.div `
    width: 100%;
    padding: 2em 4em;
    margin: 0 auto;
    text-align: center;
    width: 90%;
    max-width: 1400px;
    color: ${props => props.theme.whiteColor};
`

const InfoButton = styled.button `
    padding: 1em 3em;
    border: none;
    border: 0.2rem solid ${props => props.theme.whiteColor};
    border-radius: 1rem;
    box-shadow: 0 0 .2rem ${props => props.theme.whiteColor},
        0 0 .2rem ${props => props.theme.whiteColor},
        0 0 2rem ${props => props.theme.pinkColor},
        0 0 0.8rem ${props => props.theme.pinkColor},
        0 0 2.8rem ${props => props.theme.pinkColor},
        inset 0 0 1.3rem ${props => props.theme.pinkColor}; 
    color: white;
    margin: 4em 0;
    cursor: pointer;
    font-size: 1rem;
    text-shadow:
        0 0 0px ${props => props.theme.whiteColor},
        0 0 2px ${props => props.theme.whiteColor},
        0 0 21px ${props => props.theme.whiteColor},
        0 0 42px ${props => props.theme.pinkColor},
        0 0 82px ${props => props.theme.pinkColor},
        0 0 92px ${props => props.theme.pinkColor},
        0 0 102px ${props => props.theme.pinkColor},
        0 0 151px ${props => props.theme.pinkColor};
    font-weight: bold;
    letter-spacing: 2px;
`
// STYLING ENDS

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
        <>
        <InfoWrapper>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h2>
            <InfoButton onClick={display}>{!displayCard ? "CLICK TO REVEAL" : "CLOSE"}</InfoButton>
        </InfoWrapper>
        <div>
            {displayCard && <Card title={data.title} explanation={data.explanation} date={data.date} imageUrl={data.url}/>}
        </div>
        </>
     );
}
 
export default Info;