import React, { useState, useEffect } from "react";
import { Grid, TextField, Box, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import styled from "styled-components";

const baseUrl = "http://127.0.0.1:5000/api/condominiums";

export function Configuracion() {
  const Title = styled.h6`
    display: flex;
    justify-content: center;
    color: #5e5def;
    padding-top: 30px;
    padding-bottom: 30px;
  `;

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
                <Card >
                  {/* <BackgroundColor> */}
                  <CardContent>
                    <Title>Configuracion</Title>
                    <div>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <TextField
                          focused 
                          required
                          id="standard-required"
                          label="Required"
                          defaultValue="Email"
                          variant="standard"
                        />
                        <TextField
                          disabled
                          id="standard-disabled"
                          label="°"
                          defaultValue=""
                          variant="standard"
                        />
                        <TextField
                          id="standard-password-input"
                          label="°"
                          type="password"
                          autoComplete="current-password"
                          variant="standard"
                        />
                        <TextField
                          id="standard-read-only-input"
                          label="nueva contraseña"
                          defaultValue="Nueva Contraseña"
                          type="password"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                        />
                        
                        

                        <TextField
                          id="standard-number"
                          label="°"
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="standard"
                        />
                        <TextField
                          id="standard-search"
                          label="Confirmar Contraseña"
                          type="password"
                          
                          variant="standard"
                        />
                        <TextField
                          id="standard-helperText"
                          label="+51"
                          type="number"
                          defaultValue="N° Celular"
                          helperText="Cambie numero de Celular"
                          variant="standard"
                        />
                </Grid>    

                
      </div>
                    <Button
                      variant="contained"
                      color="error"
                      size="medium"
                      disableElevation
                      type="submit"
                      onClick={postPetition}
                    >
                      Cancelar
                    </Button>


                    <Button
                      variant="contained"
                  
                      size="medium"
                      disableElevation
                      type="submit"
                      onClick={postPetition}
                    >
                      Guardar cambio
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
