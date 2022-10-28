import React, { useState, useEffect } from "react";
import TableEdificios from "../../components/Tables/TableEdificios/TableEdificios";
import { Grid, TextField, Box, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import styled from "styled-components";

const lista = [];

const baseUrl = `http://127.0.0.1:5000/api/condominiums/${lista[0]}/buildings`;

const baseUrl1 = (id) => {
  const baseUrl = `http://127.0.0.1:5000/api/condominiums/${id}/buildings`;
  return baseUrl1;
};

export function CrearEdificio() {
  const Title = styled.h6`
    display: flex;
    justify-content: center;
    color: #5e5def;
    padding-top: 30px;
    padding-bottom: 30px;
  `;

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetconsolaSelecionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    lista.push(value);
    console.log("name" + name + "value" + value);
    console.log("este es mi json" + consolaSelecionada);
  };

  console.log(" este es mi lista " + lista);

  /*consolaSelecionada.map((items, index) => {
    console.log("este es mi map " + items);
  });*/

  const postPetition = async () => {
    await axios.post(baseUrl1, consolaSelecionada).then((response) => {
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
                    <Title>Crear Edificio</Title>
                    <Grid container direction="row" spacing={3}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          id="id_condominium"
                          error={false}
                          label="id condominio"
                          type="number"
                          name="id_condominium"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="Ingrese el id del condominio a asignar"
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          id="name_building"
                          error={false}
                          label="Nombre del edificio a crear"
                          type="text"
                          name="name_building"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="Ingrese nombre del Edificio"
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
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
                          error={false}
                          label="phone"
                          type="text"
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

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          error={false}
                          label="floor"
                          type="number"
                          name="floor"
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          helperText="Numero de pisos"
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
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
                    </Grid>

                    <Button
                      variant="outlined"
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


/* API Edificios */
export function E2() {
  const [edificios, setEdificios] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5000/api/condominiums");
    const data = await response.json();
    setEdificios(data);
  };

  return (
    <>
      <TableEdificios data={edificios} />
    </>
  );
}
