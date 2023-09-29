const useBookDeleteSection = (deletedBookIds, setDeletedBookIds) => {
    const handleRadioClick = (bookId) => {
        setDeletedBookIds(prevIds => prevIds.includes(bookId) ? prevIds.filter((id) => id !== bookId) : [...prevIds, bookId])
    }

    return {handleRadioClick};
}

export default useBookDeleteSection;