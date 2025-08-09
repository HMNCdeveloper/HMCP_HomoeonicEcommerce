import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import ReCAPTCHA from 'react-google-recaptcha';

const RegisterForm = ({ isLogin, setIsLogin, onClose }) => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');
  const { fetchNow, loading, error } = useFetch('', null, false);
  const { data, loading: loadingCities, error: errorCities } = useFetch('cities/');
  const [captchaValue, setCaptchaValue] = useState(null);
  const [showCaptcha, setShowCaptcha] = useState(false);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: '',
    street1: '',
    city: '',
    zip_code: '',
  });

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'city') {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleNext = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {};

    if (!formData.first_name.trim()) newErrors.first_name = 'First name is required';
    if (!formData.last_name.trim()) newErrors.last_name = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    if (formData.password && confirmPassword && formData.password !== confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setErrors({});
    setShowCaptcha(false);
    setCaptchaValue(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If captcha is not shown yet, show it instead of submitting the form
    if (!showCaptcha) {
      setShowCaptcha(true);
      return;
    }

    if (!captchaValue) {
      alert('Please verify the CAPTCHA');
      return;
    }

    const newErrors = {};

    if (!formData.phone_number.trim()) newErrors.phone_number = 'Phone number is required';
    if (!formData.street1.trim()) newErrors.street1 = 'Street is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zip_code.trim()) newErrors.zip_code = 'ZIP Code is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const finalData = {
      ...formData,
      addresses: [
        {
          street: formData.street1,
          // `${formData.street1}${formData.street2} ', ' + formData.street2 : ''}`,
          city: formData.city,
          zip_code: formData.zip_code,
        },
      ],
      user_type: 2,
    };

    // Remove fields integrated into addresses
    delete finalData.street1;
    delete finalData.street2;
    delete finalData.city;
    delete finalData.zip_code;

    try {
      const result = await fetchNow('users/', finalData);

      if (result) {
        alert('Registration successful! Please log in.');
        onClose();
      }
    } catch (err) {
      console.error('Error registering:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-8">
      {step === 1 && (
        <>
          <h2 className="text-xl font-bold text-gray-900">Step 1: Personal Info</h2>

          <div>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First Name"
              className="block w-full border rounded px-3 py-2"
            />
            {errors.first_name && <p className="text-sm text-red-600 mt-1">{errors.first_name}</p>}
          </div>

          <div>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              className="block w-full border rounded px-3 py-2"
            />
            {errors.last_name && <p className="text-sm text-red-600 mt-1">{errors.last_name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="block w-full border rounded px-3 py-2"
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="block w-full border rounded px-3 py-2"
            />
            {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="block w-full border rounded px-3 py-2"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-600 mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsLogin(!isLogin);
            }}
            className="font-semibold text-yellow-600 hover:text-yellow-500 transition-colors"
          >
            Have an account? Login
          </a>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleNext}
              className="bg-yellow-500 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-xl font-bold text-gray-900">Step 2: Contact Info</h2>

          <div>
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Phone Number"
              className="block w-full border rounded px-3 py-2"
            />
            {errors.phone_number && <p className="text-sm text-red-600 mt-1">{errors.phone_number}</p>}
          </div>

          <div>
            <input
              type="text"
              name="street1"
              value={formData.street1}
              onChange={handleChange}
              placeholder="Street"
              className="block w-full border rounded px-3 py-2"
            />
            {errors.street1 && <p className="text-sm text-red-600 mt-1">{errors.street1}</p>}
          </div>

          <div>
            {loadingCities ? (
              <p>Loading cities...</p>
            ) : errorCities ? (
              <p>Error loading cities: {errorCities}</p>
            ) : (
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="block w-full border rounded px-3 py-2"
              >
                <option value="">Select a city</option>
                {data &&
                  data.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.city_name}
                    </option>
                  ))}
              </select>
            )}
            {errors.city && <p className="text-sm text-red-600 mt-1">{errors.city}</p>}
          </div>

          <div>
            <input
              type="text"
              name="zip_code"
              value={formData.zip_code}
              onChange={handleChange}
              placeholder="ZIP Code"
              className="block w-full border rounded px-3 py-2"
            />
            {errors.zip_code && <p className="text-sm text-red-600 mt-1">{errors.zip_code}</p>}
          </div>

          <div className="flex flex-col items-center mt-4 space-y-4">
            {!showCaptcha && (
              <button
                type="submit"
                className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600 transition-colors"
              >
                Sign Up
              </button>
            )}

            {showCaptcha && (
              <>
                <ReCAPTCHA
                  sitekey="6Lfk1pkrAAAAAFn8-nBO6BGBpTWf13ciJfacDg-7"
                  onChange={handleCaptchaChange}
                  className="mx-auto"
                />
                <button
                  type="submit"
                  className={`mt-4 bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600 transition-colors ${
                    !captchaValue ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={!captchaValue}
                >
                  Confirm Registration
                </button>
              </>
            )}

            <button
              type="button"
              onClick={handleBack}
              className="text-gray-600 underline mt-4"
            >
              Back
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default RegisterForm;
