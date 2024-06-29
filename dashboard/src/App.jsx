import './App.css';
import Button from '@mui/material/Button';

export default function App() {

    const uploadSvg = 'http://unthynck.me/files/vectors/upload-square-icon.svg';
    //credit to Solar Icons: https://www.svgrepo.com/svg/525570/upload-square

    function handlePhotoUpload() {
        const file = window.file();
    }

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
                        <div className={'additional-options-panel'}>
                            <div className={'upload-pictures-option'}>
                                <div className={'upload-icon'}>
                                    <img src={uploadSvg} alt={'upload icon'}/>
                                </div>

                                <Button variant={'contained'} className={'upload-button'}
                                        sx={{
                                            borderRadius: '12px',
                                            fontSize: 'xx-large',
                                            fontFamily: "'Calibri', sans-serif"}}>
                                    <input hidden accept={'image/*'} type={'file'}
                                           onChange={() => handlePhotoUpload()}/>
                                    Upload Band Photos
                                </Button>
                            </div>
                            <div className={'change-password-option'}>
                                <Button onClick={() => window.open('')} variant={'contained'}
                                        className={'link-button'} sx={{
                                    borderRadius: '12px',
                                    fontSize: 'xx-large',
                                    fontFamily: "'Calibri', sans-serif"
                                }}>Update Password ▶</Button>
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