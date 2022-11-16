import styled from "styled-components"

const Wrapper = styled.div`
    border: solid ${props => props.finished ? "green" : "red"} 3px;
`

const List = (props) => {
    return(
        <Wrapper>
            <h2>{props.item}</h2>
            <button onClick={props.removeHandler}>Delete</button>
            <button onClick={props.finished}>Completed</button>
        </Wrapper>
    )
}

export default List