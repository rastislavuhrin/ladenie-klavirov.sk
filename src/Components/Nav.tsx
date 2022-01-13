import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import { appear } from './Landing';

export const Nav = (props: Props) => {
   const { logo, itemsCount, items } = props;

   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const ref = useRef(null);
   const handleClickOutside = () => {
      setIsMenuOpen(!isMenuOpen);
   };
   useOnClickOutside(ref, handleClickOutside);

   return (
      // <div className='flex flex-col items-center w-full h-full sm:justify-center sm:justify-self-center '>
      <DivContainer>
         <ul className='z-20 items-center hidden sm:space-x-8 sm:flex'>
            <Li>
               <Link to='#experience' aria-label='Skúsenosti'>
                  Skúsenosti
               </Link>
            </Li>
            <Li>
               <Link to='#aboutMe' aria-label='O mne'>
                  O mne
               </Link>
            </Li>
            <Li>
               <Link aria-label='logo' to='/'>
                  <StaticImage
                     src='../images/logo-white.png'
                     alt='logo'
                     className='w-20'
                     placeholder='none'
                  />
               </Link>
            </Li>
            <Li>
               <Link to='/contact' aria-label='Kontakt'>
                  Kontakt
               </Link>
            </Li>
            <Li>
               <Link aria-label='Vzdelanie' to='#education'>
                  Vzdelanie
               </Link>
            </Li>
         </ul>

         <div className='flex justify-between w-full px-8 py-3 sm:hidden'>
            <StaticImage
               src='../images/logo-white.png'
               alt='logo'
               className='relative w-20 top-1'
               placeholder='none'
            />
            <button
               aria-label='Open Menu'
               title='Open Menu'
               className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
               onClick={() => setIsMenuOpen(true)}>
               <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                  <path
                     fill='currentColor'
                     d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                  />
                  <path
                     fill='currentColor'
                     d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                  />
                  <path
                     fill='currentColor'
                     d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                  />
               </svg>
            </button>
            <AnimatePresence>
               {isMenuOpen && (
                  <motion.div
                     ref={ref}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className=' p-5 flex flex-col rounded-bl-xl rounded shadow-sm absolute top-0 right-0 z-40 w-1/2 bg-gradient-to-r via-[#ffd2b8] from-[#ffeac2] to-[#feac7c] '>
                     <button
                        title='Close Menu'
                        className=' self-end  p-2 mt-1.5 mr-2.5 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}>
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                           <path
                              fill='currentColor'
                              d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                           />
                        </svg>
                     </button>
                     <nav>
                        <ul className='space-y-4'>
                           <Li>
                              <Link
                                 to='#experience'
                                 onClick={() => setIsMenuOpen(false)}
                                 aria-label='Skúsenosti'>
                                 Skúsenosti
                              </Link>
                           </Li>
                           <Li>
                              <Link
                                 to='#aboutMe'
                                 onClick={() => setIsMenuOpen(false)}
                                 aria-label='O mne'>
                                 O mne
                              </Link>
                           </Li>
                           <Li>
                              <Link
                                 to='#contact'
                                 onClick={() => setIsMenuOpen(false)}
                                 aria-label='Kontakt'>
                                 Kontakt
                              </Link>
                           </Li>
                           <Li>
                              <Link
                                 to='#education'
                                 onClick={() => setIsMenuOpen(false)}
                                 aria-label='Vzdelanie'>
                                 Vzdelanie
                              </Link>
                           </Li>
                        </ul>
                     </nav>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </DivContainer>
   );
};
// </div>
{
   /* <div className='z-50 w-full h-2 bg-white bg-gradient-to-b to-[#ffb387] from-[#3e3e3e]'></div> */
}

const DivContainer = tw(
   motion.nav
)` relative z-30 flex items-center w-full sm:py-8  bg-[#1c1c1c] 
 first-letter:px-4 sm:max-w-full md:px-24 lg:px-8
  sm:justify-center sm:justify-self-center lg:space-x-16 `;

const A = tw(
   motion.a
)`z-20 font-medium tracking-wide text-black transition-all duration-200 hover:text-gray-800`;

const Li = tw(
   motion.li
)` transition-all duration-300 hover:transform hover:scale-110 text-[#ffffffea] `;

interface Props {
   logo?: IGatsbyImageData;
   itemsCount?: number;
   items?: { [key: string]: string };
}
