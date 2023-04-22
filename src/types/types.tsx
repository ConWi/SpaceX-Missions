export interface ILaunch {
    flight_number: number,
    mission_name: string,
    launch_date_utc: string,
    links: ILink,
    details: string
    rocket: IRocket,
    launch_site: ILaunchSite
}

export interface ILink {
    mission_patch_small: string
}

export interface IMissionListProps {
    missionList: ILaunch[]
}

export interface IFilterProps {
    filters: IFilterItem[]
}

export interface IFilterItem {
    title: string,
    selectName: string,
    values: string[]
}

export interface IRocket {
    rocket_name: string
}

export interface ILaunchSite {
    site_name: string
}

export interface IFilterKeys {
    title: string,
    propertyName: string,
    selectName: string
}

export interface IFilterContext {
    value: string,
    propertyName: string,
    selectName: string
}

export interface IMissionPage {
    missionList: ILaunch[],
    filters: IFilterContext[],
    setFilters: (filters: IFilterContext[]) => void
}