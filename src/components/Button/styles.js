import styled from "styled-components"

export const Container = styled.button`
background-color: #0c0d0d;
color: #f5f5f5;
height: 45px;
border-radius: 8px;
border: 2px solid var(--black);
font-family: "Roboto Mono", monospace;
margin-top: 16px;
width: 100%;
:hover{
    background-color: var(--white);
    color: var(--black);
    border: 1px solid blueviolet;
    transition: 0.4s;
}
`