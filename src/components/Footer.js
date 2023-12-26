import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'

function Footer() {

    const FooterLinks = [
        {
          title: "Home",
          link: "/#",
        },
        {
          title: "About",
          link: "/#about",
        },
        {
          title: "Contact",
          link: "/#contact",
        },
        {
          title: "Blog",
          link: "/#blog",
        },
      ];

  return (
    <div className='bg-gray-100 dark:bg-gray-950'>
      <div className='container'>
        <div className='grid md:grid-cols-3 py-5'>
            {/* Company Details  */}
            <div className='py-8 px-4'>
                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Book Store</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sequi, magni esse praesentium ad error!{" "}</p>
                <br />
                {/* social Links  */}
                <div className="flex items-center gap-3 mt-3">
                    <FaLocationArrow />
                    <p>Ahmedabad ,Gujarat</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt />
                    <p>+91 XXXXXXXXXX</p>
                </div>
                <div className='flex items-center gap-3 mt-6'>
                    <a href="#">
                        <FaInstagram className='text-3xl hover:text-secondary' />
                    </a>
                    <a href="#">
                        <FaFacebook className='text-3xl hover:text-secondary' />
                    </a>
                    <a href="#">
                        <FaLinkedin className='text-3xl hover:text-secondary' />
                    </a>
                </div>
            </div>
            {/* Link Details  */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map((data)=>(
                                    <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'>
                                        <span>&#11162;</span>
                                        <span>{data.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map((data)=>(
                                    <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'>
                                        <span>&#11162;</span>
                                        <span>{data.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map((data)=>(
                                    <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'>
                                        <span>&#11162;</span>
                                        <span>{data.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* copyright section  */}
        <div>
            <div className='border-t-2 border-gray-300/50'>
                <p className="text-center py-10">
                    Copyright &copy; 2023. All rights reserved || Made by : Vandit Belani
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
