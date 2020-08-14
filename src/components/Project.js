import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

export const Project = (props) => {

    const proyectoActual = props.proyecto
    const left = props.contador % 2 
    const right = (props.contador + 1) % 2

    return (
        <div>
            <Row className='projectRow' style={{ backgroundColor: left ? '#eff5ff' : '#c2d8fd' }}>
                    <Col lg={{ size: 5, order: left,offset:1 }} className='projectCol'>
                        <Container>
                            <h2>{proyectoActual.titulo}</h2>
                            <Row style={{marginLeft:1}}>
                                {proyectoActual.tecnologias.map((item, index) =>
                                    <Col xs={{size:'auto'}} className="tecnologia" >
                                        <h7>{item}</h7>
                                    </Col>
                                )}
                            </Row>
                            <p>{proyectoActual.descripcion}</p>
                            <Button onClick={() => window.location.href= proyectoActual.github } color="primary">View on Github</Button>
                        </Container>
                    </Col>
                    <Col lg={{ size: 5, order: right }} className='projectCol'>
                        <Container>
                            <img src={proyectoActual.imagenes} style={{ maxWidth:'100%', maxHeight:'100%'}}/>
                        </Container>
                    </Col>
            </Row>
        </div>
    )
}