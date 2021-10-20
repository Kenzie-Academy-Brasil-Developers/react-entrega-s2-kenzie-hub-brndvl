import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
height: 100vh;
flex-direction: column;
`

export const Content = styled.div`
max-width: 400px; 
h1{
    text-shadow: 0px 5px 5px rgba(0,0,0,0.5);
    font-size: 2.1rem;
}

span{
    color: blueviolet;
    font-weight: bold;
    font-size: 2.5rem;
}

div{
    flex: 1 1 100px;
    display: flex;
    margin-top: 3rem;

    button + button{
        margin-left: 1rem;
    }
}

span{
    margin-bottom: 2rem;
    font-size: 3rem;
    flex-wrap: wrap;
}
`