import React,{useState} from "react";

const Fromulario = ({newLocation})=>{
    const [ciudad,setCiudad] = useState(""); //estabrecer laciudad a buscar
    const onSubmit = (e)=>{
        e.preventDefault();  // evitamosque recarge la pagina 
        console.log({ciudad});
        if(ciudad === "" || !ciudad )return;

        newLocation(ciudad);
    } 

    return(

        <div className="container">
                <form onSubmit = {onSubmit}>
                    <div className="input-group mb-3 mx-auto">
                        <input type="text" className="form-control" placeholder="ciudad" onChange={(e)=>setCiudad(e.target.value)}/>
                        <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
                    </div>
                </form>
        </div>
    );
};

export default Fromulario;