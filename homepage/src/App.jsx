import './App.css';
import { useEffect, useState, useRef } from 'react';
export default function App() {

    const imageLink = 'http://unthynck.me/files/images/';
    const imageNumber = 7;

    const [ currentImage, setCurrentImage ] = useState('');
    const [ nextImage, setNextImage ] = useState('');
    const [ transition, setTransition ] = useState('');
    const [ openModal, setOpenModal ] = useState('-40vw');
    const currentIndex = useRef(1);

    const galleryImageLink = {
        backgroundImage: `url(${currentImage})`,
        transition: transition
    }

    const modalStyle = {
        marginLeft: openModal,
    }

    const modalBlur = {
        filter: `blur(${(openModal === '-40vw' ? '0' : '6')}px)`,
        pointerEvents: (openModal === '-40vw' ? 'auto' : 'none')
    }


    function clickLeft() {
        if (currentIndex.current > 1) {
            currentIndex.current -= 1;
            setNextImage(currentImage);
            setCurrentImage((imageLink + 'band' + currentIndex.current + '.jpg'));
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
            setCurrentImage((imageLink + 'band' + 1 + '.jpg'));
            setNextImage((imageLink + 'band' + 2 + '.jpg'));
        }
    }

    function getImageLink(i) {
        const image = new Image();
        image.src = `${imageLink + 'band' + i}.jpg`;
        return `${imageLink + 'band' + i}.jpg`;
    }

    function toggleModal() {
        if (openModal === '-40vw') {
            setOpenModal('0');
        } else {
            setOpenModal('-40vw');
        }
    }

    function redirect(link) {
        window.open(link);
    }


    useEffect(() => {
        setCurrentImage(getImageLink(1));
        setNextImage(getImageLink(2));
    }, [1]);


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
                    <div className={'gallery-image'} style={galleryImageLink}></div>
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
                    <iframe style={{borderRadius: '12px', width: '80%'}}
                            src="https://open.spotify.com/embed/artist/3C3IxXuW9aRAlwvooDiCJM?utm_source=generator"
                            width="50%" height="700" frameBorder="0" allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"></iframe>
                </div>

                <hr/>

                <div className={'footer'}>

                </div>
            </div>
        </>
    )
}