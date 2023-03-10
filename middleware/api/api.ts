export const api = {
  
  calculator: (...operands: any): number => {
    return operands
      .reduce((a: number, b: number) => {
        a + b
      })
  },

}