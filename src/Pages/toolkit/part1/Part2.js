import { useState } from "react";
import FormWrapper from "../components/FormWrapper";
import RadioOption from "../components/RadioOption";
import RadioWrapper from "../components/RadioWrapper";
import ResultComponent from "../components/ResultComponent";
import { part_2_1, part_2_1_func } from "./part2_data";

export default function Part2(props) {
    const [q_2_1, setq_2_1] = useState(0)
    const [q_2_2, setq_2_2] = useState(0)

    let q_2_3 = 0

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }

    const onChangeValue = (event) => {
        const name = event.target.name
        const value = event.target.value

        if (name === "2.1") {
            setq_2_1(value)
        }

        if (name === "2.2") {
            setq_2_2(value)
        }
    }

    const part_2_1_result = () => {
        if (q_2_1 !== 0 && q_2_2 !== 0) {
            q_2_3 = part_2_1_func(q_2_1, q_2_2).number

            let result = props.result
            result["part2"]["Appropriate Use Risk Score"]["result"] = part_2_1_func(q_2_1, q_2_2).name
            props.setResult(result)

            return (
                <ResultComponent 
                name="Appropriate Use Risk Score"
                result={part_2_1_func(q_2_1, q_2_2).name} 
                />
            )
        }
    }

    return (
        <>
            <FormWrapper handleSubmit={handleSubmit} title="Data Use Risk" description="Appropriate use in this section focuses on the question: should you use the data for the purposes of this algorithm? Step 2 focuses on can you use the data from the perspective of representativeness and accuracy">
                {part_2_1.map((question) => (
                    <RadioWrapper key={question.step} name={question.name} description={question.description} onChangeValue={onChangeValue}>
                        {question.options.map((option) => (
                            <RadioOption key={option.name} name={option.name} id={question.step} value={option.number} />
                        ))}
                    </RadioWrapper>
                ))}
                {part_2_1_result()}
            </FormWrapper>
        </>
    );
}
