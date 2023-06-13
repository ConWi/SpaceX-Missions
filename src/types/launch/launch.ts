export interface ILaunch {
    flightNumber: number,
    missionName: string,
    launchDateUtc: string,
    links: ILink,
    details: string
    rocket: IRocket,
    launchSite: ILaunchSite
}

export interface ILink {
    missionPatchSmall: string
}

export interface IRocket {
    rocket_name: string
}

export interface ILaunchSite {
    site_name: string
}