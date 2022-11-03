import React, { useState, useEffect } from "react";
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

const baseUrl = 'http://127.0.0.1:5000/api/condominiums/'

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
      ["id_condominium"]: editContactId,
      [name]: value,
    }));

    console.log("name" + name + "value" + value);
    console.log("este es mi json" + consolaSelecionada);
  };

  /*consolaSelecionada.map((items, index) => {
    console.log("este es mi map " + items);
  });*/

  const postPetition = async () => {
    await axios.post(baseUrl + editContactId + "/buildings", consolaSelecionada).then((response) => {
      setData(data.concat(response.data));
    });
  };

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
    axios.get("http://127.0.0.1:5000/api/condominiums").then((response) => {
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
		            onClick={componentDidCondominium}
		          >
		            {state.map(elemento=>(
		              <MenuItem onClick={()=> handleEditClick(elemento.id)} value={elemento.id}>{elemento.name}</MenuItem>
			    )
			    )}
        		  </Select>
        		  <FormHelperText>Selecciona un Condominio</FormHelperText>
      			</FormControl>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          focused 
                          required
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
                          required
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
                          focused 
                          required
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
    const response = await fetch("http://127.0.0.1:5000/api/buildings");
    const data = await response.json();
    setEdificios(data);
  };

  return (
    <>
      <TableEdificios data={edificios} />
    </>
  );
}
