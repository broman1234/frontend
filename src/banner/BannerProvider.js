import {createContext, useState} from "react";

const BannerContext = createContext();

const BannerProvider = ({children}) => {
    const [isShowBookTableErrorBanner, setIsShowBookTableErrorBanner] = useState(false);
    const [isShowBookTableSuccessBanner, setIsShowBookTableSuccessBanner] = useState(false);
    const [bannerMessage, setBannerMessage] = useState("");
    const [bannerStyle, setBannerStyle] = useState('');
    const value = {
        bannerMessage,
        setBannerMessage,
        bannerStyle,
        setBannerStyle,
        isShowBookTableErrorBanner,
        setIsShowBookTableErrorBanner,
        isShowBookTableSuccessBanner,
        setIsShowBookTableSuccessBanner
    }
    return <BannerContext.Provider value={value}>{children}</BannerContext.Provider>
}

export {BannerContext, BannerProvider};
