import React, { Fragment } from 'react';
import { Form } from './Form';
import { Notes } from './Notes';

const Home=()=>{
    const notes=new Array(5).fill('').map((_,i)=>({
        id:i, title: `Note ${i+1}`
    }));

    return(
        <Fragment>
            <Form/>
            <hr/>
            <Notes notes={notes}/>
        </Fragment>
    )
}

export default Home;

