import React,{useState,useContext} from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/alert/firebase/firebaseContext";

export const Form=()=>{

    const [value,setValue]=useState('');
    const alert=useContext(AlertContext);
    const firebse=useContext(FirebaseContext)


    const submitHandler = event =>{
        event.preventDefault()

        if(value.trim()){
            firebse.addNote(value.trim()).then(()=>{
                alert.show('заметка была создана','success')
            }).catch(()=>{
                alert.show('что то пошло не так','danger')
            })
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
                    
                    placeholder="Введите название заметки"
                    value={value}
                    onChange={e=> setValue(e.target.value)}
                    />
            </div>

        </form>
    )
}  