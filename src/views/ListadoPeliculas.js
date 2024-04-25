
import React, { useEffect, useState }  from 'react';
import Peliculas from './Peliculas';
import PageWrapper from './pageWrapper.js';
import Paginacion from './Paginacion.js';

function ListadoPeliculas(){

  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 7;

  useEffect(()=>{
    buscarPeliculas();

  }, [])

  const buscarPeliculas = async () => {

    let url = "https://lucasmoy.dev/data/react/peliculas.json";
    try {
      
    let respuesta = await fetch(url, {
        
        "method": 'GET', 
        "headers": {
          'Accept': 'application/json'

        },  
       
       
    })
    let json = await respuesta.json();
    setPeliculas(json);
    
    } catch (error) {

      alert(error)

    }
   
  }  

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculas.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }

  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA
  )


  return (

 

    <PageWrapper>

    

      {peliculasPorPagina.map(pelicula =>
        <Peliculas  img={pelicula.img} titulo={pelicula.titulo} calificacion={pelicula.calificacion}
          duracion={pelicula.duracion}
          fecha={pelicula.fecha}
          director={pelicula.director} actores={pelicula.actores} >
          {pelicula.descripcion}
        </Peliculas>  

      )}

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {

        setPaginaActual(pagina);
      }} />

    </PageWrapper>


  );

}

export default ListadoPeliculas;

