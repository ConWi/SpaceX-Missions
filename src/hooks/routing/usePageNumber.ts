import {useParams} from 'react-router-dom'

export const usePageNumber = (): number => {
    const {pageNumber} = useParams()

    return Number(pageNumber);
}