import React,{useState,useEffect} from 'react';
import useStyles from './styles';
import Slot from '../components/Slot/Slot';
import {Grid} from '@material-ui/core';
import { formSubmit } from '../actions/stations';
import { getSlots } from '../actions/slots';
import { useDispatch, useSelector } from 'react-redux';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import swal from 'sweetalert';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

const themeLight = createTheme({
  palette: {
    background: {
      default: '#3f51b5',
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage:
            "url(https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png)"
        }
      }
    }
  }
});


const Bookscreen = () => {
  const slots = useSelector((state) => state.slots);
  const dispatch= useDispatch();
    const [slotsToShow, setSlotsToShow] = useState([]);
    const [formData, setFormData] = useState({ stationId: '',slot: ''});
    const classes = useStyles();

    // useEffect(() => {
    //   const {stationId} = formData;
    //   dispatch(getSlots(Number(stationId)));
    // },[dispatch,formData])

    const handleSlot = async (e) =>{
      const {stationId} = formData;
      console.log(Number(stationId))
      dispatch(getSlots(Number(stationId)));
      console.log({slots})
      setSlotsToShow(slots);
      console.log({slotsToShow})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log({formData});
        dispatch(formSubmit(formData));
    //     let response = await fetch("http://localhost:5000/stations/book", {
    //         method: "POST",
    //         headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formData),
    //  });
    // // setStatus("Submit");
    // let result = await response.json();
    // console.log(result);
    // // if(result.status=="Message Sent")swal("Contact Us",`${result.status}`,"success");
    // // else swal("Contact Us",`${result.status}`,"error");
     }
    return(
      <MuiThemeProvider theme={themeLight}>
      <CssBaseline />
       <Paper className={`${classes.root} ${classes.paper}`}>
        <form autoComplete="on" noValidate className={classes.form} >
          <Typography variant="h6"> Book a station</Typography>
          <TextField name="stationId" variant="outlined" value={formData.stationId} onChange={(e) => setFormData({...formData,stationId: e.target.value})}  label="Station Id" fullWidth />
          <TextField name="slot" variant="outlined" value={formData.slot} onChange={(e) => setFormData({...formData,slot: e.target.value})}  label="Slot" fullWidth />
          <Button className={classes.button} variant="contained" color="primary" size="large" type="submit" onClick={handleSubmit}>Submit</Button>
          <Button className={classes.button} variant="contained" color="secondary" size="large" onClick={handleSlot}>See booked slots</Button>
        </form>
       <Slot />
        </Paper>
      </MuiThemeProvider>
        )
}

export default Bookscreen;