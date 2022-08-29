import React, { useCallback, useState } from "react";

const LayoutContext = React.createContext({});

export default function LayoutProvider(props: any) {
    const [visibleSideBar, setVisibleSideBar] = useState(false);
    const showSideBar = useCallback(
        () => setVisibleSideBar((prevState) => !prevState),
        [setVisibleSideBar]
    );

    const value = { visibleSideBar, showSideBar };
    return <LayoutContext.Provider value={value} {...props} />;
}

export const useLayout = () => {
    const context = React.useContext(LayoutContext);
    if (!context) {
        throw new Error(
            "This hook only can used into the layoutContext, you need add the Provider"
        );
    }
    return context;
};
