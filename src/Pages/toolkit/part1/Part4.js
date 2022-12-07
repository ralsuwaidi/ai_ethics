import { useState } from "react";
import CheckboxOption from "../components/CheckboxOption";
import FormWrapper from "../components/FormWrapper";
import RadioWrapper from "../components/RadioWrapper";
import { part4_func, part_4 } from "./part4_data";



export default function Part4(props) {
    const [q1, setq1] = useState(false)
    const [q2, setq2] = useState(false)
    const [q3, setq3] = useState(false)
    const [q4, setq4] = useState(false)
    const [q5, setq5] = useState(false)
    const [q6, setq6] = useState(false)
    const [q7, setq7] = useState(false)
    const [q8, setq8] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault();
        props.setScore(part4_func(getScore()).number)
    }

    const onChangeValue = (event) => {
        const name = event.target.name
        const checked = event.target.checked

        if (name === "q1") {
            setq1(checked)
        }

        if (name === "q2") {
            setq2(checked)
        }

        if (name === "q3") {
            setq3(checked)
        }

        if (name === "q4") {
            setq4(checked)
        }

        if (name === "q5") {
            setq5(checked)
        }

        if (name === "q6") {
            setq6(checked)
        }

        if (name === "q7") {
            setq7(checked)
        }

        if (name === "q8") {
            setq8(checked)
        }

    }

    function getScore(){
        let score = 0
        if (q1) score++;
        if (q2) score++;
        if (q3) score++;
        if (q4) score++;
        if (q5) score++;
        if (q6) score++;
        if (q7) score++;
        if (q8) score++;
        return score
    }



    return (
        <>
            <FormWrapper handleSubmit={handleSubmit} title="Test Title" description="test description">
                {part_4.map((question) => (
                    <RadioWrapper key={question.step} name={question.name} description={question.description} onChangeValue={onChangeValue}>
                        {question.options.map((option) => (
                            <CheckboxOption key={option.name} name={option.name} id={option.id} value={option.number} />
                        ))}
                    </RadioWrapper>
                ))}
                {part4_func(getScore()).name}
            </FormWrapper>
        </>
    );
}
