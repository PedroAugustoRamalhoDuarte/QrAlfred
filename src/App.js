import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import Images
import MenuImage from "./images/menu.png"
import FoodImage from "./images/food.jpg"
import FormImage from "./images/form.png"
import FaceMaskImage from "./images/facemask.jpg"
import Graphs from "./images/graphs.jpg"
import CloudImage from "./images/cloud.png"
import BarImage from "./images/bar.jpg"

function App() {
    return (
        <div style={{overflowX: "hidden"}}>

            <header className="masthead text-center text-white d-flex"
                    style={{backgroundImage: `url(${BarImage})`, opacity: "1.4"}}>
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1 className="text-uppercase"><strong>QR Alfred</strong></h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <h3 className="text-faded mb-5">Seu restaurante no mundo digital</h3><a
                        className="btn btn-primary btn-xl js-scroll-trigger" role="button" href="#services">Descubra
                        Mais</a></div>
                </div>
            </header>

            <h1 className="text-center pt-5">Nossas Soluções</h1>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5"><img className="rounded-circle img-fluid" src={MenuImage}
                                                      alt="Imagem de um cardápio"/>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 className="display-4">Cárdapio Digital</h2>
                                <p>Com o QRAlfred seu cardápio está na nuvem, sendo assim é mais fácil a edição,
                                    visualização e manutenção dos itens do cardápio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5"><img className="rounded-circle img-fluid" src={FoodImage}
                                                      alt="Foto de um prato com salmão"/>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                                <h2 className="display-4">Controle de Pedidos</h2>
                                <p>O restaurante tem total controle sobre os pedidos, podendo escolher entre um layout
                                    de lista,
                                    quadro ou layout de como as mesas dos restaurante são distribuidas para uma melhor
                                    visualização e organizaçao dos pedidos </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5"><img className="rounded-circle img-fluid" src={FormImage}
                                                      alt="Imagem representando questionário"/>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 className="display-4">Avaliação do cliente</h2>
                                <p>Depois do pagamento, o cliente pode avaliar o atendimento/comida com base em um
                                    questionário pré-estabelecido pelo restaurante</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5"><img className="rounded-circle img-fluid" src={FaceMaskImage}
                                                      alt="Máscara"/>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                                <h2 className="display-4">Mais Segurança</h2>
                                <p>Com o cardápio digial, a troca de objetos é reduzida entre cliente e funcionários,
                                    diminuindo a chance de contaminação de doenças</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5"><img className="rounded-circle img-fluid" src={Graphs}
                                                      alt="Imagem de um sno com notificação"/>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 className="display-4">Dados de pedidos</h2>
                                <p>Um dos grandes benefícios do sistema é conseguir inferir dados sobre o restaurante
                                    como: itens mais pedidos, itens mais
                                    pedidos em conjuntos, horário de pico de cliente, dados nos quais são extremamente
                                    relevantes
                                    para organiação interna e produtividade do restaurante</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5"><img className="rounded-circle img-fluid" src={CloudImage}
                                                      alt="Imagem representando armazenamento na nuvem"/>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                                <h2 className="display-4">Armazenamento em Nuvem</h2>
                                <p>O sistema é totalmente na nuvem e por isso não precisa ser instalado nem nos
                                    computadores do restaurantes, nem no dispositivo móvel dos clientes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-5 bg-dark">
                <div className="row">
                    <div className="col-12 col-md text-center">
                        <p className="text-white">QrAlfred!</p>
                        <small className="d-block mb-3 text-muted">© 2020-2021</small>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default App;
