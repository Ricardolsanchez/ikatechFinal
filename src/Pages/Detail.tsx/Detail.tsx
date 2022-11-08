import React from 'react'
import {Container, Row, Col} from "reactstrap";
import Trece from "../../assets/imgs/13.jpg";
import './Detail.css';

const Detail = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className="hero__content">
                        <h2 className='main__detail'>HUSHPUPPIESCO / CALZADO /  ZAPATILLA HOMBRE PELIKAN</h2>
                        <img src={Trece} alt="zapato"
                        height="500px"
                        style={{ objectFit: "cover" }} />
                        <hr></hr>

                        <div className="parte_final">
                            <h4>DETALLES DEL PRODUCTO</h4>
                        </div>
                        <hr></hr>
                        
                    </div>
                </Col>

                <Col lg="6" md="6">
                    <div className="right-side">
                        <h3>ZAPATILLA HOMBRE PELICAN</h3>
                        <h4>$00.00</h4>
                        <p>Cod. de Producto zap-005</p>
                        <h4>COLOR</h4>
                        <img src={Trece} alt="zapato"
                        height="100px"
                        style={{ objectFit: "cover" }} />
                    </div>

                    <div className="tallas">
                        <div className="square">
                            <h5 className='texti'>5</h5>
                        </div>
                    </div>
                    <div className="tallasdos">
                        <div className="square">
                            <h5 className='texti'>5.5</h5>
                        </div>
                    </div>
                    <div className="tallastres">
                        <div className="square">
                            <h5 className='texti'>6</h5>
                        </div>
                    </div>
                    <div className="tallascuatro">
                        <div className="square">
                            <h5 className='texti'>6.5</h5>
                        </div>
                    </div>
                    <div className="tallascinco">
                        <div className="square">
                            <h5 className='texti'>7</h5>
                        </div>
                    </div>
                    <div className="tallasseis">
                        <div className="square">
                            <h5 className='texti'>7.5</h5>
                        </div>
                    </div>
                    <div className="tallassiete">
                        <div className="square">
                            <h5 className='texti'>8</h5>
                        </div>
                    </div>
                    <div className="tallasocho">
                        <div className="square">
                            <h5 className='texti'>8.5</h5>
                        </div>
                    </div>
                    <div className="tallasnueve">
                        <div className="square">
                            <h5 className='texti'>9</h5>
                        </div>
                    </div>
                    <div className="tallasdiez">
                        <div className="square">
                            <h5 className='texti'>10</h5>
                        </div>
                    </div>

                    <div className="title_tallas mt-5">
                        <h6>GUIA DE TALLAS</h6>
                    </div>
                    <div className="boton">
                        <button className='btn btn-outline-secondary'>Añadir al carrito</button>
                    </div>
                    
                    <div className="corazon">
                        <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                    </div>

                    
                </Col>
            </Row>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur in delectus cupiditate odio ut accusantium porro, laboriosam
                             omnis sequi cumque, maiores rem libero quibusdam corporis modi provident distinctio mollitia? Sit.</p>
        </Container>
    </div>
  )
}

export default Detail


