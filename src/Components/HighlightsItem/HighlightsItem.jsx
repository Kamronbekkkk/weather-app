import React from 'react'
import './HighlightsItem.css'

const HighlightsItem = ({airData,airType}) => {
    return (
        <>
            <li className="highlight-card__row">
                <p className="highlight-card__value">{airData}</p>
                <p className="highlight-card__label">{airType}</p>
            </li>
        </>
    )
}

export default HighlightsItem