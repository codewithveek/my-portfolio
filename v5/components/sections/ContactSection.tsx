"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 0 && email) {
      setStep(1);
    } else if (step === 1 && message) {
      setStatus("Sending message...");
      setTimeout(() => {
        setStatus("Message sent successfully. Connection closed.");
        setStep(2);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="mb-8">
        <span className="text-[#008f11]">veek@portfolio</span>:
        <span className="text-blue-500">~/contact</span>$ ./send_message.sh
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="terminal-window"
      >
        <div className="terminal-header">
          <span>send_message.sh</span>
          <span>rwxr-xr-x</span>
        </div>

        <div className="space-y-4 font-mono">
          <p className="text-gray-400">Initializing secure connection...</p>
          <p className="text-gray-400">Connection established.</p>

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            {step >= 0 && (
              <div className="flex flex-col md:flex-row md:items-center gap-2 relative">
                <label
                  htmlFor="email"
                  className="text-yellow-500 whitespace-nowrap"
                >
                  Enter your email:
                </label>
                <div className="relative flex-grow flex items-center">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={step > 0}
                    className="bg-transparent border-none outline-none text-[#00ff41] focus:ring-0 p-0 w-full z-10"
                    required
                  />
                  {step === 0 && !email && (
                    <span
                      className="absolute left-0 cursor pointer-events-none"
                      style={{
                        height: "1.2em",
                        width: "10px",
                        backgroundColor: "var(--foreground)",
                      }}
                    ></span>
                  )}
                </div>
              </div>
            )}

            {step >= 1 && (
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="message" className="text-yellow-500">
                  Enter your message (press Enter to send):
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={step > 1}
                    className="bg-transparent border border-[#003b00] outline-none w-full text-[#00ff41] focus:border-[#008f11] p-2 min-h-[100px] resize-none z-10 relative"
                    autoFocus
                    required
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(e);
                      }
                    }}
                  />
                  {step === 1 && !message && (
                    <span
                      className="absolute left-2 top-2 cursor pointer-events-none"
                      style={{
                        height: "1.2em",
                        width: "10px",
                        backgroundColor: "var(--foreground)",
                      }}
                    ></span>
                  )}
                </div>
              </div>
            )}

            {step < 2 && (
              <button type="submit" className="hidden">
                Submit
              </button>
            )}
          </form>

          {status && <div className="mt-4 text-blue-400">{status}</div>}

          {step === 2 && (
            <div className="mt-4">
              <span className="text-[#008f11]">veek@portfolio</span>:
              <span className="text-blue-500">~/contact</span>${" "}
              {/* <span className="cursor"></span> */}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
