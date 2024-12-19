import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import laptop1280 from '../images/laptop1280.jpg'
import myPhoto from '../images/myPhoto.PNG'

const Home = () => {

    const aboutRef = useRef(null)

    const scrollToAboutSection = (ref) => {
        ref.current.scrollIntoView({behavior: "smooth"})
    }

    return (
        <main>
            <section className="hero">
                <figure className="hero__Img">
                    <img src={laptop1280} alt="Hero image" />
                </figure>

                <div className="hero__writeUp">
                    <h1>Hey, I'm Anih Victor Nnamdi and I love building beautiful websites</h1>
                </div>

                <div className='hero__btn btn' onClick={() => scrollToAboutSection(aboutRef)}>
                        {/* <div >
                            
                        </div> */}
                        <div className='btn__about'>
                            <MdKeyboardDoubleArrowDown className='btn__dblArr'/>
                            ABOUT ME
                        </div>
                </div>
            </section>

            <section className="about" ref={aboutRef}>
                <figure className='about__figure'>
                    <img src={myPhoto} alt="personal image" />
                </figure>

                <div className="about__writeUp">
                    <h2>About Me</h2>
                    <p>I'm a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean Javascript. When writing Javascript code, I mostly use React, but I can adapt to whatever tools are required. I'm based in Abuja, Nigeria but I'm happy working remotely and have experience in remote teams. When i'm not coding, you'll find me outdoors. I love being out in nature weather that's going for a work or cycling. I'd love you to check out my work.</p>
                    <button>
                        <Link to={'project'}>
                            GO TO PORTFOLIO
                        </Link>
                    </button>
                </div>
            </section>

            <section className='contactMe'>
                <h2 className='align'>Interested in doing a project together?</h2>
                <button><Link to={"contact"}>CONTACT ME</Link></button>
            </section>
            
        </main>
    )
}

export default Home