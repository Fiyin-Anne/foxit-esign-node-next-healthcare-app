'use client'

import Link from 'next/link';
import Biodata from '../../components/Biodata'
import Insurance from '../../components/Insurance';
import Physician from '../../components/Physician';
import Checkbox from '../../components/Checkbox';
import InputText from '../../components/InputText';

import React, { useState } from 'react';

const Register = ({ name, age, weight, height }) =>  {

    const [isYesSelected, setIsYesSelected] = useState(false);

    const handleCheckboxChange = (isChecked) => {
      setIsYesSelected(isChecked);
    };

    return (
        <div>
            <Biodata/>
            <Checkbox 
                question="Does The Patient Have Insurance? "
                options={['Yes', 'No']}
                onCheckboxChange={handleCheckboxChange}
            />
            {isYesSelected && <Insurance />}
            <Physician />
            <h2>Health Concerns </h2>
            <p>Describe your main concerns (symptoms, diagnoses, duration, etc.) </p>
            <InputText
                id="description"
                label={"Health Description: "}
                type='text'
                placeholder="Describe your main concerns (symptoms, diagnoses, duration, etc.)"
            />
        </div>
        
    )

};

 
export default Register;