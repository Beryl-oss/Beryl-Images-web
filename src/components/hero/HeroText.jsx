import HeroButtons from "./HeroButtons";
import { DotIcon } from "lucide-react";

function HeroText() {
    return (
        <div className="max-w-xl">
            <span className="mb-6 inline-block rounded-full bg-[#c2f2f2] px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#356267]">
                Design; Photo; Web
            </span>
            <h1 className="mb-8 text-xl md:text-3xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                Des expériences
                <br />

                web sobres qui  
                <br />

                mettent votre
                <br />

                projet en valeur

            </h1>

            <p className="mb-10 max-w-lg text-sm md:text-md lg:text-lg leading-8 text-slate-600">
                Je conçois des modernes, rapides et élégants
                afin d'aider les entreprises et les créateurs
                a transformer leurs visiteurs en clients.
            </p>

            <HeroButtons />
        </div>
    );
}

export default HeroText;