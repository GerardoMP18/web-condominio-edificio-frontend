import React, { useState, useEffect } from "react";
import TableCondominiums from "../../components/Tables/TableCondominiums/TableCondominiums";
import { Grid, TextField, Box, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import styled from "styled-components";
import { data } from "./DataCondominiums";

const baseUrl = "http://127.0.0.1:5000/api/condominiums";

export function CrearCondominio() {
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
                          label="name"
                          type="text"
                          name="name"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="Ingrese nombre Condominio"
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          error={false}
                          label="ruc del condominio"
                          type="number"
                          name="ruc"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="Ruc del Condominio"
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          error={false}
                          label="+51"
                          type="number"
                          name="phone"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="phone"
                          onChange={handleChange}
                        />
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
                          variant="outlined"
                          helperText="email"
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          error={false}
                          label="address"
                          type="text"
                          name="address"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="address"
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          required
                          error={false}
                          label="landline"
                          type="number"
                          name="landline"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="telefono fijo"
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused
                          error={false}
                          label="description"
                          type="text"
                          name="description"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="opcional"
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

/* Api Condominios */
export function C2() {

{/*
  const [condominiums, setCondominiums] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5000/api/condominiums");
    const data = await response.json();
    setCondominiums(data);
  };
*/}

  return (
    <>
      <TableCondominiums data={data} />
    </>
  );
}
