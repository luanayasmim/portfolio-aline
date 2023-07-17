import { Sun, PenTool, CalendarClock, User2 } from "lucide-react";

export default function Header() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1 ml-10 mt-10">
                <button className='flex items-center justify-center w-14 h-14 rounded-full border border-white'>
                    <Sun className="w-6 h-6" color="white" />
                </button>
            </div>

            <main className="flex">
                <div className="ml-auto mr-10">
                    <div className="py-10">
                        <h1 className="text-white text-4xl font-medium">Hi! My name is Aline and I design <span className="text-purple-500">experiences</span>.</h1>
                    </div>
                    <div className="flex">
                        <button className="w-72 h-14 rounded-3xl border border-purple-500 ml-auto">
                            <span className="text-purple-500 text-xl font-medium">download resume</span>
                        </button>

                        <button className="w-72 h-14 rounded-3xl border border-amber-500 ml-auto">
                            <span className="text-amber-500 text-xl font-medium">contact</span>
                        </button>
                    </div>
                </div>
            </main>

            <div className="ml-10">
                <button className="flex items-center justify-center w-14 h-14 rounded-full bg-white mb-4">
                    <PenTool className="w-6 h-6" />
                </button>
                <button className="flex items-center justify-center w-14 h-14 rounded-full bg-white mb-4">
                    <CalendarClock className="w-6 h-6" />
                </button>
                <button className="flex items-center justify-center w-14 h-14 rounded-full bg-white mb-4">
                    <User2 className="w-6 h-6" />
                </button>
            </div>

            <div className="bg-[] bg-cover bg-center">

            </div>

        </div>

    );
}