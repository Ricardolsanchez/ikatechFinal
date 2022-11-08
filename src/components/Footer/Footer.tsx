import React from "react";
import './Footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";

const Footer = () => {
    return (
        <section id="Footer">
            <div className="Footer">
            <div className="text_icons">
                <h5>@HUSHPUPPIESCO</h5>
                <div className="separation"></div>
                <div className="social__media">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
            </div>
        </div>

    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <h5 className='footer__title'>SERVICIO AL CLIENTE</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>CONTÁCTENOS</span>
                <p>CAMBIOS Y DEVOLUCIONES</p>
                <p>POLÍTICA DE LA TIENDA</p>
                <p>POLÍTICA DE DATOS</p>
              </ListGroupItem>
              </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
          <h5 className='footer__title'>Contact</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                <span>MI CUENTA</span>
                <p>MIS PEDIDOS</p>
                <p>MIS DEVOLUCIONES</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          
          <Col lg="3" md="4" sm="6">
          <h5 className='footer__title'>Contact</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                <span>RECURSOS</span>
                <p>TIENDAS</p>
                <p>DEVOLUCIONES</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className='footer__title'>Newsletter</h5>
            <p>Registrate para ser el primero en recibir nuestras noticias</p>
            <div className="newsletter">
              <input type="email" placeholder='Enter your Email' />
              <span><i className="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    </section>
    );
};

export default Footer;