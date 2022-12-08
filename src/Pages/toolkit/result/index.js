

export default function Result(props) {

    return (
        <div className="overflow-hidden bg-white sm:rounded-lg">

            <section class="bg-white dark:bg-gray-900">
                


                <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{props.result.part1['Overall Impact Risk'].result}</dt>
                            <dd class="font-light text-gray-500 dark:text-gray-400">Overall Impact Risk</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{props.result.part6['Overall Technical Bias Risk'].result}</dt>
                            <dd class="font-light text-gray-500 dark:text-gray-400">Overall Technical Bias Risk</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{props.result.part6['Training Risk'].result}</dt>
                            <dd class="font-light text-gray-500 dark:text-gray-400">Training Risk </dd>
                        </div>
                    </dl>
                </div>
            </section>

            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Detailed Summary</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Detailed Summary of score</p>
            </div>
            <div className="border-t border-gray-200">
                <dl>

                    {Object.keys(props.result.part1).map((key, index) => {
                        return (
                            <>
                                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">{key}</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{props.result.part1[key].result}</dd>
                                </div>
                            </>
                        );
                    })}


                    {Object.keys(props.result.part2).map((key, index) => {
                        return (
                            <>
                                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">{key}</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{props.result.part2[key].result}</dd>
                                </div>
                            </>
                        );
                    })}

                    {Object.keys(props.result.part3).map((key, index) => {
                        return (
                            <>
                                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">{key}</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{props.result.part3[key].result}</dd>
                                </div>
                            </>
                        );
                    })}

                    {Object.keys(props.result.part6).map((key, index) => {
                        return (
                            <>
                                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">{key}</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{props.result.part6[key].result}</dd>
                                </div>
                            </>
                        );
                    })}




                </dl>
            </div>
        </div>
    )
}
