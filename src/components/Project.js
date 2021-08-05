import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Carrusel from './Carrusel'

export const Project = (props) => {

    const { proyecto, contador } = props
    const { titulo, anio, descripcion, tecnologias, views, downloads } = proyecto
    const left = contador % 2 
    const right = (contador + 1) % 2

    return (
        <div className='projectRow' style={{ backgroundColor: left ? 'white' : '#7abfff' }}>
            <Row className='project'>
                <Col xs={{size: 12}} lg={{ size: 3, order: left,offset:1 }} className='projectCol'>
                        <Container>
                            <h2>{titulo}</h2>
                            <h6>{anio}</h6>
                            <Row className="tecnologiasContainer" style={{ marginBottom: 8, marginLeft: 0}}>
                                {tecnologias.map((item) =>
                                    <Col xs={{ size: 'auto' }} className="tecnologia"> 
                                        <p>{item}</p>
                                    </Col>
                                )}
                            </Row>
                            <div className="description">
                                <p>{descripcion}</p>
                            </div>
                            <Row style={{ marginLeft: -2 }}>
                                {views &&
                                    Object.keys(views).map( key => 
                                        <a href={views[key]} target="_blank" rel="noopener noreferrer">
                                            <Button style={{ margin: "3px", minWidth: 200, backgroundColor: '#2998ff', color: 'white'}} color="primary">Ver {key}</Button></a>
                                    )
                                }
                                {downloads && 
                                    Object.keys(downloads).map( key => 
                                        <a href={process.env.PUBLIC_URL + downloads[key]} download><Button style={{ margin: "3px", minWidth: 200, backgroundColor: '#2998ff', color: 'white' }} color="primary">Descargar {key}</Button></a>
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