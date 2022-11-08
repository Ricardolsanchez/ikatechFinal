import React, {useState} from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/12.jpg";



const Header = () => {
    
    return (
        <header>
            <div className="logo-banner">
                <h3 className="text-center">Hot Sales 30% en Sandalias</h3>
            </div>

            <div className="logo-gris-banner ">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a>DIRECTORIO DE TIENDAS</a>
                            <a>SERVICIO AL CLIENTE</a>
                            <a>MI CUENTA</a>
                        </li>
                    </ul>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="nav_wrapper d-flex align-items-center justify-content-between">
                    <Link to='/' className='logo'>
                        <img src={logo} alt="ogo" height='40' />
                    </Link>
                    <h2>HUSH PUPPIES</h2>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto navbar-right nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">HOMBRE <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MUJER</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                BLOG
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                TIENDAS
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-right nav">
                    <input type="text" className="input-search" placeholder="Buscar" />
                    <div className="carrito-right">
                        <p>ENVIO GRATIS PEDIDOS SUPERIORES A $300.000</p>
                        <div className="shopping-cart">
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3">
                                    <a className="link-light">
                                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                            <div className="amount">
                                <span><i className="fa fa-shopping-bag" aria-hidden="true"></i></span>
                                <h6>Carrito</h6>
                                <span className="amount">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <hr></hr>
        </header>
    )
}

export default Header;