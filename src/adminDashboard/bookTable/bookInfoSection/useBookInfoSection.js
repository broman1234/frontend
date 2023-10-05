import {useState} from "react";

const useBookInfoSection = () => {

    const [isShowBookInfoModal, setIsShowBookInfoModal] = useState(false);
    const [currentBook, setCurrentBook] = useState({
        id: 0,
        title: "",
        author: "",
        category: "",
        publisher: "",
        description: ""
    });

    const openBookInfoModal = (currentBook) => {
        setIsShowBookInfoModal(true);
        setCurrentBook(currentBook);
    }

    return {
        isShowBookInfoModal,
        setIsShowBookInfoModal,
        openBookInfoModal,
        currentBook,
        setCurrentBook
    }
}

export default useBookInfoSection;