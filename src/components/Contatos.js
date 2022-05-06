import React from 'react'
import linkedin from '../images/linkedin.png';
import logoLinkedin from '../images/logoLinkedin.png';



export function Contatos() {
    return (
        <div>
            <div className='bg-gray-800 flex justify-around'>
                <div className='w-330'>
                    <a href="https://www.linkedin.com/in/laert-furquin/" target="_blank"rel="noopener noreferrer" >
                        <div>
                            <h3 className='flex justify-center text-2xl mt-20 mb-5 text-white '>Linkedin</h3>        
                            <img  className='rounded-3xl w-300' src={linkedin} alt="imagem-perfil-linkedin" />
                        </div>
                        <div>
                            <div>
                                <img className='rounded-xl w-8 mt-5' src={logoLinkedin} alt='logo-linkedin' />
                                
                                <p className='text-gray-500 mt-6 mb-16 text-xl '>
                                    Através do linkedin terá um contato mais direto comigo, sempre estou por la procurando novidades, debates e sempre me mantendo informado sobre as atuais notícias.
                                </p>    
                            </div>
                        </div>
                            
                    </a>  
                </div>
                                    
                <div className='w-330'>
                        <div>
                            <h3 className='mt-20 flex justify-center text-2xl text-white mb-5'>Gmail</h3>
                        </div>
                         <div>
                            <form method="POST" action="https://formsubmit.co/laert.ff@gmail.com">
                                <input className='rounded-2xl w-330 h-10 mt-5 border-solid border-2' type="email" name="email" placeholder="   Seu email" required />
                                <input className='rounded-2xl w-330 h-10 border-solid border-2 mt-3' type="text" name="nome" placeholder="    Assunto" required />
                                <input className='rounded-2xl w-330 h-10 border-solid border-2 mt-3' type="text" name="nome" placeholder="    Seu nome" required />
                                <textarea className='rounded-2xl w-330 h-300 mt-3 border-solid border-2 text-black' name="message" placeholder="    Escreva aqui" required></textarea>
                                <input type="hidden" name="_next" value="https://furquin.github.io/laertFurquin/#/agradecimento"></input>
                                <button className='rounded-2xl w-330 border-solid border-2 mb-10 mt-4' type ="submit">Enviar</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )  
}

export default Contatos