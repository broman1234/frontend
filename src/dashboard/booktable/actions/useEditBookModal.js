const useEditBookModal = (isOpen, setIsShowEditBookModal) => {
    const closeEditBookModal = () => {
        setIsShowEditBookModal(false);
    }

    return {
        closeEditBookModal
    }
}

export default useEditBookModal