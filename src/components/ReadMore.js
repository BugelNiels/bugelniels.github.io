import React, {useRef, useState} from 'react';

const ReadMoreText = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const startRef = useRef(null);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
        if (isExpanded) {
            startRef.current.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        }
    };

    return (
        <div ref={startRef}>
            <p>
                {isExpanded && props.children}
            </p>
            <p>
                {isExpanded &&
                    <button onClick={toggleReadMore} className="read-more-link">
                        Read less...
                    </button>
                }
            </p>
            {!isExpanded &&
                <button onClick={toggleReadMore} className="read-more-link">
                    Read more...
                </button>
            }
        </div>
    );
};

export default ReadMoreText;