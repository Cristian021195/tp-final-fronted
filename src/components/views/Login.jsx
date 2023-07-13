
import { Form, Button, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { iniciarSesion } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const Login = ({setUsuarioLogueado}) => {
  const { register, handleSubmit, formState: {errors}, reset} = useForm(); 
  const navegacion = useNavigate();

  const onSubmit = (usuario)=>{
    console.log(usuario);
    iniciarSesion(usuario).then((respuesta)=>{
      if(respuesta){
        sessionStorage.setItem('usuario', JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta)
        reset();
        navegacion('/administrador');
      }else{
        //mostrar un mensaje de error
        Swal.fire(
          'Error',
          'El email o password son incorrectos',
          'error'
        )
      }
    })
  }

  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
               { ...register('email', {
                required:'El email es un dato obligatorio',
                pattern:{
                  value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:'El email debe tener el siguiente formato mail@dominio.com'
                }
               } ) }
              />
             <Form.Text className="text-danger">
               {errors.email?.message}
             </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
               {...register('password',{
                required: 'El password es obligatorio',
                pattern:{
                  value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                  message: 'El password debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. No puede tener otros símbolos.'
                }
               })}
              />
            <Form.Text className="text-danger">
               {errors.password?.message}
            </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;


