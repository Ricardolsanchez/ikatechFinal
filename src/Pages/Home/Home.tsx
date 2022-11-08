import React, { useState } from 'react'
import initialProducts from '../../assets/initialProducts'
import { Container, Row, Col } from "reactstrap";
import './Home.css';
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";

export type IProduct = {
    id: string;
    nombre:string;
    precio: number;
    referencia: string;
    foto: string;
 }


const Home = () => {
    const [products, setProducts] = useState<IProduct[]>(initialProducts)
    const { onIncrement} = this.props;


    return (
        <div className='container'>
            <div className="titulo__uno">
                <h4>Tecnologias</h4>
                <hr></hr>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, nisi et necessitatibus voluptate iure quia natus explicabo 
                    eos sed, quod animi error quas quae minima. Totam ad excepturi cumque molestiae.</p>
            </div>
            <hr></hr>
            <div className="titulo__dos">
                <h5>Completa tu Look</h5>
            </div>
            <Row md={2} xs={1} lg={4} className="g-3">

                {products.map(product =>
                    <div key={product.id}>

                        <img src={`${product.foto}`}
                            alt={product.nombre}
                            className="w-20"
                            height="200px"
                            style={{ objectFit: "cover" }} />
                            
                        <p className='title__prin'>{`${product.nombre}`}</p>
                        <p className='precio-ecommerce'>Precio: {`${product.precio}`}</p>
                            <button className='btn btn-outline-secondary'onClick={onIncrement} >Agregar al carrito</button>
                       
                    </div>)}

            </Row>
        </div >
    )
}

export default Home;