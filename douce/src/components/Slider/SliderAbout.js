import React, { useState } from 'react';
import './Slider.css';
import SliderChild from './SliderChild';
function SliderAbout() {

    const contentList = [
        {
            id: 'first',
            title: 'PRESENTATION',
            text: 'Je m\'appelle Julie, esthéticienne depuis 8 ans, passionnée par mon métier, j\'ai créé l\'institut de beauté féminin à domicile Douce afin de vous faire vivre une experience agréable et de vrais moments de bien-être',

        },
        {
            id: 'second',
            title: 'ENGAGEMENTS',
            text: ' Je travaille uniquement avec des produits de grande qualité et autant que possible avec des produits Bios, Vegans, et respectueux de l\'environnement. ',

        },
        {
            id: 'third',
            title: 'SHOPPING',
            text: 'Afin que vous puissiez prolonger le plaisir après les rendez vous, je vend un large choix de produits 100% Bios et Vegans. Crèmes, masques, lotions, etc...  Des textures fondantes et des odeurs gourmandes sont à votre disposition.',

        },
        {
            id: 'fourth',
            title: 'DEPLACEMENTS',
            text: 'Aucun frais pour des Déplacement jusqu\'à 25Km autour de Colmen à partir de 30€ de commande, au delà de 25Km pour un minimum de 50€ de commande les frais sont calculés en fonction de la zone.',

        },

    ];

    const [previous, setPrevious] = useState('inactive');

    const [isActive, setIsActive] = useState(
        contentList.reduce((acc, el) => {
            acc[el.id] = false;
            return acc;
        }, {}));


    const handleClick = ({ target }) => {
        const { id } = target;
        setIsActive({ ...isActive, [id]: true, [previous]: false });
        setPrevious(previous === id ? 'inactive' : id);
    };

    return (
        <div className="containerAbout">

            {contentList.map((currentId, idx) => (
                <SliderChild key={idx} data={{ isActive, handleClick, currentId }} />
            ))}
        </div>
    );
}

export default SliderAbout;