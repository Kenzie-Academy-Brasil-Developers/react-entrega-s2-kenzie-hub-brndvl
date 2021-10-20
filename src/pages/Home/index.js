import { useHistory, Redirect } from "react-router-dom"
import {Button} from "../../components/Button"
import {Container, Content} from "./styles"

export const Home = ({authenticated}) => {

    const history = useHistory()

    const handleNavigation = (path) => {
        return history.push(path)
    }
    
    if(authenticated){
        return <Redirect to="/dashboard"/>
    }

    return( 
    <Container>
        <Content>

        <h1>Seja bem-vindo ao <span>Kenzie Hub</span></h1>
        
        <div>
            <Button onClick={() => handleNavigation("/signup")}>Cadastre-se</Button>
            <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
        </Content>
    </Container>
    )
}