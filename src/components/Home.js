import React, { Fragment,useContext, useEffect } from 'react';
import { Form } from './Form';
import { Notes } from './Notes';
import { FirebaseContext } from '../context/alert/firebase/firebaseContext';
import { Loading } from './Loading';

const Home=()=>{
    // const notes=new Array(5).fill('').map((_,i)=>({
    //     id:i, title: `Note ${i+1}`
    // }));
 
    const {loading, notes, fetchNotes,removeNote}=useContext(FirebaseContext);

    useEffect(()=>{
        fetchNotes()
    },[])

    return(
        <Fragment>
            <Form/>
            <hr/>
            { loading ? <Loading/> : 
            <Notes notes={notes} onRemove={removeNote}/> }       
        </Fragment>
    )
}
export default Home;

