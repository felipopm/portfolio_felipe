import './App.css'

function App() {

  return (
    <>
      <div>
        <div>
          <h1>Felipe Perozini Moyano</h1>
          <h2>Desenvolvedor Web Frontend</h2>
        </div>

        <div className='sobre'>
          <h3 className='tema-fundo'>SOBRE MIM</h3>
          <div className='recuo-d'>
            <div className='recuo-descricao'>
            
            </div>
            <div>
              <p className='descricao-sobre'>Criar é uma motivação que me acompanha desde a infância, o melhor dos mundos é ser pago por isso!</p>
            </div>
          </div>
        </div>

        <div className='projetos'>
          <div className='projeto'>
            <section>
              <p className='numero-proj'>01</p>
              <p className='titulo-projeto'>Biblioteca IASD Central Cambé</p>
              <p className='cargo'>UI/UX Designer • Dev Frontend </p>
              <p className='descricao'>Página criada para incluir material para a congregação que frequento</p>
              <a
                href="https://felipopm.github.io/iasd-cambe-central/"
                target='_blank'
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                }}
              >
                <p className='tag-proj'>BIBLIOTECA DE CONTEÚDO IASD</p>
              </a>
            </section>
            <div className='img-proj-um'>
              <img className='img-iasd-A' src="../src/assets/celular.png" alt="celular" />
              <img className='img-iasd-a' src="../src/assets/iasd_central_cambe_a.png" alt="" />
              <img className='img-iasd-B' src="../src/assets/celular.png" alt="celular" />
              <img className='img-iasd-b' src="../src/assets/iasd_central_cambe_b.png" alt="" />
              <img className='img-iasd-C' src="../src/assets/celular.png" alt="celular" />
              <img className='img-iasd-c' src="../src/assets/iasd_central_cambe_c.png" alt="" />
              <img className='img-iasd-D' src="../src/assets/celular.png" alt="celular" />
              <img className='img-iasd-d' src="../src/assets/iasd_central_cambe_d.png" alt="" />
            </div>
          </div>
          <div className='projeto'>
            <section>
              <p className='numero-proj'>02</p>
              <p className='titulo-projeto'>Rastreamento de IP</p>
              <p className='cargo'>UI/UX Designer - Desenvolvedor Front-end</p>
              <p className='descricao'>Aplicativo para rastrear sua localização no mapa e identificar seu IP</p>
              <a
                href="https://felipopm.github.io/rastreador-de-ip/"
                target='_blank'
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                }}
              >
                <p className='tag-proj'>WEB APP</p>
              </a>
            </section>
            <div className='img-proj-dois'>
              <img className='img-rastreador-A' src="../src/assets/celular.png" alt="celular" />
              <img className='img-rastreador-a' src="../src/assets/rastreador_de_ip.png" alt="" />
              <img className='img-rastreador-B' src="../src/assets/celular.png" alt="celular" />
              <img className='img-rastreador-b' src="../src/assets/rastreador_de_ip.png" alt="" />
              <img className='img-rastreador-C' src="../src/assets/celular.png" alt="celular" />
              <img className='img-rastreador-c' src="../src/assets/rastreador_de_ip.png" alt="" />
              <img className='img-rastreador-D' src="../src/assets/celular.png" alt="celular" />
              <img className='img-rastreador-d' src="../src/assets/rastreador_de_ip.png" alt="" />
            </div>
          </div>

          <div className='projeto'>
            <section>
              <p className='numero-proj'>03</p>
              <p className='titulo-projeto'>Calculadora de idade</p>
              <p className='cargo'>UI/UX Designer - Desenvolvedor Front-end</p>
              <p className='descricao'>Calcula a idade segundo a data de nascimento</p>
              <a
                href="https://felipopm.github.io/calculadora_de_idade/"
                target='_blank'
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                }}
              >
                <p className='tag-proj'>SINGLE PAGE APP</p>
              </a>
            </section>
            <div className='img-proj-dois'>
              <img className='img-calculadora-A' src="../src/assets/celular.png" alt="celular" />
              <img className='img-calculadora-a' src="../src/assets/calculadora_de_idade.png" alt="" />
              <img className='img-calculadora-B' src="../src/assets/celular.png" alt="celular" />
              <img className='img-calculadora-b' src="../src/assets/calculadora_de_idade.png" alt="" />
              <img className='img-calculadora-C' src="../src/assets/celular.png" alt="celular" />
              <img className='img-calculadora-c' src="../src/assets/calculadora_de_idade.png" alt="" />
              <img className='img-calculadora-D' src="../src/assets/celular.png" alt="celular" />
              <img className='img-calculadora-d' src="../src/assets/calculadora_de_idade.png" alt="" />
            </div>
          </div>
        </div>

        <div className='skills'>
          <h3 className='tema-fundo'>SKILLS</h3>

          <div className='habilidades'>
            <div className='hard'>
              <p className='titulo-hard'>Hard</p>
              <p>HTML5 & CSS3</p>
              <p>JavaScript</p>
              <p>React com Vite</p>
              <p>NodeJS</p>
              <p>Figma</p>
              <p>MySQL</p>
              <p>Excel</p>
            </div>
            <div className='soft'>
              <p className='titulo-soft'>Soft</p>
              <p>Comunicação</p>
              <p>Trabalho de equipe</p>
              <p>Organização</p>
              <p>Autoaprendizado</p>
            </div>
          </div>

        </div>

        <div className='contato'>
          <h3 className='tema-fundo'>CONTATO</h3>
          <div className='links'>
            <a
              href="https://github.com/felipopm"
              target='_blank'
              rel="noopener noreferrer"
            ><img src="../src/assets/icon-Github.png" alt="Github" /></a>
            <a
              href="https://linkedin.com/in/felipe-perozini-7275542a4"
              target='_blank'
              rel="noopener noreferrer"
            ><img src="../src/assets/icon-Linkedin.png" alt="Linkedin" /></a>
            <a
              href="mailto:felipopm@gmail.com"
              target='_blank'
              rel="noopener noreferrer"
            ><img src="../src/assets/icon-email.png" alt="e-mail" /></a>
            <a
              href="https://drive.google.com/file/d/1cQGsm6RxE0l5_dlIjoF_GMMPAts9l_qw/view?usp=sharing"
              target='_blank'
              rel="noopener noreferrer"
            ><img src="../src/assets/icon-curriculo.png" alt="Currículo" /></a>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
