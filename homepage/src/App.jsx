import './App.css';
import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';

export default function App() {

    const isMobile = window.innerWidth <= 480;
    const marginShift = isMobile ? '100vh 0 0 0' : '0 0 0 -40vw';
    const imageLink = 'http://unthynck.me/files/images/';
    const slideNumber = 7;

    const [ openModal, setOpenModal ] = useState(false);
    const [ margin, setMargin ] = useState(marginShift);
    const [ slides, setSlides ] = useState([]);

    const modalStyle = {
        margin: margin
    }

    const modalBlur = {
        filter: `blur(${(openModal ? '6' : '0')}px)`,
        pointerEvents: (openModal ? 'none' : 'auto')
    }

    function getImageLink(i) {
        return `${imageLink + 'band' + i}.jpg`; //'https://example-link/band1.jpg'
    }

    function getImageArray() {
        let i;
        let imageArray = [];
        for (i=1;i<=slideNumber;i++) {
            imageArray.push({
                original: getImageLink(i),
            });
        }
        return imageArray;
    }

    function toggleModal() {
        setOpenModal(openModal => !openModal);
        if (openModal) {
            setMargin(marginShift);
        } else {
            setMargin('0');
        }
    }

    function redirectInTab(link) {
        window.open(link);
    }

    function redirectNewTab(link) {
        //finish this idiot
    }


    useEffect(() => {
        setSlides(slides => getImageArray());
    }, []);


    return (
        <>
            <div className={'modal-popout'} style={modalStyle}>
                <div className={'modal-content-container'}>
                    <div className={'band-title'}>
                        <h2>Unthynck</h2>
                    </div>
                    <button onClick={() => toggleModal()}>Close</button>
                    <div className={'website-links'}>
                        <button onClick={() => redirectInTab('https://unthynck.me/events')}>Upcoming Events ▶</button>
                        <button onClick={() => redirectInTab('https://unthynck.me/members')}>Meet the Band ▶</button>
                        <button onClick={() => redirectInTab('https://unthynck.me/contact')}>Contact Us ▶</button>
                    </div>
                    <div className={'social-links'}>

                    </div>
                    <div className={'modal-footer'}>

                    </div>
                </div>
            </div>

            <div className={'content'} style={modalBlur}>
                <div className={'header'}>
                    <div className={'menu-container'}>
                        <button className={'menu'}
                                onClick={() => toggleModal()}
                        >☰
                        </button>
                    </div>
                    <div className={'band-title'}>
                        <a href={'https://Unthynck.me/'}><h1>Unthynck</h1></a>
                    </div>
                    <div className={'spacer'}></div>
                </div>

                <div className={'gallery-container'}>
                    <ImageGallery items={slides}
                                  lazyLoad={true}
                                  autoPlay={true}/>
                </div>

                <div className={'spotify-plugin'}>
                    <iframe style={{borderRadius: '12px', width: '80%', border: '5px dotted rgb(24, 154, 211)'}}
                            src="https://open.spotify.com/embed/artist/3C3IxXuW9aRAlwvooDiCJM?utm_source=generator"
                            width="50%" height="700" frameBorder="0" allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"></iframe>
                </div>

                <div className={'footer'}>
                    <div className={'footer-copyright-message'}>
                        <span>© Unthynck - All Rights Reserved</span>
                    </div>
                    <div className={'footer-report-message'}>
                        <span>If you experience a problem with our webpage, or can center a div, please contact us at <a>improvement@unthynck.me</a></span>
                    </div>
                </div>
            </div>
        </>
    )
}