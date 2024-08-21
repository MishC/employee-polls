import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { useState, useEffect } from 'react';

const ConfettiWrapper = ({ isVisible }) => {
    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWindowSize();

    useEffect(() => {
        let showTimer, hideTimer;

        if (isVisible) {
            showTimer = setTimeout(() => {
                setShowConfetti(true);
            }, 2000);

            hideTimer = setTimeout(() => {
                setShowConfetti(false);
            }, 6000); 
        } else {
            setShowConfetti(false);
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        }

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, [isVisible]);

    return showConfetti ? (
        <Confetti
            width={width}
            height={height}
            tweenDuration={3800}
            numberOfPieces={200}
        />
    ) : null;
};

export default ConfettiWrapper;
