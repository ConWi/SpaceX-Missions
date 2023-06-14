export interface ILaunchDto {
    flight_number: number,
    mission_name: string,
    launch_date_utc: string,
    links: ILinkDto,
    details: string
    rocket: IRocketDto,
    launch_site: ILaunchSiteDto,
}

export interface ILinkDto {
    mission_patch_small: string
}

export interface IRocketDto {
    rocket_name: string
}

export interface ILaunchSiteDto {
    site_name: string
}