import React, { useState, useEffect, Fragment} from "react";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR, Container, SubContainer, Title } from "../../Tables/styles.js"
import Navigation from "../../Navigation/Navigation.jsx";
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import axios from "axios";

const baseUrl = "http://127.0.0.1:5000/api/buildings/";

function TableEdificios(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 11;

/* editFormData tiene los datos para enviar al metodo PUT */
  const [editFormData, setEditFormData] = useState({
    id_condominium: "",
    name_building: "",
    ruc: "",
    phone: "",
    email: "",
    description: "",
    floor: "",
    address: "",
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

    const editedBuilding = {
      id: editContactId,
      name_building: editFormData.name_building,
      ruc: editFormData.ruc,
      phone: editFormData.phone,
      email: editFormData.email,
      address: editFormData.address,
      landline: editFormData.landline,
      description: editFormData.description,
    }

    const newBuildings = [...currentItems]

    const index = currentItems.findIndex((building)=> building.id === editContactId);

    newBuildings[index] = editedBuilding;

    axios.put(baseUrl + editContactId, editFormData).then((response) => {
      response.status === 200 ? (
        setCurrentItems(newBuildings),
      ) : (
        alert("NO FUNCIONA")
      )
    });
    setEditContactId(null);
  };

/* Funcion que al hacer click al boton editar, le dara el id del building a editar para activar el EditableRow */
  const handleEditClick = (event, building) => {
    event.preventDefault();
    setEditContactId(building.id);

    const formValues = {
      name_building: building.name_building,
      ruc: building.ruc,
      phone: building.phone,
      email: building.email,
      address: building.address,
      landline: building.landline,
      description: building.description,
    }

    setEditFormData(formValues);
  };

/* Funcion que cancela la actualizacion de un row */
  const handleCancelClick = () => {
    setEditContactId(null);
  }

/* Funcion que elimina un Row y hace uso de el METODO DELETE*/
  const handleDeleteClick = (buildingId) => {
    const newBuildings = [...currentItems]

    const index = currentItems.findIndex((building)=> building.id === buildingId);

    newBuildings.splice(index, 1)

    axios.delete(baseUrl + buildingId).then((response) => {
      response.status === 200 ? (
        setCurrentItems(newBuildings),
      ) : (
        alert("NO FUNCIONA")
      )
    });
  }
  
  console.log(data)
  return (
    <Container>
      <SubContainer>
      <Title>Lista de Edificios</Title>
      <form>
        <STable>
          <STHead>
            <STHeadTR>
              <STH>#</STH>
                <STH>name_building</STH>
                <STH>address</STH>
                <STH>phone</STH>
                <STH>email</STH>
                <STH>ruc</STH>
              <STH>Acciones</STH>
            </STHeadTR>
          </STHead>
          <STBody>
            {currentItems.map((building, index) => (
	      <Fragment>
  	        { editContactId === building.id ? (
                  <EditableRow
		    editFormData={editFormData}
		    index={index}
                    handleEditFormChange={handleEditFormChange}
                    handleEditFormSubmit={handleEditFormSubmit}
                    handleCancelClick={handleCancelClick}
                  />
		) : (
                  <ReadOnlyRow
		    building={building}
	            index={index}
		    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
		  />
		)}
	      </Fragment>
            ))}
          </STBody>
        </STable>
        <Navigation
          pageClick={handlePageClick}
          contador={pageCount}
         />
      </form>
      </SubContainer>
    </Container>
  );
}

export default TableEdificios;

