function LegalNotice() {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
        {/* Encabezado con logo */}
        <div className="text-center mb-12">      
          <h1 className="text-4xl font-bold text-[#1F7A8C] mb-2">
            Legal Notice
          </h1>
        </div>
  
        {/* Contenido principal */}
        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
          {/* Sección de Disclaimer */}
          <div className="mb-10 border-b border-gray-100 pb-6">
            <h2 className="text-2xl font-bold text-[#1F7A8C] mb-4">Disclaimer</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Any information provided herein is mainly for informational purposes only and it is also part of a long research process, and so has not been approved by the United States Food and Drug Administration or any other countries governmental entities, and is not intended to diagnose, treat, cure or prevent disease nor is it intended to be used as a substitute for advice from a licensed certified physician or other health care professional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The practice and use of our instruments may not be entirely legal or of dubious legal status in some countries. Nothing in this text should be interpreted or understood as an encouragement or suggestion for the reader to break any law or statute.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              HOMOEONIC Instruments and programs are designed to identify imbalances in the subtle energy field caused by illness or stress, etc., and re-balance them by the use of radionic rates and energetic patterns to reduce negative energies, balance the aura, and the subtle energy field of the Individual.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              HOMOEONIC Instruments and programs are still regarded as research tools and are not to be considered in any way as a replacement for Standard Medical Analysis, therapy or medication, etc., but may be used in conjunction with standard medical care to produce a more holistic and synergetic way of analysis and therapy. We do not diagnose or prescribe medication or any other medical treatment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Many radionic treatment rates take place at a non-physical level and as a result of this, it cannot harm any living tissue or produce any unnatural side effects. These photocopies are not to be sold and are supplied along with the instrument you may have received as a means to provide a user guide; they may be listed with a price in the detailed items as part of a package but they are solely intended for shipping purposes only, and so they should be considered as a courtesy exemplary.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default LegalNotice;
  