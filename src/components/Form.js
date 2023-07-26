import React,{useState,useContext} from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Form=()=>{

    const [value,setValue]=useState('');
    const alert=useContext(AlertContext);

    const submitHandler = event =>{
        event.preventDefault()

        if(value.trim()){
            alert.show('заметка создана', 'success');
            setValue('');
        }
        else 
        alert.show('введите название заметки')
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="form-group">

                <input type="text" 
                    className="form-control" 
                    id="formGroupExampleInput" 
                    placeholder="Введите название заметки"
                    value={value}
                    onChange={e=> setValue(e.target.value)}
                    />
            </div>

        </form>
    )
}  