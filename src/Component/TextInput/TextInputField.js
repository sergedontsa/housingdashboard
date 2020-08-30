import React from 'react';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

const useStyles= makeStyles(() => ({
    root:{
        margin:6
    }
}))
const TextInputField = ({label, type, value, disable, variant}) => {
    const classes = useStyles()
    return (

            <TextField variant={variant} className={classes.root} id={'standard-basic'} label={label} type={type} fullWidth={true} defaultValue={value}
                       disabled={disable}
                       />

    );

}

export default TextInputField;