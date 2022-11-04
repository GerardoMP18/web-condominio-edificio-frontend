import React, { useState, useEffect, Fragment} from "react";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR, Container, SubContainer, Title } from "../../Tables/styles.js"
import Navigation from "../../Navigation/Navigation.jsx";
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import axios from "axios";
import Swal from 'sweetalert2';

const baseUrl = "http://127.0.0.1:5012/api/condominiums/";

function TableCondominiums(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 11;

/* editFormData tiene los datos para enviar al metodo PUT */
  const [editFormData, setEditFormData] = useState({
    name: "",
    ruc: "",
    phone: "",
    email: "",
    address: "",
    landline: "",
    description: "",
    user_created: "",
    user_updated: "",
  });

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

/* Funcion que al escribir nuevos datos en EditableRow, se almacenen aqui y se llenen en EditFormData */
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

/* funcion que sobreescribira la columna seleccionada con sus datos actualizados y tambien acciona al metodo PUT para actualizar en la base de datos*/
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedCondominium = {
      id: editContactId,
      name: editFormData.name,
      ruc: editFormData.ruc,
      phone: editFormData.phone,
      email: editFormData.email,
      address: editFormData.address,
      landline: editFormData.landline,
      description: editFormData.description,
    }

    const newCondominiums = [...currentItems]

    const index = currentItems.findIndex((condominium)=> condominium.id === editContactId);

    newCondominiums[index] = editedCondominium;

    axios.put(baseUrl + editContactId, editFormData).then((response) => {
      response.status === 200 ? (
	      setCurrentItems(newCondominiums),
        Swal.fire({
          title: 'Exito',
          text: 'Se Actualizo correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }) 
      ) : (
        Swal.fire({
          title: 'Fallo',
          text: 'Fallo en actualizar',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      )
    });
    setEditContactId(null);
  };

/* Funcion que al hacer click al boton editar, le dara el id del condominio a editar para activar el EditableRow */
  const handleEditClick = (event, condominium) => {
    event.preventDefault();
    setEditContactId(condominium.id);

    const formValues = {
      name: condominium.name,
      ruc: condominium.ruc,
      phone: condominium.phone,
      email: condominium.email,
      address: condominium.address,
      landline: condominium.landline,
      description: condominium.description,
    }

    setEditFormData(formValues);
  };

/* Funcion que cancela la actualizacion de un row */
  const handleCancelClick = () => {
    setEditContactId(null);
  }

/* Funcion que elimina un Row y hace uso de el METODO DELETE*/
  const handleDeleteClick = (condominiumId) => {
    const newCondominiums = [...currentItems]

    const index = currentItems.findIndex((condominium)=> condominium.id === condominiumId);

    newCondominiums.splice(index, 1)

    axios.delete(baseUrl + condominiumId).then((response) => {
      response.status === 200 ? (
        setCurrentItems(newCondominiums),
        Swal.fire({
          title: 'Exito',
          text: 'Se Elimino correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
      ) : (
        Swal.fire({
          title: 'Fallo',
          text: 'Fallo en eliminar',
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
      <Title>Lista de Condominios</Title>
      <form>
        <STable>
          <STHead>
            <STHeadTR>
	      <STH>#</STH>
	      <STH>name</STH>
              <STH>address</STH>
	      <STH>phone</STH>
	      <STH>email</STH>
	      <STH>ruc</STH>
              <STH>Acciones</STH>
            </STHeadTR>
          </STHead>
          <STBody>
            {currentItems.map((condominium, index) => (
              <Fragment>
		{ editContactId === condominium.id ? (
		  <EditableRow
                    editFormData={editFormData}
		    index={index}
		    handleEditFormChange={handleEditFormChange}
		    handleEditFormSubmit={handleEditFormSubmit}
		    handleCancelClick={handleCancelClick}
		  />
		) : (
	          <ReadOnlyRow
		    condominium={condominium}
		    index={index}
		    handleEditClick={handleEditClick}
	            handleDeleteClick={handleDeleteClick}
		  />
		)}
	      </Fragment>
            ))}
          </STBody>
        </STable>
      </form>
      <Navigation
        pageClick={handlePageClick}
        contador={pageCount}
       />
      </SubContainer>
    </Container>
  );
}

export default TableCondominiums;