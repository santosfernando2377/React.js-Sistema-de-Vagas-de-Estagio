import '../App.css';
import Header from '../components/header';
import View from '../components/view';
import Fieldset from '../components/fieldset';
import Sucess from '../components/sucess';
import Sucesscenter from '../components/sucessimg';
import Title from '../components/title';
import Button from '../components/buttonsucess';
import Copyright from '../components/copyright';
import Logo from '../assets/logo.png';
import Confirmed from '../assets/confirmation.svg';
import { Link } from 'react-router-dom';

function App() {
  return (
    <View>
      <Header>
      <Link to="/"><img src={Logo} alt="Grau Logo" height="70px" width="110px" /></Link>
      </Header>
      <View>
          <Fieldset>
            <Sucess>
              <Sucesscenter>
                <img src={Confirmed} alt="Grau Logo" height="200px" width="200px" />
              </Sucesscenter>
              <Title>A Vaga foi Cadastrada com Sucesso.</Title>
              <Sucesscenter>
                <Link to="/"><Button>Voltar a Tela de Cadastro</Button></Link>  
              </Sucesscenter>
            </Sucess>
          </Fieldset>
        <Copyright>© 2021</Copyright>
      </View>
    </View>
  );
}

export default App;