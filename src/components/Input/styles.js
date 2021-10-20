import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  div{
      span{
          color: red;
      }
  }
`;

export const InputContainer = styled.div`
background: var(--white);
border-radius: 10px;
border: 1px solid var(--black);
color: var(--gray);
padding: 0.7rem;
width: 100%;
display: flex;
transition: 0.4s;

${(props) =>
  props.isErrored &&
  css`
    border-color: red;
    svg {
      color: red;
    }
  `}

input{
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    &::hover{
        color: var(--gray)
    }
    
    }
}
svg{
    margin-right: 16px;

`;
