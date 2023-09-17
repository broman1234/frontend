import {createContext, useState} from "react";

const BannerContext = createContext();

const BannerProvider = ({children}) => {
    const [bannerMessage, setBannerMessage] = useState("");
    const [bannerStyle, setBannerStyle] = useState('');
    const value = {bannerMessage, setBannerMessage, bannerStyle, setBannerStyle}
    return <BannerContext.Provider value={value}>{children}</BannerContext.Provider>
}

export {BannerContext, BannerProvider};
