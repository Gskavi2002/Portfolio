import HomeImg from '../assests/home.png';
import { AiOutlineTwitter,AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
export default function Home(){
    return <section id='home' className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='w-1/2 text-white text-6xl font-home-font'>Hi, <br/>I'm <span className='text-black'>Kavi</span>
                    <p className='text-2xl'>I'm a Front-End developer </p>
                </h1>
                <div className='flex py-10'>
                    <a href="#" className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
                    <a href="#" className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                    <a href="#" className='hover:text-white'><AiOutlineInstagram size={40}/></a>
                </div>
            </div>
            <img className='md:w-1/3 ' src={HomeImg} />
        </section>
}