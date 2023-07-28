import React,{useContext} from "react";
import { AlertContext } from "../context/alert/alertContext";
import {CSSTransition} from 'react-transition-group';

export const Alert=()=>{

    const {alert, hide}=useContext(AlertContext);

    if (!alert.visible){
        return null;
    }
    return(
        <CSSTransition
        in={alert.visible}
        timeout={{
            enter: 1000,
            exit: 350
        }}
        classNames={'alert'}
        mountOnEnter
        unmountOnExit>
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`} role="alert">
                <strong>Внимание!</strong>{alert.text} 
                <button onClick={hide} type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}