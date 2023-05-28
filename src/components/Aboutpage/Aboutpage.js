import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>Strategic Software Engineer skilled in application development, testing and optimization. Excels at coordinating ground-up planning, programming, and implementation for core modules. Maintains strong object-oriented and software architecture fundamentals. 
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                <li>Programming Languages: Python, Java, JavaScript, C++</li>
                                <li>JS Frameworks: React, Angular</li>
                                <li>Agile Development Frameworks</li>
                                <li>User Interface Development</li>
                                <li>Databases: Oracle, MongoDB</li>
                                <li>Application Development</li>
                                </Col>
                                <Col md={5}>
                                <li>Source and Version Control: Git, GitHub</li>
                                <li>Object-Oriented Programming</li>
                                <li>Complex Problem Solving</li>
                                <li>Analytical Thinking and Problem Solving</li>
                                <li>Time Management and Organization</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage