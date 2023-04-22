import {IMissionPage} from "../types/types";
import {createContext, useContext} from 'react'

export const MissionPageContext = createContext<IMissionPage | null>(null)

export const MissionPageProvider = MissionPageContext.Provider

export const useMissionPageContext = () => {
    const data = useContext(MissionPageContext)

    if (!data) throw new Error('Data in MissionPageContext doesn\'t exist');

    return data;
}