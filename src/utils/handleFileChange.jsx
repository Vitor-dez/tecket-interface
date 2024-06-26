import { useState } from 'react';

export const useFileInfo = () => {
    const [fileInfo, setFileInfo] = useState({ name: '' });

    const handleFileChange = (event, setValue, clearErrors) => {
        const file = event.target.files[0];
        if (file) {
            setFileInfo({ name: file.name, type: file.type });
            setValue('file', file); 
            clearErrors('file');
        }
    };

    return [fileInfo, handleFileChange];
};
