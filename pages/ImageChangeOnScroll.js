import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    return (
        <div>
            {[1,2,3,4,5,6,7].map(picId => {
                return (
                    <div key={picId}>
                        <ImageToggleOnScroll
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

export default ImageChangeOnScroll;
