import React from 'react';

export default function Main() {
    return (
        <>
            <section id='main' className='lg:ml-[300px] mainBG'>
                <div className='bg-black/60 h-full'>

                    <article className='flex flex-col items-center justify-center h-full text-center maxW '>
                        <h1 className='font-Pirata text-5xl'>Bem-vindo ao Chuleta</h1>
                        <h2 className='font-Pirata text-7xl uppercase mt-2'>Restaurante Fogão de Lenha</h2>
                        <button className='bg-RedP py-2 px-6 uppercase font-Pirata rounded-lg mt-4 text-xl'>Nosso Menu</button>
                    </article>
                </div>
            </section>
        </>
    );
}