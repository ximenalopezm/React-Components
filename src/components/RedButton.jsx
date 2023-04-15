import React from "react";
import '../syles/RedButton.css';

function RedButton(props) {
    return (
        <>
        <button id="RedButton">
            <div className="Row">
                <div className="Col">
                    { props.RedButtonText }
                </div>
                <div className="Col">
                    { props.RedButtonIcon2 }
                </div>
            </div>
        </button>
        </>
    );
}

export default RedButton;