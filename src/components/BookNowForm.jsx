import React, { useState } from 'react';
import { Loader2, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { trackEvent } from '@/lib/analytics';

const SERVICE_OPTIONS = [
  'PC & Mac Optimization',
  'Scam & Virus Shield',
  'Mobile/Tablet Care',
  'Home Network Setup',
  'Core Membership Plan',
  'Something else'
];

const initialState = {
  fullName: '',
  phone: '',
  email: '',
  service: SERVICE_OPTIONS[0],
  preferredTime: '',
  message: ''
};

const BookNowForm = ({ className = '' }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = 'Name is required';
    if (!formData.phone.trim()) nextErrors.phone = 'Phone is required';
    if (!formData.email.trim()) nextErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Invalid email format';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast({
        title: 'Missing information',
        description: 'Please fill in the required fields marked with *.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    trackEvent('book_now_submit', { service: formData.service });

    try {
      const res = await fetch('/api/book-now', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Request failed');

      toast({
        title: 'Request received',
        description: "We'll reach out within 24 hours to confirm your appointment."
      });
      setFormData(initialState);
    } catch (err) {
      const subject = `Booking Request: ${formData.service}`;
      const body = [
        `Name: ${formData.fullName}`,
        `Phone: ${formData.phone}`,
        `Email: ${formData.email}`,
        `Preferred Time: ${formData.preferredTime}`,
        `Message: ${formData.message}`
      ].join('\n');
      window.location.href = `mailto:helpdesk@rahvion.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      toast({
        title: 'Opening email fallback',
        description: "We couldn't reach our booking service, so we've prepared an email for you instead."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (error) =>
    `w-full bg-[#0B0B0D] border ${error ? 'border-red-500 focus:ring-red-500' : 'border-[#3A3F47] focus:ring-[#D4AF37]'} rounded-md p-3 text-[#F5F5F5] focus:ring-2 outline-none transition-all placeholder:text-[#3A3F47]`;

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`} aria-label="Book a consultation">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="book-fullName" className="text-sm font-medium text-[#A0A0A0] block mb-2">
            Full Name <span className="text-[#D4AF37]">*</span>
          </label>
          <input
            id="book-fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className={inputClasses(errors.fullName)}
            placeholder="Jane Doe"
            required
          />
          {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="book-phone" className="text-sm font-medium text-[#A0A0A0] block mb-2">
            Phone <span className="text-[#D4AF37]">*</span>
          </label>
          <input
            id="book-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses(errors.phone)}
            placeholder="(410) 555-0123"
            required
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="book-email" className="text-sm font-medium text-[#A0A0A0] block mb-2">
          Email <span className="text-[#D4AF37]">*</span>
        </label>
        <input
          id="book-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses(errors.email)}
          placeholder="jane@example.com"
          required
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="book-service" className="text-sm font-medium text-[#A0A0A0] block mb-2">
            Service Interest
          </label>
          <select
            id="book-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={inputClasses()}
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="book-preferredTime" className="text-sm font-medium text-[#A0A0A0] block mb-2">
            Preferred Date/Time
          </label>
          <input
            id="book-preferredTime"
            name="preferredTime"
            type="text"
            value={formData.preferredTime}
            onChange={handleChange}
            className={inputClasses()}
            placeholder="e.g., Weekdays after 5pm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="book-message" className="text-sm font-medium text-[#A0A0A0] block mb-2">
          What can we help with? (optional)
        </label>
        <textarea
          id="book-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className={inputClasses()}
          placeholder="Briefly describe the issue or goal..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#D4AF37] text-[#0B0B0D] hover:bg-[#F5F5F5] font-bold py-6 rounded-xl transition-all"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Booking...
          </>
        ) : (
          <>
            <CalendarCheck className="mr-2 h-5 w-5" /> Book Now
          </>
        )}
      </Button>
    </form>
  );
};

export default BookNowForm;
