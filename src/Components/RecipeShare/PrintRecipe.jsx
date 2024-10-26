import React from "react";
import {FaPrint} from "react-icons/fa"
import './PrintRecipe.css'

const PrintRecipe = () => {
    const handlePrint = () => {
        window.print();
    }

    return (
        <button onClick={handlePrint} className = "print-button">
            <FaPrint className="print-icon"/>  Skriv ut
        </button>
    )
}
export default PrintRecipe;