'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

const Step1 = ({nextStep,defaultValues}) => {

    // const { register, handleSubmit, formState: { errors } } = useForm({defaultValues})
    const { register, handleSubmit, formState: { errors } } = useForm({ values: defaultValues })

    return (
        <form
            onSubmit={handleSubmit(nextStep)} 
            className='flex flex-col gap-6 rounded-xl shadow bg-white p-5 border'
        >
            <h2 className="text-xl font-bold text-gray-600 text-center">Personal Info</h2>

           <input
                placeholder='Full Name'
                {...register("name", { required: true })}
                className="border p-2 w-full text-black"
            />
            {errors.name && <p className='text-red-500'>email is required</p>}

            <input
                placeholder='Email'
                {...register("email", { required: true })}
                className="border p-2 w-full text-black"
            />
            {errors.email && <p className='text-red-500'>email is required</p>}

            <input
                placeholder='Pnone(optional)'
                {...register("phone")}
                className="border p-2 w-full text-black"
            />

            <input
                type='date'
                {...register("dob", { required: true })}
                className="border p-2 w-full text-black"
            />
            {errors.dob && <p className='text-red-500'>DOB required</p>}

            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Next
            </button>

        </form>
    )
}

export default Step1
