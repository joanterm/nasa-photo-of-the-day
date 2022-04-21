import styled from "styled-components"

// STYLING BEGINS
const CardWrapper = styled.div `
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    color: white;
    border: 0.2rem solid ${props => props.theme.whiteColor};
    border-radius: 2rem;
    box-shadow: 0 0 .2rem ${props => props.theme.whiteColor},
    0 0 .2rem ${props => props.theme.whiteColor},
    0 0 2rem ${props => props.theme.pinkColor},
    0 0 0.8rem ${props => props.theme.pinkColor},
    0 0 2.8rem ${props => props.theme.pinkColor},
    inset 0 0 1.3rem ${props => props.theme.pinkColor}; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em 2em;
    margin-bottom: 4em;
    text-align: center;
`
const CardImage = styled.img `
    width: 90%;
`
const CardParapgraph = styled.p `
    margin-bottom: 1em;

    ${props => (props.type === "title" ? `font-size: 3rem` : null)}
    ${props => (props.type === "explanation" ? `font-size: 1.5rem` : null)}
    ${props => (props.type === "date" ? `font-size: 2rem` : null)}
`
// STYLING ENDS
const Card = (props) => {
    return ( 
        <CardWrapper>
            <CardParapgraph type="title">{props.title}</CardParapgraph>
            <CardParapgraph type="explanation">{props.explanation}</CardParapgraph>
            <CardParapgraph type="date">{props.date}</CardParapgraph>
            <CardImage src={props.imageUrl}/>
        </CardWrapper>
     );
}
 
export default Card;