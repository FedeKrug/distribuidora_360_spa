import React, { useState } from 'react'
import { setItem } from '../utils/localStorage';


export type FormStateType = {
    name?: string,
    phone?: string,
    message?: string
}


export const useForm = (initialForm: any) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm);
        setItem('root', initialForm);
    }

    return {
        ...formState,
        formState,
        onResetForm,
        onInputChange
    }
}
