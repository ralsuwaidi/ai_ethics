import { useState } from "react";
import CheckboxOption from "../components/CheckboxOption";
import FormWrapper from "../components/FormWrapper";
import RadioWrapper from "../components/RadioWrapper";
import ResultComponent from "../components/ResultComponent";
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
        // props.setScore(part4_func(getScore()).number)

        // let result = props.result
        // result["part4"]["Historic Bias Risk"]["result"] = part4_func(getScore()).name
        // props.setResult(result)
    }

    const onChangeValue = (event) => {
        const name = event.target.name
        const checked = event.target.checked

        let q1v = q1
        let q2v = q2
        let q3v = q3
        let q4v = q4
        let q5v = q5
        let q6v = q6
        let q7v = q7
        let q8v = q8

        if (name === "q1") {
            setq1(checked)
            q1v = checked
        }

        if (name === "q2") {
            setq2(checked)
            q2v = checked

            
        }

        if (name === "q3") {
            setq3(checked)
            q3v = checked

        }

        if (name === "q4") {
            setq4(checked)
            q4v = checked

        }

        if (name === "q5") {
            setq5(checked)
            q5v = checked

        }

        if (name === "q6") {
            setq6(checked)
            q6v = checked

        }

        if (name === "q7") {
            setq7(checked)
            q7v = checked

        }

        if (name === "q8") {
            setq8(checked)
            q8v = checked

        }

        const score = getScore(q1v, q2v, q3v, q4v, q5v, q6v, q7v, q8v)
        props.setScore(part4_func(score).number)

        let result = props.result
        result["part4"]["Historic Bias Risk"]["result"] = part4_func(score).name
        props.setResult(result)

    }

    function getScore(q1, q2, q3, q4, q5, q6, q7, q8){
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
            <FormWrapper handleSubmit={handleSubmit} title="Third Party Methodology Risk" description="When you are procuring an algorithm or adapting an algorithm created elsewhere, you need to assess potential risk in the creation and maintenance of the algorithm.">
                {part_4.map((question) => (
                    <RadioWrapper key={question.step} name={question.name} description={question.description} onChangeValue={onChangeValue}>
                        {question.options.map((option) => (
                            <CheckboxOption key={option.name} name={option.name} id={option.id} value={option.number} />
                        ))}
                    </RadioWrapper>
                ))}

                <ResultComponent 
                name="Historic Bias Risk"
                result={part4_func(getScore(q1, q2, q3, q4, q5, q6, q7, q8)).name} 
                />
            </FormWrapper>
        </>
    );
}
