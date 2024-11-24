import React from 'react';
import { CiLocationArrow1 } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

export default function Contact() {
    return (
        <>
            <section id='contact' className='lg:ml-[300px] py-10 bg-GrayP'>
                <div className='maxW'>

                    <p className="font-Rambla uppercase tracking-wider text-RedP text-center mt-10">Dúvidas?</p>
                    <h1 className="font-Pirata text-5xl uppercase text-center text-white">Fale Conosco</h1>

                    {/* CONTATO */}
                    <div className='flex flex-col gap-4 lg:justify-between lg:items-center my-10 lg:flex-row'>
                        <article className='w-full lg:w-1/2 font-Rambla flex flex-col gap-2 my-10 lg:border-r'>
                            <h1 className='uppercase text-3xl mb-4 text-RedP'>Entre em contato</h1>
                            <div className='flex items-center gap-2 text-white'>
                                <FaWhatsapp className='text-2xl' />
                                <h1>(14) 12345 1234</h1>
                            </div>

                            <div className='flex items-center gap-2 text-white'>
                                <MdOutlineEmail className='text-2xl' />
                                <h1>chuleta@gmail.com</h1>
                            </div>

                            <div className='flex items-center gap-2 text-white'>
                                <CiLocationArrow1 className='text-2xl' />
                                <h1 className=''>Av. Flamengo, 316-692 - Dois Córregos, SP, 17300-000</h1>
                            </div>
                        </article>

                        {/* FORM */}
                        <form className='w-full py-4 px-2 lg:w-1/2 outline-none border-none' action="">
                        <h1 className='text-center font-Pirata text-2xl tracking-wider mb-4  text-white'>Preencha e esclareça suas dúvidas!</h1>
                            <div className='flex flex-col items-center'>
                                <input className='w-[60%] uppercase px-2 py-2 bg-transparent border' type="text" placeholder='Seu nome' />
                                <input className='w-[60%] uppercase px-2 py-2 mt-2 bg-transparent border' type="text" placeholder='Seu Email' />
                                <input className='w-[60%] uppercase px-2 py-2 mt-2 bg-transparent border' type="text" placeholder='Seu Telefone' />
                                <textarea name="" className='w-[60%] mt-2 resize-none px-2 py-2 bg-transparent border' placeholder='Qual sua dúvida?' id=""></textarea>
                            </div>
                        </form>
                    </div>


                    <p className="font-Rambla uppercase tracking-wider text-RedP text-center">um pouco mais</p>
                    <h1 className="font-Pirata text-5xl uppercase text-center  text-white">Onde estamos?</h1>
                    {/* MAPS */}
                    <article>
                        <iframe className='w-full h-[400px] mt-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.772153856303!2d-48.39676222386733!3d-22.362230479642122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c76786af26791b%3A0x8552e2882f7a7c66!2sRestaurante%20O%20Ponto%20da%20Chuleta!5e0!3m2!1spt-BR!2sbr!4v1732475052957!5m2!1spt-BR!2sbr" />
                    </article>
                </div>
            </section>
        </>
    );
}