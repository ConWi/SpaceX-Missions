import {createContext, useContext} from 'react'
import {IMissionPageContext} from '../types/context/mission'

const MissionPageContext = createContext<IMissionPageContext | null>(null)
export const MissionPageProvider = MissionPageContext.Provider

export const useMissionPageContext = (): IMissionPageContext => {
    const data = useContext(MissionPageContext)

    if (!data) throw new Error('Can\'t be used outside of MissionPageProvider');

    return data;
}