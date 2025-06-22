// context/DesignModeContext.js
import React, {createContext, useMemo} from 'react';
import {useLocation} from 'react-router-dom';

export const DesignModeContext = createContext(false)

export const DesignModeProvider = ({children}: {children: React.ReactNode}) => {
    const location = useLocation()

    const isDesignMode = useMemo(() => {
        const query = new URLSearchParams(location.search)
        console.log(query)
        return query.get('design') === 'true'
    }, [location.search])

    return <DesignModeContext.Provider value={isDesignMode}>{children}</DesignModeContext.Provider>
}
