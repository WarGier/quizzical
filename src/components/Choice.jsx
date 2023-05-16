import React from "react";

function Choice({ answer, handleSelect }) {
    return (
        <div
            onClick={handleSelect}
            className='border-2 border-pink-400 hover:cursor-pointer mb-2 py-1.5 px-2 w-1/4 hover:bg-pink-400'
        >
            <h4>{answer}</h4>
        </div>
    );
}

export default Choice;
