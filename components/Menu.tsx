import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// Importação dos estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import MenuEntrada from "./subcomponents/MenuEntrada";
import MenuBebidas from "./subcomponents/MenuBebidas";

// Tipagem para os itens do menu
interface MenuItem {
    icon: string;
    title: string;
}

// Array com os itens do menu
const menuItems: MenuItem[] = [
    { icon: "/icons/entradas.png", title: "Entradas" },
    { icon: "/icons/bebidas.png", title: "Bebidas" },
    { icon: "/icons/entradas.png", title: "Entradas" },
    { icon: "/icons/bebidas.png", title: "Bebidas" },
    { icon: "/icons/entradas.png", title: "Entradas" },
    { icon: "/icons/bebidas.png", title: "Bebidas" },
];

const Menu: React.FC = () => {
    // Estado para controlar qual menu está ativo, começando com "Entradas"
    const [activeMenu, setActiveMenu] = useState<string>("Entradas");
    const swiperRef = useRef<any>(null); // Referência ao Swiper para controle manual

    // Efeito para garantir que "Entradas" será o primeiro a ser exibido ao carregar
    useEffect(() => {
        setActiveMenu("Entradas");
    }, []); // O array vazio garante que a execução acontece apenas uma vez, na montagem do componente.

    return (
        <section id="menu" className="lg:ml-[300px] menuBG">
            <div className="bg-black/80 h-full my-20 maxW relative outline">

                <div className="py-20">
                    <p className="font-Rambla uppercase tracking-wider text-RedP text-center">Comida Caseira</p>
                    <h1 className="font-Pirata text-5xl uppercase text-center">Nosso Menu</h1>
                    {/* Botões de Navegação */}
                    <button
                        className="absolute left-[20px] top-[294px] transform -translate-y-1/2 z-10 bg-red-600 p-3 rounded-full hover:bg-red-700"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <BsChevronLeft size={12} color="white" />
                    </button>
                    <button
                        className="absolute right-[20px] top-[294px] transform -translate-y-1/2 z-10 bg-red-600 p-3 rounded-full hover:bg-red-700"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <BsChevronRight size={12} color="white" />
                    </button>

                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        breakpoints={{
                            480: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        pagination={false} // Remove bullets de paginação
                        onSwiper={(swiper) => (swiperRef.current = swiper)} // Vincula o Swiper à referência
                        className="my-20"
                    >
                        {menuItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="flex py-4 flex-col justify-center items-center cursor-pointer hover:bg-red-600/40 hover:rounded-full"
                                    onClick={() => setActiveMenu(item.title)} // Altera o estado para o menu selecionado
                                >
                                    <img className="w-[48px]" src={item.icon} alt={item.title} />
                                    <h1 className="font-Pirata uppercase text-3xl mt-2">{item.title}</h1>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Exibe o menu de entradas ou bebidas, dependendo do estado */}
                    {activeMenu === "Entradas" && <MenuEntrada />}
                    {activeMenu === "Bebidas" && <MenuBebidas />}
                </div>
            </div>
        </section>
    );
};

export default Menu;
