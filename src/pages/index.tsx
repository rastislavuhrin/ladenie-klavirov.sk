import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AnimOnScroll,
  Footer,
  Hero2,
  Landing,
  TextImg,
} from 'Components/export';
import SEO from 'Components/seo.js';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import '../../global.css';
import { Clef } from '../svg/Clef';

const IndexPage = () => {
  let width = 0;
  if (typeof window !== 'undefined') {
    const { innerWidth } = window;
    width = innerWidth;
  }
  const data = useStaticQuery(graphql`
    {
      a: file(relativePath: { eq: "freeTime.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      b: file(relativePath: { eq: "insidePiano.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      c: file(relativePath: { eq: "pianoCloseLook.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      d: file(relativePath: { eq: "luxuryPiano.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      e: file(relativePath: { eq: "pianoOutSide.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      f: file(relativePath: { eq: "pianoMotherWithChild.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const hero1freeTime = getImage(data.a);
  const hero1insidePiano = getImage(data.b);
  const hero2img1 = getImage(data.c);
  const hero2img2 = getImage(data.d);
  const hero2img3 = getImage(data.e);
  const hero2img4 = getImage(data.f);

  return (
    <>
      <SEO />
      <Landing containerStyles="" />
      <Clef />

      <main id="mainContent" className=" flex flex-col">
        {hero2img1 && hero2img2 && hero2img3 && hero2img4 && (
          <Hero2
            img1={hero2img1}
            img2={hero2img2}
            img3={hero2img3}
            img4={hero2img4}
            textWrapperStyles="!w-[70%]"
            containerStyles="padding-Y-3-6rem"
          />
        )}
        <div className="bg-gradient-to-b from-[#fafdfd] via-[#edf2ff] to-[#e7eefd]">
          {hero1freeTime && (
            <AnimOnScroll>
              <TextImg
                headerText="P??r slov o mne"
                paragraphText="Mojim najv????????m hobby sa za posledn??ch 5 rokov stalo fotenie. Podarilo sa mi dosiahnu?? prvenstv?? ??i u?? v slovensk??ch, ale aj medzin??rodn??ch s????a??iach. Najlep??ie fotky s?? prezentovan?? na vo??ne dostupn??ch do??asn??ch v??stav??ch ??i m??ze??ch."
                img={hero1freeTime}
                alt="Vo vo??nom ??ase"
                imgStyle="max-w-[25rem]"
                id="aboutMe"
                containerStyles="padding-Y-3-6rem "
              />
            </AnimOnScroll>
          )}

          {hero1insidePiano && (
            <AnimOnScroll>
              <TextImg
                reversed
                headerText="Vzdelanie"
                paragraphText="Vy??tudoval som odborn?? ??kolu v Hradci Kr??lov??. Stal som sa tam mechanikom hudobn??ch n??strojov, nau??il sa opravi?? klav??r spr??vne tak, aby fungoval najbli????ie roky."
                img={hero1insidePiano}
                alt="Vn??tro klav??ru"
                imgStyle="max-w-[25rem]"
                id="education"
                containerStyles="padding-Y-3-6rem "
              />
            </AnimOnScroll>
          )}
        </div>
      </main>
      <Footer />
      {/* Fixed round Phone button */}
      {width < 640 && (
        <div
          onClick={() => window.open('tel:+421905405802', '_self')}
          className="fixed bottom-5 right-5 z-50 flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-[#dfe4ed]"
        >
          <FontAwesomeIcon
            size="lg"
            className="flex text-[#17303b]"
            icon={faPhone}
          />
        </div>
      )}
    </>
  );
};

export default IndexPage;
