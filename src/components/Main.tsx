import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import banner3 from "../assets/banner-3.png";
import banner4 from "../assets/banner-4.png";
import banner5 from "../assets/banner-5.png";
import banner6 from "../assets/banner-6.png";
import banner7 from "../assets/banner-7.png";

import InputMask from 'react-input-mask';

export const Main = () => {

    return (
        <main className="">

            <section style={{backgroundImage: `url(${banner1})`}} className="w-screen h-screen md:h-screen bg-no-repeat bg-cover bg-bottom flex">
                <div className="w-full flex flex-col justify-center gap-20 items-center md:px-12 md:justify-around md:items-start md:p-20 lg:flex lg:flex-row lg:justify-center lg:items-start xl:justify-between xl:px-14 xl:items-center">
                    <div className="w-64 min-[375px]:w-72 md:flex md:flex-col md:items-start lg:mt-8 lg:tracking-tight lg:ml-4">
                        <h1 className="w-64 min-[375px]:w-72 min-[425px]:w-80 text-3xl text-white font-semibold md:text-5xl md:w-[450px] xl:w-[490px]  mb-4">O futuro é a razão que a gente faz planos.</h1>
                        <h3 className="text-white font-semibold text-2xl min-[375px]:w-72 min-[425px]:w-80 md:text-2xl md:w-[450px] xl:max-w-[450px] xl:text-2xl">Escolha o futuro. Comece a controlar melhor sua vida financeira com o Nubank.</h3>
                    </div>
                    <div className="bg-white w-64 min-[375px]:w-72 min-[425px]:w-80 h-[300px] rounded-2xl p-6 flex flex-col md:ml-auto md:w-[350px] lg:mt-auto xl:mt-0 xl:w-[330px] justify-between xl:items-start">
                        <h3 className="text-xl font-semibold md:text-2xl">Peça sua conta e cartão de crédito do Nubank</h3>
                        <InputMask mask={'999.999.999-99'} className="w-full border-b border-gray-300 text-lg font-semibold outline-none hover:border-gray-600" placeholder="Digite seu CPF" />
                        <button className="flex justify-between items-center gap-2 w-full bg-gray-200 rounded-3xl p-3 text-gray-400 mb-4 hover:bg-nubankpurple hover:text-white hover:font-bold">Continuar <AiOutlineArrowRight /></button>
                    </div>
                </div>
            </section>

            <section className="w-screen h-full flex flex-col justify-center gap-10 items-center py-20 px-3  md:flex-row md:justify-between md:items-center md:px-14 lg:h-screen">
                <div className="w-72 min-[375px]:w-80 min-[425px]:w-96  md:flex md:flex-1 md:flex-col md:justify-center">
                    <h1 className="text-nubankpurple font-semibold cursor-pointer hover:underline text-3xl md:text-[48px] md:leading-tight md:mb-4">Conheça nosso Cartão de Crédito</h1>
                    <h2 className="leading-tight font-semibold text-2xl md:text-[40px]">Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno, gratuito e prático também.</h2>
                    <div className="flex justify-start items-center gap-2 text-nubankpurple font-bold mt-7 hover:underline">
                        <button>Saiba mais</button>
                        <AiOutlineArrowRight />
                    </div>
                </div>
                <div className="w-72 h-72 flex flex-1 justify-center items-center min-[375px]:w-80 min-[425px]:w-96 min-[375px]:h-80 min-[425px]:h-96 md:h-80">
                    <img className="w-72 h-72 min-[375px]:w-80 min-[425px]:w-96 min-[375px]:h-80 min-[425px]:h-96 md:h-80 xl:ml-auto" src={banner2} alt="Foto de Homem" />
                </div>
            </section>

            <section className="w-screen h-full bg-[#F5F5F5] flex flex-col justify-center gap-10 items-center py-20 px-3  md:flex-row md:justify-between md:items-center md:px-14 lg:h-screen">
                <div className="h-[359px] ml-4 flex flex-1 flex-col justify-center md:ml-0">
                    <h1 className="text-nubankpurple font-semibold cursor-pointer hover:underline text-3xl md:text-[48px] md:leading-tight md:mb-4">Nubank Utravioleta</h1>
                    <h2 className="leading-tight font-semibold text-2xl md:text-[40px]">O cartão de crédito premium para você viver todas as suas escolhas.</h2>
                    <div className="flex justify-start items-center gap-2 text-nubankpurple font-bold mt-7 hover:underline">
                        <button>Saiba mais</button>
                        <AiOutlineArrowRight />
                    </div>
                </div>
                <div className="w-72 h-72 flex flex-1 justify-center items-center min-[375px]:w-80 min-[425px]:w-96 min-[375px]:h-80 min-[425px]:h-96 md:h-80">
                    <img className="w-72 h-72 min-[375px]:w-80 min-[425px]:w-96 min-[375px]:h-80 min-[425px]:h-96 md:h-80 xl:ml-auto" src={banner3} alt="Foto de Mulher" />
                </div>
            </section>

            <section className="w-screen h-full flex flex-col justify-center items-center pt-10 pb-20 px-3  md:flex-row md:justify-around md:items-center md:px-14 lg:h-screen">
                <div className="h-[359px] px-4 flex flex-col justify-center md:w-[680px] md:px-0 md:flex-2">
                    <h1 className="text-nubankpurple font-semibold cursor-pointer hover:underline text-3xl md:text-[48px] md:leading-tight md:mb-4">Conta do Nubank</h1>
                    <h2 className="leading-tight font-semibold text-2xl md:text-[48px]">A conta que vai levar você ao controle da sua vida financeira.</h2>
                    <div className="flex justify-start items-center gap-2 text-nubankpurple font-bold mt-7 hover:underline">
                        <button>Sem tarifas e sem complicações</button>
                        <AiOutlineArrowRight />
                    </div>
                </div>
                <div className="flex justify-center items-center md:flex-1">
                    <img className="max-w-[284px] h-[479px] xl:ml-auto" src={banner4} alt="Foto de Celular" />
                </div>
            </section>

            <section className="h-full bg-[#4C0677] flex flex-col gap-20 justify-center items-center p-14 md:flex-row md:h-[600px] lg:h-screen">
                <div className="h-[359px] text-white ml-4 flex flex-1 flex-col justify-center md:ml-0">
                    <h1 className="font-semibold cursor-pointer hover:underline text-3xl md:text-5xl md:leading-tight md:mb-4">Conta PJ</h1>
                    <h2 className="leading-tight font-semibold text-2xl md:text-[40px]">Controle o seu negócio com suporte humano de verdade.</h2>
                    <div className="flex justify-start items-center gap-2 font-bold mt-7 hover:underline">
                        <button>Saiba mais</button>
                        <AiOutlineArrowRight />
                    </div>
                </div>
                <div className="w-72 h-72 flex flex-1 justify-center items-center min-[375px]:w-80 min-[425px]:w-96 min-[375px]:h-80 min-[425px]:h-96 md:h-80">
                    <img className="w-72 h-72 min-[375px]:w-80 min-[425px]:w-96 min-[375px]:h-80 min-[425px]:h-96 md:h-80 xl:ml-auto" src={banner5} alt="Foto de Homem" />
                </div>
            </section>

            <section style={{backgroundImage: `url(${banner6})`}} className="w-full h-full bg-no-repeat bg-cover bg-left-bottom flex justify-center items-start md:w-screen md:justify-start lg:h-screen">
                <div className="w-72 flex flex-col items-end py-20 px-4 font-GraphikMedium md:w-[590px] md:pt-40 md:ml-28">
                    <h1 className="text-white font-semibold text-3xl md:text-[48px] md:leading-tight md:mb-4">Nós acreditamos que só uma pessoa pode ter controle sobre sua vida financeira: você.</h1>
                    <div className="text-normal flex justify-start items-center gap-2 font-bold mt-4 mr-auto text-white hover:underline">
                        <button>Saiba mais sobre como fazemos isso</button>
                        <BsArrowUpRight />
                    </div>
                </div>
            </section>

            <section style={{backgroundImage: `url(${banner7})`}} className="w-full h-full bg-no-repeat bg-cover bg-left-bottom flex justify-center items-start md:w-screen md:justify-start lg:h-screen">
                <div className="w-72 flex flex-col py-20 px-4 font-GraphikMedium md:w-[590px] md:pt-40 md:ml-28">
                    <h1 className="text-white font-semibold text-3xl md:text-[48px] md:leading-tight">NuCommunity</h1>
                    <h1 className="text-white font-semibold text-3xl md:text-[48px] md:leading-tight md:mb-4">A comunidade oficial do Nubank para você tirar dúvidas e compartilhar ideias.</h1>
                    <div className="flex justify-start items-center gap-2 font-bold mt-4 mr-auto text-white hover:underline">
                        <button>Faça parte</button>
                        <BsArrowUpRight />
                    </div>
                </div>
            </section>

        </main>
    )
}