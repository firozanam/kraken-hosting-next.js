"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Mail, Send, Ticket, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const ContactContent = () => {
    const tInfo = useTranslations("Contact.Info");
    const tForm = useTranslations("Contact.Form");

    return (
        <section className="py-16 lg:py-24 relative px-4 md:px-0">
            <div className="container-ultrawide w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 xl:gap-12">

                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 flex flex-col gap-6">
                        {/* Live Chat */}
                        <FadeIn delay={100} className="w-full bg-[#161b20] border border-white/5 p-10 rounded-3xl hover:border-[#bff747]/50 transition-colors duration-300 group">
                            <div className="w-12 h-12 bg-[#bff747]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#bff747] transition-all duration-300">
                                <MessageSquare className="w-6 h-6 text-[#bff747] group-hover:text-[#161b20] transition-colors duration-300 ml-0.5" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{tInfo("live_chat_title")}</h3>
                            <p className="text-gray-400 mb-6 font-light">{tInfo("live_chat_desc")}</p>
                            <a
                                href="#"
                                className="inline-flex items-center text-[#bff747] font-semibold hover:text-white transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    // Assuming a chat widget script (e.g. Tawk.to/Intercom) is present or will be added.
                                    // If not, this serves as a placeholder as per "add a chat" request.
                                }}
                            >
                                {tInfo("live_chat_button")} &rarr;
                            </a>
                        </FadeIn>

                        {/* Email */}
                        <FadeIn delay={200} className="w-full bg-[#161b20] border border-white/5 p-10 rounded-3xl hover:border-[#bff747]/50 transition-colors duration-300 group">
                            <div className="w-12 h-12 bg-[#bff747]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#bff747] transition-all duration-300">
                                <Mail className="w-6 h-6 text-[#bff747] group-hover:text-[#161b20] transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{tInfo("email_title")}</h3>
                            <p className="text-gray-400 mb-6 font-light">{tInfo("email_desc")}</p>
                            <a
                                href="mailto:support@krakenhosting.io"
                                className="inline-flex items-center text-[#bff747] font-semibold hover:text-white transition-colors"
                            >
                                support@krakenhosting.io &rarr;
                            </a>
                        </FadeIn>

                        {/* Ticket System */}
                        <FadeIn delay={300} className="w-full bg-[#161b20] border border-white/5 p-10 rounded-3xl hover:border-[#bff747]/50 transition-colors duration-300 group">
                            <div className="w-12 h-12 bg-[#bff747]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#bff747] transition-all duration-300">
                                <Ticket className="w-6 h-6 text-[#bff747] group-hover:text-[#161b20] transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{tInfo("ticket_title")}</h3>
                            <p className="text-gray-400 mb-6 font-light">{tInfo("ticket_desc")}</p>
                            <Link
                                href="/client-area"
                                className="inline-flex items-center text-[#bff747] font-semibold hover:text-white transition-colors"
                            >
                                {tInfo("ticket_button")} &rarr;
                            </Link>
                        </FadeIn>
                    </div>

                    {/* Contact Form */}
                    <FadeIn delay={400} className="lg:col-span-2">
                        <div className="w-full bg-[#161b20] border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 relative overflow-hidden flex flex-col justify-center">
                            {/* Form Background Pattern */}
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{tForm("title")}</h2>
                                <p className="text-gray-400 mb-10">{tForm("response_time")}</p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-400 ml-1 uppercase tracking-wider">{tForm("name_label")}</label>
                                            <input
                                                type="text"
                                                placeholder={tForm("name_placeholder")}
                                                className="w-full bg-[#0b0f11] border border-white/5 rounded-xl md:rounded-2xl px-5 py-4 md:px-6 md:py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#bff747]/50 focus:bg-[#0e1214] transition-all duration-200"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-400 ml-1 uppercase tracking-wider">{tForm("email_label")}</label>
                                            <input
                                                type="email"
                                                placeholder={tForm("email_placeholder")}
                                                className="w-full bg-[#0b0f11] border border-white/5 rounded-xl md:rounded-2xl px-5 py-4 md:px-6 md:py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#bff747]/50 focus:bg-[#0e1214] transition-all duration-200"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1 uppercase tracking-wider">{tForm("subject_label")}</label>
                                        <input
                                            type="text"
                                            placeholder={tForm("subject_placeholder")}
                                            className="w-full bg-[#0b0f11] border border-white/5 rounded-xl md:rounded-2xl px-5 py-4 md:px-6 md:py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#bff747]/50 focus:bg-[#0e1214] transition-all duration-200"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1 uppercase tracking-wider">{tForm("message_label")}</label>
                                        <textarea
                                            rows={6}
                                            placeholder={tForm("message_placeholder")}
                                            className="w-full bg-[#0b0f11] border border-white/5 rounded-xl md:rounded-2xl px-5 py-4 md:px-6 md:py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#bff747]/50 focus:bg-[#0e1214] transition-all duration-200 resize-none"
                                        />
                                    </div>

                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            className="w-full lg:w-auto inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-[#89d957] to-[#c9e265] text-[#1a1a1a] text-lg font-bold rounded-xl md:rounded-2xl hover:brightness-110 transition-all duration-200 shadow-[0_0_20px_rgba(137,217,87,0.3)]"
                                        >
                                            {tForm("submit_button")}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
