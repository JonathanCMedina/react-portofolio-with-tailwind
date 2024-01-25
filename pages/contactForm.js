import React, { useState } from "react";

const FORM_ENDPOINT = "jonathan.c.medina.x@gmail.com";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit =(e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Form response was not ok');
            }

            setSubmitted(true);
        })
        .catch((err) => {
            //Submit the form manually
            e.target.submit();
        });
    };
    if (submitted) {
        return (
            <>
                <div className="text-2xl"> Thank you for your email! </div>
                <div className="text-2xl"> I will be in touch with you soon. </div>
            </>
        );
    }
    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
        >
            <div className="pt-0 mb-3">
                <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-pink-500 dark:placeholder-green-500 bg-white border-0 rounded shadow outline-none dark:shadow-blue-300 dark:bg-gray-900"
                    required
                />
            </div>
            <div className="pt-0 mb-3">
                <input
                    type="email"
                    placeholder="Your email address"
                    name="email"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-pink-500 dark:placeholder-green-500 bg-white border-0 rounded shadow outline-none dark:shadow-yellow-600 dark:bg-gray-900"
                    required
                />
            </div>
            <div className="pt-0 mb-3">
                <textarea
                    placeholder="Your message"
                    name="message"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-pink-500 dark:placeholder-green-500 bg-white border-0 rounded shadow outline-none dark:shadow-pink-700 dark:bg-gray-900"
                    required
                />
            </div>
            <div className="pt-0 mb-3">
                <button
                    className="active:bg-green-700 focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-teal-600 rounded-md shadow-md dark:shadow-white"
                    type="submit"
                >
                    Send a message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
