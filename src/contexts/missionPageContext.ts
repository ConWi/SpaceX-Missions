import {createContext, useContext} from 'react'
import {IMissionPageContext} from '../types/context/mission'

export const MissionPageContext = createContext<IMissionPageContext | null>(null)
export const MissionPageProvider = MissionPageContext.Provider

export const useMissionPageContext = (): IMissionPageContext => {
    const data = useContext(MissionPageContext)

    if (!data) throw new Error('Data in MissionPageContext doesn\'t exist');

    return data;
}