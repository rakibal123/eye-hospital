import React, { useState } from 'react';
import { siteData } from '../data/siteData';

export const BookingForm = () => {
  const { booking, services } = siteData;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^(\+?880|0)?1[3-9]\d{8}$/.test(formData.phone.replace(/[\s-]/g, '')) && formData.phone.length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      newErrors.date = 'Preferred Date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Backend integration hook
      // e.g., await fetch('/api/appointments', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise((resolve) => setTimeout(resolve, 600));

      console.log('Appointment Submitted:', formData);
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section className="book" id="book">
      <div className="wrap">
        <div>
          <p className="eyebrow">{booking.eyebrow}</p>
          <h2>{booking.title}</h2>
          <p className="body">{booking.body}</p>
          <a className="btn teal" href="#book">
            {booking.cta.label}
          </a>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <h3>{booking.formTitle}</h3>

          {isSuccess ? (
            <div className="full bg-[#e3f4f2] text-[#0a3d5c] p-5 rounded-lg border border-[#1fb5a3] my-2 text-center">
              <div className="w-10 h-10 bg-[#1fb5a3] text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                ✓
              </div>
              <h4 className="font-bold text-base mb-1">Appointment Request Received!</h4>
              <p className="text-xs text-[#12324a] mb-4">
                Thank you, <strong>{formData.name}</strong>. We have received your booking request for{' '}
                <strong>{formData.service || 'Eye Consultation'}</strong> on <strong>{formData.date}</strong>. Our team will contact you shortly at{' '}
                <strong>{formData.phone}</strong>.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="btn navy sm"
                style={{ background: '#0a3d5c', color: '#fff' }}
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <>
              <label>
                Full Name *
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </label>

              <label>
                Phone Number *
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </label>

              <label>
                Select Service
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select Service</option>
                  {services.items.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </label>

              <label className="full">
                Preferred Date *
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={errors.date ? 'error' : ''}
                  aria-invalid={!!errors.date}
                />
                {errors.date && <span className="error-text">{errors.date}</span>}
              </label>

              <button
                className="btn navy full"
                type="submit"
                disabled={isSubmitting}
                style={{ background: '#0a3d5c', color: '#fff' }}
              >
                {isSubmitting ? 'Submitting...' : booking.submitText}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};
