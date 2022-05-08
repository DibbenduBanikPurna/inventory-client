import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const {
        register,
        handleSubmit,
       
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        fetch('',{
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
      };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
       
        <input defaultValue="test" {...register("example")} />
  
     
        <input {...register("exampleRequired", { required: true })} />
       
        {errors.exampleRequired && <p>This field is required</p>}
  
        <input type="submit" />
      </form>
    );
};

export default AddItem;