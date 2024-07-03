import style from 'styled-components';
function Style(){
const H1=style.h1`
color:red;
text-align:center;
`;
const DIV=style.div`
background-color:green;
border:4px solid black;
`
    return(
        <>
        <hr />
        <h1>Styled Components</h1>
<DIV>
    <H1>HAI</H1>
    </DIV>
    <hr />
    </>
    )
}
export default Style;