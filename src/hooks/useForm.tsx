import { useState } from "react"

type FormType = {

}

const initialState: FormType = {};

export const useForm = () => {
    const [formState, setFormState] = useState<FormType>(initialState)

    const onChangeInput = () => {

    }

    const onSubmit = () => {

    }



    const onResetForm = () => {
        setFormState(initialState);
    }
    return {
        formState,
        onResetForm,
        onChangeInput,
    }
}
