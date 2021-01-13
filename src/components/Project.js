import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Carrusel from './Carrusel'

export const Project = (props) => {

    const { proyecto, contador } = props
    const { titulo, descripcion, tecnologias, views, downloads } = proyecto
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
                            <div className="descripcion_container" style={{backgroundColor: left ? '#e6e6e6' : '#5eb2ff'}}>
                                <p>{descripcion}</p>
                            </div>

                            <Row style={{ marginLeft: 0.7 }}>
                                {views &&
                                    Object.keys(views).map( key => 
                                        <a href={process.env.PUBLIC_URL + views[key]} target="_blank"><Button style={{ margin: "3px" }} color="primary">View on {key}</Button></a>
                                    )
                                }
                                {downloads && 
                                    Object.keys(downloads).map( key => 
                                        <a href={process.env.PUBLIC_URL + downloads[key]} download><Button style={{ margin: "3px" }} color="success">Download {key}</Button></a>
                                    )
                                }
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