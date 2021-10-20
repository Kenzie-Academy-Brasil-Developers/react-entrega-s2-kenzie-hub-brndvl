import { Container } from "./styles";
import { Button } from "../Button";
import { FiCpu, FiBarChart2 } from "react-icons/fi";

export const Card = ({ title, status, onClick }) => {
  return (
    <Container>
      <span>
        <FiCpu />
        {title}
      </span>
      <hr />
      <span><FiBarChart2/>{status}</span>
      <Button onClick={onClick}>Excluir</Button>
    </Container>
  );
};
