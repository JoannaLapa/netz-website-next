type FormProps = {
  name: string;
  company: string;
  email: string;
  message: string;
  privacyPolicyText: string;
  privacyPolicyLink: PrivacyPolicyLink;
  buttonTitle: string;
  errorMessage: string;
  successMessage: string;
};

type PrivacyPolicyLink = {
  href: string;
  title: string;
};
export type { FormProps };
