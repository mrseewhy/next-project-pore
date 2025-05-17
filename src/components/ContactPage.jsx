"use client";

import Link from "next/link";
import { Mail, Send } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen bg-indigo-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-xl shadow-lg p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-indigo-900 font-head">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 font-body">
              <div>
                <label className="block mb-1  font-medium text-indigo-900">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block mb-1  font-medium text-indigo-900">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block mb-1  font-medium text-indigo-900">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-950 text-white px-6 py-3 rounded-md hover:bg-indigo-800 flex items-center gap-2 font-head"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="text-indigo-950">
            <h2 className="text-3xl font-bold mb-2 font-head text-indigo-900">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6 font-body">
              We're committed to advocacy and action. Reach out to learn how you
              can support or partner with us.
            </p>
            <p className="text-red-600 mb-6 font-body">
              Due to the number of requests we process per day kindly note that
              it is faster to send us a mail than to use the contact form
            </p>

            {/* Email Card */}
            <div className="bg-indigo-100 border-l-4 border-indigo-400 rounded-lg p-4 mb-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Mail className="text-indigo-700" />
                <span className="text-indigo-900 font-medium font-head">
                  info@federicoandco.com
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4">
              <SocialIcon href="#" label="X (Twitter)">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.333 3H21L14.75 10.035L22 21H16.75L12.25 14.965L6.999 21H4L10.667 13.535L3 3H8.333L12.417 8.59L18.333 3Z" />
                </svg>
              </SocialIcon>

              <SocialIcon href="#" label="Facebook">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.26 0-1.65.78-1.65 1.58v1.9h2.8l-.45 2.9h-2.35v7.03C18.34 21.2 22 17.07 22 12.07z" />
                </svg>
              </SocialIcon>

              <SocialIcon href="#" label="LinkedIn">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5A2.5 2.5 0 107.5 6a2.5 2.5 0 00-2.52-2.5zM3 8.75h4v12.5H3V8.75zm6.75 0h3.75v1.7h.05a4.1 4.1 0 013.7-2c3.95 0 4.67 2.6 4.67 6v6.8h-4v-6c0-1.43-.03-3.27-2-3.27s-2.3 1.56-2.3 3.17v6.1h-4V8.75z" />
                </svg>
              </SocialIcon>

              <SocialIcon href="#" label="Instagram">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm0 2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.8a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                </svg>
              </SocialIcon>

              {/* Cleaner TikTok SVG */}
              <SocialIcon href="#" label="TikTok">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M232 72a72.1 72.1 0 01-72-72h-32v176a24 24 0 11-24-24 24 24 0 0124 24h32a56 56 0 10-56 56 56.1 56.1 0 0056-56v-88.7A103.4 103.4 0 00232 104z" />
                </svg>
              </SocialIcon>

              {/* Cleaner YouTube SVG */}
              <SocialIcon href="#" label="YouTube">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M549.7 124.1c-6.3-23.7-24.9-42.3-48.6-48.6C456.1 64 288 64 288 64S119.9 64 74.9 75.5C51.2 81.8 32.6 100.4 26.3 124.1 16 169.1 16 256 16 256s0 86.9 10.3 131.9c6.3 23.7 24.9 42.3 48.6 48.6C119.9 448 288 448 288 448s168.1 0 213.1-11.5c23.7-6.3 42.3-24.9 48.6-48.6C560 342.9 560 256 560 256s0-86.9-10.3-131.9zM232 336V176l142 80-142 80z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable SocialIcon component
function SocialIcon({ href, label, children }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-900 text-indigo-50 hover:bg-indigo-700 transition"
    >
      {children}
    </Link>
  );
}
