export const formatPrice = (number) => {
   return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(number / 100)
}

export const getUniqueValues = (data, type) => {
   let uniqueValues = data.map((item) => item[type])
   if(type === "colors") {
      uniqueValues = uniqueValues.flat() // o flat meio que desestrutura arrays dentro do nosso array, ex: [1, 2, 3, [4, 5], [6, 7]] === [1, 2, 3, 4, 5, 6, 7]
   }
   return ["all", ...new Set(uniqueValues)]

}
