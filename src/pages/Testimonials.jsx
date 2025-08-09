import React from "react";

const testimonials = [
    {
        name: "Dr. Vernisha Moodley",
        country: "South Africa",
        text: `First and foremost, let me commend you on your excellent pre and post purchase service. I will admit that I held a few reservations as to authenticity and safety when purchasing this machine via the internet but all of which were quickly dissolved by your service and assistance. As for the machine, I have yet to find a more comprehensive machine at the price which I purchased it for. The machine itself is beyond compare to any standard radionics machine and still impresses me with its vast range of frequencies available. Its uses are amazing and the results impeccable.

I've been researching its efficacy before consistent use in my practise and one of the experiments was an MRI and IVP comparison of a patient with an analysis using the MXD, Amazingly enough, when the results were compared, they were in complete agreement with each other. Thus the benefits for the patient using this machine is tantamount in terms of costs (as healthcare costs and special investigation costs in South Africa are shockingly expensive), time and accuracy.

Thank you again for your helpful advice and dependable service.`,
    },
    {
        name: "Monico Sanchez",
        country: "Spain",
        address: "C/ Julio Gutierrez Lumbreras, 3 48920, Portugalete, ES",
        phone: "Tel. 944 61 10 65 Movil. 678 63 84 25",
        website: "www.fengshuiportugalete.es",
        text: `My name is Monico Sanchez and I have recently acquired a radionics machine to Homoeonic and I am very satisfied with their treatment in service delivery in the paperwork as the advice and technical information.

Being convinced of the great therapeutic potential of the system, since as knowledgeable about alternative therapies Homeopathy, Chinese Medicine, etc.`,
    },
    {
        name: "Juan Carlos Ríos",
        country: "Chile",
        website: "www.jcrios.cl",
        text: `I think it is a good idea to have a directory of therapists and testimonials from Homoeonic using computers to guide potential patients.

Case 1: Wife of 85 years, sent to a Senior House falls into a state of severe depression, lost desire to live in a few months is very poor. Simultaneously using radionics balancing treatment for 2 hours, plus a set of Bach flower essences, posted for 10 minutes every 2 hours, all in the form of Broadcast, all this on a Friday afternoon. On Saturday I phoned the son of the lady to tell me, surprised, asked her mother to the TV remote control to watch a football match of your favorite team!! ... The change has been amazing, the desire to live again, her look is bright, he assumed his position, his depression is reduced dramatically in 24 hours ..... Currently, she is still dealing with daily shipments of Bach Flowers, 10 minutes, 4 times a day .....

Case 2: Male, 59, businessman, has a bedwetting problem, you should go to the bathroom 5 to 6 times a night, your doctor tells you that your prostate is healthy, of course, all this brings insomnia. It sends you rolling radionics x 2 hours using the Neurogenic Bladder code plus Bach Flowers to treat anxiety, impatience, obsession and insomnia. The result is fast, 48 hours after this person I said that now only time urine 1 x night, sleep well until today. He continues to manage ensencias flowers to treat his impatience characterological.

I take this opportunity to highlight positive my counseling experience, purchase, delivery and support Homoeonic. The firm was quick, packaging more than adequate, the quality of equipment, design, good materials. All my questions about the software, uses and applications have always been answered quickly and assertiveness.`,
    },
    {
        name: "Ana Luisa Rojo",
        country: "Mexico Puebla",
        text: `Thank you very much for all your hospitality! He gave us great pleasure to meet and share time with you, it is clear that his work goes beyond product and service offering. I'm sure will be more successful every time.`,
    },
    {
        name: "Paula M. Larson",
        country: "Nebraska, US",
        text: `The very gracious and generous staffs at Homoeonic are so supportive. During and following our Missouri River flooding the past year, the devastation and debris was so predominant, roads being closed, and no accessibility to staple items, etc. The use of "radionics" evaluation and treatment was invaluable!

The FEMA (Federal Emergency Management Agency) covered the disaster areas, and I was able to perform a "radionics" treatment on one of their staff members. This person is from Puerto Rico and keeps in contact as yet.

Because of this event, I invested in additional equipment, needing the portable feature, and the ECS memory card availability! Although the disaster was economically strapping, Homoeonic staff agreed to let me purchase some equipment at a considerable discount and even "shipped in" with the postage!

My time in programming has been sliced down to a mere fraction of what it previously had been!, I am now able to pre-determine some measures, and have them available in the event another disaster should happen! With this new accessibility, I can research and be prepared for emergencies, such as the flooding, or any possible "nuclear" radiation from natural or manmade effronteries! Their immediate concern gives me a continuing peace of mind.`,
    },
    // Invented testimonials
    {
        name: "Laura Méndez",
        country: "Argentina",
        text: `I was skeptical at first, but after using the radionics machine from Homoeonic for a few weeks, I noticed significant improvements in my energy levels and overall wellbeing. Their customer support was always prompt and informative.`,
    },
    {
        name: "Ahmed El-Sayed",
        country: "Egypt",
        text: `The device exceeded all my expectations. The range of frequencies and ease of use make it an essential tool in my holistic practice. Shipping was fast and the after-sales support was outstanding.`,
    },
    {
        name: "Mei Ling",
        country: "Taiwan",
        text: `Using Homoeonic's equipment has greatly enhanced my therapeutic sessions. The technical advice given helped me get started quickly. Highly recommended for professionals and beginners alike.`,
    },
    {
        name: "David Thompson",
        country: "Australia",
        text: `Excellent product quality and excellent customer service. The team at Homoeonic really cares about their clients and goes above and beyond to ensure satisfaction. I will be purchasing more devices in the future.`,
    },
    {
        name: "Sofia Rodríguez",
        country: "Mexico",
        text: `I appreciate the detailed manuals and tutorials that come with the product. They made setup and usage very straightforward, even for someone new to radionics like me. Great investment.`,
    },
];

function Testimonials() {
    return (
        <section style={{ maxWidth: 900, margin: "auto", padding: "2rem" }}>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                Testimonials
            </h1>
            <a
                href="https://www.homoeonic.com"
                style={{
                    display: "block",
                    textAlign: "center",
                    marginBottom: "3rem",
                    color: "#0077cc",
                    textDecoration: "none",
                }}
            >
                Return to Homoeonic.com
            </a>

            {testimonials.map(({ name, country, address, phone, website, text }, i) => (
                <article
                    key={i}
                    style={{
                        backgroundColor: "#f9f9f9",
                        padding: "1.5rem",
                        borderRadius: 8,
                        marginBottom: "2rem",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                >
                    <p style={{ whiteSpace: "pre-wrap", marginBottom: "1rem", lineHeight: 1.5 }}>
                        {text}
                    </p>
                    <footer style={{ fontWeight: "bold", fontSize: 14, color: "#555" }}>
                        {name}
                        {country && ` / ${country}`}
                    </footer>
                    {address && (
                        <div style={{ fontSize: 12, color: "#777" }}>
                            {address}
                            {phone && <><br />{phone}</>}
                            {website && (
                                <>
                                    <br />
                                    <a
                                        href={`https://${website}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ color: "#0077cc", textDecoration: "underline" }}
                                    >
                                        {website}
                                    </a>
                                </>
                            )}
                        </div>
                    )}
                </article>
            ))}
        </section>
    );
}

export default Testimonials