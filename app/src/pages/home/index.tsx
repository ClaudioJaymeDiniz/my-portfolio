import imgProfile from '../../assets/images/profile.png';

export default function Home(){
    return (
      <main className="container">
        <div className="container-info flex flex-wrap justify-center text-blue-900 gap-5">  
          <img className="foto rounded-full" src={imgProfile} alt="foto claudio jayme"/>
          <div className="info-box">
            <div className="info flex flex-col w-full align-middle text-xl font-extrabold">  
              <div className="m-auto">Claudio Jayme Silva Diniz</div>
              <div className="sub-titulo flex flex-row text-lg font-bold gap-6">
                <div className="titulo-line">Professor</div>
                <div className="titulo-line">Art Educador</div>
                <div className="titulo-line">Futuro Dev</div>
              </div>
            </div>
          </div>
        </div>
          <div className="text-justify md:text-center ml-6 mr-6 text-lg text-blue-700">
              Olá, sou Claudio Jayme, atualmente aluno do curso de Desenvolvimento Multi Plataforma na FATEC - Professor
              Jessen Vidal.
              Professor de tecnologia para crianças de escolas publicas em São José dos Campos e participo de projetos da
              Celebreiros com educomunicação, transformando jovens em protagonistas.
            </div>
      </main>  
    )
}

  