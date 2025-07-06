import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import reactImage from './react.png';


const Header = () => (
  <header className="bg-pers text-white text-center py-3">
    <h1>Bienvenido a Mi Blog</h1>
  </header>
);

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3 mt-auto">
    <div>
      <p className="mb-0">&copy; Dario Scortichini | Actividad Evaluable 3</p>
    </div>
  </footer>
);

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-pers2 shadow-pers sticky">
    <div className="container">
      <Link className="navbar-brand" to="/">Inicio</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const WelcomePage = () => (
  <div className="bienvenida">
    <div className="bienvenida-overlay">
      <h2 className="mb-4">Bienvenid@ a la página web</h2>
      <Link to="/blog" className="btn btn-primary btn-lg">Ingresar al Blog</Link>
    </div>
  </div>
);

const BlogPage = () => (
  <div className="bg-light py-5">
    <div className="container bg-white p-4 shadow rounded">
      <div className="row">
      <div className="col-md-8">
        <div className="text-center">
        <h2 className="mb-3">¿Por qué React es tan popular en 2025?</h2>
        <img src={reactImage} className="img-fluid my-3 img-small" alt="react" />
        </div>
        <p>
          React se ha convertido en uno de los frameworks más utilizados gracias a su rendimiento, comunidad activa y enfoque basado en componentes reutilizables. En este artículo, exploraremos por qué sigue siendo una de las mejores opciones para desarrollar aplicaciones web en 2025.
        </p>
        <p>
          Además de su compatibilidad con herramientas modernas como TypeScript, Redux y Next.js, React permite crear interfaces responsivas, dinámicas y multiplataforma con gran facilidad.
        </p>
        <p><strong>En resumen:</strong> Aprender React es casi obligatorio para cualquier desarrollador frontend actual.</p>

        <div id="virtual-dom" className="mt-5">
          <h2>¿Qué es el Virtual DOM?</h2>
            <p>
              El Virtual DOM (DOM Virtual) es una representación en memoria del DOM real. React utiliza esta técnica para mejorar el rendimiento: en lugar de modificar directamente el DOM del navegador, primero realiza los cambios en el Virtual DOM y luego actualiza únicamente las partes que realmente cambiaron.
            </p>
            <p>
              Esta optimización permite que las aplicaciones web sean mucho más rápidas y eficientes, especialmente cuando hay muchas actualizaciones o componentes interactivos. Es una de las razones clave del éxito de React.
            </p>
        </div>

        <div id="react-vs-angular" className="mt-5">
          <h2>React vs Angular: Comparativa 2025</h2>
            <p>
              En 2025, React y Angular siguen siendo los frameworks más populares para desarrollo web, pero ofrecen enfoques muy distintos. React es una biblioteca enfocada solo en la vista, con gran flexibilidad y ecosistema externo. Angular, en cambio, es un framework completo con una estructura más rígida y herramientas integradas.
            </p>
            <p>
              React destaca por su curva de aprendizaje más amigable, comunidad más grande y soporte por parte de empresas como Meta. Angular, aunque más complejo, ofrece soluciones completas para grandes proyectos empresariales. La elección entre ambos depende del tipo de aplicación que se quiera desarrollar.
            </p>
        </div>

        <div id="react-native" className="mt-5">
          <h2>Cómo empezar con React Native</h2>
            <p>
              React Native permite crear aplicaciones móviles nativas usando JavaScript y React. Es ideal para desarrolladores web que quieren dar el salto al mundo móvil sin tener que aprender Swift o Kotlin.
            </p>
            <p>
              Para empezar, solo necesitás tener conocimientos básicos de React. 
              Luego podés instalar el entorno con Expo o React Native CLI, y comenzar a crear pantallas reutilizando componentes. Su comunidad activa, rendimiento aceptable y compatibilidad multiplataforma lo convierten en una excelente opción en 2025.
            </p>
        </div>

      <div className="card mt-5">
          <div className="card-body">
            <h5 className="card-title">Sobre el autor</h5>
            <p className="card-text">
              Soy Dario Scortichini, estudiante de la Tec. Tecnología de la información | Orientación en desarrollo web
            </p>
          </div>
      </div>
    </div>

        <div className="col-md-4 slidebar-sticky text-center">
        <h4>Entradas Recientes</h4>
          <ul className="no-dec">
            <li><a href="#virtual-dom">🟢 ¿Qué es el Virtual DOM?</a></li>
            <li><a href="#react-vs-angular">🟠 React vs Angular: comparativa 2025</a></li>
            <li><a href="#react-native">🔵 Cómo empezar con React Native</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const location = useLocation();
  const mostrarHeaderYFooter = location.pathname !== '/';

  return (
    <div className="d-flex flex-column min-vh-100">
      {mostrarHeaderYFooter && <Header />}
      <NavBar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>
      {mostrarHeaderYFooter && <Footer />}
    </div>
  );
};

export default App;
