import React, { useState, useEffect} from "react";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR, Container, SubContainer, Title } from "../../Tables/styles.js"
import Navigation from "../../Navigation/Navigation.jsx";
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";
import ReadOnlyRow from "./ReadOnlyRow";
import axios from "axios";
import Swal from 'sweetalert2';

const baseUrl = "http://127.0.0.1:5010/api/users/";

function TableInquilinos(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 14;
  
/* editContactId tiene el ID de el Row que voy a actualizar */
  const [editContactId, setEditContactId] = useState(null);

  useEffect(() => {
    console.log("Paso 6")
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
    console.log("Paso 9")
  }, [itemOffset, itemsPerPage, data]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

/* Funcion que elimina un Row y hace uso de el METODO DELETE */
  const handleDeleteClick = (inquilinoId) => {
    const newInquilinos = [...currentItems]

    const index = currentItems.findIndex((inquilino)=> inquilino.id === inquilinoId);

    newInquilinos.splice(index, 1)

    axios.delete(baseUrl + inquilinoId).then((response) => {
      response.status === 200 ? (
        setCurrentItems(newInquilinos),
        Swal.fire({
          title: 'Exito',
          text: 'Se Elimino correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }) 
      ) : (
        Swal.fire({
          title: 'Fallo',
          text: 'Fallo en Eliminar',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      )
    });
  }
  
  console.log(data)
  return (
    <Container>
      <SubContainer>
      <Title>Lista de Inquilinos</Title>
      <STable>
        <STHead>
          <STHeadTR>
            <STH>#</STH>
            <STH>Edificio</STH>
            <STH>Propietario</STH>
            <STH>Piso</STH>
            <STH>Departamento</STH>
            <STH>Acciones</STH>
          </STHeadTR>
        </STHead>
        <STBody>
          {currentItems.map((inquilino, index) => (
            <ReadOnlyRow
              inquilino={inquilino}
              index={index}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </STBody>
      </STable>
      <Navigation
        pageClick={handlePageClick}
        contador={pageCount}
       />
      </SubContainer>
    </Container>
  );
}

export default TableInquilinos;
