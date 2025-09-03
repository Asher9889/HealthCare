import DiseasesInput from "../diseases/DiseasesInput";
import { Checkbox, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Textarea } from "../ui";




const AppointForm = () => {
    return (
        <>
            {/* <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal">
                Open modal
            </button> */}

            <div id="hs-slide-down-animation-modal" className="hs-overlay hidden size-full fixed top-[5%] start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" aria-labelledby="hs-slide-down-animation-modal-label">
                <div className="hs-overlay-animation-target hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto">
                    <div className="flex flex-col bg-white  shadow-2xs rounded-xl pointer-events-auto   dark:shadow-neutral-700/70">
                        <div className="flex justify-between items-center py-3 px-4 bg-(--primary-bg-color) rounded-t-lg">

                            <div className="flex flex-col justify-center items-center gap-2">
                                <h3 id="hs-slide-down-animation-modal-label" className="font-semibold text-2xl">
                                    Book Your FREE Consultation
                                </h3>
                                <p className="text-sm">Get expert advice from experienced doctors. 100% confidential and secure.</p>
                            </div>


                            <button type="button" className="size-6 inline-flex utral-600" aria-label="Close" data-hs-overlay="#hs-slide-down-animation-modal">
                                <span className="sr-only">Close</span>
                                <svg className="shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto space-y-4 text-gray-600">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <Label htmlFor="fullname">Full Name <span className="text-red-500">*</span></Label>
                                <Input id="fullname" placeholder="Enter your full name" />
                            </div>

                            {/* Mobile Number */}
                            <div className="space-y-2">
                                <Label itemType="number" htmlFor="mobile">Mobile Number <span className="text-red-500">*</span></Label>
                                <Input id="mobile" type="tel" placeholder="Enter your mobile number" />
                            </div>

                            {/* WhatsApp Checkbox */}
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="whatsapp"
                                    className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                                />
                                <Label htmlFor="whatsapp" className="text-sm">
                                    Yes, you can also contact me via WhatsApp
                                </Label>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="Enter your email" />
                            </div>

                            {/* Health Concern */}
                            <div className="space-y-2">
                                <Label>Select Your Health Concern <span className="text-red-500">*</span></Label>

                                <div className="relative">
                                    <DiseasesInput text="Select concern" />
                                </div>
                            </div>

                            {/* Condition */}
                            <div className="space-y-2">
                                <Label htmlFor="condition">Treatment/Condition</Label>
                                <Textarea id="condition" placeholder="e.g. Piles, Hernia, Kidney Stones" className="resize-none" />
                            </div>
                        </div>

                        <div className="flex justify-end items-center py-4 gap-x-2 py-2 px-4 border-t border-gray-200 dark:border-neutral-700">
                            <button type="button" className="mx-auto px-8 py-3 rounded-md font-semibold inline-flex items-center gap-x-2 text-md   bg-(--orange-button-color) text-white  disabled:opacity-50 disabled:pointer-events-none">
                                Book free appointment
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointForm;