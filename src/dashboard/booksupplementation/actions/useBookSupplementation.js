import {useContext, useState} from "react";
import {BannerContext} from "../../../banner/BannerProvider";

const useBookSupplementation = () => {
    const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false)
    const {isShowBanner, bannerStyle, bannerMessage} = useContext(BannerContext);

    const showAddBookModal = () => {
        setIsAddBookModalOpen(true)
    }

    const hideAddBookModal = () => {
        setIsAddBookModalOpen(false)
    }
    return {
        showAddBookModal,
        isAddBookModalOpen,
        hideAddBookModal,
        isShowBanner,
        bannerStyle,
        bannerMessage
    }
}

export default useBookSupplementation