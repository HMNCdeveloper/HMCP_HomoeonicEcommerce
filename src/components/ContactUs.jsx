import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useFetch } from '../hooks/useFetch';

function ContactUs() {
  const { user } = useAuth();
  const {fetchNow, data, error}  = useFetch('contact/send-mail/', null , false);

  // Local state for form fields; prefill if user exists, otherwise empty strings
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  // Sync when user loads
  useEffect(() => {
    if (user) {
      setForm(prev => ({
        ...prev,
        name: user.first_name || '',
        email: user.email || '',
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      console.log('Sent:', form);
      await fetchNow(`contact/send-mail/`, form);
    } catch(err){
      alert('An error occurred:', err);
    }
  };

  return (
    <section id="contact">
      <div className="border border-gray-300 shadow-lg p-6 bg-white rounded-lg max-w-md mx-auto mt-10">
        <h1 className="text-3xl font-bold text-[#1F7A8C] mb-6 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 placeholder-gray-400 focus:border-[#1F7A8C] focus:ring-[#1F7A8C] sm:text-sm"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            readOnly={!!user} // readonly if user exists
          />

          {/* Email */}
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mt-4 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Your email here!"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 placeholder-gray-400 focus:border-[#1F7A8C] focus:ring-[#1F7A8C] sm:text-sm"
            value={form.email}
            onChange={handleChange}
            readOnly={!!user}
          />

          {/* Reason for Contact */}
          <label htmlFor="reason" className="block text-sm font-medium text-gray-900 mt-4 mb-1">
            Reason for Contact
          </label>
          <select
            id="reason"
            name="reason"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 placeholder-gray-400 focus:border-[#1F7A8C] focus:ring-[#1F7A8C] sm:text-sm"
            value={form.reason}
            onChange={handleChange}
          >
            <option value="">Select a reason</option>
            <option value="inquiry">Inquiry</option>
            <option value="technical_support">Technical Support</option>
            <option value="information_request">Request Information</option>
            <option value="other">Other</option>
          </select>

          {/* Comments */}
          <label htmlFor="comments" className="block text-sm font-medium text-gray-900 mt-4 mb-1">
            Comments
          </label>
          <textarea
            id="comments"
            name="message"
            rows="4"
            placeholder="Write your comments here..."
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 placeholder-gray-400 focus:border-[#1F7A8C] focus:ring-[#1F7A8C] sm:text-sm"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 rounded-md transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
