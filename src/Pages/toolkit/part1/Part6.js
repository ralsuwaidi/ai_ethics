import { useState } from "react";
import FormWrapper from "../components/FormWrapper";
import RadioOption from "../components/RadioOption";
import RadioWrapper from "../components/RadioWrapper";
import ResultComponent from "../components/ResultComponent";
import { part_6_1, part_6_2, part_6_1_func, part_6_2_func, part_6_3_func, part_6_4_func } from "./part6_data";

export default function Part6(props) {
    const [q_6_1_1, setq_6_1_1] = useState(0)
    const [q_6_1_2, setq_6_1_2] = useState(0)
    const [q_6_2_1, setq_6_2_1] = useState(0)
    const [q_6_2_2, setq_6_2_2] = useState(0)

    let q_6_1_3 = 0
    let q_6_2_3 = 0
    let q_6_3 = 0

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }

    const onChangeValue = (event) => {
        const name = event.target.name
        const value = event.target.value

        if (name === "6.1.1") {
            setq_6_1_1(value)
        }

        if (name === "6.1.2") {
            setq_6_1_2(value)
        }

        if (name === "6.2.1") {
            setq_6_2_1(value)
        }

        if (name === "6.2.2") {
            setq_6_2_2(value)
        }
    }

    const part_6_1_result = () => {
        if (q_6_1_1 != 0 && q_6_1_2 != 0) {
            q_6_1_3 = part_6_1_func(q_6_1_1, q_6_1_2).number
            return (
                <ResultComponent 
                name="Inaccuracy Risk"
                result={part_6_1_func(q_6_1_1, q_6_1_2).name} 
                />
            )
        }
    }

    const part_6_2_result = () => {
        if (q_6_2_1 != 0 && q_6_2_2 != 0) {
            q_6_2_3 = part_6_2_func(q_6_2_1, q_6_2_2).number
            return (
                <ResultComponent 
                name="Training Risk"
                result={part_6_2_func(q_6_2_1, q_6_2_2).name} 
                />
            )
        }
    }

    const part_6_3_result = () => {
        if (q_6_2_3 != 0) {
            q_6_3 = part_6_3_func(props.q4_2, q_6_2_3).number
            return (
                <ResultComponent 
                name="Methodology Risk"
                result={part_6_3_func(props.q4_2, q_6_2_3).name} 
                />
            )
        }
    }

    const part_6_4_result = () => {
        if (q_6_3 != 0 && q_6_1_3 != 0) {
            console.log(q_6_3, q_6_1_3)
            return (

                <ResultComponent 
                name="Overall Technical Bias Risk"
                result={part_6_4_func(q_6_1_3, q_6_3).name} 
                />
              
            )
        }
    }

    return (
        <>
            <FormWrapper handleSubmit={handleSubmit} title="Test Title" description="test description">
                {part_6_1.map((question) => (
                    <RadioWrapper key={question.step} name={question.name} description={question.description} onChangeValue={onChangeValue}>
                        {question.options.map((option) => (
                            <RadioOption key={option.name} name={option.name} id={question.step} value={option.number} />
                        ))}
                    </RadioWrapper>
                ))}
                {part_6_1_result()}

                {part_6_2.map((question) => (
                    <RadioWrapper key={question.step} name={question.name} description={question.description} onChangeValue={onChangeValue}>
                        {question.options.map((option) => (
                            <RadioOption key={option.name} name={option.name} id={question.step} value={option.number} />
                        ))}
                    </RadioWrapper>
                ))}
                {part_6_2_result()}
                {part_6_3_result()}
                {part_6_4_result()}

            </FormWrapper>
        </>
    );
}
