import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";


const ImageChangeOnMouseOver = () => {
    return (
        <div>
            {[1,2,3,4,5,6,7].map(picId => {
                return (
                    <div>
                        <ImageToggleOnMouseOver
                            primaryImg={`/static/${picId}.jpg`}
                            secondaryImg={`/static/black_white/${picId}.jpg`}
                            alt=""
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ImageChangeOnMouseOver;
