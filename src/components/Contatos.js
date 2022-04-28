import React from 'react'
import linkedin from '../images/linkedin.png';
import logoLinkedin from '../images/logoLinkedin.png';





export function Contatos() {
    return (
        <div>
            <div className='mt-16'>
                <h1 className="flex justify-center text-6xl mb-36 bg-black text-white p-3"> Contatos </h1>
            </div>

            <div className='mt-16 mb-14 flex justify-around'>
                <div className='w-330'>
                    <a href="https://www.linkedin.com/in/laert-furquin-4208a9168/" target="_blank"rel="noopener noreferrer" >
                        <div>
                            <h3 className='flex justify-center text-4xl mb-5'>Linkedin</h3>        
                            <img  className='w-330 h-300' src={linkedin} alt="imagem-perfil-linkedin" />
                        </div>
                        <div>
                            <div>
                                <img className='w-12 mt-5' src={logoLinkedin} alt='logo-linkedin' />
                                
                                <p className='mt-10 text-2xl '>
                                    Através do linkedin sempre procuro por novidades, debates e sempre tento me manter informado sobre as atuais notícias.
                                </p>    
                            </div>
                        </div>
                            
                    </a>  
                </div>
                                    
                <div className='w-330'>
                        <div>
                            <h3 className='flex justify-center text-4xl mb-5'>Gmail</h3>
                        </div>
                         <div>
                            <form method="POST" action="http://furquin.github.io/Portifolio/#/agradecimento " enctype="multipart/form-data">
                                <input className='w-330 h-20 mt-5 border-solid border-2' type="email" name="email" placeholder="   Seu email" />
                                <input className='w-330 h-20 border-solid border-2 mt-3'  type="text" name="nome" placeholder="    Seu nome" />
                                <input type="hidden" name="_captcha" value='false' />
                                <input type="hidden" name="_next" value='http://localhost:3000/#/agradecimento' target='_blank' />
                                <textarea className='w-330 h-330 mt-3 border-solid border-2' name="message" placeholder="    Escreva aqui"></textarea>
                                <button className='w-330 border-solid border-2' type ="submit">Enviar</button>
                            </form>
                        </div>
                </div>
            </div>
    
        </div>
    )  
}

export default Contatos