import { useState } from "react";
import PageWrapper from "./components/PageWrapper";
import Part1 from "./part1/Part1";
import Part2 from "./part1/Part2";
import Part3 from "./part1/Part3";
import Part4 from "./part1/Part4";
import Part5 from "./part1/Part5";
import Part6 from "./part1/Part6";

export default function Toolkit() {
    const [q4_2, setq4_2] = useState(0)



    return (
        <>
            <PageWrapper>
                <Part1 />
                <Part2 />
                <Part3 />
                <Part4 setScore={setq4_2} />
                <Part5 />
                <Part6 q4_2={q4_2} />
            </PageWrapper>
        </>
    );
}
