import { LuExternalLink } from "react-icons/lu";


function ServiceModalContent({ preview }) {

    if (!preview) return null;


    return (

        <>

            {/* IMAGE */}

            <div
                className="
                    flex
                    w-full
                    justify-center
                "
            >

                <img

                    src={preview.image}

                    alt={preview.title}

                    className="
                        max-h-[70vh]
                        rounded-2xl
                        object-contain
                    "

                />

            </div>



            {/* TITLE */}

            <h2
                className="
                    modal-item
                    text-center
                    text-3xl
                    font-semibold
                    text-white
                "
            >

                {preview.title}

            </h2>



            {/* DESCRIPTION */}

            {preview.description && (

                <p
                    className="
                        modal-item
                        max-w-xl
                        text-center
                        text-white/70
                    "
                >

                    {preview.description}

                </p>

            )}



            {/* CTA */}

            {preview.link && (

                <a

                    href={preview.link}

                    target="_blank"

                    rel="noreferrer"

                    className="
                        modal-item
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-white
                        px-6
                        py-3
                        font-semibold
                        text-slate-900
                    "

                >

                    View project

                    <LuExternalLink size={16}/>


                </a>

            )}


        </>

    );

}


export default ServiceModalContent;