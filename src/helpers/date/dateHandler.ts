export const convertFormatToRussian = (date: string): string => {
    return new Date(date)
        .toLocaleDateString('ru')
        .replaceAll('/','.');
}