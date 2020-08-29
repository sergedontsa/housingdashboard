import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Button, Divider} from "@material-ui/core";
import ProfilePicture from "../../Component/ProfilePicture/ProfilePicture";
import './MyAccountPage.js.style.scss'
import TextInputField from "../../Component/TextInput/TextInputField";

const useStyles = makeStyles((theme) => ({

    cardRoot:{
        maxWidth:345,
        marginTop:20
    },
    fieldRoot:{
        paddingTop: '90px'
    },
    buttonContainer:{
        display:'flex',
        paddingTop:40
   }
}))



const MyAccountPage = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={2} alignItems={'stretch'} >
                <Grid item xs={12} sm={3}>
                    <h1>My Account</h1>
                    <Divider/>
                <ProfilePicture/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <div className={classes.fieldRoot}>
                    <TextInputField label={'Username: '} type={'text'} value={'username@gmail.com'} disable={true}/>
                    <TextInputField label={'Password: '} type={'password'} value={'password'} disable={true}/>
                    <TextInputField label={'Role: '} type={'text'} value={'Role'} disable={true}/>
                </div>
                <div className={classes.buttonContainer}>
                  <Button variant={'outlined'} color={'primary'} disableElevation={true}>Edit Credential</Button>
                </div>
            </Grid>
            </Grid>
        </div>


    )
}
export default MyAccountPage;

