import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation'
import logo from '../whatsapp.jpg'
import logo2 from '../Capture.png'
import { Link } from 'react-router-dom'
import VisibilitySensor from 'react-visibility-sensor'
import 'animate.css'
import { useState } from 'react'

export const Home = () => {
    return (
        <div>
            <div className='animate__animated animate__bounceInDown'>
                <Row className='introimg'>
                    <Col className='flex flex-col justify-center items-center pl-8'>
                        <div>
                            <TypeAnimation
                                sequence={[
                                    'Assalam O Alaikum,', // Types 'One'
                                    500, // Waits 1s
                                    'I am Shahbaz Ali,', // Deletes 'One' and types 'Two'
                                    500, // Waits 2s
                                    'Currently completing my bachelor degree in Computer Science and IT from NED University.', // Types 'Three' without deleting 'Two'
                                    500,
                                    'Skilled in React.js, MERN stack and Flutter....',
                                    () => {
                                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                    }
                                ]}
                                wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: '2em' }}
                            />
                        </div>
                    </Col >
                    <Col className='flex flex-col justify-center items-center pt-12 pb-12 sm:mr-4'>
                        <img className='rounded-3xl h-80' src={logo} alt="dkslk" />
                    </Col>
                </Row >
            </div>
            {/* skills */}
            {/* <VisibilitySensor onChange={onChangeSkill}> */}
            <div className='animate__animated animate__fadeInLeft'>
                <br />

                <p className='font-bold text-4xl text-center'>SKILLS</p>
                <br />
                <div className='flex justify-center flex-wrap gap-10'>
                    <div>
                        <p className='rangecircular text-3xl font-bold'>9/10</p>
                        <p className='text-center text-xl font-bold'>React JS</p>
                    </div>
                    <div>
                        <p className='rangecircular text-3xl font-bold'>7/10</p>
                        <p className='text-center text-xl font-bold'>MERN stack</p>
                    </div>
                    <div>
                        <p className='rangecircular text-3xl font-bold'>6/10</p>
                        <p className='text-center text-xl font-bold'>Flutter</p>
                    </div>
                </div>
            </div>
            {/* </VisibilitySensor> */}
            <div>
                <br />
                <br />
                <br />
                <p className='font-bold text-4xl text-center'>PROJECTS</p>
                <br />
                <div className='flex flex-wrap justify-center'>
                    <Row>
                        <Col lg={4} md={6}>
                            <a className='hover:text-slate-300' href='https://github.com/ShahbazVK/pizza-mern-app'>
                                <div className='mb-8 bg-neutral-900 mr-6 ml-6 pt-4 pr-4 pl-4 pb-4 rounded-2xl flex flex-col justify-center items-center'>
                                    <img className='h-44 mb-2 rounded-2xl' src='https://user-images.githubusercontent.com/63925374/194119446-db17cfeb-8d1e-49be-adae-dbf43eb2168d.png' />
                                    <p className='text-center font-semibold text-xl text-yellow-500'>Pizza Delivery</p>
                                    <p>MERN app for pizza delivery with Stripe payment gateway</p>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}>

                            <a className='hover:text-slate-300' href='https://github.com/ShahbazVK/kepper-mern-app'>
                                <div className='flex justify-center items-center flex-col mb-8 bg-neutral-900 mr-6 ml-6 pt-4 pr-4 pl-4 pb-4 rounded-2xl'>
                                    <img className='h-44 mb-2 rounded-2xl' src='https://user-images.githubusercontent.com/63925374/190826400-c72a4d18-0eb3-473d-970f-18975a6d172a.png' />
                                    <p className='text-center font-semibold text-xl text text-yellow-500'>Keeper MERN app</p>
                                    <p>Keeping all your secrets!</p>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}>

                            <a className='hover:text-slate-300' href='https://github.com/ShahbazVK/chat-app-react'>
                                <div className='mb-8 bg-neutral-900 mr-6 ml-6 pt-4 pr-4 pl-4 pb-4 rounded-2xl flex flex-col justify-center items-center'>
                                    <img className='h-44 mb-2 rounded-2xl' src='https://user-images.githubusercontent.com/9556761/57692753-df24d780-7647-11e9-9505-82ee5288637c.png' />
                                    <p className='text-center font-semibold text-xl text text-yellow-500'>React chat app</p>
                                    <p>Socket.io implementation</p>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}>
                            <a className='hover:text-slate-300' href='https://github.com/ShahbazVK/cricketstar'>
                                <div className='mb-8 bg-neutral-900 mr-6 ml-6 pt-4 pr-4 pl-4 pb-4 rounded-2xl flex flex-col justify-center items-center'>
                                    <img className='h-44 mb-2 rounded-2xl' src={logo2} />
                                    <p className='text-center font-semibold text-xl text text-yellow-500'>CricketStar MERN application</p>
                                    <p>Score your matches now with CricketStar app</p>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}>

                            <a className='hover:text-slate-300' href='https://github.com/ShahbazVK/flutter-ui-wallet'>
                                <div className='mb-8 bg-neutral-900 mr-6 ml-6 pt-4 pr-4 pl-4 pb-4 rounded-2xl flex flex-col justify-center items-center'>
                                    <img className='h-44 mb-2 rounded-2xl' src='https://user-images.githubusercontent.com/63925374/196408307-b90525ea-f693-420c-8a93-a287e3e2c8f4.PNG' />
                                    <p className='text-center font-semibold text-xl text text-yellow-500'>Wallet App Flutter</p>
                                    <p>Wallet application created with Flutter</p>
                                </div>
                            </a>
                        </Col>
                        <Col lg={4} md={6}>

                            <a className='hover:text-slate-300' href='https://github.com/ShahbazVK/flutter-coffee-ui'>
                                <div className='mb-8 bg-neutral-900 mr-6 ml-6 pt-4 pr-4 pl-4 pb-4 rounded-2xl flex flex-col justify-center items-center'>
                                    <img className='h-44 mb-2 rounded-2xl' src='https://user-images.githubusercontent.com/63925374/195987821-bcbe8857-8f7a-40d2-9e81-a1f1cfc2dce4.PNG' />
                                    <p className='text-center font-semibold text-xl text text-yellow-500'>Coffee Shop</p>
                                    <p>Coffee Shop UI designed with Flutter</p>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </div>
                <br />
            </div>
        </div >
    )
}
