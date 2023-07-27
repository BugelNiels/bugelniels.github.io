import {useEffect, useState} from 'react';

const useJsonData = (file) => {
    const [result, setResult] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(file,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            const json = await response.json();
            setResult(json);
        }

        fetchData();
    }, [file])

    return result;
}

export default useJsonData;
