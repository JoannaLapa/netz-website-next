'use client';

import Link from 'next/link';
import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Wrapper from '../../ui/Wrapper';
import { CTAsectionProps } from './index';
import Form from './Form/component';

const CTAsection: React.FC<CTAsectionProps> = (props) => {
  return (
    <Wrapper
      element="div"
      padding
      variant="sectionBig"
      className="lg:px-[10%]"
      id="contact"
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

            <Form
              name={props.name}
              company={props.company}
              email={props.email}
              message={props.message}
              privacyPolicyText={props.privacyPolicyText}
              privacyPolicyLink={props.privacyPolicyLink}
              buttonTitle={props.buttonTitle}
              errorMessage={props.errorMessage}
              successMessage={props.successMessage}
            />
          </div>
        </Container>
      </Container>
    </Wrapper>
  );
};

export default CTAsection;
