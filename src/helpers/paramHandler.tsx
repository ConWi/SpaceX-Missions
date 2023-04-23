export function isDigit(number: string): boolean {
    return !!number.trim() && !isNaN(+number);
}