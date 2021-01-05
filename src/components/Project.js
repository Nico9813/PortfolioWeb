import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Carrusel from './Carrusel'

export const Project = (props) => {

    const proyectoActual = props.proyecto
    const left = props.contador % 2 
    const right = (props.contador + 1) % 2

    return (
        <div>
            <Row className='projectRow' style={{ backgroundColor: left ? 'black' : '#4287f5' }}>
                <Col xs={{size: 12}} lg={{ size: 3, order: left,offset:1 }} className='projectCol'>
                        <Container>
                            <h2 style={{ color: left ? '#ebebeb' : 'black' }}>{proyectoActual.titulo}</h2>
                            <Row style={{marginLeft:1}}>
                                {proyectoActual.tecnologias.map((item, index) =>
                                    <Col xs={{ size: 'auto' }} className="tecnologia" style={{ backgroundColor: left ? '#4287f5' : 'black' }}>
                                        <h7>{item}</h7>
                                    </Col>
                                )}
                            </Row>
                            <p style={{ color: left ? '#ebebeb' : 'black' }}>{proyectoActual.descripcion}</p>
                            <Button onClick={() => window.location.href= proyectoActual.github } color="primary">View on Github</Button>
                        </Container>
                    </Col>
                    <Col xs={{size: 12}} lg={{ size: 7, order: right }} className='projectCol'>
                        <Container>
                            <Carrusel imagenes={proyectoActual.imagenes}/>
                        </Container>
                    </Col>
            </Row>
        </div>
    )
}