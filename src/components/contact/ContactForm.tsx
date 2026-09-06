"use client";

import { FormEvent, useState } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiUser,
} from "react-icons/fi";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your message."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ff] px-4 py-2 text-sm font-bold text-[#006cb5]">
              <FiMessageSquare />
              Send Us a Message
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-[#071827] sm:text-4xl">
              Let's Start a
              <span className="block text-[#006cb5]">
                Conversation
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Have a project, question or business requirement? Fill out the
              form and our team will get in touch with you.
            </p>

            {/* Support Points */}
            <div className="mt-8 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#006cb5] shadow-sm">
                  <FiUser />
                </div>

                <div>
                  <h3 className="font-bold text-[#071827]">
                    Tell Us About Your Business
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Share your requirements and tell us what you want to
                    achieve.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#006cb5] shadow-sm">
                  <FiPhone />
                </div>

                <div>
                  <h3 className="font-bold text-[#071827]">
                    Quick Response
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Our team will review your message and get back to you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#006cb5] shadow-sm">
                  <FiMail />
                </div>

                <div>
                  <h3 className="font-bold text-[#071827]">
                    Professional Support
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Get assistance from the Zterabyte team for your digital
                    requirements.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8 lg:p-10">

            {submitted ? (
              <div className="flex min-h-[450px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf6ff] text-[#006cb5]">
                  <FiCheckCircle className="text-3xl" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#071827]">
                  Message Sent Successfully
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                  Thank you for contacting ZTERABYTE. We have received your
                  message and our team will get back to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError("");
                  }}
                  className="mt-6 rounded-xl bg-[#006cb5] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0086dc]"
                >
                  Send Another Message
                </button>

              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-[#071827]"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter Your Full Name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#006cb5] focus:bg-white focus:ring-2 focus:ring-[#006cb5]/10"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-bold text-[#071827]"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#006cb5] focus:bg-white focus:ring-2 focus:ring-[#006cb5]/10"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-[#071827]"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Enter Your Phone Number"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#006cb5] focus:bg-white focus:ring-2 focus:ring-[#006cb5]/10"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-[#071827]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter Your Email Address"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#006cb5] focus:bg-white focus:ring-2 focus:ring-[#006cb5]/10"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div className="mt-5">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-bold text-[#071827]"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Tell Your Subject"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#006cb5] focus:bg-white focus:ring-2 focus:ring-[#006cb5]/10"
                  />
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-[#071827]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#006cb5] focus:bg-white focus:ring-2 focus:ring-[#006cb5]/10"
                  />
                </div>

                {/* Error */}
                {submitError && (
                  <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-600">
                    {submitError}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#006cb5] px-6 py-4 text-sm font-bold text-white shadow-md transition hover:bg-[#0086dc] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}

                  {!isSubmitting && <FiArrowRight />}
                </button>

                <p className="mt-4 text-center text-xs text-slate-400">
                  Your information will only be used to respond to your
                  enquiry.
                </p>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}