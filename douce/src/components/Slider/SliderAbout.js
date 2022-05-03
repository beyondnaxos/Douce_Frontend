import React, { useState } from 'react';
import './Slider.css';
import SliderChild from './SliderChild';
function SliderAbout() {

    // const idList = ['first', 'second', 'third', 'fourth', 'fifth'];
    const contentList = [
        {
            id: 'first',
            title: 'A propos de moi',
            text: 'Je m\'appelle Julie, esthéticienne depuis 8 ans, passionnée par mon métier, j\'ai créé l\'institut de beauté féminin à domicile Douce afin de vous faire vivre une experience agréable et de vrais moments de bien-être',

        },
        {
            id: 'second',
            title: 'Les produits utilisés',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima consequatur tempora non nisi numquam voluptatibus ipsam animi vitae autem.',

        },
        {
            id: 'third',
            title: 'Déplacement',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima consequatur tempora non nisi numquam voluptatibus ipsam animi vitae autem.',

        },
        {
            id: 'fourth',
            title: 'Nature',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima consequatur tempora non nisi numquam voluptatibus ipsam animi vitae autem.',

        },
        {
            id: 'fifth',
            title: 'Sanitaire',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima consequatur tempora non nisi numquam voluptatibus ipsam animi vitae autem.',

        },
    ]

    const [previous, setPrevious] = useState(null);

    // const [isActive, setIsActive] = useState({
    //     first: false,
    //     second: false,
    //     third: false,
    //     fourth: false,
    //     fifth: false
    // });

    const [isActive, setIsActive] = useState(
        contentList.reduce((acc, el) => {
            acc[el] = false;
            return acc;
        }, {}));


    const handleClick = ({ target }) => {
        const { id } = target;
        setIsActive({ ...isActive, [id]: true, [previous]: false });
        setPrevious(id);
    };

    // const sliderArray = idList.map((el, i) => {
    //     return {
    //         id: el,
    //         title: contentList[i].title,
    //         text: contentList[i].text,
    //     }
    // });
    // console.log(sliderArray);



    return (
        <div className="containerAbout">

            {contentList.map((currentId, idx) => (
                <SliderChild key={idx} id={currentId.id} data={{ isActive, handleClick, currentId }} />
            ))}
        </div>
    );
}

export default SliderAbout;