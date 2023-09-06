import React, { useState } from 'react';

const InputText = ({ label, type, placeholder }) => {

  const [ input, setInput ] = useState("");

  const onChange = (event) => {
      const value = event.target.value;
      setInput(value)
  }

    return (
        <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-black'
        >
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          onChange={onChange}
        />
      </div>
    );
};

export default InputText;