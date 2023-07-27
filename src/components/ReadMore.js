import React, {useState} from 'react';

// TODO: move to stylesheet
const ReadMoreText = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <p>
                {isExpanded && props.children}
            </p>
            <p>
                {isExpanded &&
                    <button style={{color: '#126ffd', cursor: 'pointer', backgroundColor: "transparent", border: "none", padding: 0}} onClick={toggleReadMore}
                            className="read-more-link">
                        Read less...
                    </button>
                }
            </p>
            {!isExpanded &&
                <button style={{color: '#126ffd', cursor: 'pointer', backgroundColor: "transparent", border: "none", padding: 0}} onClick={toggleReadMore}
                        className="read-more-link">
                    Read more...
                </button>
            }
        </div>
    );
};

export default ReadMoreText;