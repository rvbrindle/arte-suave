import React from 'react';
import Button from "./Button";
// import useForm from 'react'

export default function ContactForm({ title, media }) {

    // const { data, setData, post, processing, errors, reset } = useForm({
    //
    // });

    // const onHandleChange = (event) => {
    //     setData(event.target.name, event.target.value);
    // };

    const submit = (e) => {
        e.preventDefault();

        // router.post(, {
        //     _method: 'PATCH',
        //     name: data.name,
        // });
    };

    return (
        <form className={ 'mt-6 py-4 w-11/12 md:w-3/4 text-xl text-center mx-auto flex-col bg-zinc-800 rounded-lg border-2 border-white shadow-2xl' } onSubmit={ submit }>
            <div className={ 'w-3/4 mx-auto form-group flex flex-col' }>
                <label className='my-4'>Name:
                <input
                    className='w-3/4 ml-4 p-2 text-zinc-900'
                    name='name'
                    type='text'
                    required={ true }
                    // handleChange={ onHandleChange }
                />
                </label>
                <label className='my-4'>Email:
                    <input
                        className='w-3/4 ml-4 p-2 text-zinc-900'
                        name='email'
                        type='email'
                        required={ true }
                        // handleChange={ onHandleChange }
                    />
                </label>
                <label className='my-4 mb-12 w-3/4 align-center justify-center mx-auto flex flex-row cursor-pointer'><small>I consent to receiving gym updates</small>
                    <input
                        className='ml-2 w-12 cursor-pointer'
                        name='consent'
                        type='checkbox'
                        required={ true }
                        // handleChange={ onHandleChange }
                    />
                </label>

                <Button
                    title='Send'
                    href='find out more'
                    type='submit'
                />
            </div>
        </form>);
}
