import heroPic from "../../assets/images/Beryl_IMG2.png";

function HeroImage() {
    return (
        <div className="relative flex justify-end">
            {/* Cercle décoratif */}
            <div className="
                absolute 
                bottom-10 
                right-10
                h-80 w-80
                rounded-full 
                bg-[#c2f2f2]/60 
                blur-3xl 
            "/>   

            {/* Cercle décoratif */}
            <img 
              src={heroPic}
              alt="Portrait de Beryl"
              className="
                relative 
                z-10 
                w-[420px]
                md-[600px]
                lg:w-[720px]"
            />   
        </div>
    );
}

export default HeroImage;