import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Carrusel from './Carrusel'

export const Project = (props) => {

    const { proyecto, contador } = props
    const { titulo, descripcion, tecnologias, views } = proyecto
    const left = contador % 2 
    const right = (contador + 1) % 2

    return (
        <div className='projectRow' style={{ backgroundColor: left ? 'white' : '#7abfff' }}>
            <Row className='project'>
                <Col xs={{size: 12}} lg={{ size: 3, order: left,offset:1 }} className='projectCol'>
                        <Container>
                            <h2>{titulo}</h2>
                            <Row style={{marginLeft:0.7}}>
                                {tecnologias.map((item) =>
                                    <Col xs={{ size: 'auto' }} className="tecnologia" style={{ backgroundColor: 'black' }}>
                                        <h7>{item}</h7>
                                    </Col>
                                )}
                            </Row>
                            <p>{descripcion}</p>
                            <Row style={{ marginLeft: 0.7 }}>
                                {views.map((value) => 
                                    <Button style={{ marginRight: "3px" }} onClick={() => window.location.href = value[Object.keys(value)]} color="primary">View on {Object.keys(value)}</Button>
                                )}
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={{size: 12}} lg={{ size: 7, order: right }} className='projectCol'>
                        <Container>
                            <Carrusel imagenes={proyecto.imagenes}/>
                        </Container>
                    </Col>
            </Row>
        </div>
    )
}