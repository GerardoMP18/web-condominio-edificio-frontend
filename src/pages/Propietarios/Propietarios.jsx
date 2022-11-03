import React, { useState, useEffect } from "react";
import TablePropietarios from "../../components/Tables/TablePropietarios/TablePropietarios";
import { Grid, TextField, Box, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import styled from "styled-components";

const baseUrl = "http://127.0.0.1:5000/api/users";

export function CrearPropietario() {
  const Title = styled.h6`
    display: flex;
    justify-content: center;
    color: #5e5def;
    padding-top: 30px;
    padding-bottom: 30px;
  `;

  const [consolaSelecionada, SetconsolaSelecionada] = useState({
    first_name: "",
    last_name: "",
    id_document_type: 1,
    number_document: "",
    email: "",
    password: "",
    phone: "",
    birth_date: "",
    id_role: 2,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetconsolaSelecionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(consolaSelecionada);
  };

  const postPetition = async () => {
    await axios.post(baseUrl, consolaSelecionada).then((response) => {
      setData(data.concat(response.data));
    });
  };

  return (
    <>
      <Formik
        onSubmit={(valores) => {
          console.log("Propietario Creado");
        }}
      >
        {() => (
          <form className="CrearCondominio">
            <div>
              <Box my={2}>
                <Card>
                  {/* <BackgroundColor> */}
                  <CardContent>
                    <Title>Crear Propietario</Title>
                    <Grid container direction="row" spacing={3}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused 
                          required
                          id="first_name"
                          error={false}
                          label="nombre"
                          type="text"
                          name="first_name"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="nombre del propietario a crear"
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused 
                          required
		          id="last_name"
                          error={false}
                          label="apellido"
                          type="text"
                          name="last_name"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="apellido del propietario a crear"
                          onChange={handleChange}
                        />
                      </Grid>

		       <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          id="number_document"
                          error={false}
                          label="numero de documento"
                          type="text"
                          name="number_document"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="numero de documento del propietario a crear"
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused 
                          required
			  id="email"
                          error={false}
                          label="correo"
                          type="text"
                          name="email"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="correo del propietario a crear"
                          onChange={handleChange}
                        />
                      </Grid>

		       <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          id="password"
                          error={false}
                          label="contraseña"
                          type="password"
                          name="password"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="contraseña del propietario a crear"
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused 
                          required
		          id="phone"
                          error={false}
                          label="celular"
                          type="number"
                          name="phone"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="celular del propietario a crear"
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused 
                          required
		          id="birth_date"
                          error={false}
                          label="fecha de nacimiento"
                          type="date"
                          name="birth_date"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="fecha de nacimiento del propietario a crear"
                          onChange={handleChange}
                        />
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

export function P2() {
  const [propietarios, setPropietarios] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5000/api/owners");
    const data = await response.json();
    setPropietarios(data);
  };

  return (
    <>
      <TablePropietarios data={propietarios} />
    </>
  );
}
