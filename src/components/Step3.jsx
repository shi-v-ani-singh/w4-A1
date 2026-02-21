'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

const Step3 = ({ prevStep, submitForm, defaultValues }) => {

    // const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues })
    const { register, handleSubmit, formState: { errors } } = useForm({ values: defaultValues })

    return (
        <form onSubmit={handleSubmit(submitForm)} noValidate className="flex flex-col gap-6 rounded-xl shadow bg-white p-5 border">
            <h2 className="text-xl font-bold text-gray-600 text-center">Step 3: Preferences</h2>

            <select {...register("country", { required: true })} className="border p-2 w-full text-black">
                <option value="">Select Country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
            </select>
            {errors.country && <p className="text-red-500">Country required</p>}

            <div>
                <p className='text-black'>Interests</p>
                <div className='flex gap-5 justify-center border p-2 w-full text-black'>
                    <label><input type="checkbox" value="Coding" {...register("interests", { required: true })} /> Coding</label>
                    <label><input type="checkbox" value="Music" {...register("interests")} /> Music</label>
                    <label><input type="checkbox" value="Sports" {...register("interests")} /> Sports</label>
                    <label><input type="checkbox" value="Technology" {...register("interests")} /> Technology</label>
                </div>
            </div>
            {errors.interests && <p className="text-red-500">Select at least one</p>}

            <textarea
                placeholder="Bio (optional)"
                {...register("bio", { maxLength: 500 })}
                className="border p-2 w-full text-black"
            />

            <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="border px-4 py-2 bg-blue-500">
                    Back
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Step3
// "use client";

// import React from "react";
// import { useForm } from "react-hook-form";

// const Step3 = ({ prevStep, submitForm, defaultValues }) => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues
//   });

//   return (
//     <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-6 p-5 border">
//       <h2 className="text-xl font-bold text-center">Step 3: Preferences</h2>

//       <select {...register("country", { required: true })} className="border p-2">
//         <option value="">Select Country</option>
//         <option>India</option>
//         <option>USA</option>
//         <option>UK</option>
//       </select>

//       {errors.country && <p className="text-red-500">Country required</p>}

//       <div>
//         <p>Interests</p>
//         <label><input type="checkbox" value="Coding" {...register("interests", { required: true })} /> Coding</label>
//         <label><input type="checkbox" value="Music" {...register("interests")} /> Music</label>
//       </div>

//       {errors.interests && <p className="text-red-500">Select at least one</p>}

//       <textarea {...register("bio")} className="border p-2" />

//       <div className="flex justify-between">
//         <button type="button" onClick={prevStep}>
//           Back
//         </button>
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default Step3;
