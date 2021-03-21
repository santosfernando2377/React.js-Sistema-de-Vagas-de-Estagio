import '../App.css';
import Header from '../components/header';
import View from '../components/view';
import FieldsetHome from '../components/fieldsethome';
import Button from '../components/button';
import Copyright from '../components/copyright';
import Select from '../assets/select.svg';
import Logo from '../assets/logo.png';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <View>
      <Header>
      <Link to="/"><img src={Logo} alt="Grau Logo" height="70px" width="110px" /></Link>
      </Header>
      <View>
          <FieldsetHome>
              <div className="logo">
                <img src={Select} height="300px" width="300px" alt="logo inicial"></img>
              </div>
              <div className="logo">
                <Link to="/cadastro"><Button>Cadastrar Vaga</Button></Link>
                <Link to="/consulta"><Button>Consultar Vaga</Button></Link>
              </div>
          </FieldsetHome>
        <Copyright>© 2021</Copyright>
      </View>
    </View>
  );
}

export default Home;