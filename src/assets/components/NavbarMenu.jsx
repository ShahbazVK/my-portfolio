import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export const NavbarMenu = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Nav className="gap-10 m-auto text-lg ">
                        <NavLink exact activeClassName='bg-black' to={'/'} className='text-white text-xl hover:bg-black hover:rounded-xl p-3 rounded-xl text-center font-bold'>Home</NavLink>
                        <NavLink activeClassName='bg-black' to={'/about'} className='text-white text-xl hover:bg-black hover:rounded-xl p-3 rounded-xl text-center font-bold'>About Me</NavLink>
                        <NavLink activeClassName='bg-black' to={'/contact'} className='text-white text-xl hover:bg-black hover:rounded-xl text-center font-bold p-3 rounded-xl'>Contact Me</NavLink>
                    </Nav>
                </Container>
            </Navbar>
            {/* <p className='text-black hover:text'>kjskd</p> */}
        </div>
    )
}
