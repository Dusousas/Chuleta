import React from 'react';

export default function MenuEntrada() {
    return (
        <>
            <section className=''>
                <div className=''>


                    <article className="flex gap-x-20 gap-y-10 flex-wrap ">

                        {/* ITEMS SOLO MENU */}
                        <article className="flex flex-col max-w-[330px]">
                            <div className="flex justify-between border-b border-dashed border-RedP">
                                <h1>Bebida 1</h1>
                                <h2>30$</h2>
                            </div>
                            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, odit!</p>
                        </article>

                        {/* ITEMS SOLO MENU */}
                        <article className="flex flex-col max-w-[330px]">
                            <div className="flex justify-between border-b border-dashed border-RedP">
                                <h1>Bebida 1</h1>
                                <h2>30$</h2>
                            </div>
                            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, odit!</p>
                        </article>


                    </article>

                </div>
            </section>
        </>
    );
}