import React, { useState } from "react";

export default function OpenInWhatsapp() {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        // Redirect to WhatsApp link
        window.location.href = `https://wa.me/${input}`;
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-wrap justify-center">
                <div className="p-4 md:w-full">
                    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
                        <h1 style={{ fontSize:'40px', color:'white', padding:'20px' }}>Open in WhatsApp</h1>
                        <input
                            type="text"
                            placeholder="Enter WhatsApp Number"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            style={{
                                padding: "10px",
                                marginRight: "10px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                backgroundColor: "#D05252",
                                color: "#fff",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
