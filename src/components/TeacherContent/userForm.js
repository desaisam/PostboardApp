import React, {useState} from 'react';
import {  makeStyles } from "@material-ui/core";
export function useForm(initialFieldValues) {
    
    const [values, setValues] = useState(initialFieldValues);
    const handleInputChange = e=> {
        const { type, value } = e.target
        setValues({
            ...values,
            [type]: value
        })   
    }
    return {
        values,
        setValues,
        handleInputChange
    }

}

const useStyles = makeStyles(theme => ( {
    root : {
     '& .MuiFormControl-root' : {
         width : '80%',
         margin : theme.spacing(1)
     }    
    }
}))
export  function Form(props) {
    
    const classes = useStyles();
    return (
        <form className = {classes.root}  >
            {props.children}
        </form>
    )
}
