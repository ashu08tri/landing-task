import React from 'react'

const dummy = [
    {
        img: '/gear.png',
        title: 'Data Insights',
        desc: 'Utilize interactive ad formats for higher user engagement and conversion rates.'
    },
    {
        img: '/group_user_Fill.png',
        title: 'Subscription Integration',
        desc: 'Track the performance of your ads with real-time analytics and engagement data.'
    },
    {
        img: '/optimization.png',
        title: 'Optimization',
        desc: 'Use analytics to refine your campaigns and maximize effectiveness lorem epsim.'
    },
    {
        img: '/targeting.png',
        title: 'Precise Targeting',
        desc: 'Track the performance of your ads with real-time analytics and engagement data.'
    },
]


function Options() {
    return (
        <div className='h-[calc(90vh)] md:h-screen flex justify-center items-center'>
            
        <div className='w-full px-8 md:px-24'>
            {/*text container */}
            <h1 className='text-base md:text-xl font-playfair md:pb-5 font-bold text-black'>WHY CHOOSE US</h1>
            <div className='w-full md:w-3/4 md:mb-16'>
                <p className='text-2xl md:text-5xl font-playfair text-opacity-blue font-semibold'>Track your payments on the go with the
                    best way possible</p>
            </div>
            {/*content*/}
            <div className='mt-4 md:h-3/4 flex flex-col md:flex-row items-center justify-center'>
                {dummy.slice(0,2).map((item,i) => 
                <div key={i} className='relative h-full mx-3 flex justify-center items-center gap-6'>
                    <div className='h-20 w-24 md:h-28 md:w-32 flex justify-center  items-center bg-gradient-to-br from-opacity-blue to-blue-300 rounded-2xl p-4 my-4'>
                    <img src={item.img} alt="content1" />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-base md:text-xl font-bold'>{item.title}</h1>
                        <p className='text-sm md:text-base'>{item.desc}</p>
                    </div>
                </div>)}
            </div>
            <div className='my-2 md:h-3/4 flex flex-col md:flex-row items-center justify-center'>
                {dummy.slice(2).map((item,i) => 
                <div key={i} className='relative h-full mx-3 flex justify-center items-center gap-6'>
                    <div className='h-20 w-24 md:h-28 md:w-32 flex justify-center  items-center bg-gradient-to-br from-opacity-blue to-blue-300 rounded-2xl p-4 my-4'>
                    <img src={item.img} alt="content2" />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-base md:text-xl font-bold'>{item.title}</h1>
                        <p className='text-sm md:text-base'>{item.desc}</p>
                    </div>
                </div>)}
            </div>
            </div>
        </div>
    )
}

export default Options;