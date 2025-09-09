const Accordian = () => {
    return (
        <div className="hs-accordion-group mx-auto max-w-5xl">

            <div className="hs-accordion-to-destroy hs-accordion hs-accordion-active:border-gray-200 border border-transparent rounded-xl" id="hs-destroy-heading-one">
                <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500" aria-expanded="false" aria-controls="hs-destroy-collapse-one">
                    What is Proctology?
                    <svg className="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"></path>
                    </svg>
                </button>
                <div id="hs-destroy-collapse-one" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                    <div className="pb-4 px-5">
                        <p className="text-gray-800">
                            A surgical subspecialty dealing with the rectum, anus, and colon.
                        </p>
                    </div>
                </div>
            </div>


            <div className="hs-accordion-to-destroy hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl" id="hs-destroy-heading-two">
                <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500" aria-expanded="false" aria-controls="hs-destroy-collapse-two">
                    What diseases does a proctologist treat?
                    <svg className="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"></path>
                    </svg>
                </button>
                <div id="hs-destroy-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                    <div className="pb-4 px-5">
                        <p className="text-gray-800">
                            Piles, fissure, fistula, abscesses, pilonidal sinus, etc.
                        </p>
                    </div>
                </div>
            </div>


            <div className="hs-accordion-to-destroy hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl" id="hs-destroy-heading-three">
                <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500" aria-expanded="false" aria-controls="hs-destroy-collapse-three">
                    Is laser surgery permanent?
                    <svg className="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"></path>
                    </svg>
                </button>
                <div id="hs-destroy-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                    <div className="pb-4 px-5">
                        <p className="text-gray-800">
                            Laser reduces recurrence and offers faster recovery for many patients.
                        </p>
                    </div>
                </div>
            </div>


            <div className="hs-accordion-to-destroy hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl" id="hs-destroy-heading-four">
                <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500" aria-expanded="false" aria-controls="hs-destroy-collapse-four">
                    Can women consult a proctologist?
                    <svg className="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"></path>
                    </svg>
                </button>
                <div id="hs-destroy-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                    <div className="pb-4 px-5">
                        <p className="text-gray-800">
                            Yes, our female specialists and privacy-first approach ensure comfort.
                        </p>
                    </div>
                </div>
            </div>


            <div className="hs-accordion-to-destroy hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl" id="hs-destroy-heading-five">
                <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500" aria-expanded="false" aria-controls="hs-destroy-collapse-five">
                    Do you offer insurance coverage?
                    <svg className="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"></path>
                    </svg>
                </button>
                <div id="hs-destroy-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                    <div className="pb-4 px-5">
                        <p className="text-gray-800">
                            Yes, complete assistance from documents to claims.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Accordian;