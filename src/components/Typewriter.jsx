import React, { useState, useEffect, useRef } from 'react';

export const Typewriter = ({ text, start, speed = 50, onComplete }) => {
    const [displayedText, setDisplayedText] = useState("");
    const onCompleteRef = useRef(onComplete);

    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        if (!start) return;

        let i = 0;
        let timer;

        const type = () => {
            if (i < text.length) {
                setDisplayedText(text.slice(0, i + 1));
                i++;
                timer = setTimeout(type, speed);
            } else {
                if (onCompleteRef.current) onCompleteRef.current();
            }
        };

        type();

        return () => clearTimeout(timer);
    }, [start, text, speed]);

    return <span>{displayedText}</span>;
};

// El cursor parpadeante
export const Cursor = () => (
    <span className="inline-block w-2.5 h-5 bg-emerald-500 ml-1 align-middle animate-pulse"></span>
);