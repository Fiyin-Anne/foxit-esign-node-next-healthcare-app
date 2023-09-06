import Checkbox from './Checkbox';
import InputText from './InputText';
import InputDate from './InputDate';

const Physician = () => {

  return (
    <div>
        <h2>Physician Information</h2>
        <InputText
            id="pry-physician"
            label={"Primary Care Physician: "}
            type='text'
        />
        <InputText
            id="phys-address"
            label={"Address: "}
            type='text'
        />
        <InputText
            id="pryid"
            label={"ID Number: "}
            type='text'
        />
        <InputText
            id="secid"
            label={"ID Number: "}
            type='text'
        /> 
    </div>
  );
};

export default Physician;
