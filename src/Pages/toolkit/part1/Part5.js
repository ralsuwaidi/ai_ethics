import { useState } from "react";
import FormWrapper from "../components/FormWrapper";
import RadioOption from "../components/RadioOption";
import RadioWrapper from "../components/RadioWrapper";
import { part_5 } from "./part5_data";

export default function Part5() {
    const [q_5, setq_5] = useState(0)


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }

    const onChangeValue = (event) => {
        const name = event.target.name
        const value = event.target.value

        if (name === "5") {
            setq_5(value)
        }
    }




    return (
        <>
            <FormWrapper handleSubmit={handleSubmit} title="Risk of Historic Bias" description="Understanding that bias will exist at the forefront of this conversation will benefit you as well as your algorithm’s consumers. This will allow you to direct your energy toward ensuring these biases are minimized.">
                {part_5.map((question) => (
                    <RadioWrapper key={question.step} name={question.name} description={question.description} onChangeValue={onChangeValue}>
                        {question.options.map((option) => (
                            <RadioOption key={option.name} name={option.name} id={question.step} value={option.number} />
                        ))}
                    </RadioWrapper>
                ))}
            </FormWrapper>
        </>
    );
}
