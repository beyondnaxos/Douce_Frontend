import React from 'react';
import './HomeCard.scss';
import cardImage from './cardImage.svg'
import Typewriter from 'typewriter-effect';


const Homecard = () => {

    const name = 'Douce';




    return (
        <div className='card-container'>
            <div className='card-image-container'>
                <img src={cardImage} alt="" />
            </div>
            <div className='card-bloc-text-container'>
                <div className='card-bloc-text-child'>
                    <h1><Typewriter
                        options={{
                            strings: [name],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit consectetur deleniti.</p>

                </div>
                <div className='onHoverText'>
                    <h2 className='titleHover'> Précisions</h2>
                    <p><Typewriter
                        options={{
                            strings: ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quam optio non a, repellat, molestiae expedita dolore suscipit rem, ad aperiam corporis iste repellendus quibusdam dicta. Accusantium labore dolores vero! Illum odit vero quo eius quae eveniet labore nostrum itaque officia voluptate sapiente a facilis hic sequi dignissimos id inventore architecto nobis dolore blanditiis dolor, illo dicta corrupti!'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></p>
                </div>
            </div>

        </div>
    );
}

export default Homecard;
