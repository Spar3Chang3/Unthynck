import './App.css';
import {useEffect, useRef, useState} from 'react';

export default function App() {

    const isMobile = window.innerWidth <= 480;
    const marginShift = isMobile ? '100vh 0 0 0' : '0 0 0 -40vw';
    const imageLink = 'http://unthynck.me/files/images/';
    const imageNumber = 7;

    const currentIndex = useRef(1);
    const slideshowImages = useRef([]);
    const [ openModal, setOpenModal ] = useState(false);
    const [ currentImage, setCurrentImage ] = useState('');
    const [ transitionImage, setTransitionImage ] = useState('');
    const [ transition, setTransition ] = useState(''); //finish this idiot
    const [ margin, setMargin ] = useState(marginShift);

    const currentImageLink = {
        backgroundImage: `url(${currentImage})`,
    }

    const transitionImageLink = {
        backgroundImage: '',
        margin: transition
    }

    const modalStyle = {
        margin: margin
    }

    const modalBlur = {
        filter: `blur(${(openModal ? '6' : '0')}px)`,
        pointerEvents: (openModal ? 'none' : 'auto')
    }

    function setImageArray() {
        let i;
        for (i=1; i <= imageNumber; i++) {
            slideshowImages.current.push(getImageLink(i));
        }
    }


    function clickLeft() {
        if (currentIndex.current > 1) {
            currentIndex.current -= 1;
            setNextImage(currentImage);
            setCurrentImage(getImageLink(currentIndex.current));
            console.log([currentImage, nextImage]);
            console.log(currentIndex.current);
        } else {
            currentIndex.current = imageNumber+1;
            clickLeft();
        }
    }

    function clickRight() {
        if (currentIndex.current < imageNumber) {
            currentIndex.current += 1;
            setCurrentImage(nextImage);
            setNextImage(getImageLink(currentIndex.current + 1));
        } else {
            currentIndex.current = 1;
            setCurrentImage(getImageLink(1));
            setNextImage(getImageLink(2));
        }
    }

    function getImageLink(i) {
        return new Image().src = `${imageLink + 'band' + i}.jpg`;
    }

    function toggleModal() {
        setOpenModal(openModal => !openModal);
        if (openModal) {
            setMargin(marginShift);
        } else {
            setMargin('0');
        }
    }

    function redirect(link) {
        window.open(link);
    }


    useEffect(() => {
        setCurrentImage(currentImage => getImageLink(1));
        setImageArray();
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
                        <button>Upcoming Events ▶</button>
                        <button>Meet the Band ▶</button>
                        <button>Contact Us ▶</button>
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
                    <div className={'gallery-chunk-loader'}>
                        <div className={'gallery-image'} style={transitionImageLink}></div>
                        <div className={'gallery-image'} style={currentImageLink}></div>
                    </div>
                    <div className={'gallery-ui-container'}>
                    <div className={'prev-button-container'}>
                            <button className={'pev-button'}
                                    onClick={() => clickLeft()}
                            >◁
                            </button>
                        </div>

                        <div className={'next-button-container'}>
                            <button className={'next-button'}
                                    onClick={() => clickRight()}
                            >▷
                            </button>
                        </div>
                    </div>
                </div>

                <div className={'spotify-plugin'}>
                    <iframe style={{borderRadius: '12px', width: '80%',     border: '5px dotted rgb(24, 154, 211)'}}
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
                        <span>If you experience a problem with our webpage, or have a suggestion, please contact us at <a>improvement@unthynck.me</a></span>
                    </div>
                </div>
            </div>
        </>
    )
}