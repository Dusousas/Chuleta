import React from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function Galery() {
  return (
    <>
      <section id='galery' className='lg:ml-[300px] py-20 bg-GrayP'>
        <div className='maxW'>
          <p className="font-Rambla uppercase tracking-wider text-RedP text-center">Chueleta</p>
          <h1 className="font-Pirata text-5xl uppercase text-center text-white">Galeria</h1>

          <article className='my-6 py-8 flex flex-col gap-3 items-center justify-center lg:flex-row flex-wrap'>
            <img className='w-[500px] h-[500px] object-cover border border-RedP' src="Galeria1.png" alt="" />
            <img className='w-[500px] h-[500px] object-cover border border-RedP' src="Galeria2.png" alt="" />
            <img className='w-[500px] h-[500px] object-cover border border-RedP' src="Galeria3.png" alt="" />
          </article>

          <div className='flex items-center gap-2 rounded-lg text-xl bg-RedP py-2 px-6 max-w-[230px] mx-auto' >
            <a className='uppercase font-Pirata tracking-widest text-white' href="https://www.instagram.com/cantodachuleta/">Sabores no Insta</a>
            <FaInstagram />
          </div>

        </div>
      </section>
    </>
  );
}