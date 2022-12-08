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
import { PaperClipIcon } from '@heroicons/react/20/solid'

const default_result = {
    "part1": {
        "Scope Estimate": {
            description: "",
            result: "",
        },
        "Overall Impact Risk": {
            description: "",
            result: "",
        },
    },
    "part2": {
        "Appropriate Use Risk Score": {
            description: "",
            result: "",
        },
    },
    "part3": {
        "Assign Accessibility Score": {
            description: "",
            result: "",
        },
        "Assign Accountability Risk": {
            description: "",
            result: "",
        },
    },
    "part4": {
        "Historic Bias Risk": {
            description: "",
            result: "",
        },
    },
    "part6": {
        "Inaccuracy Risk": {
            description: "",
            result: "",
        },
        "Training Risk": {
            description: "",
            result: "",
        },
        "Methodology Risk": {
            description: "",
            result: "",
        },
        "Overall Technical Bias Risk": {
            description: "",
            result: "",
        },
    },

}


export default function Toolkit() {
    const [q4_2, setq4_2] = useState(3)
    const [result, setResult] = useState(default_result)
    const [submitted, setSubmitted] = useState(false)
    const reportTemplateRef = useRef(null);
    const [small, setSmall] = useState(true)

    const handleGeneratePdf = () => {
        makeSmall()
        const doc = new jsPDF({
            format: 'a4',
            unit: 'pt',
        });
        // Adding the fonts.
        doc.setFont('Inter-Regular', 'normal');

        doc.html(reportTemplateRef.current, {
            async callback(doc) {
                await doc.save('ai_ethics_report');
                setSmall(false)
            },
        });
    };

    function makeSmall(){
        setSmall(true)

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
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 max-w-lg mx-auto">
                        <dt className="text-sm font-medium text-gray-500">Report</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2 w-0 flex-1 truncate">report.pdf</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a onClick={handleGeneratePdf} className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Download
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>
                </PageWrapper>
            </>
        )
    }




}
