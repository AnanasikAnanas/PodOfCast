import FirstIllustr from '../img/Illustration 01.png'
import Ideas from './SVG/Ideas.jsx';
import Avatar from '../img/avatar.png'
import Spotify from './SVG/Spotify.jsx';
import Spiral from './SVG/Spiral.jsx';
import Star from './SVG/Star.jsx';
import Scribble from './SVG/Scribble.jsx';


function AboutLanding() {
    return(
        <section className="flex flex-col items-center pt-[100px] gap-24 container">
            <h1 className="text-5xl font-bold text-center tracking-tighter leading-tight max-w-[735px]">Talk. Listen. Get inspired
            by every minute of it.</h1>
            <div className='flex gap-[200px]'>
                <div className='flex flex-col gap-10 max-w-[472px] items-center justify-center'>
                    <img src={FirstIllustr} alt="" className='w-fit'/>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                </div>
                <div className='flex flex-col gap-10 max-w-[472px] items-center justify-center'>
                    <Ideas></Ideas>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                </div>
            </div>
            <div className='flex flex-col bg-[#F7EDE8] rounded-lg w-[1160px] items-center py-10 gap-10'>
                <Spiral/>
                <h2 className='text-9xl text-center text-[#CD4631] h-[64px]'>“</h2>
                <h3 className='text-4xl font-bold text-center'>One of the best daily podcasts that<br/>
                covers every topic on Spotify.</h3>
                <div className='flex gap-3 items-center'>
                    <div className='flex gap-3 items-center'>
                        <img src={Avatar} alt="" className='rounded-full'/>
                        <p>John Smith</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Spotify/>
                        <p className='font-bold'>Social Community Manager</p>
                    </div>
                </div>
                <Star/>
            </div>
            <Scribble/>
        </section>
    )
}

export default AboutLanding;