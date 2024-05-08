import './App.css';
import { useState, useEffect } from 'react';

export default function App() {

    const eventListLink = "/src/assets/event-list.json";

    const [ openModal, setOpenModal ] = useState('-40vw');
    const [ eventList, setEventList ] = useState([]);

    useEffect(() => {
        fetch(eventListLink)
            .then(data => {
                console.log(data);
                return data.json();
            })
            .then(events => {
                setEventList(eventList => events);
            })
            .catch(error => {
                console.log("Failed to fetch and assign events via: ", error);
            })
            .then(() => console.log(eventList));
    }, []);

    const modalStyle = {
        marginLeft: openModal,
    }

    const modalBlur = {
        filter: `blur(${(openModal === '-40vw' ? '0' : '6')}px)`,
        pointerEvents: (openModal === '-40vw' ? 'auto' : 'none')
    }

    function toggleModal() {
        if (openModal === '-40vw') {
            setOpenModal('0');
        } else {
            setOpenModal('-40vw');
        }
    }

    function compileTime(startTime, endTime) {
        return `${startTime.toLocaleTimeString([],
            {hour: '2-digit', minute: '2-digit', hour12: true})} - ${endTime.toLocaleTimeString([],
            {hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/Chicago'})}`;
    }

    function compileDate(date, time) {
        return `${date}T${time}`;
    }

    function redirect(link) {
        window.open(link);
    }

    function Event(index) {

        const start = new Date(compileDate(eventList[index].date, eventList[index].startTime));
        const end = new Date(compileDate(eventList[index].date, eventList[index].endTime));

        let opacity = 1;

        return (
            <div className={'event'}>
                <div className={"description"} style={{opacity: opacity}}>
                    <div className={"descriptionInfo"}>
                        <div className={"info"}>
                            <b>Location: </b>
                            <a
                                href={eventList[index].eventLocationLink} className={"tab"} target={"_blank"}
                            >{eventList[index].eventLocationName} &#8599;</a>
                        </div>
                        <div className={"info"}>
                            <b>Date: </b>
                            <span>{start.toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}</span>
                        </div>
                        <div className={"info"}>
                            <b>Time: </b>
                            <span>{compileTime(start, end)}</span>
                        </div>
                        <div className={"info"}>
                            <b>Price: </b>
                            <span>{eventList[index].entryPrice}</span>
                        </div>
                        <div className={"info"}>
                            <b>Age Limit: </b>
                            <span>{eventList[index].age}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

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
                <div className={'eventCard'}>
                    {eventList.map((event, index) => Event(index))}
                </div>
                <div className={'footer'}>

                </div>
            </div>
        </>
    )
}