import './App.css';
import { useRef, useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function App() {

    const frontImageLinks = ['http:', 'http:', 'http:']; //Parker, Shaun, Ethan
    const bandMemberCards = useRef([<>{card(0, false)}</>, <>{card(1, false)}</>, <>{card(2, false)}</>]);

    const frontStyle = (cardToStyle) => {
        const style = {

        }
        return style;
    }

    const backStyle = (cardToStyle) => {
        const style = {

        }
        return style;
    }

    const containerStyle = {

    }

    /*TODO:
        * change naming convention to kebab
        * add smash bros styling
        * incorporate css for front and back
        * configure width and height
    */

    function card(memberNumber, isFlipped) {
        return (
            <ReactCardFlip isFlipped={isFlipped}
                           flipDirection={'vertical'}
                           containerClassName={'card-container'}
            >
                <div className={'front'}>
                    <button className={'flip-button'}
                            onClick={() => flipCard(memberNumber, isFlipped)}>
                    </button>

                </div>
                <div className={'back'}>
                    <button className={'flip-button'}
                            onClick={() => flipCard(memberNumber, isFlipped)}>

                    </button>
                </div>
            </ReactCardFlip>
        );
    }


    function setHovered() {

    }

    function flipCard(memberNumber, isFlipped) {
        bandMemberCards[memberNumber] = card(memberNumber, isFlipped);
    }

    return (
        <>
            <div className={'parker-card'}>
                {
                    bandMemberCards.current.at(0)
                }
            </div>
            {
                card(1)
            }
            {
                card(2)
            }
        </>
    )
}