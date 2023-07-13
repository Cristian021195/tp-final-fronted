import { Button } from 'react-bootstrap';
//import error from '../../assets/error404.png'
const Error404 = () => { //<img src={error} alt="error 404" />
    return (
        <section className="mainSection text-center">
            <h2>ERROR 404</h2>
            <div>
            <Button variant='primary' >Volver al inicio</Button>

            </div>
        </section>
    );
};

export default Error404;