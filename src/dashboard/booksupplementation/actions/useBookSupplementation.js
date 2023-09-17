import {useContext, useState} from "react";
import {BannerContext} from "../../../banner/BannerProvider";

const useBookSupplementation = () => {
    const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false)
    const {bannerStyle, bannerMessage} = useContext(BannerContext);
    const [isShowAddBookSuccessBanner, setIsShowAddBookSuccessBanner] = useState(false);

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
        isShowAddBookSuccessBanner,
        setIsShowAddBookSuccessBanner,
        bannerStyle,
        bannerMessage
    }
}

export default useBookSupplementation