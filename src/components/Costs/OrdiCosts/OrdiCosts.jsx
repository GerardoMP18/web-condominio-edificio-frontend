import React from "react";
import { FeatureTitle} from "./someStyle";
import { Grid, TextField, Box, Card, CardContent, Button} from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';

export function ExtraCosts(){
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
  'Todos los pagadores activos',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  

    return (
      <div >

      <Box my={2} >

        <Card>
          <CardContent>

            <FeatureTitle>Asignar gasto ordinario</FeatureTitle>
            <Grid container direction='row' spacing={3}>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>

                <TextField
                  id="concept"
                  error={false}
                  label='concept'
                  type='text'
                  margin='dense'
                  fullWidth
                  variant="outlined"
                  
                  
                />
                <InputLabel id="demo-multiple-name-label">Concepto</InputLabel>
              </Grid>

              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>

          
              </Grid>

              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    fullWidth
                    onChange={handleChange}
                    input={<OutlinedInput label="payers" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                  <InputLabel id="demo-multiple-name-label">Selección de pagadores</InputLabel>
              </Grid>
            
              
            </Grid>

            <br/>
            <br/>
            
            <Button variant="outlined">Agregar</Button>
          </CardContent>
        </Card>
      </Box>
    
    </div>
    );
};

export default ExtraCosts; 