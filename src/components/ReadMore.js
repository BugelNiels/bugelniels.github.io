import React, {useState} from 'react';

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
                    <span style={{color: '#126ffd', cursor: 'pointer'}} onClick={toggleReadMore}
                          className="read-more-link">
                Read less...
                </span>
                }
            </p>
            {!isExpanded &&
                <span style={{color: '#126ffd', cursor: 'pointer'}} onClick={toggleReadMore} className="read-more-link">
                    Read more...
                </span>
            }
        </div>
    );
};

export default ReadMoreText;