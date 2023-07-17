import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="h-screen flex flex-col px-8">
            <div className="ml-auto mr-10">
                <Image src="/aline-icon.png" alt="" width={240} height={240} />
            </div>
            <div className="flex ml-auto mr-10">
                <h3 className="text-white text-4xl font-medium">
                    About
                    <span className="text-purple-500"> me</span>
                </h3>
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-5 ml-1" />
            </div>

            <div className="w-2/3 ml-auto mr-10 mt-10">
                <p className="text-xl font-medium text-white">Hey! My name is Aline Reis, I`m passionate about everything that involves art, technology and people. I`m a curious person, always looking to learn new things and recently I`ve been especially interested in front-end programming and the potential for extending my work as a designer through it. Contact me to discuss design projects and collaborations!</p>
            </div>

            <div className="flex mt-12 ml-auto mr-10">
                <button className="w-72 h-14 rounded-3xl border border-purple-500 ml-auto">
                    <span className="text-purple-500 text-xl font-medium">download resume</span>
                </button>
                <button className="flex items-center justify-center w-14 h-14 rounded-full border border-indigo-500 ml-10">
                    <Linkedin className="w-6 h-6 text-indigo-500" />
                </button>
                <button className="flex items-center justify-center w-14 h-14 rounded-full border border-purple-500 ml-6">
                    <Github className="w-6 h-6 text-purple-500" />
                </button>
                <button className="flex items-center justify-center w-14 h-14 rounded-full border border-amber-500 ml-6">
                    <Mail className="w-6 h-6 text-amber-500" />
                </button>
            </div>
        </div>
    )
}