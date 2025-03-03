import '../../index.css'

export default function Carreira(){
    return (
      <>
        <main className="container">
            <div className="textos">
                <div className="text-xl text-blue-900 font-extrabold">
                    Ensino Superior
                </div>
                <div className="text-lg text-blue-900 font-bold">
                    Desenvolvimento de Software Multiplataforma
                </div>
                <div className="text-lg text-blue-700 ml-6">
                    Faculdade Tecnologica - Prof. Jessen Vidal FATEC SJC: Cursando.
                </div>
                <div className="text-lg text-blue-900 font-bold">
                    Análise e Desenvolvimento de Sistema
                </div> 
                <div className="text-lg text-blue-700 ml-6">
                    Faculdade Tecnologica - Prof. Jessen Vidal FATEC SJC: Trancado.
                </div>
                <div className="text-xl text-blue-900 font-extrabold mt-2">
                    Ensino Técnico
                </div>
                <div className="text-lg text-blue-900 font-bold inline-block">
                    Técnico em Informática:
                </div>
                <div className="text-lg text-blue-700 ml-6"> 
                    Faculdade Bilac - Concluído em Fev/2015.
                </div>
                <div className="text-lg text-blue-900 font-bold inline-block">
                    Produção Áudiovisual:
                </div> 
                <div className="text-lg text-blue-700 ml-6">
                    Fundação Cultural - Concluído em Dez/2018.
                </div>
            
                <div className="text-xl text-blue-900 font-extrabold mt-2">
                    Idiomas
                </div>    
    
                <ul className="ml-6">
                    <li className='text-blue-800 font-bold text-lg'>Inglês - Básico</li>
                    <li className='text-blue-800 font-bold text-lg'>Espanhol - Básico</li>
                </ul>
                
                <div className="text-xl text-blue-900 font-extrabold mt-2">
                    Experiência
                </div>
                
                <div className="container-experiencia">
                    <div className="experiencia">
                        <div className="text-lg text-blue-900 font-bold">
                            2022 - 2024 - Ajas
                        </div>
                        <div className="text-lg text-blue-800 font-semibold">
                            Cargo: Educador
                        </div>
                        <div className="exp-descricao text-justify ml-6 mr-6 text-lg text-blue-700">
                           <div className="font-semibold inline-block"> Principais atividades:</div> Educador de tecnologia, programação em blocos, lógica, robótica, eletronica e maker, para desenvolver habilidades sociais, autonomia e trabalho em equipe nos alunos.
                        </div>
                    </div>
                    <div className="experiencia">
                        <div className="text-lg exp-titulo text-blue-900 font-bold">
                            2024 - contrato - Celebreiros
                        </div>
                        <div className="exp-cargo text-blue-800 font-semibold">
                            Cargo: Arte Educador
                        </div>
                        <div className="exp-descricao text-justify ml-6 mr-6 text-lg text-blue-700">
                        <div className="font-semibold inline-block"> Principais atividades:</div> Aulas de produção, áudiovisual e cidadania, criação de roteiros, utilização de equipamentos, edição de vídeo e produção.
                            Criar um local de fala para os alunos, para debater e mostrar quem são, onde vive, de forma critica e pessoal.
                        </div>
                    </div>
                    <div className="experiencia">
                        <div className="text-lg text-blue-900 font-bold">
                            2019 a 2020 - SuperGeeks
                        </div>
                        <div className="exp-cargo text-blue-800 font-semibold">
                            Cargo: Instrutor de Informática - Estágio
                        </div>
                        <div className="exp-descricao text-justify ml-6 mr-6 text-lg text-blue-700">
                        <div className="font-semibold inline-block"> Principais atividades:</div> Criação de material didático, conteúdo para as aulas e planejamento,
                            relatórios sobre alunos e documentação das atividades
                        </div>
                    </div>

                </div>
            
            </div>
        </main>
      </>
    )
}
  
