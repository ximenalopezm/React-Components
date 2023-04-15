import FormInputIcon from './FormInputIcon';
import RedButton from './RedButton';
import { MdCalendarMonth, MdLocationPin, MdExpandMore, MdAdd } from "react-icons/md";
import '../syles/FormSolicit.css';

function FormSolicit() {
    const calendar = <MdCalendarMonth />
    const location = <MdLocationPin />
    const expand = <MdExpandMore />
    const plus = <MdAdd />
    return (
        <>
            <div className='Container'>
                <div className='Row'>
                    <div className='col-md-6 col-sm-12' id="InputContainers">
                        <FormInputIcon inputNombre="Fecha Inicio" inputInfo="" inputIcon={calendar} />
                    </div>
                    <div className='col-md-6 col-sm-12' id="InputContainers">
                        <FormInputIcon inputNombre="Fecha Termino" inputInfo="" inputIcon={calendar} />
                    </div>
                </div>
                <div className='Row'>
                    <div className='col-md-6 col-sm-12' id="InputContainers">
                        <FormInputIcon inputNombre="Destino" inputInfo="" inputIcon={location} />
                    </div>
                    <div className='col-md-6 col-sm-12' id="InputContainers">
                        <FormInputIcon inputNombre="Proyecto" inputInfo="" inputIcon={expand} />
                    </div>
                </div>
                <div className='Row'>
                    <div className='col-md-3 col-sm-12' id="InputContainers">
                        <RedButton RedButtonIcon1= "" RedButtonText= "AGREGAR GASTO" RedButtonIcon2= {plus} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormSolicit;