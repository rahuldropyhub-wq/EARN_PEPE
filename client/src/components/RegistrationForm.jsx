import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User, Mail, Phone, Wallet } from 'lucide-react';
import Input from './ui/Input';
import Button from './ui/Button';
import SuccessModal from './SuccessModal';
import { submitRegistration } from '../services/registrationService';

const schema = z.object({
  fullName: z
    .string()
    .min(2, 'Please enter your full name (minimum 2 characters).'),
  email: z
    .string()
    .email('Please enter a valid email address.'),
  contactNumber: z
    .string()
    .regex(/^\d{10}$/, 'Enter a valid 10-digit mobile number.'),
  phonePeNumber: z
    .string()
    .regex(/^\d{10}$/, 'Enter a valid 10-digit PhonePe number.'),
  sameAsContact: z.boolean().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Please accept the terms to continue.' }),
  }),
});

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState({ open: false, registrationId: null });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      sameAsContact: false,
      consent: false,
    },
  });

  const contactNumber = watch('contactNumber');
  const sameAsContact = watch('sameAsContact');

  // When "same as contact" checkbox changes
  const handleSameAsContact = (e) => {
    const checked = e.target.checked;
    setValue('sameAsContact', checked);
    if (checked && contactNumber) {
      setValue('phonePeNumber', contactNumber, { shouldValidate: true });
    }
  };

  // Keep PhonePe synced if checkbox is on and contact changes
  const handleContactChange = (e) => {
    if (sameAsContact) {
      setValue('phonePeNumber', e.target.value, { shouldValidate: true });
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await submitRegistration({
        fullName: data.fullName,
        email: data.email,
        contactNumber: data.contactNumber,
        phonePeNumber: data.phonePeNumber,
      });
      if (result.success) {
        setSuccessModal({ open: true, registrationId: result.registrationId });
      }
    } catch (err) {
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        id="registration-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="EarnPepe Campaign Registration Form"
      >
        <div className="flex flex-col gap-5">
          {/* Full Name */}
          <Input
            id="fullName"
            label="Full Name"
            icon={User}
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            error={errors.fullName?.message}
            {...register('fullName')}
          />

          {/* Email */}
          <Input
            id="email"
            label="Email Address"
            icon={Mail}
            type="email"
            placeholder="Enter your email address"
            autoComplete="email"
            error={errors.email?.message}
            {...register('email')}
          />

          {/* Contact Number */}
          <Input
            id="contactNumber"
            label="Contact Number"
            icon={Phone}
            type="tel"
            placeholder="Enter your 10-digit mobile number"
            autoComplete="tel"
            inputMode="numeric"
            maxLength={10}
            error={errors.contactNumber?.message}
            {...register('contactNumber', {
              onChange: handleContactChange,
            })}
          />

          {/* PhonePe Number */}
          <div>
            <Input
              id="phonePeNumber"
              label="PhonePe Number"
              icon={Wallet}
              type="tel"
              placeholder="Enter your PhonePe registered number"
              autoComplete="tel"
              inputMode="numeric"
              maxLength={10}
              error={errors.phonePeNumber?.message}
              {...register('phonePeNumber')}
            />
            {/* Same as contact checkbox */}
            <label className="flex items-center gap-2.5 mt-2.5 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={sameAsContact}
                  onChange={handleSameAsContact}
                  className="sr-only peer"
                  id="sameAsContact"
                />
                <div className="w-4 h-4 rounded border border-green-500/40 bg-black/50 peer-checked:bg-green-500 peer-checked:border-green-500 transition-all flex items-center justify-center">
                  {sameAsContact && (
                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors" htmlFor="sameAsContact">
                Same as Contact Number
              </span>
            </label>
          </div>

          {/* Consent */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative mt-0.5 shrink-0">
                <input
                  type="checkbox"
                  id="consent"
                  className="sr-only peer"
                  {...register('consent')}
                />
                <div className="w-5 h-5 rounded border border-green-500/40 bg-black/50 peer-checked:bg-green-500 peer-checked:border-green-500 transition-all flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-black opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span className="text-sm text-gray-400 leading-snug group-hover:text-gray-300 transition-colors">
                I confirm that the information provided is correct and agree to the{' '}
                <a
                  href="#disclaimer"
                  onClick={(e) => { e.preventDefault(); document.getElementById('disclaimer')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-green-400 underline underline-offset-2 hover:text-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded"
                >
                  Terms &amp; Conditions
                </a>{' '}
                and{' '}
                <a
                  href="#disclaimer"
                  onClick={(e) => { e.preventDefault(); document.getElementById('disclaimer')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-green-400 underline underline-offset-2 hover:text-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>
            {errors.consent?.message && (
              <p role="alert" className="text-xs text-red-400 flex items-center gap-1 mt-1.5 ml-8">
                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.consent.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            loading={loading}
            disabled={loading}
            className="w-full justify-center mt-2 whitespace-nowrap text-[12px] sm:text-base"
            aria-label="Submit registration and continue to EarnPepe"
          >
            {loading ? 'Submitting...' : 'SUBMIT & CONTINUE TO EARNPEPE →'}
          </Button>

          <p className="text-center text-xs text-gray-600">
            No registration fee required. By submitting, you agree to the campaign terms.
          </p>
        </div>
      </form>

      <SuccessModal
        open={successModal.open}
        registrationId={successModal.registrationId}
        onClose={() => setSuccessModal({ open: false, registrationId: null })}
      />
    </>
  );
}
