import './App.css';
import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function App() {

    const memberInfoLink = "http://unthynck.me/files/band-member-information.json";

    /*---------------
        Member IDs
        Parker: 0
        Shaun: 1
        Ethan: 2
        Joe: 3
     --------------*/

    /*TODO:
        * add smash bros styling
        *   update: create a random paint splatter every time as the 'joins the team' text background
        * incorporate css for front and back
        * configure width and height \\done
        * add json configuration for each member for on-the-fly editing \\done
    */

    const [ members, setMembers ] = useState([]);

    function Card(memberId) {

        const [ isFlipped, setIsFlipped ] = useState(false);
        const bandMember = members[memberId];

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
                    <button className={'flip-button'}
                            onClick={() => flipCard()}>
                    </button>
                </div>

                <div className={'back'}>
                    <div className={'smash-bros-portrait'}></div>
                    <div className={'canvas-container'}>
                        <canvas ></canvas>
                    </div>
                    <div className={'text-content'}>
                        <div>{bandMember.name}</div>
                        <div>Age: {bandMember.age}</div>
                        <div>Description: {bandMember.description}</div>
                        <div>Special Ability: {bandMember.ability}</div>
                    </div>
                    <button className={'flip-button'}
                            onClick={() => flipCard()}>
                    </button>
                </div>

            </ReactCardFlip>
        );
    }

    /*
    * Like a pokemon card!
    *   title
    *   age (in place of type)
    *   description (in place of pokidex)
    *   ability (in place of attacks)
    *   THERE IS NO HP - DON'T BE SILLY
    */

    useEffect(() => {
        fetch(memberInfoLink).then((res) => {
            return res.json();
        }).then((data) => {
            setMembers(data);
        });
    }, []);

    return (
        <>
            <div className={'card-row'}>
                {Card(0)}
                {Card(1)}
                {Card(2)}
                {Card(3)}
            </div>
        </>
    )
}