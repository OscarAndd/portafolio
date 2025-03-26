import React from 'react'
import CProyectosModelo from './CProyectosModelo'
import { Link } from 'react-router-dom';
export default function CProyectos() {
  let imagenesFlashCard = ['imagenesFlashCard/IMG-20250219-WA0002.jpg', 'imagenesFlashCard/IMG-20250219-WA0001.jpg',
    'imagenesFlashCard/IMG-20250219-WA0003.jpg', 'imagenesFlashCard/IMG-20250219-WA0004.jpg'];
  let imagenesCalculadora = ['imagenesCalculadora/Calculadora1.jpg', 'imagenesCalculadora/calculadora2.jpg'];
  let imagenesTienda = ['imagenesTienda/ropa1.jpg', 'imagenesTienda/ropa2.jpg', 'imagenesTienda/ropa3.jpg', 'imagenesTienda/ropa4.jpg']
  let imagenZonaFit = ['imagenJava/Java.png']
  let imagenesTransporte = ['imagenesTransporte/transporte1.jpg', 'imagenesTransporte/transporte2.jpg', 'imagenesTransporte/transporte3.jpg',
    'imagenesTransporte/transporte4.jpg']
  let imagenesClima = ['imagenesClima/clima1.jpg', 'imagenesClima/clima2.jpg', 'imagenesClima/clima3.jpg']
  let imagenesCalculadoraSOAP = ['imagenesCalculadoraSOAP/calculadora1.png', 'imagenesCalculadoraSOAP/calculadora2.png',
    'imagenesCalculadoraSOAP/calculadora3.png', 'imagenesCalculadoraSOAP/calculadora4.png']
  let imagenesContactos = ['imagenesContactos/contactos1.png', 'imagenesContactos/contactos2.png', 'imagenesContactos/contactos1.png',
    'imagenesContactos/contactos4.png', 'imagenesContactos/contactos5.png', 'imagenesContactos/contactos6.png',
    'imagenesContactos/contactos7.png', 'imagenesContactos/contactos8.png', 'imagenesContactos/contactos9.png']

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='container flex-grow-1 slide-in-left ocultar '>
      <p className='text-center mt-4 fst-italic opacity-50 d-md-none'>PROYECTOS</p>
      <CProyectosModelo
        idCarousel="8"
        titulo="Aplicación Calculadora con Web Service SOAP"
        subtitulo="Java / ReactJS / Bootstrap / JAX-WS / GlassFish "
        imagenes={imagenesCalculadoraSOAP}
        descripcion="En esta aplicación se crea un Web Service SOAP con Java y se consume dicho servicio a través de una interfaz de 
        usuario realizada con ReactJS. La aplicación permite realizar operaciones básicas como suma, resta, multiplicación y división. 
        Además, se verifican las condiciones de uso, como el ingreso de los números a operar y la división por 0"
        linkRepositorio="https://github.com/OscarAndd/WebServiceSOAP_Calculadora"
        linkPagina="" />

      <CProyectosModelo
        idCarousel="7"
        titulo="Aplicación Lista de Contactos con PostgreSQL"
        subtitulo="Java / MVC / PostgreSQL / JDBC / SHA-256 / JSP / Servlet / Boostrap"
        imagenes={imagenesContactos}
        descripcion="Esta aplicación web permite registrar a nuevos usuarios en una base de datos o indicar si un 
        usuario ya existe en la base de datos. Una vez registrados, los usuarios podrán agregar nuevos contactos. 
        Estos contactos se guardarán en orden alfabético por nombre, también se podrá guardar el correo y el teléfono. 
        Una vez guardado el contacto, la aplicación permite actualizarlo, modificarlo o eliminarlo de la lista. 
        La aplicación también permite exportar la lista de contactos a un archivo Excel para compartirlo si es 
        necesario."
        linkRepositorio="https://github.com/OscarAndd/ListaDeContactosPostgreSQL"
        linkPagina="" />


      <CProyectosModelo
        idCarousel="6"
        titulo="Aplicación Web Estado del Clima"
        subtitulo=" CSS / React / Bootstrap / API Externa"
        imagenes={imagenesClima}
        descripcion="En esta aplicación se puede obtener el estado del clima aproximado de cualquier 
          parte del mundo únicamente con ingresar el nombre de la ciudad de interés. La aplicación se conecta 
          con una API externa (WeatherAPI.com) que proporciona información del clima como temperatura, 
          sensación térmica, humedad, velocidad del viento, entre otras. También cuenta con una sección que 
          permite guardar (temporalmente, no hay persistencia de estos datos) una lista de ciudades preferidas 
          o que el usuario considere de uso frecuente y de esta manera puede acceder a la información más rápido. 
          Esta aplicación cuenta con un diseño responsivo y cuenta con un botón que permite cambiar a un tema oscuro 
          si el usuario lo decide."
        linkRepositorio="https://github.com/OscarAndd/app-clima"
        linkPagina="https://oscarandd.github.io/app-clima/" />

      <CProyectosModelo
        idCarousel="5"
        titulo="Aplicación Web Empresa de Mensajería"
        subtitulo="HTML / CSS / JavaScript / Bootstrap / IndexedDB"
        imagenes={imagenesTransporte}
        descripcion="Esta aplicación web es para una empresa de transporte de mercancía. 
          En ella es posible registrar un vehículo que trabaje con la compañía y una vez registrado y conectado
          el vehículo es posible obtener información del automotor como nivel combustible, 
          entregas pendientes por realizar, velocidad actual del vehículo, estado de las luces, entre otros. 
          En esta aplicación no es posible recibir datos reales de un vehículo, por ello en la sección de 
          'Consultar' se encuentra una opción llamada 'soy conductor' y allí se llenará un formulario para 
          la simulación de la información. Por otra parte, esta aplicación cuenta con un diseño responsivo 
          para trabajar en diferentes tamaños de pantalla y cuenta con una base de datos local (en el navegador del 
          usuario), lo cual permite almacenar los datos aún cuando se refresque la pestaña de navegación"
        linkRepositorio="https://github.com/OscarAndd/EmpresaTransporteResponsiva"
        linkPagina="https://oscarandd.github.io/EmpresaTransporteResponsiva/" />

      <CProyectosModelo
        idCarousel="4"
        titulo="Aplicación Zona Fit"
        subtitulo="Java / Spring Boot / MySQL"
        imagenes={imagenZonaFit}
        descripcion="Esta aplicación web es para un gimnasio. Permite llevar un registro de los clientes que se suscriben a un plan. 
          La aplicación permite crear un usuario nuevo, buscar, eliminar o modificar la información de un usuario. La información será 
          proporcionada manualmente por el usuario en la consola de Intellij IDEA. Los datos serán almacenados en una base de datos, 
          lo cual permite la persistencia de los mismos."
        linkRepositorio="https://github.com/OscarAndd/Proyecto-zonaFit"
        linkPagina="" />

      <CProyectosModelo
        idCarousel="3"
        titulo="Aplicación Web Tienda de Ropa"
        subtitulo="HTML / CSS / JavaScript"
        imagenes={imagenesTienda}
        descripcion="Esta aplicación web es para una tienda de ropa. En ella se pueden seleccionar artículos 
          como pantalones, camisetas, accesorios, entre otros. Estos artículos se pueden agregar al carrito de 
          compras donde se calculará inmediatamente el valor total a pagar incluyendo los descuentos a que haya 
          lugar por cuenta de promociones. En el carrito de compras se puede cambiar la cantidad de artículos a 
          llevar, también se puede eliminar los artículos que no se deseen. Este proyecto cuenta solamente con la 
          parte visual y operativa interna, no cuenta con conexión a un servidor para procesar las compras o pagos 
          y tampoco guarda los datos al refrescar la pantalla."
        linkRepositorio="https://github.com/OscarAndd/TiendaDeRopa"
        linkPagina="https://oscarandd.github.io/TiendaDeRopa/" />

      <CProyectosModelo
        idCarousel="2"
        titulo="Aplicación Android Flash Cards"
        subtitulo="Java / SQLite / Kotlin"
        imagenes={imagenesFlashCard}
        descripcion="Esta aplicación fue creada con la finalidad de aprender palabras en ingles y saber la
          forma correcta de escribirla. La aplicación permite crear nuevos 'decks' o maso de cartas para
          separar y estudiar la información por temas especificos. Una vez creado el 'deck' se puede agregar una
          nueva palabra 'card' con su correspondiente respuesta para posteriormente estudiarla. La aplicación guarda toda 
          la información localmente."
        linkRepositorio="https://github.com/OscarAndd/FlashCards-Android"
        linkPagina="" />

      <CProyectosModelo
        idCarousel="1"
        titulo="Aplicación Web Calculadora Básica"
        subtitulo="HTML / CSS / JavaScript"
        imagenes={imagenesCalculadora}
        descripcion="En este proyecto se realizó una página web que contiene una calculadora con operaciones básicas como sumar, restar, 
          multiplicar y dividir. La calculadora permite ingresar varias operaciones en una sola línea (3x2+4-5/4+3.14-1) y, posteriormente, 
          al darle al botón de '=' se procede a publicar el resultado. El sitio web permite tener un control de posibles errores de uso. 
          Por ejemplo, no es posible que se ingrese un operador sin antes colocar un número; si el usuario coloca un número decimal y por 
          error ingresa otro punto, la calculadora lo omite. Si ya se tiene un operador y se coloca otro sin haber puesto número, 
          se realizará la operación con el último operador ingresado."
        linkRepositorio="https://github.com/OscarAndd/CalculadoraBasica"
        linkPagina="https://oscarandd.github.io/CalculadoraBasica/" />

      <div className='d-flex flex-row-reverse flex-wrap flex-md-nowrap align-items-center mt-2 mb-4'>
        <a onClick={scrollToTop} className='mx-auto'> <i className="bi bi-arrow-up-circle fs-2 text-primary subir"></i></a>
        <h2 className=' flex-grow-1 mb-0 w-100 '>Te invito a ver mis habilidades <Link to="/habilidades"> <i className="bi bi-arrow-right-square"></i></Link></h2>
      </div>
    </div>
  )
}
