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
  const [user, setUser] = useState("");

  const [techs, setTechs] = useState([]);

  const { register, handleSubmit } = useForm();

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token") || "")
  );

  const [userId] = useState(JSON.parse(localStorage.getItem("@userID") || ""));
  const loadTechs = () => {
    api
      .get(`/users/${userId}`)
      .then((response) => {
        setTechs(response.data.techs);
        setUser(response.data.name);
      })
      .catch((err) => console.log(err));
  };

  const clear = () => {
    setTechs([]);
    setUser("");
  };

  useEffect(() => {
    loadTechs();
    return () => {
      clear();
    };
  }, []);

  const addTech = (tech) => {
    console.log(tech);
    api
      .post("/users/techs", tech, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => loadTechs())
      .then((response) => toast.success("Nova tecnologia foi adicionada"));
  };

  const removeTech = (id) => {
    const newArr = techs.filter((tech) => tech.id !== id);

    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setTechs(newArr));
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <h1>Olá, {user}.</h1>
      <InputContainer onSubmit={handleSubmit(addTech)}>
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
            key={tech.id}
            title={tech.title}
            status={tech.status}
            onClick={() => removeTech(tech.id)}
          />
        ))}
      </TechsContainer>
    </Container>
  );
};
