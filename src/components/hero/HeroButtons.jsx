/*import { ArrowLeft } from "lucide-react"*/

function HeroButtons() {

    return (
        <div className="flex items-center gap-5">
            <a
              href="#projects"
              className="
              rounded-full
              bg-[#356267]
              px-8
              py-4
              text-white
              transition-all
              duration-300
              hover:bg-[#41737c]
              hover:shadow-lg
            "
            >
                Voir mes projets
            </a>

            <a
              href="#contact"
              className="
              group
              flex
              items-center
              gap-2
              font-medium
              text-[#356267]
              transition-all
            "
            >
                En savoir plus
                {/*<span className="transition-transform duration-300 group-hover:translate-x-1"> {ArrowLeft} </span>*/}
            </a>
        </div>
    )
}

export default HeroButtons;