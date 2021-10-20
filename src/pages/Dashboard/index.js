import { Redirect } from "react-router-dom";
import { Container, InputContainer, TechsContainer } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const Dashboard = ({ authenticated }) => {
  const [user, setUser] = useState({});

  const [techs, setTechs] = useState([]);

  const { register, handleSubmit } = useForm();

  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

  const addTechs = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => toast.success("Nova tecnologia adicionada"));
  };

  useEffect(() => {
    api
      .get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUser(response.data));
  }, [token]);

  const removeTech = () => {};

  setTechs(user.techs);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <InputContainer onSubmit={handleSubmit(addTechs)}>
        <section>
          <Input
            name="title"
            placeholder="Adicionar nova tecnologia"
            register={register}
          />
          <Input name="status" placeholder="Nível atual" register={register} />
          <Button type="submit">Adicionar</Button>
        </section>
      </InputContainer>
      <TechsContainer>
        {techs.map((tech) => (
          <Card
            title={tech.title}
            status={tech.status}
          />
        ))}
      </TechsContainer>
    </Container>
  );
};
