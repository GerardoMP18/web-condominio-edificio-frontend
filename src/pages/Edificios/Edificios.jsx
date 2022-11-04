import React, { useState, useEffect, useRef} from "react";
import TableEdificios from "../../components/Tables/TableEdificios/TableEdificios";
import { Grid, TextField, Box, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import styled from "styled-components";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:5014/api/condominiums/'

export function CrearEdificio() {
  const Title = styled.h6`
    display: flex;
    justify-content: center;
    color: #5e5def;
    padding-top: 30px;
    padding-bottom: 30px;
  `;

  /* editContactId tiene el ID de el condominio que voy a agregar un edificio */
  const [editContactId, setEditContactId] = useState(null);

  /* expresiones regulares de correo y telefono*/
  const isEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const isPhone = /[9][0-9]{1,8}/;

  const textCondominio = useRef(null);
  const textEdificio = useRef(null);
  const textRuc = useRef(null);
  const textCelular = useRef(null);
  const textEmail = useRef(null);
  const textDescription = useRef(null);
  const textFloor = useRef(null);
  const textAdress = useRef(null);

  /* estados que almacenan los mensaje de errores a mostrar */
  const [errMsgCondominio, setErrMsgCondominio] = useState('');
  const [errMsgNombre, setErrMsgNombre] = useState('');
  const [errMsgRuc, setErrMsgRuc] = useState('');
  const [errMsgPhone, setErrMsgPhone] = useState('');
  const [errMsgEmail, setErrMsgEmail] = useState('');
  const [errMsgDes, setErrMsgDes] = useState('');
  const [errMsgFloor, setErrMsgFloor] = useState('');
  const [errMsgAddress, setErrMsgAddress] = useState('');

  const [seleccionar, setSeleccionar] = useState(false);

  const [consolaSelecionada, SetconsolaSelecionada] = useState({
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

  /* useEffect que realiza la limpieza de errores */
  useEffect(() => {
    setErrMsgCondominio('');
    setErrMsgNombre('');
    setErrMsgRuc('');
    setErrMsgPhone('');
    setErrMsgEmail('');
    setErrMsgDes('');
    setErrMsgFloor('');
    setErrMsgAddress('');
  }, [consolaSelecionada.id_condominium,
  consolaSelecionada.name_building,
  consolaSelecionada.ruc,
  consolaSelecionada.phone,
  consolaSelecionada.email,
  consolaSelecionada.description,
  consolaSelecionada.floor,
  consolaSelecionada.address
  ])

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetconsolaSelecionada((prevState) => ({
      ...prevState,
      ["id_condominium"]: editContactId,
      [name]: value,
    }));

    console.log("name" + name + "value" + value);
    console.log("este es mi json" + consolaSelecionada);
  };

  const validate = () => {
    let helper = [];

    if (seleccionar === false) {
      setErrMsgCondominio("Favor de seleccionar nombre de condominio")
    } else {
      helper.push(consolaSelecionada.id_condominium);
    }
    if (!consolaSelecionada.name_building) {
      setErrMsgNombre("Favor de ingresar nombre de edificio")
    } else {
      helper.push(consolaSelecionada.name_building);
    }
    /* validacion de ruc */
    if (!consolaSelecionada.ruc) {
      setErrMsgRuc("Favor de ingresar numero de ruc")
    } else if (!(consolaSelecionada.ruc >= 1e10 && consolaSelecionada.ruc < 11e9
      || consolaSelecionada.ruc >= 15e9 && consolaSelecionada.ruc < 18e9
      || consolaSelecionada.ruc >= 2e10 && consolaSelecionada.ruc < 21e9)) {
      setErrMsgRuc("Ruc invalido");
    } else {
      helper.push(consolaSelecionada.ruc);
    }

    /* validacion de celular */
    if (!consolaSelecionada.phone) {
      setErrMsgPhone("Favor de ingresar numero de celular")
    } else if (consolaSelecionada.phone.length !== 9) {
      setErrMsgPhone("Numero de celular tiene que ser 9 digitos")
    } else if (!isPhone.test(consolaSelecionada.phone)) {
      setErrMsgPhone("Numero de celular invalido")
    } else {
      helper.push(consolaSelecionada.phone);
    }

    /* validacion de correo */
    if (!consolaSelecionada.email) {
      setErrMsgEmail("Favor de ingresar correo electronico")
    } else if (!isEmail.test(consolaSelecionada.email)) {
      setErrMsgEmail("Correo invalido")
    } else {
      helper.push(consolaSelecionada.email);
    }

    if (!consolaSelecionada.floor) {
      setErrMsgFloor("Favor de ingresar numero de pisos")
    } else if (consolaSelecionada.floor <= 0) {
      setErrMsgFloor("Numero debe ser mayor de 0")
    } else {
      helper.push(consolaSelecionada.floor);
    }

    if (!consolaSelecionada.address) {
      setErrMsgAddress("Favor de ingrese nombre de direccion")
    } else {
      helper.push(consolaSelecionada.address);
    }

    /* validacion de descripcion */
    if (consolaSelecionada.description.length > 250) {
      setErrMsgDes("Solo se acepta 250 caracteres en descripcion")
    } else {
      if (helper.length === 7) {
        return true
      }
    }

  }

  const postPetition = async (e) => {
    e.preventDefault();
    if (validate() === true) {
      await axios.post(baseUrl + editContactId + "/buildings", consolaSelecionada).then((response) => {
        if (response.status === 201) {
          Swal.fire({
            title: 'Exito',
            text: 'Se registro correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
          textCondominio.current.value = "";
          textEdificio.current.value = "";
          textRuc.current.value = "";
          textCelular.current.value = "";
          textEmail.current.value = "";
          textDescription.current.value = "";
          textFloor.current.value = "";
          textAdress.current.value = "";
        }
      });
    }

  };
  const cambiarEstadoSelect = () => {
    setSeleccionar('true')
  }
  /* State contiene a todos los condominios en una lista para mostrar en el desplegable */
  const [state, setState] = useState([]);
  useEffect(() => {
    componentDidCondominium()
  }, []);

  /* Funcion que al hacer click al boton editar, le dara el id del condominio a editar para activar el EditableRow */
  const handleEditClick = (condominiumId) => {
    setEditContactId(condominiumId);
  };

  /* funcion que retorna todos los conodominios por el metodo GET al desplegable*/
  const componentDidCondominium = () => {
    axios.get("http://127.0.0.1:5014/api/condominiums").then((response) => {
      setState(response.data)
    })
  }

  return (
    <>
      <Formik
        onSubmit={(valores) => {
          console.log("Edificio Creado");
        }}
      >
        {() => (
          <form className="CrearCondominio">
            <div>
              <Box my={2}>
                <Card>
                  {/* <BackgroundColor> */}
                  <CardContent>
                    <Title>Crear Edificio</Title>
                    <Grid container direction="row" spacing={3}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <FormControl fullWidth sx={{ m: 1, ml: 0 }} focused>
                          <InputLabel>Condominio*</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Condominio"
                            name="id_condominium"
                            inputRef={textCondominio}
                            onChange={cambiarEstadoSelect}
                            onClick={componentDidCondominium}
                          >
                            {state.map(elemento => (
                              <MenuItem onClick={() => handleEditClick(elemento.id)} value={elemento.id}>{elemento.name}</MenuItem>
                            )
                            )}
                          </Select>
                          {seleccionar ? <div></div> : <div className="error">{errMsgCondominio}</div>}
                        </FormControl>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          id="name_building"
                          error={false}
                          label="Nombre de Edificio"
                          type="text"
                          name="name_building"
                          margin="dense"
                          fullWidth
                          inputRef={textEdificio}
                          variant="outlined"
                          placeholder="Ingrese nombre de edificio"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgNombre}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          error={false}
                          label="Ruc de condominio"
                          type="number"
                          name="ruc"
                          margin="dense"
                          fullWidth
                          inputRef={textRuc}
                          variant="outlined"
                          placeholder="Ingrese numero de ruc"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgRuc}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          error={false}
                          label="phone"
                          type="text"
                          name="phone"
                          margin="dense"
                          fullWidth
                          inputRef={textCelular}
                          variant="outlined"
                          placeholder="Ingrese numero de celular"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgPhone}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          error={false}
                          label="email"
                          type="text"
                          name="email"
                          margin="dense"
                          fullWidth
                          inputRef={textEmail}
                          variant="outlined"
                          placeholder="Ingrese correo electronico"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgEmail}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          error={false}
                          label="description"
                          type="text"
                          name="description"
                          margin="dense"
                          fullWidth
                          inputRef={textDescription}
                          variant="outlined"
                          placeholder="Ingrese descripcion"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgDes}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          error={false}
                          label="Cantidad de departamentos"
                          type="number"
                          name="floor"
                          margin="dense"
                          fullWidth
                          inputRef={textFloor}
                          variant="outlined"
                          placeholder="Ingrese cantidad de departamentos"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgFloor}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          error={false}
                          label="Direccion"
                          type="text"
                          name="address"
                          margin="dense"
                          fullWidth
                          inputRef={textAdress}
                          variant="outlined"
                          placeholder="Ingrese direccion"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgAddress}</div>
                      </Grid>
                    </Grid>

                    <Button
                      variant="contained"

                      size="medium"
                      disableElevation
                      type="submit"
                      onClick={postPetition}
                    >
                      Crear
                    </Button>
                  </CardContent>
                  {/*</BackgroundColor>*/}
                </Card>
              </Box>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};


/* API Edificios */
export function E2() {
  const [edificios, setEdificios] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5012/api/buildings");
    const data = await response.json();
    setEdificios(data);
  };

  return (
    <>
      <TableEdificios data={edificios} />
    </>
  );
}
