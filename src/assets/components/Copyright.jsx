import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'

export const Copyright = () => {
    return (
        <footer className=''>
            <div className='flex justify-around items-center bg-neutral-900 text-center sm:flex-col md:flex-col'>
                <div className='flex sm:ml-0 sm:mr-0 sm:mb-3 sm:mt-6  md:ml-0 md:mr-0 md:mb-3 md:mt-6'>
                    <button><p className='mr-6 ml-6 sm:ml-2 sm:mr-0 md:ml-0 md:mr-2 hover:text-yellow-400'>DISCLAIMER</p></button>
                    <button><p className='mr-40 sm:ml-2 sm:mr-0  md:ml-2 md:mr-0 hover:text-yellow-400'>PRIVACY POLICY</p></button>
                </div>
                <div className='text-lg text-yellow-400 sm:mb-3 md:mb-3'>&copy; ShahbazAli.com</div>
                <div className='flex ml-40 sm:ml-0 md:ml-0'>
                    <a href='https://www.linkedin.com/in/shahbaz-ali-4a80a220a/'><ImLinkedin className='text-2xl mr-4 hover:text-yellow-400' /></a>
                    <a href='https://github.com/ShahbazVK'><FaGithub className='text-2xl mr-4 hover:text-yellow-400' /></a>
                    <a href='https://www.facebook.com/ali.shahbaz.752/'><AiFillFacebook className='text-2xl mr-4 hover:text-yellow-400' /></a>
                </div>
                <br />
                <br />
                <br />
            </div>
        </footer>
    )
}
