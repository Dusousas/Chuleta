import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Menu lateral fixo para desktop */}
            <section className='hidden lg:fixed lg:top-0 lg:left-0 lg:max-w-[300px] lg:w-[300px] lg:h-[100vh] lg:py-10 lg:bg-black lg:text-white lg:border-r lg:border-RedP lg:flex lg:flex-col lg:items-center lg:justify-between'>
                <article className='text-center'>
                    <p className='font-Pirata text-6xl uppercase'>Chuleta</p>
                    <p className='font-Rambla uppercase tracking-wider'>Fogão de Lenha</p>
                </article>

                <nav className='w-full px-10'>
                    <ul className='text-2xl font-Pirata uppercase flex flex-col gap-4'>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>Sobre</li>
                        <li className='cursor-pointer'>Menu</li>
                        <li className='cursor-pointer'>Galeria</li>
                        <li className='cursor-pointer'>Contato</li>
                    </ul>
                </nav>
                <article className='text-center'>
                    <p className='font-Rambla uppercase tracking-wider'>Reservas</p>
                    <p className='font-Pirata text-2xl'>(14) 3652-5982</p>
                </article>
            </section>

            {/* Botão para abrir o menu no mobile */}
            <section className='lg:hidden fixed top-0 left-0  text-white py-4 px-6 flex justify-between items-center z-50'>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </section>


            {/* Menu lateral deslizante para mobile */}
            <section
                className={`lg:hidden fixed top-0 left-0 h-[100vh] max-w-[300px] w-[300px] bg-black text-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 z-40`}
            >
                <div className='flex flex-col h-full items-center justify-between py-10'>
                    <article className='text-center'>
                        <p className='font-Pirata text-6xl uppercase'>Chuleta</p>
                        <p className='font-Rambla uppercase tracking-wider'>Fogão de Lenha</p>
                    </article>

                    <nav className='w-full px-10'>
                        <ul className='text-2xl font-Pirata uppercase'>
                            <li>Home</li>
                            <li>Sobre</li>
                            <li>Menu</li>
                            <li>Galeria</li>
                            <li>Contato</li>
                        </ul>
                    </nav>

                    <article className='text-center'>
                        <p className='font-Rambla uppercase tracking-wider'>Reservas</p>
                        <p className='font-Pirata text-2xl'>(14) 3652-5982</p>
                    </article>
                </div>
            </section>
        </>
    );
}
