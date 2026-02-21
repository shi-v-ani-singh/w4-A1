'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

const Step2 = ({nextStep,prevStep,defaultValues}) => {

    const {register,handleSubmit,watch,formState:{errors}} = useForm({defaultValues})
    // const { register, handleSubmit, watch ,formState: { errors } } = useForm({ values: defaultValues })
    const password = watch("password")

    return (
        <form onSubmit={handleSubmit(nextStep)} className='flex flex-col gap-6 rounded-xl shadow bg-white p-5 border'>
            <h2 className="text-xl font-bold text-gray-600 text-center">Step 2: Account</h2>

            <input
                placeholder="Username"
                {...register("username", { required: true, minLength: 5 })}
                className="border p-2 w-full text-black"
            />
            {errors.username && <p className="text-red-500">Min 5 chars</p>}

            <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true, minLength: 8 })}
                className="border p-2 w-full text-black"
            />

            <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                    validate: (value) => value === password || "Passwords do not match"
                })}
                className="border p-2 w-full text-black"
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

            <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="border px-4 py-2 bg-blue-500">
                    Back
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Next
                </button>
            </div>
        </form>
    )
}

export default Step2
