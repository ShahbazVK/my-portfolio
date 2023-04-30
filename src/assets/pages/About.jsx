import React from 'react'
import logo from '../PC.png'
import { Row, Col } from 'react-bootstrap'
import 'animate.css';


export const About = () => {
    return (
        <div className=''>
            <br />

            <p className='text-center text-5xl sm:text-4xl md:text-5xl lg:text-5xl'>WHO I AM?</p>
            <br />
            <br />
            <Row>
                <Col md={3}>
                    <div className='animate__animated animate__backInLeft sm:flex sm:justify-center md:flex md:justify-center'>
                        <img className='h-72 w-60 border-8 border-sky-50 rotate-3 ml-4 lg:mt-16 2xl:ml-20 sm:ml-0 md:ml-0 lg:ml-4 xl:ml-6' src={logo} alt="" />
                    </div>
                </Col>
                <Col md={4}>
                    <br />
                    <div className='animate__animated animate__backInDown'>
                        <p className='text-xl sm:pl-4 sm:pr-4 sm:mb-4 md:pl-4 md:pr-4 md:mb-6 lg:ml-4 xl:ml-4'><span className='text-yellow-400'>My name is Shahbaz Ali and was born in U.S. in 2001.</span> Currently, I'm a 4th year undergraduate student in <span className='text-yellow-400'>NED University.</span> I'm a web developer with a focus on the <span className='text-yellow-400'>React JS, MERN stack and Flutter</span> and still exploring other technologies and frameworks that catch my interest! <span className='text-yellow-400'>if you're looking for a developer to add to your team, I'd love to hear from you!</span></p>
                    </div>
                </Col>
                <Col md={5}>
                    <div className='pl-5 animate__animated animate__backInRight'>
                        <p className='text-4xl font-bold'>EXPERIENCES</p>
                        <p className='font-bold text-lg text-yellow-400'>Internship Experience</p>
                        <p className='text-xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intern at Karachi Development Authority</p>
                        <p className='font-bold text-lg text-yellow-400'>Finance Manager</p>
                        <p className='text-xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I love to do voluntarily work for sake of human being. I am working as a finance member in a private institution. <li>Collecting funds</li> <li> Managing Accounts</li></p>
                        <p className='font-bold text-lg text-yellow-400'>Teacher</p>
                        <p className='text-xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Holy Quran-Pak teacher</p>
                    </div>
                </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div >
    )
}
