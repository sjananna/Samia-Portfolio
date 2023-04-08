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
                        <p className='aboutdetails'>As a Strategic Administrative Assistant and Sales Professional with 2 years of experience, I have developed strong administrative skills, including managing front-
                        desk coverage, detailed data collection and processing, preparing written reports and
                        handling correspondence. Additionally, with a deep understanding of customer needs
                        and excellent communication and problem-solving skills, I am highly skilled at
                        providing an exceptional customer experience. With a friendly and outgoing demeanor,
                        I naturally connect with customers and create a welcoming environment in which they
                        feel comfortable and valued. Lastly, I am adept at working independently as well as
                        collaboratively as a team member. I am able to multi-task effectively under pressure
                        and handle stress while prioritizing the workload in a fast-paced office environment.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                <li>Client Relationships</li>
                                <li>Time Management</li>
                                <li>Account Management</li>
                                <li>Strategy Development</li>
                                </Col>
                                <Col md={5}>
                                <li>Financial Analysis/Planning</li>
                                <li>Customer Service Skills</li>
                                <li>Problem-Solving</li>
                                <li>Data Collection and Processing</li>
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