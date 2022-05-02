import React from 'react'
import linkedin from '../images/linkedin.png';
import logoLinkedin from '../images/logoLinkedin.png';
import Header from '../components/Header'



export function Contatos() {
    return (
        <div>
            <div className='bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 flex justify-around'>
                <div className='w-330'>
                    <a href="https://www.linkedin.com/in/laert-furquin/" target="_blank"rel="noopener noreferrer" >
                        <div>
                            <h3 className='flex justify-center text-3xl mt-32 mb-5'>Linkedin</h3>        
                            <img  className='w-330 h-300' src={linkedin} alt="imagem-perfil-linkedin" />
                        </div>
                        <div>
                            <div>
                                <img className='w-12 mt-5' src={logoLinkedin} alt='logo-linkedin' />
                                
                                <p className='mt-6 mb-16 text-2xl '>
                                    Através do linkedin terá um contato mais direto comigo, sempre estou por la procurando novidades, debates e sempre me mantendo informado sobre as atuais notícias.
                                </p>    
                            </div>
                        </div>
                            
                    </a>  
                </div>
                                    
                <div className='w-330'>
                        <div>
                            <h3 className='mt-32 flex justify-center text-3xl mb-5'>Gmail</h3>
                        </div>
                         <div>
                            <form method="POST" action="https://formsubmit.co/laert.ff@gmail.com">
                                <input className='w-330 h-20 mt-5 border-solid border-2' type="email" name="email" placeholder="   Seu email" required />
                                <input className='w-330 h-20 border-solid border-2 mt-3'  type="text" name="nome" placeholder="    Seu nome" required />
                                <textarea className='w-330 h-330 mt-3 border-solid border-2' name="message" placeholder="    Escreva aqui" required></textarea>
                                <input type="hidden" name="_next" value="https://furquin.github.io/laertFurquin/#/agradecimento"></input>
                                <button className='w-330 border-solid border-2' type ="submit">Enviar</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )  
}

export default Contatos