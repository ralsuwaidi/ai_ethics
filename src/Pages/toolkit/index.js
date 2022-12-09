import React, { useRef, useState } from "react";
import PageWrapper from "./components/PageWrapper";
import Part1 from "./part1/Part1";
import Part2 from "./part1/Part2";
import Part3 from "./part1/Part3";
import Part4 from "./part1/Part4";
import Part5 from "./part1/Part5";
import Part6 from "./part1/Part6";
import Result from "./result";
import jsPDF from 'jspdf';
import { default_result } from "./data";
import { DownloadButton } from "./components/DownloadButton";
import Login from "../login";




export default function Toolkit() {
    const [q4_2, setq4_2] = useState(3)
    const [result, setResult] = useState(default_result)
    const [submitted, setSubmitted] = useState(false)
    const reportTemplateRef = useRef(null);
    const [user, setUser] = useState(null)

    const handleGeneratePdf = () => {
        const doc = new jsPDF({
            format: 'a4',
            unit: 'pt',
        });
        // Adding the fonts.
        doc.setFont('Inter-Regular', 'normal');

        doc.html(reportTemplateRef.current, {
            async callback(doc) {
                await doc.save('ai_ethics_report');
            },
        });
    };

    if (user == null){
        return (
            <Login setUser={setUser} />
        )
    }

    if (submitted == false) {
        return (
            <>
                <PageWrapper>
                    <Part1 result={result} setResult={setResult} />
                    <Part2 result={result} setResult={setResult} />
                    <Part3 result={result} setResult={setResult} />
                    <Part4 setScore={setq4_2} result={result} setResult={setResult} />
                    <Part5 result={result} setResult={setResult} />
                    <Part6 q4_2={q4_2} result={result} setResult={setResult} />
                    <div className="px-4 py-3 text-right sm:px-6">
                        <button
                            type="submit"
                            onClick={() => (setSubmitted(true))}
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Submit
                        </button>
                    </div>
                </PageWrapper>
            </>
        );
    } else {
        return (
            <>

                <PageWrapper>
                    {/* <button className="button" onClick={handleGeneratePdf}>
                            Generate PDF
                        </button> */}
                    <div className="max-w-lg mx-auto" ref={reportTemplateRef}>
                        <Result result={result} onDownload={handleGeneratePdf} />
                    </div>
                    {DownloadButton(handleGeneratePdf)}
                </PageWrapper>
            </>
        )
    }




}

