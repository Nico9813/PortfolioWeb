import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Carrusel from './Carrusel'

export const Project = (props) => {

    const { proyecto, contador } = props
    const { titulo, anio, descripcion, tecnologias, views, downloads } = proyecto
    const left = contador % 2 
    const right = (contador + 1) % 2

    return (
        <div className='projectRow' style={{ backgroundColor: left ? 'rgba(55, 55, 55, 0.2)' : '#7abfff'}}>
            <Row className='project'>
                <Col xs={{size: 12}} lg={{ size: 3, order: left,offset:1 }} className='projectCol'>
                        <Container>
                            <h2 style={{ color: left? 'white' : 'black'  }}>{titulo}</h2>
                            <h6 style={{ color: left? 'white' : 'black' }}>{anio}</h6>
                            <Row style={{ marginBottom: 8, marginLeft: 0}}>
                                {tecnologias.map((item) =>
                                    <Col xs={{ size: 'auto' }} className="tecnologia" style={{ backgroundColor: 'black' }}>
                                        <h7> {item}</h7>
                                    </Col>
                                )}
                            </Row>
                            <div>
                            <p style={{ color: left? 'white' : 'black' }}>{descripcion}</p>
                            </div>
                            <Row style={{ marginLeft: -2 }}>
                                {views &&
                                    Object.keys(views).map( key => 
                                        <a href={views[key]} target="_blank" rel="noopener noreferrer"><Button style={{ margin: "3px", backgroundColor:'white', color: 'black'}}>Ver {key}</Button></a>
                                    )
                                }
                                {downloads && 
                                    Object.keys(downloads).map( key => 
                                        <a href={process.env.PUBLIC_URL + downloads[key]} download><Button style={{ margin: "3px" }} color="success">Descargar {key}</Button></a>
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