import AboutImg from '../assests/about.png'
export default function About () {
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='md:w-1/2 py-5'>
            <img  className='md:size-[600px]' src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-black'>
                <h1 className='text-4xl border-b-4 border-[rgb(103,126,9)] mb-5 w-[160px] font-bold font-home-font'>About Me</h1>
                <p className='pb-4'>
                    Hello! I'm Kavinilavu, a passionate and detail-oriented Frontend Developer with a strong enthusiasm for creating seamless and engaging user experiences. 
                </p>
                
                <p className='pb-4'>
                    Currently, I'm working at VTS Enterprises India Private Limited, where I'm responsible for crafting intuitive and responsive web applications.
                </p>
                    
                <p className='pb-4'>
                    I'm excited to continue growing as a developer and contributing to innovative projects that make a real impact.  When I'm not coding, you can find me exploring new technologies, reading about design patterns, or experimenting with creative side projects.
                </p>
            </div>
        </div>
    </section>
}