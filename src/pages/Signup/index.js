import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container, Content, AnimationContainer } from "./styles";
import { Input } from "../../components/Input";
import {
  FiUser,
  FiMail,
  FiLock,
  FiBook,
  FiPhone,
  FiEdit3,
} from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useHistory, Redirect } from "react-router-dom";

export const Signup = ({ authenticated }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubFunc = (data) => {
    api
      .post("/users", data)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso!");
        return history.push("/login");
      })
      .catch((err) =>
        toast.error("Erro ao cadastrar usuário, tente outro e-mail.")
      );
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubFunc)}>
            <h1>Preecha seus dados</h1>
            <Input
              name="name"
              register={register}
              icon={FiUser}
              label="Nome"
              placeholder="Nome completo"
              error={errors.name?.message}
            ></Input>
            <Input
              name="email"
              register={register}
              icon={FiMail}
              label="E-mail"
              placeholder="E-mail"
              error={errors.email?.message}
            ></Input>
            <Input
              name="contact"
              register={register}
              icon={FiPhone}
              label="Contato"
              placeholder="Contato"
              error={errors.contact?.message}
            ></Input>
            <Input
              name="bio"
              register={register}
              icon={FiEdit3}
              label="Biografia"
              placeholder="Quem é você?"
              error={errors.bio?.message}
            ></Input>
            <Input
              name="course_module"
              register={register}
              icon={FiBook}
              label="Módulo"
              placeholder="Em qual módulo está?"
              error={errors.course_module?.message}
            ></Input>
            <Input
              name="password"
              register={register}
              icon={FiLock}
              label="Senha"
              placeholder="Uma senha bem segura"
              error={errors.password?.message}
              type="password"
            ></Input>
            <Button type="submit">Enviar</Button>
            <p>
              Já possui cadastro? Faça o <Link to="/login">login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
