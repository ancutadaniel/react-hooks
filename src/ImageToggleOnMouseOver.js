import React , { useRef } from 'react';

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {

    const imageRef = useRef(null);

    return (
        <img
            src={primaryImg}
            alt=''
            ref={imageRef}
            onMouseOver={() => {
                imageRef.current.src = secondaryImg;
            }}
            onMouseOut={() => {
                imageRef.current.src = primaryImg;
            }}
        />
    );
};

export default ImageToggleOnMouseOver;
