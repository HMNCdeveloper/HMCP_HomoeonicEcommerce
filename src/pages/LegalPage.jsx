function LegalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
      {/* Encabezado con logo */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1F7A8C] mb-2">
          Privacy Policy
        </h1>
        <div className="text-lg text-gray-500 bg-[#F8FAFC] p-3 rounded-lg inline-block">
          Last updated: July 28, 2025
        </div>
      </div>

      {/* Contenido principal */}
      <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
        {/* Introducción */}
        <div className="mb-10 border-b border-gray-100 pb-6">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the{' '}
            {/* <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-[#1F7A8C] hover:underline font-medium">
              Free Privacy Policy Generator
            </a>. */}
          </p>
        </div>

        {/* Secciones con formato */}
        <div className="space-y-10">
          {/* Sección 1 */}
          <div>
            <h2 className="text-2xl font-bold text-[#1F7A8C] mb-4 flex items-center">
              <span className="bg-[#1F7A8C] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
              Interpretation and Definitions
            </h2>
            
            <div className="ml-11 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Interpretation</h3>
                <p className="text-gray-700 pl-4 border-l-2 border-[#1F7A8C]">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Definitions</h3>
                <p className="text-gray-700 mb-4 pl-4 border-l-2 border-[#1F7A8C]">
                  For the purposes of this Privacy Policy:
                </p>
                <ul className="space-y-4 pl-6">
                  {[
                    "Account means a unique account created for You to access our Service or parts of our Service.",
                    "Affiliate means an entity that controls, is controlled by or is under common control with a party...",
                    "Company (referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement) refers to HOMOEONIC, Baja California, Mexico.",
                    "Cookies are small files that are placed on Your computer, mobile device or any other device by a website...",
                    "Country refers to: Mexico",
                    "Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
                    "Personal Data is any information that relates to an identified or identifiable individual.",
                    "Service refers to the Website.",
                    "Service Provider means any natural or legal person who processes the data on behalf of the Company...",
                    "Usage Data refers to data collected automatically...",
                    "Website refers to HOMOEONIC, accessible from http://www.homoeonic.com",
                    "You means the individual accessing or using the Service..."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sección 2 */}
          <div>
            <h2 className="text-2xl font-bold text-[#1F7A8C] mb-4 flex items-center">
              <span className="bg-[#1F7A8C] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
              Collecting and Using Your Personal Data
            </h2>
            
            <div className="ml-11 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Types of Data Collected</h3>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Personal Data</h4>
                <p className="text-gray-700 mb-4 pl-4 border-l-2 border-[#1F7A8C]">
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pl-6 mb-6">
                  {["Email address", "First name and last name", "Phone number", "Address, State, Province, ZIP/Postal code, City", "Usage Data"].map((item, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-3 rounded-lg">
                      <svg className="w-5 h-5 text-[#1F7A8C] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Usage Data</h4>
                <p className="text-gray-700 mb-4 pl-4 border-l-2 border-[#1F7A8C]">
                  Usage Data is collected automatically when using the Service.
                </p>
                <p className="text-gray-700 mb-4 pl-4 border-l-2 border-[#1F7A8C]">
                  Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Tracking Technologies and Cookies</h4>
                <p className="text-gray-700 mb-4 pl-4 border-l-2 border-[#1F7A8C]">
                  We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.
                </p>
                
                <div className="bg-[#F8FAFC] p-4 rounded-lg mb-6">
                  {[
                    {
                      title: "Necessary / Essential Cookies",
                      type: "Session Cookies",
                      purpose: "Essential to provide services through the Website and enable features."
                    },
                    {
                      title: "Cookies Policy / Notice Acceptance Cookies",
                      type: "Persistent Cookies",
                      purpose: "Identify if users have accepted cookie use on the Website."
                    },
                    {
                      title: "Functionality Cookies",
                      type: "Persistent Cookies",
                      purpose: "Remember choices You make when using the Website."
                    }
                  ].map((item, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <div className="font-medium text-gray-800">{item.title}</div>
                      <div className="text-sm text-gray-600 mb-1">Type: {item.type}</div>
                      <p className="text-gray-700">{item.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-[#F8FAFC] rounded-lg p-6 mt-10">
            <h2 className="text-2xl font-bold text-[#1F7A8C] mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, You can contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white p-4 rounded-lg flex-1">
                <div className="font-medium text-gray-800 flex items-center">
                  <svg className="w-5 h-5 text-[#1F7A8C] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </div>
                <a href="mailto:info@homoeonic.com" className="text-[#1F7A8C] hover:underline mt-2 block">info@homoeonic.com</a>
              </div>
              <div className="bg-white p-4 rounded-lg flex-1">
                <div className="font-medium text-gray-800 flex items-center">
                  <svg className="w-5 h-5 text-[#1F7A8C] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone
                </div>
                <div className="text-gray-700 mt-2">+52-664-594-9244</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalPage;
