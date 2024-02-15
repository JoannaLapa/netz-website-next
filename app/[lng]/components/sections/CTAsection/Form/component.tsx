'use client';

import Link from 'next/link';
import { FormProps } from './component.types';
import Button from '../../../ui/Button';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import getErrorMessage from '@/app/lib/utlis/getErrorMessage';

const Form: React.FC<FormProps> = (props) => {
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
        setTimeout(() => {
          if (form.current) {
            form.current.reset();
          }
          setMessage('');
        }, 3000);
      } catch (error: unknown) {
        setMessage('error');
        setTimeout(() => {
          setMessage('');
        }, 3000);
        return {
          error: getErrorMessage(error),
        };
      }
    }
  };

  const messageState = (state: string) => {
    if (state === 'success') {
      return <p className="text-primary-100">{props.successMessage}</p>;
    } else if (state === 'error') {
      return <p className="text-danger-100">{props.errorMessage}</p>;
    } else {
      return null;
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="grid w-full max-w-[700px] gap-3"
    >
      <div className="grid w-full gap-3 md:grid-cols-3">
        <div className="w-full">
          <label htmlFor="name">{props.name}*</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        <div className="w-full">
          <label htmlFor="company">{props.company}</label>
          <input type="text" id="company" name="user_company" />
        </div>
        <div className="w-full">
          <label htmlFor="email">{props.email}*</label>
          <input type="email" id="email" name="user_email" required />
        </div>
      </div>
      <div className="flex w-full flex-col">
        <label htmlFor="message">{props.message}*</label>
        <textarea
          id="message"
          name="message"
          maxLength={500}
          rows={5}
          required
        />
      </div>
      <div className="flex">
        <input
          type="checkbox"
          id="privacyPolicy"
          className="sr-only"
          required
        />
        <label
          htmlFor="privacyPolicy"
          className="relative mr-4 inline-block cursor-pointer pl-6 text-xs before:absolute before:-left-0 before:top-1 before:inline-block before:h-3 before:w-3 before:border before:border-neutral-400 before:bg-transparent"
        >
          {props.privacyPolicyText}
          <Link
            href={props.privacyPolicyLink.href}
            className="font-bold underline"
          >
            {props.privacyPolicyLink.title}
          </Link>
        </label>
      </div>
      <div className="h-3">{messageState(message)}</div>
      <Button type="submit" title={props.buttonTitle} styles="self-end mt-1" />
    </form>
  );
};

export default Form;
