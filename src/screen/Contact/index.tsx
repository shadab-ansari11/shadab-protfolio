import React, { useState } from "react";
import SplitText from "@/components/SplitText";

function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "ef278258-df07-42bc-8253-a03c03ed3cc1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message sent successfully!");
      form.reset(); // reset form after success
    } else {
      setResult("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white bg-neutral-900">
      <div className="w-full max-w-lg bg-neutral-800/60 p-8 rounded-3xl shadow-[0_0_30px_rgba(0,255,255,0.25)] border border-cyan-400/40 backdrop-blur-md">
        {/* Title */}
        <div className="flex justify-center">
          <SplitText
            text={"<Contact Me />"}
            className="text-4xl sm:text-5xl font-bold mb-10 text-cyan-400 text-center"
            delay={80}
          />
        </div>

        {/* Contact Form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          {/* Full Name */}
          <div>
            <label className="text-gray-300 block mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/70 border border-cyan-500/40 focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/70 border border-cyan-500/40 focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-300 block mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/70 border border-cyan-500/40 focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400 resize-none"
              placeholder="Write your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-full font-semibold text-lg shadow-lg transition-transform duration-300 ${
              loading
                ? "bg-cyan-600 cursor-not-allowed"
                : "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:scale-105"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Message */}
        {result && (
          <p className="mt-6 text-center text-sm text-cyan-300">{result}</p>
        )}
      </div>
    </div>
  );
}

export default Contact;
