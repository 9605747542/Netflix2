import React,{useState}  from "react";
import ReactDOM from 'react-dom/client'
import Navbar from "./Components/NavBar/Navbar";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
import { ORGINALS,ACTIONS } from './urls.js';

const Index=()=>{
   
    return(
        <div>
           <Navbar/>
           <Banner/>
           <Rowpost title='Netflix Orginals' url={ORGINALS}/>
           <Rowpost title='Actions' isSmall url={ACTIONS}/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Index/>);