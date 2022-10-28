import { useContext } from "react";
import appContext from "../../context/context";


function Result(){
    const details = useContext(appContext).details;

    return(
        <div>
            <div dangerouslySetInnerHTML={{__html: details.example}}></div>
        </div>
    )
}

export default Result;