import '../App.css';
import Header from '../components/header';
import View from '../components/view';
import Fieldset from '../components/fieldset';
import Title from '../components/title';
import Form from '../components/form';
import Label from '../components/label';
import Input from '../components/input';
import Button from '../components/button';
import Copyright from '../components/copyright';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Postvagas() {
  return (
    <View>
      <Header>
      <Link to="/"><img src={Logo} alt="Grau Logo" height="70px" width="110px" /></Link>
      </Header>
      <View>
          <Fieldset>
            <Title>CADASTRO DE VAGA</Title>
            <Form>
              <Label>Nome da Vaga:</Label>
              <Input type="text" name="NomeVaga" required={true} />
              <Label>Empresa:</Label>
              <Input type="text" name="Empresa" required={false} />
              <Label>Requisitos da Vaga:</Label>
              <Input type="text" name="RequisitoVaga" required={true} />
              <Label>Benefícios:</Label>
              <Input type="text" name="BeneficioVaga" required={true} />
              <Label>Horário/Local:</Label>
              <Input type="text" name="LocalHrVaga" required={true} />
            </Form>
            <Link to="/cadastrosucesso"><Button>Cadastrar Vaga</Button></Link>
          </Fieldset>
        <Copyright>© 2021</Copyright>
      </View>
    </View>
  );
}

export default Postvagas;