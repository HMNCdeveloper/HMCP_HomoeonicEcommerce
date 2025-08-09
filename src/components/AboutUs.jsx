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

            <h3 className="text-2xl font-semibold mt-6 mb-2">Main Factory / Fábrica Principal</h3>
            <p className="mb-4">Mexicali BC Mexico</p>
            <p className="mb-4">
                <a href="mailto:info@homoeonic.com" className="text-[#0077cc] hover:underline">
                    info@homoeonic.com
                </a>
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2">Shipping Info / Información de Envío</h3>
            <p className="mb-4">
                The shipping cost will be paid by the customer and the instrument will be shipped by Fedex international priority.
            </p>
            <p className="mb-4">
                Los gastos de envío serán cubiertos por el cliente y el instrumento será enviado por paquetería Fedex internacional priority.
            </p>
            <p className="mb-4">
                En el caso de clientes radicados en México el envío será por medio de la paquetería Multipack.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2">Warranty / Garantía</h3>
            <p className="mb-4">
                All our equipment includes one year of warranty in all its parts. Any damaged instrument will be exchanged for a new one without any cost. Our customer will ship us the damaged instrument to our main store and we will ship the new instrument back. The shipping cost from customer to main store will be paid by the customer and the shipping cost from main store to customer will be paid by us.
            </p>
            <p className="mb-4">
                Todos nuestros equipos incluyen un año de garantía en su totalidad. Cualquier equipo que se llegue a dañar en su funcionamiento será cambiado por uno nuevo sin costo alguno. El cliente nos enviará el instrumento dañado a nuestra fábrica cubriendo los gastos de envío y de nuestra fábrica le enviaremos el instrumento nuevo a la puerta de su casa sin costo alguno.
            </p>

            <p className="font-bold text-center text-lg mt-6">
                HECHO EN MÉXICO
            </p>
        </section>
    );
}

export default AboutUs;
