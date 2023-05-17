import React, { useState } from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import { ILayoutProps } from '@/interfaces/layout.interface';

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    const [designAudit, setDesignAudit] = useState(false);
    const [joinTenderChecked, setJoinTenderChecked] = useState(false);
    return (
        <>
            <Navbar
                designAudit={designAudit}
                setDesignAudit={setDesignAudit}
                joinTenderChecked={joinTenderChecked}
                setJoinTenderChecked={setJoinTenderChecked}
            />
            {children}
            <Footer
                designAudit={designAudit}
                setDesignAudit={setDesignAudit}
                joinTenderChecked={joinTenderChecked}
                setJoinTenderChecked={setJoinTenderChecked}
            />
        </>
    );
};

export default Layout;
