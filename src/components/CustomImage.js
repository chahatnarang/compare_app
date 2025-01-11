import Image from "next/image";
import { useState } from "react";
import placeholderImage from '../helpers/constants'

const CustomImage = (props) => {
    const { src, alt, width, height, isList } = props;
    const [imgSrc, setImgSrc] = useState(src || placeholderImage);
    const [isOptimized, setIsOptimized] = useState(true);

    return (
        <Image
            className={isList ? "w-16 h-20" : ""}
            alt={alt}
            src={imgSrc}
            width={width}
            height={height}
            unoptimized={!isOptimized}
            onError={() => {
                setImgSrc(placeholderImage);
                setIsOptimized(false);
            }}
        />
    );
};

export default CustomImage;
