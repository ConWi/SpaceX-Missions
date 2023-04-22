export const prettifyDate = (date: string): string => {
    return new Date(date)
        .toLocaleDateString('ru')
        .replaceAll('/','.');
}