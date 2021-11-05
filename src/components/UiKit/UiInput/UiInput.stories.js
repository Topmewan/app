import UiInput from "./UiInput";
import {useState} from "react";

export default {
    title:'Ui-Kit/ UiInput',
    component: UiInput
}

const Template = (arg) => {
    const [value,setValue] = useState('');

    const handleChange = value => {
        setValue(value);
    }
    return (
        <UiInput
            {...arg}
            value={value}
            handleChange={handleChange}
        />
    )
}

const props = {
    type:'',
    value: '',
    handleChange: () => console.log('Input'),
    placeholder: 'Placeholder',
    classes:'',
}

export const Default = Template.bind({});
Default.args = {
    ...props
}

