'use client';

import Checkbox from './Checkbox';
import InputText from './InputText';
import InputDate from './InputDate';

const Biodata = () => {

  return (
    <div>
        <h2>Patient Information</h2>
        <Checkbox question="Completed By: " options={['Patient', 'Other']} />
        <InputText
            id="patientname"
            label={"Patient Name: "}
            type='text'
            placeholder="Patient Name"
        />
        <InputText
            id="othername"
            label={"Other Name: "}
            type='text'
            placeholder="Other Name"
        />
        <InputText
            id="email"
            label={"Email Address: "}
            type='email'
            placeholder="example@domain.com"
        />
        <InputText
            id="street"
            label={"Street Address: "}
            type='street'
        />
        <InputText
            id="city"
            label={"City: "}
            type='city'
        />
        <InputText
            id="state"
            label={"State: "}
            type='state'
        />
        <InputText
            id="zip"
            label={"Zip: "}
            type='zip'
        />
        <Checkbox question="Gender: " options={['Male', 'Female', 'Other']} />
        <InputText
            id="ssn"
            label={"Social Security Number: "}
            type='text'
        />
        <InputDate
            id="dob"
            label={"DOB: "}
            type='dob'
        />
        <InputDate
            id="othername"
            label={"Date: "}
            type='email'
            placeholder="example@domain.com"
        />
        <InputText
            id="othername"
            label={"Email Address: "}
            type='email'
            placeholder="example@domain.com"
        />
        </div>
      
  );
};

export default Biodata;
