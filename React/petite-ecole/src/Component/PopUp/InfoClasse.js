import { FiX } from "react-icons/fi";

// let data = {
//         "classeName" : "B3 - Data IA",
//         "students" : [
//             {
//                 "name" : "Ethan"
//             },
//             {
//                 "name" : "Léa"
//             }
//         ]
//     }


export function InfoClass (props) {
    
    const dataClass = props.data


    if (!dataClass.students){
        return (
            <div className="popupContentComponent">
                Pas de classe
            </div>
        )
    }

    return (
            <div className="popupContentComponent">
                <div className="popUpHeader">
                    <h4>{dataClass.name}</h4>
                    <FiX onClick={props.closePopUp} className="reactIcon"/>
                </div>
                <p>Liste des élèves :</p>
                <ul class="list-group">
                    {dataClass.students.map((student) => {
                        return <li class="list-group-item">{student}</li>
                    })}
                    <li hidden={dataClass.students[0] !== undefined} class="list-group-item">Pas d'élèves dans cette classe</li>                   
                </ul>
                <div className="popUpButton" >
                    <button onClick={props.closePopUp} class="btn btn-light btn-sm">Fermer</button>
                </div>
            </div>

    )
}

