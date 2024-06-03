import { useState, useEffect } from 'react';


const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage item '${key}':`, error);
            return initialValue;
        }
    });


    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
        } catch (error) {
            console.error(`Error setting localStorage item '${key}':`, error);
        }
    };

    return [storedValue, setValue];
};


const getCurrentUser = () => {
    try {
        const currentUserEmail = window.localStorage.getItem('currentUser');
        const userDataString = window.localStorage.getItem('userData');

        if (!currentUserEmail || !userDataString) return null;

        const userData = JSON.parse(userDataString);
        return userData[currentUserEmail] || null;

    } catch (error) {
        console.error('Error retrieving current user:', error);
        return null;
    }
};


const setCurrentUser = (currentEmail) => {
    try {
        window.localStorage.setItem('currentUser', currentEmail);
    } catch (error) {
        console.error('Error setting current user:', error);
    }
};

export { useLocalStorage, setCurrentUser, getCurrentUser };
