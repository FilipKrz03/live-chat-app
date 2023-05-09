import {useState} from "react";

const useInput = (validateFn) => {

    const [inputValue , setInputValue] = useState('');
    const[isTouched , setIsTouched] = useState(false);
    const isValid = validateFn(inputValue);
    let hasError = isTouched && !isValid;

    const blurHandler = () => {
        setIsTouched(true);
    }

    const changeHandler = event => {
        setInputValue(event.target.value);
    }

    const reset = () => {
        setIsTouched(false)
        setInputValue('');
    }

    return {
        inputValue ,  
        isValid , 
        hasError ,
        blurHandler , 
        changeHandler , 
        reset , 
    }

}

export default useInput;