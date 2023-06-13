import logoNubankWhite from "../assets/nubank-logo-white.png";
import apple from "../assets/app-store.png";
import playStore from "../assets/play-store.png";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";

export const Footer = () => {

    return (
        <footer className="overflow-x-hidden w-screen flex flex-col bg-[#111] text-white">
            <div className="flex flex-col justify-center md:gap-20 py-16 px-14 border-b border-zinc-800 lg:px-40 xl:pl-14 xl:pr-16">
                <div className="flex justify-between items-baseline gap-6 flex-wrap md:gap-16 lg:gap-28">

                    <div className="h-[341px] flex-1 flex flex-col gap-1 ml-4 min-[375px]:ml-8 min-[425px]:ml-16 xl:ml-4">
                        <div className="pb-6 text-lg">Nubank</div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Sobre nós</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Carreiras</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Perguntas frequentes</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Contato</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Imprensa</a></div>
                        <div className=" group flex items-center gap-1"><a className="text-lg font-GraphikMedium group-hover:text-nubankpurple" href="#">Nu Impacto</a><BsArrowUpRight className="text-white group-hover:text-nubankpurple" /></div>
                        <div className="group flex items-center gap-1"><a className="text-lg font-GraphikMedium group-hover:text-nubankpurple cursor-pointer" href="#">Investidores</a><BsArrowUpRight className="text-white group-hover:text-nubankpurple cursor-pointer" /></div>
                    </div>

                    <div className="h-[341px] flex-1 flex flex-col gap-1 ml-4 min-[375px]:ml-8 min-[425px]:ml-16 xl:ml-4">
                        <div className="pb-6 text-lg">Produtos</div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Conta digital</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Cartão de crédito</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Nubank Ultravioleta</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Função Construir Limite</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Empréstimo</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Conta PJ</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Cartão de crédito PJ</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Nubank Vida</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Investimentos</a></div>
                    </div>

                    <div className="h-[341px] pt-12 flex-1 flex flex-col gap-1 ml-4 min-[375px]:ml-8 min-[425px]:ml-16 xl:ml-4">
                        <div className="pb-6 text-lg">Explore</div>
                        <div className="group flex items-center gap-1"><a className="text-lg font-GraphikMedium group-hover:text-nubankpurple" href="#">Comunidade</a><BsArrowUpRight className="text-white group-hover:text-nubankpurple cursor-pointer" /></div>
                        <div className="group flex items-center gap-1"><a className="text-lg font-GraphikMedium group-hover:text-nubankpurple" href="#">Blog</a><BsArrowUpRight className="text-white group-hover:text-nubankpurple cursor-pointer" /></div>
                        <div className="group flex items-center gap-1"><a className="text-lg font-GraphikMedium group-hover:text-nubankpurple" href="#">InvestNews</a><BsArrowUpRight className="text-white group-hover:text-nubankpurple cursor-pointer" /></div>
                        <div className="group flex items-center gap-1"><a className="text-lg font-GraphikMedium group-hover:text-nubankpurple" href="#">Newsletter</a><BsArrowUpRight className="text-white group-hover:text-nubankpurple cursor-pointer" /></div>
                        <div className="group flex items-center gap-1"><a className="text-lg font-GraphikMedium group-hover:text-nubankpurple" href="#">México</a><BsArrowUpRight className="text-white group-hover:text-nubankpurple cursor-pointer" /></div>
                        <div className="group flex items-center gap-1"><a className="text-lg font-GraphikMedium group-hover:text-nubankpurple" href="#">Argentina</a><BsArrowUpRight className="text-white group-hover:text-nubankpurple cursor-pointer" /></div>
                        <div className="group flex items-center gap-1"><a className="text-lg font-GraphikMedium group-hover:text-nubankpurple" href="#">Colômbia</a><BsArrowUpRight className="text-white group-hover:text-nubankpurple cursor-pointer" /></div>
                    </div>

                    <div className="h-[341px] pt-10 flex-1 flex flex-col gap-1 ml-4 min-[375px]:ml-8 min-[425px]:ml-16 xl:ml-4">
                        <div className="pb-6 text-lg">Veja também</div>
                        <div className="group flex items-center gap-1"><a className="text-lg font-GraphikMedium group-hover:text-nubankpurple" href="#">Auxílio emergencial e FGTS</a><AiOutlineArrowRight className="text-white group-hover:text-nubankpurple cursor-pointer" /></div>
                        <div className="group flex items-center gap-1"><a className="text-lg font-GraphikMedium group-hover:text-nubankpurple" href="#">Tudo sobre o Pix</a><AiOutlineArrowRight className="text-white group-hover:text-nubankpurple cursor-pointer" /></div>
                        <div className="group flex items-center gap-1"><a className="text-lg font-GraphikMedium group-hover:text-nubankpurple" href="#">Fornecedores</a><AiOutlineArrowRight className="text-white group-hover:text-nubankpurple cursor-pointer" /></div>
                    </div>

                </div>

                <div className="flex justify-between items-baseline gap-12 flex-wrap">

                    <div className="h-[309px] flex-1 flex flex-col items-baseline gap-1 ml-4 min-[375px]:ml-8 min-[425px]:ml-16 xl:ml-4">
                        <div className="pb-6 text-lg">Transparência</div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Política de privacidade</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Política de segurança</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Contratos</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Relatórios financeiros</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Ética e compliance</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Dados abertos</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">SCR</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Convenção de boletos</a></div>
                    </div>

                    <div className="h-[209px] pt-8 flex-1 flex flex-col gap-1 ml-4 min-[375px]:ml-8 min-[425px]:ml-16 xl:ml-4">
                        <div className="pb-6 text-lg">Ouvidoria</div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">0800 887 0463</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">ouvidoria@nubank.com.br</a></div>
                        <div><a className="text-base font-GraphikMedium hover:text-nubankpurple" href="#">Atendimento das 9h às 18h (dias úteis)</a></div>
                    </div>

                    <div className="h-[249px] pt-8 flex-1 flex flex-col gap-1 ml-4 min-[375px]:ml-8 min-[425px]:ml-16 xl:ml-4">
                        <div className="pb-6 text-lg">Fale com a gente</div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">0800 608 6236</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">meajuda@nubank.com.br</a></div>
                        <div><a className="text-lg font-GraphikMedium hover:text-nubankpurple" href="#">Canal de atendimento em libras</a></div>
                        <div><a className="text-base font-GraphikMedium hover:text-nubankpurple" href="#">Atendimento 24h</a></div>
                    </div>

                    <div className="h-[309px] pt-8 flex-1 flex flex-col gap-7 ml-4 min-[375px]:ml-8 min-[425px]:ml-16 xl:ml-4">
                        <div className="text-lg">Baixe o app</div>
                        <div>
                            <img className="w-[160px] h-[50px]" src={apple} alt="Apple card" />
                        </div>
                        <div>
                            <img className="w-[160px] h-[50px]" src={playStore} alt="Play card" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="h-[350px] py-[50px] pl-14 pr-16 flex justify-between items-center gap-8 flex-wrap border-b border-zinc-800 lg:py-[80px] lg:h-[209px]">
                <div className="mr-14"><img src={logoNubankWhite} alt="Logo Nubank" /></div>
                <div className="flex flex-col justify-center items-start mr-auto">
                    <div>© 2023 Nu Pagamentos S.A - Instituição de Pagamento. 18.236.120/0001-58</div>
                    <div>Rua Capote Valente, 39 - São Paulo, SP - 05409-000</div>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <CiLinkedin className="w-6 h-6 cursor-pointer hover:text-nubankpurple" />
                    <AiOutlineYoutube className="w-7 h-7 cursor-pointer hover:text-nubankpurple" />
                    <RiFacebookBoxLine className="w-6 h-6 cursor-pointer hover:text-nubankpurple" />
                    <FaInstagram className="w-6 h-6 cursor-pointer hover:text-nubankpurple" />
                    <TiSocialTwitterCircular className="w-8 h-8 cursor-pointer hover:text-nubankpurple" />
                </div>
            </div>
            <div className="h-[164px] flex justify-end gap-8 items-center py-10 pl-14 pr-16 text-lg">
                <div className="pb-[60px]">
                    <input type="radio" name="idioma" checked/>    Português
                </div>
                <div className="pb-[60px]">
                    <input type="radio" name="idioma" />    Inglês
                </div>
            </div>
        </footer>
    )
}