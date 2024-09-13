import websiteImg1 from '../assests/webecom.jpg'
import websiteImg2 from '../assests/food.jpg'
import websiteImg3 from '../assests/bus.jpg'
export default function Projects () {
    return <section id='projects' className="flex flex-col px-5 py-20 justify-center bg-primary text-white" >
        <div className="w-full">
            <div className=" flex flex-col px-10 py-5">
                <h1 className='text-4xl border-b-4 border-[#000000] mb-5 w-[135px] font-bold font-home-font'>Projects</h1>
                <p>These are some of my projects. I have built these with front-end like HTML, CSS, Javascript, ReactJs.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-20'>
                <div className='relative'>
                    <img className='h-[250px] w-[400px]' src={websiteImg1}/>
                        <div className='project-desc'>
                            <p className='text-center mt-[80px] px-5 py-5'>E-Commerce website build with Basic Front-end.</p>
                        </div>
                </div>
                <div className='relative'>
                    <img className='h-[250px] w-[400px]'src={websiteImg2}/>
                        <div className='project-desc'>
                            <p  className='text-center mt-[80px] px-5 py-5'>Food website build with React.js.</p>
                        </div>
                </div>
                <div className='relative'>
                    <img className='h-[250px] w-[400px]'src={websiteImg3}/>
                        <div className='project-desc'>
                            <p  className='text-center mt-[80px] px-5 py-5'>Bus Booking website build with Basic Front-end.</p>
                        </div>
                </div>
            </div>
        </div>
    </section>
}