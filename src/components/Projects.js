import { Link } from 'react-router-dom'
import tenzieImg from '../images/tenzieSS.png'
import memeGeneratorImg from '../images/memeGenerator2.png'
import pdImg from '../images/pd-design.png'
import contactImg from '../images/contact_design.jpg'
import quizAppImg from '../images/fq_design.jpg'

const Project = () => {
    return (
        <main>
            <h1 className='projectH1'>Projects</h1> 
            <div className='projects'>
                <div className='project'>
                    <figure>
                        <img src={tenzieImg} alt="tenzieImg" />
                    </figure>
                    <p>TENZIE GAME</p>
                    <button className='projectBtn'>
                        <a href="https://tenzigametimetracker.netlify.app/" target='_blank' rel="noopener noreferrer">
                            VISIT WEBSITE
                        </a>
                    </button>
                </div>

                <div className='project'>
                    <figure>
                        <img src={pdImg} alt="progressDashboardImg" />
                    </figure>
                    <p>PROGRESS DASHBOARD</p>
                    <button>
                        <a href="https://progressdashboard.netlify.app/" target='_blank' rel="noopener noreferrer">
                            VISIT WEBSITE
                        </a>
                    </button>
                </div>

                <div className='project'>
                    <figure>
                        <img src={memeGeneratorImg} alt="memeGeneratorImg" />
                    </figure>
                    <p>MEME GENERATOR APP</p>
                    <button>
                        <a href="https://memegeneratorr1.netlify.app/" target='_blank' rel="noopener noreferrer">
                            VISIT WEBSITE
                        </a>
                    </button>
                </div>

                <div className='project'>
                    <figure>
                        <img src={contactImg} alt="contactFormImg" />
                    </figure>
                    <p>CONTACT FORM</p>
                    <button>
                        <a href="https://contactformpage.netlify.app" target='_blank' rel="noopener noreferrer">
                            VISIT WEBSITE
                        </a>
                    </button>
                </div>

                <div className='project'>
                    <figure>
                        <img src={quizAppImg} alt="quizAppImg" />
                    </figure>
                    <p>QUIZ APP</p>
                    <button>
                        <a href="https://quizappdarkandlightmode.netlify.app" target='_blank' rel="noopener noreferrer">
                            VISIT WEBSITE
                        </a>
                    </button>
                </div>
            </div>

            <section className='contactMe'>
                <h2 className='center'>Interested in doing a project together</h2>
                <button><Link to={"/contact"}>CONTACT ME</Link></button>
            </section>

        </main>
    )
}

export default Project