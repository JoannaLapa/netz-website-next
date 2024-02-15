import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import getErrorMessage from '@/app/lib/utlis/getErrorMessage';

const useHandleForm = (successMessage: string, errorMessage: string) => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState('');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      try {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
          },
        );
        setMessage('success');
        console.log('message', message);
        setTimeout(() => {
          if (form.current) {
            form.current.reset();
          }
          setMessage('');
        }, 3000);
      } catch (error: unknown) {
        setMessage('error');
        console.log('message', message);
        setTimeout(() => {
          setMessage('');
        }, 3000);
        return {
          error: getErrorMessage(error),
        };
      }
    }
  };

  const messageState = () => {
    console.log('message w messageState', message);
    if (message === 'success') {
      return <p className="text-primary-100">{successMessage}</p>;
    } else if (message === 'error') {
      return <p className="text-danger-100">{errorMessage}</p>;
    } else {
      return null;
    }
  };
  return { form, sendEmail, messageState };
};

export default useHandleForm;
