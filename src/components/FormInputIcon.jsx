import React from "react";
import { Form, InputGroup } from 'react-bootstrap';
import '../syles/FormInputIcon.css';


function FormInputIcon(props) {
    return (
        <>
            <div className="Container">
                <Form.Group>
                    <div className="Row">
                        <Form.Label id="FormInputTitle">
                            {props.inputNombre}
                            </Form.Label>
                    </div>
                    <div className="Row">
                        <div className="Col" id="InputBoxColumn">
                            <InputGroup>
                                <Form.Control
                                    id = 'label'
                                    placeholder = {props.inputInfo}
                                />
                            </InputGroup>
                        </div>
                        <div className="Col">
                            <button id = 'IconButton'>{props.inputIcon}</button>
                        </div>
                    </div>
                </Form.Group>
            </div>
        </>
    )
}

export default FormInputIcon;