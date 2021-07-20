import { useEffect, useState, useRef } from "react";

const useHover = () => {
    const [isHovered, setHovered] = useState(false);

    const ref = useRef(null);

    const handleMouseOver = () => setHovered(true);
    const handleMouseOut = () => setHovered(false);

    useEffect(() => {
        if(ref.current) {
            ref.current.addEventListener("mouseover", handleMouseOver);
            ref.current.addEventListener("mouseout", handleMouseOut);
            
            return () => {
                ref.current.removeEventListener("mouseover", handleMouseOver);
                ref.current.removeEventListener("mouseout", handleMouseOut);
            }
        }
    }, [ref.current]);

    return [ref, isHovered];
}

export default useHover;