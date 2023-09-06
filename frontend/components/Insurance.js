import { useForm } from 'react-hook-form';
import Checkbox from './Checkbox';
import InputText from './InputText';
import InputDate from './InputDate';

const Insurance = () => {

  return (
    <div>
        <h2>Insurance Information</h2>

        <InputText
            id="pryinsurance"
            label={"Primary Insurance: "}
            type='text'
        />
        <InputText
            id="secinsurance"
            label={"Secondary Insurance: "}
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

export default Insurance;
