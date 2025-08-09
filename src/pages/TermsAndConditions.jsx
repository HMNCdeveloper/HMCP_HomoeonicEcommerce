function TermsAndConditions() {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
        {/* Encabezado con logo */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1F7A8C] mb-2">
            Terms and Conditions of Use
          </h1>
        </div>
  
        {/* Contenido principal */}
        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
          {/* Sección General */}
          <div className="mb-10 border-b border-gray-100 pb-6">
            <h2 className="text-2xl font-bold text-[#1F7A8C] mb-4">General Information</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our warranty time is for 3 years.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              During the lifetime of the warranty, Homoeonic will cover all costs of repair, and if needed replacement and the customer will be responsible for covering the cost of shipping. Please report it as soon as it occurs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Homoeonic WILL NOT receive any instruments if there was NO PREVIOUS warning by the shipper. Upon notification, Homoeonic will schedule with the shipper a proper date and so the company has knowledge of a shipment being made. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>IMPORTANT NOTE:</strong> Please notify the company BEFORE considering sending the instrument for a repair by means of telephone or by means of email. Additional information may be required such as an image of the damaged instrument prior to any shipment being made.
            </p>
          </div>
  
          {/* Sección Adicional */}
          <div>
            <h2 className="text-2xl font-bold text-[#1F7A8C] mb-4">Additional Information</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              These policies can be changed without any previous warning to the community. It is the responsibility of the community to check the warranty policies if they did not receive a notification by email stating so.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default TermsAndConditions;
  