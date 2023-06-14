export function isValidPageNumber(pageNumber: number): boolean {
    return Number.isInteger(pageNumber) && pageNumber > 0
}
