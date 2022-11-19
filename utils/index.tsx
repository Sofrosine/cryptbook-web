export const currencyConverter = (amount: number, withoutRp?: boolean) => {
  const _amount = amount < 0 ? 0 : amount;

  return `${withoutRp ? "" : "Rp "}${String(_amount).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  )}`;
};
