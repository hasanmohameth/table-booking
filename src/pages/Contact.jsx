import React from "react";

import { useState } from "react";


// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     alert("Message sent!");
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className=" p-8 h-screen mx-auto dark:bg-gray-900 text-gray-900 dark:text-gray-100  dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col m-auto gap-4  max-w-sm mt-16  ">
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Name"
//           className="border p-2 rounded  dark:bg-gray-900 text-gray-900 dark:text-gray-100 "
//           required
          
//         />


//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="border p-2 rounded  dark:bg-gray-900 text-gray-900 dark:text-gray-100"
//           required
//         />
//         <textarea
//           name="message"
//           value={form.message}
//           onChange={handleChange}
//           placeholder="Message"
//           className="border p-2 rounded  dark:bg-gray-900 text-gray-900 dark:text-gray-100"
//           required
//         />
//         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

//Updated by React Hook Form

import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";




const schema = yup.object({

  name : yup.string().required("Name is required").min(2, "Min 2 chars"),
  
  email : yup.string().required("Email is required").email("Email is invalid"),
  
  message : yup.string().required("Message is required").min(3, "Min 3 chars"),


}).required();

export default function Contact(){

  const {register,handleSubmit,reset,formState: { errors }
} = useForm({
    resolver : yupResolver(schema),
    defaultValues:{name:"",email:'',message:''}
  })



const onSubmit = (data) => {
  toast.success("Comment added.");
  reset();
};

return(
 <div className=" p-8 h-screen mx-auto dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50 transition-colors duration-500 dark:text-gray-100   flex justify-center">
<form onSubmit={handleSubmit(onSubmit)} className=" p-8 h-screen mx-auto dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50 transition-colors duration-500 dark:text-gray-100 " >
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

 <input
        
        {...register("name")}
          placeholder="Name"
className={`border p-2 rounded dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50 transition-colors duration-500 dark:text-gray-100 ${
  errors.name ? "border-red-300" : "border-gray-300"
}`}
          
          
        />

              <p className="text-red-500 text-sm mb-2">{errors.name?.message}</p>



        <input
        {...register("email")}
          placeholder="Email"
className={`border p-2 rounded dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50 transition-colors duration-500 dark:text-gray-100 ${
  errors.email ? "border-red-300" : "border-gray-300"
}`}          
        />
              <p className="text-red-500 text-sm mb-2">{errors.email?.message}</p>

        <textarea
        {...register("message")}
        
          placeholder="Message"
className={`border p-2 rounded dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50 transition-colors duration-500 dark:text-gray-100 ${
  errors.message ? "border-red-300" : "border-gray-300"
}`}          
        />
              <p className="text-red-500 text-sm mb-2">{errors.message?.message}</p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
</form>
</div>
)
}