import React, { useState } from 'react';

const Checkbox = ({ question, options, onCheckboxChange }) => {
    const initialState = {};

    options.forEach(option => {
        initialState[option] = false;
    });

    const [checkboxes, setCheckboxes] = useState(initialState);

    let updatedCheckboxes;
    const handleCheckboxChange = (option) => {
        updatedCheckboxes = { ...checkboxes };
        updatedCheckboxes[option] = !updatedCheckboxes[option];

        for (const key in updatedCheckboxes) {

            if (key !== option) {
                updatedCheckboxes[key] = false;
            }
        }
        setCheckboxes(updatedCheckboxes);

        if (onCheckboxChange) {
            onCheckboxChange(updatedCheckboxes['Yes']);
        }
    };

    return (
        <div className="checkbox-wrapper">
            {question}
            {options.map((option, index) => (
                <label key={index}>
                    {option}
                    <input
                        type="radio" 
                        name={question} 
                        value={option}
                        checked={checkboxes[option]}
                        onChange={() => handleCheckboxChange(option)}
                    />  {'   '}
                </label>
            ))}
        </div>
    );
};

export default Checkbox;