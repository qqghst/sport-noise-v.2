import React, { createContext, useState } from 'react';

export type CursorContextType = {
    projectTitle: string;
    setProjectTitle: (value: string) => void;

    size: string;
    setSize: (value: string) => void;
};

export const CursorContext = createContext<CursorContextType>({
    projectTitle: '',
    setProjectTitle: () => {},

    size: 'regular',
    setSize: () => {},
});

type Props = {
    children: JSX.Element;
};

const CursorManager = ({ children }: Props) => {
    const [projectTitle, setProjectTitle] = useState<string>('');
    const [size, setSize] = useState('regular');

    const handleSetProjectTitle = (value: string) => setProjectTitle(value);
    return (
        <CursorContext.Provider
            value={{ projectTitle, setProjectTitle: handleSetProjectTitle, size, setSize }}>
            {children}
        </CursorContext.Provider>
    );
}

export default CursorManager;