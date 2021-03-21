import '../App.css';
import Header from '../components/header';
import View from '../components/view';
import Copyright from '../components/copyright';
import Logo from '../assets/logo.png';
import Page404 from '../assets/page404.svg';

function page404() {
  return (
    <View>
      <Header>
        <img src={Logo} alt="Grau Logo" height="70px" width="110px" />
      </Header>
      <View>
        <img src={Page404} alt="Grau Logo" height="410px" width="410px" />          
        <Copyright>© 2021</Copyright>
      </View>
    </View>
  );
}

export default page404;