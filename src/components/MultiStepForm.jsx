'use client'
import React, { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'


const MultiStepForm = () => {

    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({})

    const nextStep = (data) => {
        setFormData({ ...formData, ...data })
        setStep(step + 1)
    }

    const prevStep = () => setStep(step - 1)

    const submitForm = (data) => {
        const finalData = { ...formData, ...data }
        console.log("final data:", finalData)
        alert("form submitted! check console.")
    }

    return (
        <div className=' p-8 rounded-xl shadow w-full max-w-md bg-white'>
            {step === 1 && <Step1 nextStep={nextStep} defaultValues={formData} />}
            {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} defaultValues={formData} />}
            {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} submitForm={submitForm} defaultValues={formData} />}
        </div>
    )
}

export default MultiStepForm
