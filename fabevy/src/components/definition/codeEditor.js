import { useContext } from "react";
import appContext from "../../context/context";
import './code.css';


function Code(){
    const details = useContext(appContext).details;
    return(
        <div className="code-container">
            {details.example}
        </div>
    )
}

export default Code;