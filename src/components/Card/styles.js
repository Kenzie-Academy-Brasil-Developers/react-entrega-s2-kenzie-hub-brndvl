import styled from "styled-components";

export const Container = styled.div`
background-color: var(--white);
border-radius: 8px;
display: flex;
flex-direction: column;
align-items: center;
width: 150px;
height: 190px;
padding: 16px;
box-shadow: 0px 3px 3px blueviolet;
border: 1px solid var(--black);
color: var(--black);

hr{
    width: 80%;
    margin-top: 16px;
    margin-bottom: 16px;
    
}

button{
    margin-top: 50px;
    align-self:flex-end
}

svg{
    font-size: 1.1.rem;
}

`