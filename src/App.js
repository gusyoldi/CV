
import './App.css';
// import foto from './foto-cv.jpg'

function App() {
  return (
   <>
    <div className="app">
      <section className="section1">
        <div>
          <img href='#' alt="Foto"></img>
          <div>
            <h2>CONTACTO</h2>
            <ul>
              <li>yoldi.gustavo@gmail.com</li>
              <li>linkedin.com/in/gustavo-yoldi</li>
              <li>github.com/gusyoldi</li>
              <li>CABA - Villa Urquiza</li>
            </ul>
          </div>
          <div>
            <h2>SOBRE MÍ</h2>
            <p>
              Amo aprender nuevas habilidades, la
              buena organización y el trabajo en
              equipo. Busco un espacio que me
              permita seguir ampliando mis
              conocimientos IT.
            </p>
          </div>
          <div>
            <h2>IDIOMAS</h2>
            <ul>
              <li>Español: Nativo</li>
              <li>Inglés: B2</li>
            </ul>
          </div>
          <div>
            <h2>Competencias</h2>
            <ul>
              <li>Constante Aprendizaje</li>
              <li>Organización</li>
              <li>Trabajo en equipo</li>
              <li>Buena Comunicacíon</li>
              <li>Metodologías Ágiles (Scrum)</li>
            </ul>
          </div>
        </div>
      </section>
      <section  className="section2">
      <div>
        <h1>Gustavo Yoldi</h1>
        <h2>DESARROLLADOR WEB FULL STACK</h2>
      </div>
      <div>
        <h2>FORMACION ACADÉMICA</h2>
        <h4>Digital House - Coding School</h4>
        <p>
          Curso Intensivo de Desarrollo Web Full Stack | Enero 2022 - Agosto 2022
        </p>
      </div>
      <div>
        <h2>TECNOLOGÍAS AFINES</h2>
        FALTA COMPLETAR
      </div>
      <div>
        <h2>EXPERIENCIA PROFESIONAL</h2>
        <div>
          <h3>EXPERIENCIAS DIGITALES</h3>
            <h4>TeapotHouse.com | Digital House</h4>
              <p>
                  Éste proyecto consistió en crear un E-comerce de
                  pastelería totalmente funcional desde cero. El mismo
                  cuenta con un diseño muy agradable (Frontend), la
                  posiblidad de registrarse, loguearse, agregar productos
                  al carrito y su propia base de datos, donde se guardan
                  productos y usuarios (Backend).
                  También agregamos un Dashboard hecho con React
                  para la gestión del mismo.

              </p>
        </div>
        <div>
          <h3>OTRAS EXPERIENCIAS</h3>
            <h4>Teatro Colón | Junio 2018 - Actualidad</h4>
              <p>
                  Mis responsabilidades como Técnico de Escenario son
                  llevar a cabo, junto con el resto del equipo Escenotécnico, el despliegue de las distintas escenografías
                  dictadas en el cronograma y asegurar que todo esté
                  preparado para el día del estreno.

              </p>
        </div>
      </div>
      </section>
      
    </div>

   </>
  );
}

export default App;
