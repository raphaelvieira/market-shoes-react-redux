export const { format: formatPrice } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

/*
export const { format: formatPrice }  = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}); */
