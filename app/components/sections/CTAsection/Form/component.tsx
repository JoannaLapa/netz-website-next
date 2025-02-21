'use client';

import Link from 'next/link';
import { FormProps } from './component.types';
import Button from '../../../ui/Button';
import useHandleForm from './hooks/useHandleForm';

const Form: React.FC<FormProps> = (props) => {
  const { form, sendEmail, messageState } = useHandleForm(
    props.successMessage,
    props.errorMessage,
  );

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
      <div className="h-3">{messageState()}</div>
      <Button
        type="submit"
        title={props.buttonTitle}
        styles="self-end mt-1"
        variant="primary"
      />
    </form>
  );
};

export default Form;
