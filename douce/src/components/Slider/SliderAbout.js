import React , {useState} from 'react'
import './Slider.css'
function SliderAbout() {

    const [isActiveFirst , setIsActiveFirst] = useState(true)
    const [isActiveSecond , setIsActiveSecond] = useState(false)
    const [isActiveThird , setIsActiveThird] = useState(false)
    const [isActiveFourth , setIsActiveFourth] = useState(false)
    const [isActiveFifth , setIsActiveFifth] = useState(false)

    const handleClickFirst = () => {
        setIsActiveFirst(true)
        setIsActiveSecond(false)
        setIsActiveThird(false)
        setIsActiveFourth(false)
        setIsActiveFifth(false)
    }
    const handleClickSecond = () => {
        setIsActiveFirst(false)
        setIsActiveSecond(true)
        setIsActiveThird(false)
        setIsActiveFourth(false)
        setIsActiveFifth(false)
    }
    const handleClickThird = () => {
        setIsActiveFirst(false)
        setIsActiveSecond(false)
        setIsActiveThird(true)
        setIsActiveFourth(false)
        setIsActiveFifth(false)
    }
    const handleClickFourth = () => {
        setIsActiveFirst(false)
        setIsActiveSecond(false)
        setIsActiveThird(false)
        setIsActiveFourth(true)
        setIsActiveFifth(false)
    }
    const handleClickFifth = () => {
        setIsActiveFirst(false)
        setIsActiveSecond(false)
        setIsActiveThird(false)
        setIsActiveFourth(false)
        setIsActiveFifth(true)
    }

    return (
        <>
            <div className="containerAbout">

                <div onClick={handleClickFirst}  className={ isActiveFirst === true ? ' panel active' : 'panel '}  id='first'>
                    <h3>CSS Script</h3>
                </div>
                <div onClick={handleClickSecond} className={ isActiveSecond === true ? ' panel active' : 'panel '} id='second'>
                    <h3>CSS Script</h3>
                </div>
                <div onClick={handleClickThird} className={ isActiveThird === true ? ' panel active' : 'panel '} id='third'>
                    <h3>CSS Script</h3>
                </div>
                <div onClick={handleClickFourth} className={ isActiveFourth === true ? ' panel active' : 'panel '} id='fourth' >
                    <h3>CSS Script</h3>
                </div>
                <div onClick={handleClickFifth} className={ isActiveFifth === true ? ' panel active' : 'panel '} id='fifth' >
                    <h3>CSS Script</h3>
                </div>
            </div>

        </>
    )
}

export default SliderAbout