import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function ContactForm({title, media}) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dateOfBirth: "",
        telephone: "",
        contactPrefs: [],
        referral: ""
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                contactPrefs: checked
                    ? [...prev.contactPrefs, value] // Add preference if checked
                    : prev.contactPrefs.filter((pref) => pref !== value) // Remove preference if unchecked
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData(document.querySelector('form'));
        try {
            const response = await fetch("https://api.sheetmonkey.io/form/7iyQDecvyjFYeqrJ1uEdbH", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                toast("Thanks! We will be in touch shortly");
            } else {
                toast("Failed! Please try again");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast("Failed! Please try again");
        }
    };

    return (
        <form
            method="post"
            className="mt-6 text-white py-4 w-11/12 md:w-3/4 text-xl text-center mx-auto flex-col bg-red-950 rounded-lg border-2 border-white shadow-2xl"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            <ToastContainer />
            <div className="w-3/4 mx-auto form-group flex flex-col">
                Contact Form
                <label className="my-4 justify-evenly align-middle items-center flex flex-row">
                    <p className='w-1/4'>Name:</p>
                    <input
                        className="w-3/4 p-2 text-zinc-900"
                        name="name"
                        type="text"
                        value={formData.name}
                        required={true}
                        onChange={handleChange}
                    />
                </label>

                <label className="my-4 justify-evenly align-middle items-center flex flex-row">
                    <p className='w-1/4'>Email:</p>
                    <input
                        className="w-3/4 p-2 text-zinc-900"
                        name="email"
                        type="email"
                        value={formData.email}
                        required={true}
                        onChange={handleChange}
                    />
                </label>

                <label className="my-4 justify-evenly align-middle items-center flex flex-row">
                    <p className='w-1/4'>DOB:</p>
                    <input
                        className="w-3/4 p-2 text-zinc-900"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        required={true}
                        onChange={handleChange}
                    />
                </label>

                <label className="my-4 justify-evenly align-middle items-center flex flex-row">
                    <p className='w-1/4'>Tel:</p>
                    <input
                        className="w-3/4 p-2 text-zinc-900"
                        name="telephone"
                        type="tel"
                        value={formData.telephone}
                        required={true}
                        onChange={handleChange}
                    />
                </label>

                <label className="my-4">Preferred Contact Method:</label>
                <div className="justify-evenly flex flex-row cursor-pointer">
                    <label className='flex flex-row'>
                        <input
                            type="checkbox"
                            name="contactPrefs"
                            value="email"
                            checked={formData.contactPrefs.includes("email")}
                            onChange={handleChange}
                        />
                        <p className='m-4'>Email</p>
                    </label>
                    <label className='flex flex-row cursor-pointer'>
                        <input
                            type="checkbox"
                            name="contactPrefs"
                            value="phone"
                            checked={formData.contactPrefs.includes("phone")}
                            onChange={handleChange}
                        />
                        <p className='m-4'>Phone</p>
                    </label>
                </div>

                <label className="my-4 justify-evenly align-middle items-center flex flex-row">
                    <p className='w-1/4'>Referral source?:</p>
                    <input
                        className="w-3/4 ml-4 p-2 text-zinc-900"
                        name="referral"
                        type="text"
                        value={formData.referral}
                        required={true}
                        onChange={handleChange}
                    />
                </label>

                <input type="hidden" className='hidden' name="Created" value="x-sheetmonkey-current-date-time"/>
                <input
                    type="submit"
                    className='p-2 my-4 w-1/3 self-center cursor-pointer bg-red-700 hover:scale-110'
                />
            </div>
        </form>);
}
