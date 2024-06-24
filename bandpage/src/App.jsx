import './App.css';
import { useRef, useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function App() {


    /*TODO:
        * add smash bros styling
        * incorporate css for front and back
        * configure width and height
        * add json configuration for each member for on-the-fly editing
    */

    function Card(memberNumber) {

        const [ isFlipped, setIsFlipped ] = useState(false);

        function flipCard() {
            setIsFlipped(!(isFlipped));
        }

        return (
            <ReactCardFlip isFlipped={isFlipped}
                           flipDirection={'horizontal'}
                           containerClassName={'card-container'}
            >

                <div className={'front'}>
                    <div className={'band-member-portrait'}></div>
                    <div className={'text-content'}>

                    </div>
                    <button className={'flip-button'}
                            onClick={() => flipCard()}>
                    </button>
                </div>

                <div className={'back'}>
                    <div className={'smash-bros-portrait'}></div>
                    <div className={'text-content'}>

                    </div>
                    <button className={'flip-button'}
                            onClick={() => flipCard()}>
                    </button>
                </div>

            </ReactCardFlip>
        );
    }


    function setHovered() {

    }

    return (
        <>
        <div className={'card'}>
                {
                    Card(0)
                }
            </div>
        </>
    )
}