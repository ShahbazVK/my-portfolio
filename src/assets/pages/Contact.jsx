import React from 'react'
import logo from '../whatsapp.jpg'
import { AiFillFacebook } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'


export const Contact = () => {
    return (
        <div className='animate__animated animate__backInDown h-screen'>
            <br /><br />
            <div className='flex flex-col justify-center items-center'>
                <p className='text-4xl '>Feel free to contact!</p>
                <br />
                <img className='rangecircularcontact' src={logo} alt="" />
                <br />
                <div className='flex '>
                    <a className='text-decoration-none' href='https://www.linkedin.com/in/shahbaz-ali-4a80a220a/'><ImLinkedin className='text-4xl mr-4 hover:text-yellow-400' /></a>
                    <a className='' href='https://github.com/ShahbazVK'><FaGithub className='text-4xl mr-4 hover:text-yellow-400' /></a>
                    <a className='' href='https://www.facebook.com/ali.shahbaz.752/'><AiFillFacebook className='text-4xl mr-4 hover:text-yellow-400' /></a>
                </div>
            </div>
        </div>
    )
}
