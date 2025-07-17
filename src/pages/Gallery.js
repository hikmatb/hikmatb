import React from "react";
import "./Gallery.css"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import EmblaCarousel from '../embla/EmblaCarousel'
import '../embla/css/base.css'
import '../embla/css/embla.css'
import './Home.js';
import { Link } from 'react-router-dom';

const OPTIONS = { loop: true }
const SLIDE_COUNT = 16
const SLIDES = Array.from({ length: SLIDE_COUNT }, (_, i) =>
  require(`../gallery/poster${i + 1}.png`)
)

function Gallery() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
    return (
        <div className="gallery">
            <div className="header">
                <h1>Hikmat Babalola</h1>
                <h3>BSc (Hons) Computer Science Graduate | Open to Work</h3>
                <div className="about-links">
                    <a href="https://github.com/hikmatb" target="_blank" rel="noopener noreferrer" className="link-button">
                        <img src={require('../images/github.png')} alt="GitHub" />
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/hikmat-babalola/" target="_blank" rel="noopener noreferrer" className="link-button">
                        <img src={require('../images/linkedin.png')} alt="LinkedIn" />
                        LinkedIn
                    </a>
                    <a href={require('../files/CV.pdf')} target="_blank" rel="noopener noreferrer" className="link-button">
                        <img src={require('../images/file.png')} alt="PDF" />
                        My CV
                    </a>
                    <Link to="/" className="link-button">
                        <img src={require('../images/home.png')} alt="Home" />
                        Home
                    </Link>
                </div>
            </div>
            <div className="gallery-content">
                <div className="gallery-header">
                    <h1>Gallery</h1>
                </div>
                <p className="introduction">
                    During my time as Public Relations Officer for 2 UCC societies, I made various posters<br /> to promote events on the social media accounts of the societies. Here are a couple of the posters:
                </p>
                <div className="embla" ref={emblaRef}>
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </div>
            </div>
        </div>
    );
}

export default Gallery;