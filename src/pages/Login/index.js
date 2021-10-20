import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container, Content, AnimationContainer } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useHistory, Redirect } from "react-router-dom";

export const Login = ({ setAuthenticated, authenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
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
      console.log(data)
    api
      .post("/sessions", data)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("@KenzieHub:token", JSON.stringify(response.data.token));
        localStorage.setItem("@userID", JSON.stringify(response.data.user.id))
        setAuthenticated(true);
        return history.push("/dashboard");
      })
      .catch((err) => toast.error("E-mail ou senha inválidos."));
  };

  

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubFunc)}>
            <h1>Digite seu e-mail e senha</h1>

            <Input
              name="email"
              register={register}
              icon={FiMail}
              label="E-mail"
              placeholder="E-mail"
              error={errors.email?.message}
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
            <Button type="submit">Entrar</Button>
            <p>
              Ainda não possui uma conta? Cadastre-se{" "}
              <Link to="/signup">aqui</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
