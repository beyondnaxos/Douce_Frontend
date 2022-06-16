import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './tarif.scss'
import ReactCardFlip from 'react-card-flip';
import spatule from './spatule.svg'
import body from './soinscorps.svg'
import face from './visage.svg'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';


import mainspiedspieds from './mainpiedspieds.svg'

function Corps() {

    const [isFlippedFirst, setIsFlippedFirst] = useState(false);
    const [isFlippedSecond, setIsFlippedSecond] = useState(false);
    const [isFlippedThird, setIsFlippedThird] = useState(false);
    const [isFlippedFourth, setIsFlippedFourth] = useState(false);

    const [epilation, setEpilation] = useState([])
    const [corps, setCorps] = useState([])
    const [visage, setVisage] = useState([])
    const [mains, setMains] = useState([])
    const [pieds, setPieds] = useState([])
    const [makeup, setMakeup] = useState([])

    const handleClickFirst = (e) => {
        e.preventDefault()
        setIsFlippedFirst(!isFlippedFirst)
    }
    const handleClickSecond = (e) => {
        e.preventDefault()
        setIsFlippedSecond(!isFlippedSecond)
    }
    const handleClickThird = (e) => {
        e.preventDefault()
        setIsFlippedThird(!isFlippedThird)
    }
    const handleClickFourth = (e) => {
        e.preventDefault()
        setIsFlippedFourth(!isFlippedFourth)
    }


    useEffect( () => {

        const fetchEpilation = async () => {
            const result = await axios(
                'https://light-sunlight-353509.ew.r.appspot.com/api/menu/epilation'
            )
            setEpilation(result.data)
        }
        fetchEpilation()

        const fetchCorps = async () => {
            const result = await axios(
                'https://light-sunlight-353509.ew.r.appspot.com/api/menu/mgs'
            )
            setCorps(result.data)
        }
        fetchCorps()

        const fetchVisage = async () => {
            const result = await axios(
                'https://light-sunlight-353509.ew.r.appspot.com/api/menu/visage'
            )
            setVisage(result.data)
        }
        fetchVisage()

        const fetchMains = async () => {
            const result = await axios(
                'https://light-sunlight-353509.ew.r.appspot.com/api/menu/mains'
            )
            setMains(result.data)
        }
        fetchMains()

        const fetchPieds = async () => {
            const result = await axios(
                'https://light-sunlight-353509.ew.r.appspot.com/api/menu/pieds'
            )
            setPieds(result.data)
        }
        fetchPieds()

        const fetchMakeup = async () => {
            const result = await axios(
                'https://light-sunlight-353509.ew.r.appspot.com/api/menu/makeup'
            )
            setMakeup(result.data)
        }
        fetchMakeup()

    }, [])
        


    const BootstrapTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.black,
            borderRadius: '10px',
            minWith: '100%',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '5px',
            paddingBottom: '5px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
           
            
        },
    }))


    return (
        < >
            <div className="tarif-container-center">
                <ReactCardFlip isFlipped={isFlippedFirst} flipDirection="horizontal">
                    <div onClick={handleClickFirst} className='front-card'>
                        <div className="card-body">
                            
                            <div className='front-card-style '>
                                {/* <div className='bubble'>
                                </div> */}
                                <div className='blob-container'>
                                    <div className="blob2">

                                        <svg src="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                                            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
                                        </svg>

                                    </div>

                                    <div className='front-card-text-container'>
                                        <div className='front-card-title'>
                                            <h1>Epilations</h1>
                                        </div>
                                        <div className='front-card-image'>
                                            <div className='card-image-container'>
                                                <img src={spatule} alt="" />
                                            </div>
                                        </div>
                                        <div className='front-card-text'>
                                            <p>Cliquer pour affichier</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div onClick={handleClickFirst} className='back-card'>
                        <div className="card-body__back">
                            {epilation.map(item => (

                                <div className="card-menu-container" style={{ width: '18rem' }}>
                                    <h5 className="card-title">{item.bis === null ? item.nom + '' : item.nom + ' ' + item.bis} </h5>
                                    <p className="card-price">{item.prix + '€'}</p>
                                </div>

                            ))}
                        </div>

                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={isFlippedSecond} flipDirection="horizontal">
                    <div onClick={handleClickSecond} className='front-card'>
                        <div className="card-body">
                            <div className='front-card-style'>
                                {/* <div className='bubble'>
                                </div> */}
                                <div className='blob-container'>
                                    <div class="blob2">

                                        <svg src="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                                            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
                                        </svg>

                                    </div>

                                    <div className='front-card-text-container'>
                                        <div className='front-card-title'>
                                            <h1>Soins Corps</h1>
                                        </div>
                                        <div className='front-card-image'>
                                            <div className='card-image-container'>
                                                <img src={body} alt="" />
                                            </div>
                                        </div>
                                        <div className='front-card-text'>
                                            <p>Cliquer pour affichier</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div onClick={handleClickSecond} className='back-card'>
                        <div className="card-body__back">
                            {corps.map(item => (

                                <BootstrapTooltip title={<p style={{ fontSize: '0.75rem', textAlign: 'center', width:'200px'}}>{item.commentaire.toUpperCase()}</p>} placement='top' arrow='true' disableInteractive >
                                    <div className="card-menu-container__corps" style={{ width: '18rem' }}>
                                        
                                        <h5 className="card-title">{item.nom}</h5>
                                    <p className="card-text-bio">{item.bis === null ? ' ' : item.bis }</p>
                                        <p className="card-price">{item.prix + '€'}</p>
                                    </div>
                                </BootstrapTooltip >
                            ))}
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={isFlippedThird} flipDirection="horizontal">
                    <div onClick={handleClickThird} className='front-card'>
                        <div className="card-body">
                            <div className='front-card-style'>
                                {/* <div className='bubble'>
                                </div> */}
                                <div className='blob-container'>
                                    <div class="blob2">

                                        <svg src="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                                            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
                                        </svg>

                                    </div>

                                    <div className='front-card-text-container'>
                                        <div className='front-card-title'>
                                            <h1>Soins Visage</h1>
                                        </div>
                                        <div className='front-card-image'>
                                            <div className='card-image-container'>
                                                <img src={face} alt="" />
                                            </div>
                                        </div>
                                        <div className='front-card-text'>
                                            <p>Cliquer pour affichier</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div onClick={handleClickThird} className='back-card'>
                        <div className="card-body__back">
                            <div className="card-menu-container" style={{ width: '18rem' }}>

                                <h5 className="card-title-small">Classic/Premium</h5>
                                <p className="card-text"></p>
                                <p className="card-price">30m</p>
                                <p className="card-price">01h</p>
                            </div>
                            {visage.map(item => (

                               <BootstrapTooltip title={<p style={{ fontSize: '0.75rem', textAlign: 'center', width:'200px' }}>{item.commentaire.toUpperCase()}</p>} placement='top' arrow='true' disableInteractive >
                                <div className="card-menu-container" style={{ width: '18rem' }}>
                                    <h5 className="card-title">{item.nom}</h5>
                                    <p className="card-text-bio">{item.bis}</p>
                                    <p className="card-price">{item.prixclassic === null ? '###' : item.prixclassic + '€'}</p>
                                    <p className="card-price">{item.prixpremium === null ? '###' : item.prixpremium + '€'}</p>
                                </div>
                                </BootstrapTooltip>
                            ))}
                            {/* <div className="card-menu-container-big" style={{ width: '18rem' }}>



                                <p className="card-price">30m</p>

                            </div> */}
                        </div>

                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={isFlippedFourth} flipDirection="horizontal">
                    <div onClick={handleClickFourth} className='front-card'>
                        <div className="card-body">
                            <div className='front-card-style'>
                                {/* <div className='bubble'>
                                </div> */}
                                <div className='blob-container'>
                                    <div class="blob2">

                                        <svg src="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                                            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
                                        </svg>

                                    </div>

                                    <div className='front-card-text-container'>
                                        <div className='front-card-title'>
                                            <h1>Mains & Pieds</h1>
                                        </div>
                                        <div className='front-card-image'>
                                            <div className='card-image-container'>
                                                <img src={mainspiedspieds} alt="" />
                                            </div>
                                        </div>
                                        <div className='front-card-text'>
                                            <p>Cliquer pour affichier</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div onClick={handleClickFourth} className='back-card'>
                        <div className="card-body__back">
                            <div className="card-menu-container" style={{ width: '18rem' }}>
                                <h5 className="card-title-small">MAINS</h5>

                            </div>
                            {mains.map(item => (
                                <BootstrapTooltip title={<p style={{ fontSize: '0.75rem', textAlign: 'center' }}>{item.commentaire.toUpperCase()}</p>} placement='top' arrow='true' disableInteractive >
                                <div className="card-menu-container" style={{ width: '18rem' }}>

                                    <h5 className="card-title">{item.nom}</h5>
                                    <p className="card-text">{item.bis}</p>
                                    <p className="card-price">{item.prix + '€'} </p>
                                </div>
                                </BootstrapTooltip>
                            ))}
                            <div className="card-menu-container" style={{ width: '18rem' }}>
                                <h5 className="card-title-small">PIEDS</h5>

                            </div>
                            {pieds.map(item => (
                                <BootstrapTooltip title={<p style={{ fontSize: '0.75rem', textAlign: 'center', width:'250px' }}>{item.commentaire.toUpperCase()}</p>} placement='top' arrow='true' disableInteractive >
                                <div className="card-menu-container" style={{ width: '18rem' }}>

                                    <h5 className="card-title">{item.nom}</h5>
                                    <p className="card-text">{item.bis}</p>
                                    <p className="card-price">{item.prix + '€'} </p>

                                </div>
                                </BootstrapTooltip>
                            ))}
                            {/* {makeup.map(item => (
                            <div className="card-menu-container" style={{ width: '18rem' }}>

                                <h5 className="card-title">{item.nom}</h5>
                                <p className="card-text">{item.bis}</p>
                                <p className="card-price">{item.prix + '€'} </p>

                            </div>
                        ))} */}
                        </div>

                    </div>
                </ReactCardFlip>
            </div>
        </>
    )
}

export default Corps;