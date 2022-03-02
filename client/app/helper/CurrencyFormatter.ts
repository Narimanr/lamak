export const CurrencyFormatter = (i: number) => {
    return new Intl.NumberFormat().format(i);
}