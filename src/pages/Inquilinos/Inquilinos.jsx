import React, { useState, useEffect } from "react";
import TableInquilinos from "../../components/Tables/TableInquilinos/TableInquilinos";
import { Grid, TextField, Box, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import styled from "styled-components";
import Swal from 'sweetalert2';

const baseUrl = "http://127.0.0.1:5012/api/users";

export function CrearInquilino() {
  const Title = styled.h6`
    display: flex;
    justify-content: center;
    color: #5e5def;
    padding-top: 30px;
    padding-bottom: 30px;
  `;

  /*expresiones regulares para validacion de celular y correo */
  const isPhone = /[9][0-9]{1,8}/;
  const isEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const isLetras = /^[a-zA-Z]+$/;
  const isDni = /(^([0-9]{8,8})|^)$/;
  /*validacion de password*/
  /*
    Minimo 8 caracteres
    Maximo 15
    Al menos una letra mayúscula
    Al menos una letra minucula
    Al menos un dígito
    No espacios en blanco
    Al menos 1 caracter especial
    */
  const isvalidoPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  /*hook para almacenar los errores a mostrar de las validaciones */
  const [errMsgNombre, setErrMsgNombre] = useState('');
  const [errMsgApellido, setErrMsgApellido] = useState('');
  const [errMsgDocument, setErrMsgDocument] = useState('');
  const [errMsgCorreo, setErrMsgCorreo] = useState('');
  const [errMsgContraseña, setErrMsgContraseña] = useState('');
  const [errMsgCelular, setErrMsgCelular] = useState('');
  const [errMsgFecha, setErrMsgFecha] = useState('');

  const [consolaSelecionada, SetconsolaSelecionada] = useState({
    first_name: "",
    last_name: "",
    id_document_type: 1,
    number_document: "",
    email: "",
    password: "",
    phone: "",
    birth_date: "",
    id_role: 3,
  });

  /*hook para poder recargar y limpiar los mensaje de errores */
  useEffect(() => {
    setErrMsgNombre('');
    setErrMsgApellido('');
    setErrMsgDocument('');
    setErrMsgCorreo('');
    setErrMsgContraseña('');
    setErrMsgCelular('');
    setErrMsgFecha('');
  }, [consolaSelecionada.first_name,
  consolaSelecionada.last_name,
  consolaSelecionada.number_document,
  consolaSelecionada.email,
  consolaSelecionada.password,
  consolaSelecionada.phone,
  consolaSelecionada.birth_date])

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetconsolaSelecionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(consolaSelecionada);
  };

  const validate = () => {
    let helper = [];

    if (!consolaSelecionada.first_name) {
      setErrMsgNombre("Favor de ingresar nombre")
    } else if (!isLetras.test(consolaSelecionada.first_name)) {
      setErrMsgNombre("Solo esta permitido ingresar letras")
    } else {
      helper.push(consolaSelecionada.first_name);
    }

    if (!consolaSelecionada.last_name) {
      setErrMsgApellido("Favor de ingresar apellidos")
    } else if (!isLetras.test(consolaSelecionada.last_name)) {
      setErrMsgApellido("Solo esta permitido ingresar letras")
    } else {
      helper.push(consolaSelecionada.last_name);
    }

    if (!consolaSelecionada.number_document) {
      setErrMsgDocument("Favor de ingresar numero de dni")
    } else if (!isDni.test(consolaSelecionada.number_document)) {
      setErrMsgDocument("Numero de dni tiene que ser de 8 digitos")
    } else {
      helper.push(consolaSelecionada.number_document);
    }

    if (!consolaSelecionada.password) {
      setErrMsgContraseña("Favor de ingresar contraseña")
    } else if (!isvalidoPassword.test(consolaSelecionada.password)) {
      let textoErro = "Contraseña debe tener minimo 8 caracteres, maximo 15, al menos una letra mayuscula," +
        " al menos una letra minuscula, al menos un numero, no espacios en blanco " +
        "y al menos 1 caracter especial"
      setErrMsgContraseña(textoErro);
    } else {
      helper.push(consolaSelecionada.password);
    }

    if (!consolaSelecionada.email) {
      setErrMsgCorreo("Favor de ingresar correo electronico")
    } else if (!isEmail.test(consolaSelecionada.email)) {
      setErrMsgCorreo("Correo invalido")
    } else {
      helper.push(consolaSelecionada.email);
    }

    /* validacion de descripcion */
    if (!consolaSelecionada.phone) {
      setErrMsgCelular("Favor de ingresar numero de celular")
    } else if (consolaSelecionada.phone.length !== 9) {
      setErrMsgCelular("Numero de celular tiene que ser 9 digitos")
    } else if (!isPhone.test(consolaSelecionada.phone)) {
      setErrMsgCelular("Numero de celular invalido")
    } else {
      helper.push(consolaSelecionada.phone)
    }

    if (!consolaSelecionada.birth_date) {
      setErrMsgFecha("Favor de selecionar fecha de nacimiento")
    } else {
      helper.push(consolaSelecionada.birth_date)
    }

    if (helper.length === 7) {
      return true
    }
  }

  const postPetition = async (e) => {
    e.preventDefault();
    if (validate() === true) {
      await axios.post(baseUrl, consolaSelecionada).then((response) => {
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
          console.log("Inquilino Creado");
        }}
      >
        {() => (
          <form className="CrearCondominio">
            <div>
              <Box my={2}>
                <Card>
                  {/* <BackgroundColor> */}
                  <CardContent>
                    <Title>Crear Inquilino</Title>
                    <Grid container direction="row" spacing={3}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          id="first_name"
                          error={false}
                          label="Nombres"
                          type="text"
                          name="first_name"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          placeholder="Ingrese nombre de inquilino"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgNombre}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          id="last_name"
                          error={false}
                          label="Apellidos"
                          type="text"
                          name="last_name"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          placeholder="Ingrese apellidos de inquilino"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgApellido}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          id="number_document"
                          error={false}
                          label="Numero de Documento"
                          type="text"
                          name="number_document"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          placeholder="Ingrese numero de documento"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgDocument}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          id="email"
                          error={false}
                          label="Correo Electronico"
                          type="text"
                          name="email"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          placeholder="Ingrese correo electronico"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgCorreo}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          id="password"
                          error={false}
                          label="Contraseña"
                          type="password"
                          name="password"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          placeholder="Ingrese contraseña"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgContraseña}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          id="phone"
                          error={false}
                          label="Celular"
                          type="number"
                          name="phone"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          placeholder="Ingrese numero de celular"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgCelular}</div>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          id="birth_date"
                          error={false}
                          label="Fecha de Nacimiento"
                          type="date"
                          name="birth_date"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          onChange={handleChange}
                        />
                        <div className="error">{errMsgFecha}</div>
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



export function I2() {
  const [inquilinos, setInquilinos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5012/api/tenants");
    const data = await response.json();
    setInquilinos(data);
  };

  return (
    <>
      <TableInquilinos data={inquilinos} />
    </>
  );
}
