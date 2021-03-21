import '../App.css';
import Header from '../components/header';
import View from '../components/view';
import Fieldset from '../components/fieldset';
import Copyright from '../components/copyright';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'

function getvagas() {
  return (
    <View>
      <Header>
      <Link to="/"><img src={Logo} alt="Grau Logo" height="70px" width="110px" /></Link>
      </Header>
      <View>
          <Fieldset>
            <Iframe src="iframe/framevaga.html" frameBorder="0" height="100%" width="100%" />           
          </Fieldset>
        <Copyright>© 2021</Copyright>
      </View>
    </View>
  );
}

export default getvagas;