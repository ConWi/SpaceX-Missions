export const enum DefaultSelectedOptions {
    All = 'All'
}

export const enum SelectorTitles {
    Rocket = 'Rocket',
    LaunchSite = 'Launch Site',
}

export const enum SelectorNames {
    Rocket = 'rocket',
    LaunchSite = 'launch_site',
}

export const enum SelectorLaunchObjectKeys {
    RocketName = 'rocket.rocket_name',
    SiteName = 'launchSite.site_name',
}

export interface ISelectorKeyMapping {
    title: SelectorTitles,
    selectorName: SelectorNames,
    launchObjectProperty: SelectorLaunchObjectKeys,
}

export interface ISelectorItem {
    title: SelectorTitles,
    selectorName: SelectorNames,
    options: string[],
    defaultOptionValue: DefaultSelectedOptions
}

export type ISelectedOptions = Record<SelectorNames, string | DefaultSelectedOptions>