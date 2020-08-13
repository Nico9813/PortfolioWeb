import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

const coloresTecnologias = ['#dedede', '#00a2ff']

export const Project = (props) => {

    const proyectoActual = props.proyecto
    const left = props.contador % 2 
    const right = (props.contador + 1) % 2

    return (
        <div>
            <Row className='projectRow' style={{ backgroundColor: left ? '#eff5ff' : '#c2d8fd' }}>
                    <Col lg={{ size: 'auto', order: left }} className='projectCol float-right'>
                        <Container>
                            <h2>{proyectoActual.titulo}</h2>
                            <Row>
                                {proyectoActual.tecnologias.map((item, index) =>
                                    <Col className="tecnologia" >
                                        <a>{item}</a>
                                    </Col>
                                )}
                            </Row>
                            <p>{proyectoActual.descripcion}</p>
                            <Button color="primary">View on Github</Button>
                        </Container>
                    </Col>
                    <Col lg={{ size: 'auto', order: right }} className='projectCol float-left'>
                        <Container>
                            <img src={require("./prueba.png")} alt="Girl in a jacket" width="600" height="300" />
                        </Container>
                    </Col>
            </Row>
        </div>
    )
}