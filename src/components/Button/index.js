import { Container } from "./styles";

export const Button = ({ children, ...rest }) => {
  return(
      <Container type="submit" {...rest}>
          {children}
      </Container>
  )

};
