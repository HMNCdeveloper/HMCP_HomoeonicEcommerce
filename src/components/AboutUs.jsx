import React from "react";

function AboutUs() {
    return (
        <section id='about-us' className="w-full max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-lg font-sans mt-6">
            <h2 className="text-3xl font-bold text-center text-[#1F7A8C] mb-6">
                About Our Instruments / Sobre Nuestros Instrumentos
            </h2>

            <p className="mb-4">
                <strong>English:</strong> All our instruments are hand made! Simply the best quality.
            </p>
            <p className="mb-4">
                We dedicate our business to the fabrication of radionic instruments, with the sole purpose of creating a new alternative to all who desire to engage in the fascinating world of self healing and agriculture applications. Through these wonderful equipments you could motivate and stimulate the potential of self healing and the natural regeneration through the renovation of bioenergetics memorial structure.
            </p>

            <p className="mb-4">
                <strong>Español:</strong> Somos una empresa seria dedicada a la fabricación de instrumentos radionicos con el único propósito de crear una nueva alternativa para todos aquellos que desean ingresar al mundo fascinante de la autocuración y otras aplicaciones como la agricultura. Por medio de estos equipos podrá motivar y estimular el potencial de auto-curación y regeneración natural a través de la renovación de la memoria estructural del campo bio-energético.
            </p>

           

            <h3 className="text-2xl font-semibold mt-6 mb-2">Warranty / Garantía</h3>
            <p className="mb-4">
                All our equipment includes one year of warranty in all its parts. Any damaged instrument will be exchanged for a new one without any cost. Our customer will ship us the damaged instrument to our main store and we will ship the new instrument back. The shipping cost from customer to main store will be paid by the customer and the shipping cost from main store to customer will be paid by us.
            </p>  
        </section>
    );
}

export default AboutUs;
