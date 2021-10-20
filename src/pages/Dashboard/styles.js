import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
`;

export const InputContainer = styled.form`
  flex: 1;
  margin-top: 50px;
  padding: 0 38px;
  section {
    display: flex;

    div {
        max-width: 100%;
        flex: 2;
        margin-right: 10px
    }

    button{
        max-width: 200px;
        height: 46px;
        margin: 0;
    }
  }
`;

export const TechsContainer = styled.div`
padding: 0 38px;
margin-top: 32px;
display: flex;
flex-wrap: wrap;

div{
    margin-top: 15px;
    margin-right: 32px;
}
`
