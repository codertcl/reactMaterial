import {useEffect, useState} from 'react';

function useLocalStorage(key) {
    const [name, setName] = useState(() => {
        return JSON.parse(window.localStorage.getItem(key));
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(name));
    }, [name]);

    return [name, setName];
}

export default useLocalStorage;
