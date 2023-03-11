function Birthday (date) {
  const splited = date.split("-")
  
  const year = Number(splited[0])
  const month = Number(splited[1])
  const day = Number(splited[2])
  
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  
  const dob = new Date(year, month, day)
  const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate())
  
  let age = today.getFullYear() - dob.getFullYear()
  if (today < dobnow) {
    age = age - 1;
  }
  
  console.log(`Тебе сейчас ${age} лет.`)
}