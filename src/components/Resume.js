import ResumeImg from '../assests/resume.png'
export default function Resume () {
    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='md:w-1/2 py-5 flex justify-center'>
            <img  className=' size-[500px] md:size-[500px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-black'>
                <h1 className='text-4xl border-b-4 border-[rgb(103,126,9)] mb-5 w-[125px] font-bold font-home-font'>Resume</h1>
                <p className='pb-4 mb-5'>
                    You can view my resume here <a className='btn' href='#'>Download</a>             
                </p>

            </div>
        </div>
    </section>
}