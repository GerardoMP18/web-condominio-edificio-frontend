import React, { useState, useEffect } from "react";
import TablePropietarios from "../../components/Tables/TablePropietarios/TablePropietarios";
import { Grid, TextField, Box, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import styled from "styled-components";
import { data } from "./DataPropietarios";

const baseUrl = "http://127.0.0.1:5000/api/login";

export function CrearPropietario() {
  const Title = styled.h6`
    display: flex;
    justify-content: center;
    color: #5e5def;
    padding-top: 30px;
    padding-bottom: 30px;
  `;

  const [consolaSelecionada, SetconsolaSelecionada] = useState({
    email: "",
    password: "",
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
                    <Title>Crear Propietario</Title>
                    <Grid container direction="row" spacing={3}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused 
                          required
                          id="nombre"
                          error={false}
                          label="nombre"
                          type="text"
                          name="nombre"
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
                          error={false}
                          label="apellido"
                          type="text"
                          name="apellido"
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
                          error={false}
                          label="correo"
                          type="text"
                          name="correo"
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
                          error={false}
                          label="celular"
                          type="number"
                          name="celular"
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
                          error={false}
                          label="dni"
                          type="number"
                          name="dni"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="dni del propietario a crear"
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
  {
    /*const [propietarios, setPropietarios] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5000/api/condominiums");
    const data = await response.json();
  
    setPropietarios(data);
  */
  }

  return (
    <>
      <TablePropietarios data={data} />
    </>
  );
}
