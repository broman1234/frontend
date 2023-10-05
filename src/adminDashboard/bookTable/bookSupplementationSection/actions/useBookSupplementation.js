import {useState} from "react";

const useBookSupplementation = () => {
    const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false)

    const showAddBookModal = () => {
        setIsAddBookModalOpen(true)
    }

    const hideAddBookModal = () => {
        setIsAddBookModalOpen(false)
    }
    return {
        showAddBookModal,
        isAddBookModalOpen,
        hideAddBookModal
    }
}

export default useBookSupplementation