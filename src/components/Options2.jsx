"use client"
import React, { useRef, useEffect } from 'react'


const dummy = [
    {
        img: '/home_scroll_image1.png',
        title: 'Targeted Exposure',
        desc: 'Showcase your app to users who are genuinely interested in your niche.'
    },
    {
        img: '/home_scroll_image2.png',
        title: 'Measurable Results',
        desc: 'Track the performance of your ads with real-time analytics & engagement data.'
    },
    {
        img: '/home_scroll_image3.png',
        title: 'Flexible Packages',
        desc: 'Choose from a range of advertising packages tailored to your budget and goals.'
    },
    
]

const Options2 = () => {
  const contentRef = useRef(null);
  const indicatorRef = useRef(null);

  const handleScroll = () => {
    if (contentRef.current && indicatorRef.current) {
      const contentScrollLeft = contentRef.current.scrollLeft;
      indicatorRef.current.style.transform = `translateX(${contentScrollLeft}px)`;
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className='h-[calc(60vh)] md:h-[calc(80vh)]'>
      <div className='w-[calc(87vw)] ml-8 md:ml-24 overflow-x-auto no-scrollbar no-scrollbar-other' ref={contentRef}>
        <div className='w-[calc(160vw)] md:w-[calc(113vw)] flex'>
          {dummy.map((item, i) => (
            <div key={i} className='mr-10'>
              <div className='py-4'>
                <h1 className='text-xl md:text-3xl font-semibold mb-2'>{item.title}</h1>
                <p className='md:text-xl'>{item.desc}</p>
              </div>
              <div>
                <img src={item.img} alt='home_scroll_imgs'/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className='flex justify-center mt-8'>
        <div className='w-28 h-2 bg-red-100 rounded-xl overflow-hidden'>
          <div className='w-14 h-2 bg-orange-500 rounded-xl' ref={indicatorRef}></div>
        </div>
      </div>
    </div>
  );
};

export default Options2;
