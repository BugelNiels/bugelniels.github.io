import React, {useRef, useState} from 'react';
import Button from "react-bootstrap/Button";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
                        <ArrowDropUpIcon/>
                        Show less
                    </Button>
                }
            </p>
            {!isExpanded &&
                <Button onClick={toggleShowMore}>
                    <ArrowDropDownIcon/>
                    Show more
                </Button>
            }
        </div>
    );
};

export default ShowMoreButton;