import {IFilterProps, ILaunch, IFilterKeys, IFilterContext} from "../types/types";

export function get(obj: any, props: string[]): any {
    return obj && props.reduce(
        (result, prop) => result == null ? undefined : result[prop],
        obj
    );
}

function getUniqueValues<T>(data: T[], key: string): string[] {
    return [...new Set(data.map((item: T) => get(item, key.split('.'))))];
}

export default function getFiltersData(data: ILaunch[]): IFilterProps {
    let result: IFilterProps = {'filters': []}; // Тут я хотел поставить IFilter, но не смог, потому что нужна инициализация всех параметров

    filterKeysData.forEach((filterKey) => {
        result.filters.push({
            'title': filterKey.title,
            'values': getUniqueValues(data, filterKey.propertyName),
            'selectName': filterKey.selectName,
        });
    })

    return result;
}

const filterKeysData: IFilterKeys[] = [
    {'title': 'Rocket', 'propertyName': 'rocket.rocket_name', 'selectName': 'rocket'},
    {'title': 'Launch Site', 'propertyName': 'launch_site.site_name', 'selectName': 'launch_site'},
]

export const defaultFilterContext: IFilterContext[] = filterKeysData.map(filter => {
    return {
        'value': 'All',
        'propertyName': filter.propertyName,
        'selectName': filter.selectName
    }
})

export function getFilteredData(data: ILaunch[], filterItems: IFilterContext[]): ILaunch[] {
    return data?.filter((missionItem) => {
        return filterItems.every(filter => {
            if (filter.value === 'All') return true;
            return filter.value === get(missionItem, filter.propertyName.split('.'))
        })
    })
}
