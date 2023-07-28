import React, {useRef, useState} from 'react';
import Button from "react-bootstrap/Button";
import ArrowUpIcon from "./icons/ArrowUpIcon";
import ArrowDownIcon from "./icons/ArrowDownIcon";

const ShowMoreButton = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const startRef = useRef(null);

    const toggleShowMore = () => {
        setIsExpanded(!isExpanded);
        if (isExpanded) {
            startRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    };

    return (
        <div ref={startRef}>
            <p>
                {isExpanded && props.children}
            </p>
            <p>
                {isExpanded &&
                    <Button onClick={toggleShowMore}>
                        <ArrowUpIcon/>
                        Show less
                    </Button>
                }
            </p>
            {!isExpanded &&
                <Button onClick={toggleShowMore}>
                    <ArrowDownIcon/>
                    Show more
                </Button>
            }
        </div>
    );
};

export default ShowMoreButton;