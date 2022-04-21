import styled from "styled-components"

// STYLING BEGINS
const TitleWrapper = styled.div `
    padding: 2em 0;
    text-align: center;
    font-size: 1.5rem;
`
const TitleH1 = styled.h1 `
    font-family: 'Amaranth', sans-serif;
    font-size: 4rem;
    letter-spacing: 5px;
    color: ${props => props.theme.whiteColor};
    text-shadow:
    0 0 0px ${props => props.theme.whiteColor},
    0 0 2px ${props => props.theme.whiteColor},
    0 0 7px ${props => props.theme.whiteColor},
    0 0 20px ${props => props.theme.pinkColor},
    0 0 82px ${props => props.theme.pinkColor},
    0 0 92px ${props => props.theme.pinkColor},
    0 0 102px ${props => props.theme.pinkColor},
    0 0 151px ${props => props.theme.pinkColor};
`
// STYLING ENDS

const Title = () => {
    return ( 
        <TitleWrapper>
            <TitleH1>Welcome, Space Traveler...</TitleH1>
        </TitleWrapper>
     );
}
 
export default Title;