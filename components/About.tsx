import React from 'react';

export default function About() {
    return (
        <>
            <section id='about' className='lg:ml-[300px] py-20 bg-GrayP'>
                <div className='maxW flex flex-col justify-center gap-8 lg:flex-row '>
                    <article className='lg:w-1/2'>
                        <p className='font-Rambla uppercase tracking-wider text-RedP'>Comida Caseira</p>
                        <h1 className='font-Pirata text-5xl uppercase text-white'>O Canto da Chuleta</h1>
                        <p className='mt-6 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae dicta placeat sapiente maxime voluptate cumque ad ab, possimus praesentium asperiores officiis odit! Nulla harum maiores molestiae sint numquam facere quis, natus soluta laudantium cumque.</p>
                        <p className='mt-6 text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dicta harum consequatur molestias repellendus aliquid est accusamus incidunt quidem maiores, corporis doloremque nesciunt voluptates quasi assumenda debitis consequuntur dignissimos dolorum nam! At atque vero vitae temporibus ratione nobis aliquid praesentium!</p>
                        <p className='mt-6 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, natus autem? Dolore id quo officiis corrupti, sapiente perferendis ipsa incidunt?</p>
                        <button className='bg-RedP py-2 px-6 uppercase font-Pirata rounded-lg mt-6 text-xl text-white'>Faça seu pedido</button>
                    </article>

                    <article className='mx-auto lg:w-1/2'>
                            <img className='object-cover w-[600px] h-[600px] border border-RedP ' src="about1.png" alt="" />
                    </article>
                </div>
            </section>
        </>
    );
}