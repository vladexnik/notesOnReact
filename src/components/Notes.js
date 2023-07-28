import React from "react";
import {TransitionGroup,CSSTransition} from 'react-transition-group'


export const Notes=({notes,onRemove})=>{

    return(
        <TransitionGroup component="ul" className="list-group">         
                {notes.map(note=>(
                    <CSSTransition key={note.id}
                    classNames={'node'}
                    timeout={800}>
                        <li className="list-group-item note"
                            key={note.id}>
                            <div >
                                <strong>{note.title}</strong>
                                <small> {note.date()}  </small>
                            </div>
                            <button onClick={()=> onRemove(note.id)} type="button" className="btn btn-danger btn-sm">&times; </button> 
                        </li>
                    </CSSTransition>
                ))}        
        </TransitionGroup>
        
    )
}