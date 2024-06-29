import './App.css';

export default function App() {

    return (
        <>
            <div className={'header'}>
                <div className={'welcome-message'}>
                    <h2>Hello, [PLACEHOLDER]</h2>
                </div>
            </div>
            <div className={'content'}>
                <div className={'landing-message'}>
                    <h2>What would you like to do today?</h2>
                </div>
                <div className={'member-options-list'}>
                    <div className={'options-container'}>
                        <div className={'option'}>
                            <div className={'add-event-option'}>
                                <div className={'option-banner'}>
                                    <h3>Add Event</h3>
                                </div>
                            </div>
                        </div>
                        <div className={'option'}>
                            <div className={'update-bio-option'}>
                                <div className={'option-banner'}>
                                    <h3>Update Biography</h3>
                                </div>
                            </div>
                        </div>
                        <div className={'option'}>
                            <div className={'change-password-option'}>
                                <a href={''}>Update Password ▶</a>
                            </div>
                            <div className={'upload-pictures-option'}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'footer'}>

            </div>
        </>
    )
}

/*
*
* potentially need json, not sure yet*/