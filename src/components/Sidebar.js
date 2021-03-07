import React from 'react'

import facebook from '../Assets/Icons/facebook.svg'
import instagram from '../Assets/Icons/instagram.svg'
import github from '../Assets/Icons/github.svg'
import pin from '../Assets/Icons/pin.svg'
// import tie from '../Assets/Icons/tie.svg'
import mightycoder from '../Assets/Images/Dp.jpg'
// import resume from '../Assets/resume.pdf'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:yellasaiakhil@gmail.com")
    }
    return (
        <div className="sidebar">
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Sai Akhil </div>
            <div className="sidebar__name">Full Stack Developer </div>
            {/* <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a> */}
            <figure className="sidebar__social-icons my-2">
                <a href=""><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href=""><img src={instagram} alt="instagram" className="sidebar__icon" /></a>
            </figure>
            <div >
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/akki4134"><img src={github} alt="github" className="sidebar__icon" /> Github Projects</a>
                </div>
                <div className="sidebar__item">
                    Hyderbad, India</div>
                <div className="sidebar__item">8801007460</div>
                <div className="sidebar__item">yellasaiakhil@gmail.com</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email me</div>
        </div>
    )
}

export default Sidebar;