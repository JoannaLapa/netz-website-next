import Link from 'next/link';
import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Wrapper from '../../ui/Wrapper';
import { CTAsectionProps } from './index';

const CTAsection: React.FC<CTAsectionProps> = (props) => {
  return (
    <Wrapper
      element="div"
      padding
      variant="sectionBig"
      className="lg:px-[10%]"
      id="contactForm"
    >
      <Container
        variant="sectionBig"
        className="border-[5px] border-primary-100 p-9"
      >
        <Container variant="section">
          <div className="flex flex-col">
            <Heading
              title={props.title}
              accentText={props.accentText}
              accentPosition="left"
            />
            <p className="mb-5 font-light text-neutral-300">
              {props.description}
            </p>

            <form className="grid max-w-[700px] gap-3 w-full">
              <div className="grid gap-3 md:grid-cols-3 w-full">
                <div className='w-full'>
                  <label htmlFor="name">{props.namePlaceholder}</label>
                  <input type="text" id="name" />
                </div>
                <div className='w-full'>
                  <label htmlFor="company">{props.companyPlaceholder}</label>
                  <input type="text" id="company" />
                </div>
                <div className='w-full'>
                  <label htmlFor="email">{props.emailPlaceholder}</label>
                  <input type="email" id="email" />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="message">{props.namePlaceholder}</label>
                <textarea
                  id="message"
                  maxLength={500}
                  className="min-h-[200px]"
                />
              </div>
              <div className="flex">
                <input type="checkbox" id="privacyPolicy" className="sr-only" />
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
              <Button
                type="submit"
                title={props.buttonTitle}
                styles="self-end mt-1"
              />
            </form>
          </div>
        </Container>
      </Container>
    </Wrapper>
  );
};

export default CTAsection;
