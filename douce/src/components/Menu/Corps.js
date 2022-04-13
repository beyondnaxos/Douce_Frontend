import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './tarif.css'

function Corps() {

    const [epilation, setEpilation] = useState([])
    const [corps, setCorps] = useState([])
    const [visage, setVisage] = useState([])
    const [mains, setMains] = useState([])
    const [pieds, setPieds] = useState([])
    const [makeup, setMakeup] = useState([])

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
                <div className='big-card-container'>
                    <div className="card-body">
                        {epilation.map(item => (
                            <div className="card-menu-container" style={{ width: '18rem' }}>
                                <h5 className="card-title">{item.bis === null ? item.nom + '' : item.nom + ' ' + item.bis} </h5>
                                <p className="card-price">{item.prix + '€'}</p>
                            </div>
                        ))}
                    </div>
                    <div className="card-body">
                        {corps.map(item => (
                            <div className="card-menu-container" style={{ width: '18rem' }}>
                                <h5 className="card-title">{item.bis === null ? item.nom + '' : item.nom + ' ' + item.bis} </h5>
                                <p className="card-price">{item.prix + '€'}</p>
                            </div>
                        ))}
                    </div>
                    <div className="card-body">
                        {visage.map(item => (
                            <div className="card-menu-container" style={{ width: '18rem' }}>

                                <h5 className="card-title">{item.nom}</h5>
                                <p className="card-text">{item.bis}</p>
                                <p className="card-price">{item.prixclassic + '€'}</p>
                                <p className="card-price">{item.prixpremium === 0 ? '###' : item.prixpremium + '€'}</p>
                            </div>
                        ))}
                    </div>
                    <div className="card-body">
                        {mains.map(item => (
                            <div className="card-menu-container" style={{ width: '18rem' }}>

                                <h5 className="card-title">{item.nom}</h5>
                                <p className="card-text">{item.bis}</p>
                                <p className="card-price">{item.prix + '€'} </p>

                            </div>
                        ))}
                        {pieds.map(item => (
                            <div className="card-menu-container" style={{ width: '18rem' }}>

                                <h5 className="card-title">{item.nom}</h5>
                                <p className="card-text">{item.bis}</p>
                                <p className="card-price">{item.prix + '€'} </p>

                            </div>
                        ))}
                        {makeup.map(item => (
                            <div className="card-menu-container" style={{ width: '18rem' }}>

                                <h5 className="card-title">{item.nom}</h5>
                                <p className="card-text">{item.bis}</p>
                                <p className="card-price">{item.prix + '€'} </p>

                            </div>
                        ))}
                    </div>
                    <div className="card-body">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Corps;