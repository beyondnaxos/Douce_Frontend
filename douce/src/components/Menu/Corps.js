import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './tarif.css'
import ReactCardFlip from 'react-card-flip';
import spatule from './spatule.svg'
import body from './soinscorps.svg'
import face from './visage.svg'

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
        e.preventDefault();
        setIsFlippedFirst(!isFlippedFirst);
    };
    const handleClickSecond = (e) => {
        e.preventDefault();
        setIsFlippedSecond(!isFlippedSecond);
    };
    const handleClickThird = (e) => {
        e.preventDefault();
        setIsFlippedThird(!isFlippedThird);
    };
    const handleClickFourth = (e) => {
        e.preventDefault();
        setIsFlippedFourth(!isFlippedFourth);
    };


    useEffect(() => {
        axios.get('http://localhost:8080/api/menu/epilation')
            .then(res => {
                setEpilation(res.data)
            }
            )
        axios.get('http://localhost:8080/api/menu/mgs')
            .then(res => {
                setCorps(res.data)
            }
            )
        axios.get('http://localhost:8080/api/menu/visage')
            .then(res => {
                setVisage(res.data)
            }
            )
        axios.get('http://localhost:8080/api/menu/mains')
            .then(res => {
                setMains(res.data)
            }
            )
        axios.get('http://localhost:8080/api/menu/pieds')
            .then(res => {
                setPieds(res.data)
            }
            )
        axios.get('http://localhost:8080/api/menu/makeup')
            .then(res => {
                setMakeup(res.data)
            }
            )
    }, [])



    return (
        < >
            <div className="cards tarif-container-center">
                <ReactCardFlip isFlipped={isFlippedFirst} flipDirection="horizontal">
                    <div onClick={handleClickFirst} className='front-card'>
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
                                            <h1>Epilation</h1>
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
                                <div className="card-menu-container" style={{ width: '18rem' }}>
                                    <h5 className="card-title">{item.bis === null ? item.nom + '' : item.nom + ' ' + item.bis} </h5>
                                    <p className="card-price">{item.prix + '€'}</p>
                                </div>
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

                                <h5 className="card-title">durée du soin</h5> 
                                <p className="card-text"></p>
                                <p className="card-price">30m</p>
                                <p className="card-price">01h</p>
                            </div>
                            {visage.map(item => (
                                <div className="card-menu-container" style={{ width: '18rem' }}>

                                    <h5 className="card-title">{item.nom}</h5>
                                    <p className="card-text">{item.bis}</p>
                                    <p className="card-price">{item.prixclassic === null ? '###' : item.prixclassic + '€'}</p>
                                    <p className="card-price">{item.prixpremium === null ? '###' : item.prixpremium + '€'}</p>
                                </div>
                            ))}
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
                                <h5 className="card-title">MAINS</h5>

                            </div>
                            {mains.map(item => (
                                <div className="card-menu-container" style={{ width: '18rem' }}>

                                    <h5 className="card-title">{item.nom}</h5>
                                    <p className="card-text">{item.bis}</p>
                                    <p className="card-price">{item.prix + '€'} </p>

                                </div>
                            ))}
                            <div className="card-menu-container" style={{ width: '18rem' }}>
                                <h5 className="card-title">PIEDS</h5>

                            </div>
                            {pieds.map(item => (
                                <div className="card-menu-container" style={{ width: '18rem' }}>

                                    <h5 className="card-title">{item.nom}</h5>
                                    <p className="card-text">{item.bis}</p>
                                    <p className="card-price">{item.prix + '€'} </p>

                                </div>
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