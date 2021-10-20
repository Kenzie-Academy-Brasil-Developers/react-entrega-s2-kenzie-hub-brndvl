import { keyframes } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`;

const apperFromRight = keyframes`
from{
    opacity: 0;
    transform: translateX(50px)

}
to{
    opacity: 1;
    transform: translateX(0px);
}
`;

export const AnimationContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
animation: ${apperFromRight} 1s;

form{
    margin: 80px 0;
    width: 340px;
    text-align: center;
}

h1{
    margin-bottom: 32px;
    font-size: 1.9rem;
    text-shadow: 1px 1px 2px blueviolet;
}


p{
    margin-top: 13px;

    a{
        font-weight: bold;
        color: blueviolet;
    }
}
`
