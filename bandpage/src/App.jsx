import './App.css';
import { useRef, useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function App() {

    const ParkerBio = () => {
        return (
            <div className={'background-image'}></div>
        )
    }

    const ShaunBio = () =>  {

    }

    const EthanBio = () =>  {

    }

    const cardStyle = {
        borderRadius: '12px'
    }

    const [ memberBios, setMemberBios ] = useState([
        {id: 0, content: <ParkerBio key={0}/>},
        {id: 1, content: <ShaunBio key={1}/>},
        {id: 2, content: <EthanBio key={2}/>}
    ]);
    const frontImageLinks = ['http:', 'http:', 'http:']; //Parker, Shaun, Ethan

    /*TODO:
        * change css naming convention to kebab
        * add smash bros styling
        * incorporate css for front and back
        * configure width and height
    */

    function Card(memberNumber) {

        const [ isFlipped, setIsFlipped ] = useState(false);

        function DisplayFront() {
            return (
                <div className={'front'}>
                    {
                        memberBios[memberNumber].content
                    }
                    <div className={'flip-button'}>
                        <button onClick={() => flipCard()}></button>
                    </div>
                </div>
            );
        }

        function DisplayBack() {
            return (
                <div className={'back'}>
                    <button className={'flip-button'}
                            onClick={() => flipCard()}>
                    </button>
                </div>
            );
        }

        function flipCard() {
            setIsFlipped(!(isFlipped));
        }

        return (
            <ReactCardFlip isFlipped={isFlipped}
                           flipDirection={'horizontal'}
                           containerClassName={'card-container'}
            >

                <DisplayFront/>

                <DisplayBack/>

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