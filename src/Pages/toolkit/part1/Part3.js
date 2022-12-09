import { useState } from "react";
import FormWrapper from "../components/FormWrapper";
import RadioOption from "../components/RadioOption";
import RadioWrapper from "../components/RadioWrapper";
import ResultComponent from "../components/ResultComponent";
import { part_3_1, part_3_2  ,part_3_2_func, part_3_3_func } from "./part3_data";

export default function Part3(props) {
    const [q_3_1, setq_3_1] = useState(0)
    const [q_3_2_1, setq_3_2_1] = useState(0)
    const [q_3_2_2, setq_3_2_2] = useState(0)

    let q_3_2_3 = 0

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }

    const onChangeValue = (event) => {
        const name = event.target.name
        const value = event.target.value

        if (name === "3.1") {
            setq_3_1(value)
        }

        if (name === "3.2.1") {
            setq_3_2_1(value)
        }

        if (name === "3.2.2") {
            setq_3_2_2(value)
        }
    }

    const part_3_2_result = () => {
        if (q_3_2_2 !== 0 && q_3_2_1 !== 0) {
            q_3_2_3 = part_3_2_func(q_3_2_1, q_3_2_2).number

            let result = props.result
            result["part3"]["Assign Accessibility Score"]["result"] = part_3_2_func(q_3_2_1, q_3_2_2).name
            props.setResult(result)

            return (
                <ResultComponent 
                name="Assign Accessibility Score"
                result={part_3_2_func(q_3_2_1, q_3_2_2).name} 
                />
            )
        }
    }

    const part_3_3_result = () => {
        if (q_3_2_3 !== 0 && q_3_1 !== 0) {

            let result = props.result
            result["part3"]["Assign Accountability Risk"]["result"] = part_3_3_func(q_3_2_3, q_3_1).name
            props.setResult(result)

            return (
                <ResultComponent 
                name="Assign Accountability Risk"
                result={part_3_3_func(q_3_2_3, q_3_1).name} 
                />
            )
        }
    }

    return (
        <>
            <FormWrapper handleSubmit={handleSubmit} title="Assess Accountability Risk" description="Accountability in the use of algorithms can be addressed by exploring the following questions: Who or what made what decisions? How were those decisions made? and so on...">
                {part_3_1.map((question) => (
                    <RadioWrapper key={question.step} name={question.name} description={question.description} onChangeValue={onChangeValue}>
                        {question.options.map((option) => (
                            <RadioOption key={option.name} name={option.name} id={question.step} value={option.number} />
                        ))}
                    </RadioWrapper>
                ))}

                {part_3_2.map((question) => (
                    <RadioWrapper key={question.step} name={question.name} description={question.description} onChangeValue={onChangeValue}>
                        {question.options.map((option) => (
                            <RadioOption key={option.name} name={option.name} id={question.step} value={option.number} />
                            ))}
                    </RadioWrapper>
                ))}
                {part_3_2_result()}
                {part_3_3_result()}

            </FormWrapper>
        </>
    );
}
