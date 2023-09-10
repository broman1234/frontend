import {useState} from "react";

const useBookSupplementation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const showAddBookModal = () => {
        setIsOpen(true)
    }

    const hideAddBookModal = () => {
        setIsOpen(false)
    }
    return {showAddBookModal, isOpen, hideAddBookModal}
}

export default useBookSupplementation