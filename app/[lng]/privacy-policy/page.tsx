import Link from 'next/link';
import { languages, fallbackLng } from '../../i18n/settings';
import { useTranslation } from '../../i18n';
import Wrapper from '@/app/components/ui/Wrapper';
import Container from '@/app/components/ui/Container';
import Header from '@/app/components/sections/Header';
import ListItem from '@/app/components/ui/ListItem';
import BoldedContentBox from '@/app/components/ui/BoldedContentBox';
import HeadingWithContent from '@/app/components/ui/HeadingWithContent';

const summaryContent = new Array(6).fill('');
const personalInformationListItems = new Array(8).fill('');
const privacyPolicyPoint2ListItems = new Array(6).fill('');

const privacyPolicyPoint3ListItems = new Array(4).fill('');

export default async function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t, i18n } = await useTranslation(lng, 'privacyPolicy');

  return (
    <>
      <Header lng={lng} homeLink={t('homeLink')} href={`/${lng}`} />
      <main className="pt-20 lg:pt-[120px]">
        <Wrapper element="div" variant="section">
          <Container variant="sectionSmall">
            <h1 className="text-2xl lg:text-3xl">{t('privacyHeading')}</h1>
            <p className="py-2">{t('updateDateInfo')}</p>
            <p>{t('privacyPolicyUsageContentIntroduction')}</p>
            <ul>
              <ListItem
                content={t('privacyPolicyUsageContent.0')}
                href="https://netz-website-next.vercel.app"
                linkText={t('privacyPolicyUsageLinkText')}
              />
              <ListItem content={t('privacyPolicyUsageContent.1')} />
            </ul>
            <BoldedContentBox
              importantNotice={t('questionsOrConcerns.title')}
              content={t('questionsOrConcerns.content')}
            />

            <h2 className="py-2 text-xl lg:text-2xl">{t('summaryTitle')}</h2>
            <strong className="py-2">{t('summaryStrong')}</strong>
            {summaryContent.map((_, index) => (
              <BoldedContentBox
                content={t(`summaryContent.${index}.content`)}
                importantNotice={t(`summaryContent.${index}.strong`)}
                key={index}
              />
            ))}

            <HeadingWithContent
              heading={t('privacyPolicyPoint1.heading')}
              subheading={t('privacyPolicyPoint1.subheading')}
              inShortText={t('privacyPolicyPoint1.inShort')}
              content={t('privacyPolicyPoint1.content')}
            >
              <>
                <BoldedContentBox
                  importantNotice={t(
                    'personalInformationBold1.importantNotice',
                  )}
                  content={t('personalInformationBold1.content')}
                />

                <ul>
                  {personalInformationListItems.map((item, index) => (
                    <ListItem
                      content={t(`personalInformationListItems.${index}`)}
                      key={index}
                    />
                  ))}
                </ul>
                <BoldedContentBox
                  content={t('personalInformationBold2.content')}
                  importantNotice={t(
                    'personalInformationBold2.importantNotice',
                  )}
                />
              </>
            </HeadingWithContent>

            <HeadingWithContent
              heading={t('privacyPolicyPoint2.heading')}
              inShortText={t('privacyPolicyPoint2.inShort')}
              content={t('privacyPolicyPoint2.content')}
            >
              <ul>
                {privacyPolicyPoint2ListItems.map((item, index) => (
                  <li key={index} className="first:mt-4 last:mb-4">
                    <BoldedContentBox
                      content={t(
                        `privacyPolicyPoint2ListItems.${index}.content`,
                      )}
                      importantNotice={t(
                        `privacyPolicyPoint2ListItems.${index}.importantNotice`,
                      )}
                      icon
                    />
                  </li>
                ))}
              </ul>
            </HeadingWithContent>

            <HeadingWithContent
              heading={t('privacyPolicyPoint3.heading')}
              inShortText={t('privacyPolicyPoint3.inShort')}
              content={t('privacyPolicyPoint3.content')}
            >
              <ul>
                {privacyPolicyPoint3ListItems.map((item, index) => (
                  <li key={index} className="first:mt-4 last:mb-4">
                    <BoldedContentBox
                      content={t(
                        `privacyPolicyPoint3ListItems.${index}.content`,
                      )}
                      importantNotice={t(
                        `privacyPolicyPoint3ListItems.${index}.importantNotice`,
                      )}
                      icon
                    />
                  </li>
                ))}
              </ul>
            </HeadingWithContent>
            <HeadingWithContent
              heading={t('privacyPolicyPoint4.heading')}
              inShortText={t('privacyPolicyPoint4.inShort')}
            ></HeadingWithContent>
            <ul className="my-4">
              <li>
                <BoldedContentBox
                  icon
                  content={t('privacyPolicyPoint4BoldedContentList1.0.content')}
                  importantNotice={t(
                    'privacyPolicyPoint4BoldedContentList1.0.importantNotice',
                  )}
                />
              </li>
              <li>
                <BoldedContentBox
                  icon
                  content={t('privacyPolicyPoint4BoldedContentList1.1.content')}
                  importantNotice={t(
                    'privacyPolicyPoint4BoldedContentList1.1.importantNotice',
                  )}
                />
              </li>
            </ul>
            <p>{t('privacyPolicyPoint4Content')}</p>
            <div className="my-4">
              <BoldedContentBox
                icon
                content={t('privacyPolicyPoint4BoldedContentList2.content')}
                importantNotice={t(
                  'privacyPolicyPoint4BoldedContentList2.importantNotice',
                )}
              />
            </div>
            <HeadingWithContent
              heading={t('privacyPolicyPoint5.heading')}
              inShortText={t('privacyPolicyPoint5.inShort')}
              content={t('privacyPolicyPoint5.content')}
            ></HeadingWithContent>

            <HeadingWithContent
              heading={t('privacyPolicyPoint6.heading')}
              inShortText={t('privacyPolicyPoint6.inShort')}
              content={t('privacyPolicyPoint6.content')}
            ></HeadingWithContent>

            <HeadingWithContent
              heading={t('privacyPolicyPoint7.heading')}
              inShortText={t('privacyPolicyPoint7.inShort')}
              content={t('privacyPolicyPoint7.content')}
            />

            <HeadingWithContent
              heading={t('privacyPolicyPoint8.heading')}
              inShortText={t('privacyPolicyPoint8.inShort')}
              content={t('privacyPolicyPoint8.content')}
            ></HeadingWithContent>

            <HeadingWithContent
              heading={t('privacyPolicyPoint9.heading')}
              inShortText={t('privacyPolicyPoint9.inShort')}
              content={t('privacyPolicyPoint9.content')}
            />

            <HeadingWithContent
              heading={t('privacyPolicyPoint10.heading')}
              inShortText={t('privacyPolicyPoint10.inShort')}
              content={t('privacyPolicyPoint10.content')}
            />
            <HeadingWithContent
              heading={t('privacyPolicyPoint11.heading')}
              content={t('privacyPolicyPoint11.content')}
            />

            <HeadingWithContent
              heading={t('privacyPolicyPoint12.heading')}
              inShortText={t('privacyPolicyPoint12.inShort')}
              content={t('privacyPolicyPoint12.content')}
            />

            <HeadingWithContent
              heading={t('privacyPolicyPoint13.heading')}
              content={t('privacyPolicyPoint13.content')}
            >
              <address className="my-6">
                Anita Surma und Michael Szczerbak Netz GbR Im Weimer 8, 61137
                Schöneck, DE Schöneck, Hessen, 61137 DE
              </address>
            </HeadingWithContent>

            <HeadingWithContent
              heading={t('privacyPolicyPoint14.heading')}
              content={t('privacyPolicyPoint14.content')}
            />

            <p className="pb-20 pt-4">
              {t('infoAboutTermlyGenerator')}{' '}
              <Link href="https://termly.io/products/privacy-policy-generator/">
                Termly Privacy Policy Generator
              </Link>
            </p>
          </Container>
        </Wrapper>
      </main>
    </>
  );
}
