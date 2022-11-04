import React, { useState, useEffect } from "react";
import TableCondominiums from "../../components/Tables/TableCondominiums/TableCondominiums";
import { Grid, TextField, Box, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import styled from "styled-components";
import Swal from 'sweetalert2';

const baseUrl = "http://127.0.0.1:5012/api/condominiums";

export function CrearCondominio() {
  const Title = styled.h6`
    display: flex;
    justify-content: center;
    color: #5e5def;
    padding-top: 30px;
    padding-bottom: 30px;
  `;

  const isPhone = /[9][0-9]{1,8}/;
  const isLandile = /^[0][1]\d{7}$/;
  const isEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  /*Almacenar mensaje de errores*/
  const [errMsgName, setErrMsgName] = useState('');
  const [errMsgRuc, setErrMsgRuc] = useState('');
  const [errMsgCelular, setErrMsgCelular] = useState('');
  const [errMsgCorreo, setErrMsgCorreo] = useState('');
  const [errMsgDireccion, setErrMsgDireccion] = useState('');
  const [errMsgTelefono, setErrMsgTelefono] = useState('');
  const [errMsgDescription, setErrMsgDescription] = useState('');
  const [success, setSuccess] = useState(false);

  const [consolaSelecionada, SetconsolaSelecionada] = useState({
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

  useEffect(() => {
    setErrMsgName('');
    setErrMsgRuc('');
    setErrMsgCelular('');
    setErrMsgCorreo('');
    setErrMsgDireccion('');
    setErrMsgTelefono('');
    setErrMsgDescription('');
  }, [consolaSelecionada.name,
  consolaSelecionada.ruc,
  consolaSelecionada.phone,
  consolaSelecionada.email,
  consolaSelecionada.address,
  consolaSelecionada.landline,
  consolaSelecionada.description])

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetconsolaSelecionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(consolaSelecionada);
  };

  /* function que contiene la validacion detodos los input a validar*/
  const validate = () => {

    let helper = [];
    /*Validacion de nombre */
    if (!consolaSelecionada.name) {
      setErrMsgName("Favor de ingrese nombre de condominio")
    }
    else {
      helper.push(consolaSelecionada.name);
    }
    /* validacion de ruc*/
    if (consolaSelecionada.ruc === '') {
      setErrMsgRuc("Favor de ingresar numero de ruc")
    }
    else if (!(consolaSelecionada.ruc >= 1e10 && consolaSelecionada.ruc < 11e9
      || consolaSelecionada.ruc >= 15e9 && consolaSelecionada.ruc < 18e9
      || consolaSelecionada.ruc >= 2e10 && consolaSelecionada.ruc < 21e9)) {
      setErrMsgRuc("Ruc invalido");
    } else {
      helper.push(consolaSelecionada.ruc);
    }

    /* validacion de numero de celular*/
    if (!consolaSelecionada.phone) {
      setErrMsgCelular("Favor de ingresar numero de celular")
    } else if (consolaSelecionada.phone.length !== 9) {
      setErrMsgCelular("Numero de celular tiene que ser 9 digitos")
    } else if (!isPhone.test(consolaSelecionada.phone)) {
      setErrMsgCelular("Numero de celular invalido")
      //   console.log(console.log(consolaSelecionada.phone.length))
    } else {
      helper.push(consolaSelecionada.phone)
    }

    /* validacion para correo*/
    if (!consolaSelecionada.email) {
      setErrMsgCorreo("Favor de ingresar correo electronico")
    } else if (!isEmail.test(consolaSelecionada.email)) {
      setErrMsgCorreo("Correo invalido")
    } else {
      helper.push(consolaSelecionada.email)
    }

    if (!consolaSelecionada.address) {
      setErrMsgDireccion("Favor de ingresar direccion")
    } else {
      helper.push(consolaSelecionada.address)
    }
    /* validacion para telefono fijo*/
    if (!consolaSelecionada.landline) {
      setErrMsgTelefono("Favor de ingresar numero de telefono fijo")
    } else if (!isLandile.test(consolaSelecionada.landline)) {
      setErrMsgTelefono("Numero de telefono fijo invalido")
    } else {
      helper.push(consolaSelecionada.landline)
    }

    if (consolaSelecionada.description.length > 250) {
			setErrMsgDescription("Solo se acepta 250 caracteres en descripcion")
		} else {
      if (helper.length === 6) {
        return true;
      }
    }
  }

  const postPetition = async (e) => {
    e.preventDefault();

    if (validate() === true) {
      await axios.post(baseUrl, consolaSelecionada).then((response) => {
        // setData(data.concat(response.data))
        console.log()
        if (response.status === 201) {
          Swal.fire({
            title: 'Exito',
            text: 'Se registro correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
        }
      });
    }
  };

  return (
    <>
      <Formik
        onSubmit={(valores) => {
          console.log("Condominio Creado");
        }}
      >
        {() => (
          <form className="CrearCondominio">
            <div>
              <Box my={2}>
                <Card>
                  {/* <BackgroundColor> */}
                  <CardContent>
                    <Title>Crear Condominio</Title>
                    <Grid container direction="row" spacing={3}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          id="name"
                          error={false}
                          label="Nombre de Condominio"
                          type="text"
                          name="name"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgName}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          error={false}
                          label="Ruc de Condominio"
                          type="number"
                          name="ruc"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgRuc}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          error={false}
                          label="Celular"
                          type="number"
                          name="phone"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgCelular}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          error={false}
                          label="Correo Electronico"
                          type="text"
                          name="email"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgCorreo}</div>
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
                          variant="outlined"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgDireccion}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          error={false}
                          label="Telefono Fijo"
                          type="number"
                          name="landline"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgTelefono}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          error={false}
                          label="Descripcion"
                          type="text"
                          name="description"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="Opcional"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgDescription}</div>
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
}

/* Api Condominios */
export function C2() {


  const [condominiums, setCondominiums] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5012/api/condominiums");
    const data = await response.json();
    setCondominiums(data);
  };


  return (
    <>
      <TableCondominiums data={condominiums} />
    </>
  );
}
