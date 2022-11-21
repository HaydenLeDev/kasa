import { useState } from 'react'
import '../../style/components/component/dropDown.css';

function DropDown(propos) {

    const nameClass = propos.nameClass
    const title = propos.title
    const description = propos.description
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div className={nameClass} onClick={() => setIsOpen(false)}>
            <div className="DropDownLarge-information">
                <h2 className="DropDownLarge-Title">
                    {title}
                </h2>
                <span className="arrow"></span>
            </div>
            <div className="DropDownLarge-description">
                <p className="DropDownLarge-description-paragraphe">{description}</p>
            </div>
        </div>
    ) : (
        <div className={nameClass} onClick={() => setIsOpen(true)}>
            <div className="DropDownLarge-information">
                <h2 className="DropDownLarge-Title">
                    {title}
                </h2>
                <span className="arrow arrow-actif"></span>
            </div>

            <div className="DropDownLarge-description DropDownLarge-description-actif">
                <p className="DropDownLarge-description-paragraphe">{description}</p>
            </div>
        </div>
    )
}

export default DropDown;