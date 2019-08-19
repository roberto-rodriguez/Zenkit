import React from "react";

class CodingConventions extends React.Component {
  render() {
    var { state } = this;
    return (
      <div>
        <b>Nombre de los ficheros </b>
        <br />
        Ficheros que definan componentes se nombraran con mayusculas y los que
        no con minusculas.
        <br />
        <br />
        <b>Estructura de las carpetas </b> <br />
        Los componentes principales como <b>paginas</b> o{" "}
        <b>componentes complejos</b> se deben dividir en subcomponentes, que
        irian en una carpeta /cmp.
        <br />
        <br />
        <b>Estilos</b> <br />
        Los estilos de un componente iran en un fichero con el mismo nombre
        .scss ,si se trata de un sub componente relativamente pequenno, los
        estilos se podrian incluir en la carpeta de estilos del componente
        padre.
        <br />
        <br />
        <b>Como componentes acceden a la data </b>
        <ol>
          <li>
            Preferiblemente los componentes accederan a la data del global state
            de manera horizontal, es decir que siempre que tenga sentido, en vez
            del padre cojer la data y pasarsela a un componente hijo, le pasara
            los atributos especificos para que este sepa como accederla el mismo
            del global state a travez de un <b>mapStateToProps</b>.
          </li>
          <li>
            Si al acceder a la data del global state, el componente necesita
            hacer alguna logica como filtrar o algo asi, esto se debe hacer en
            el <b>mapStateToProps()</b>, no en el <b>render()</b>.
          </li>
          <li>
            El acceso a la data del server siempre debera hacerse desde acciones
            en los <b>.action</b> files (nunca dentro de componentes)
          </li>
        </ol>
      </div>
    );
  }
}

export default CodingConventions;
