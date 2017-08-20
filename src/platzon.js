export default function platzom(str){
  let translation = str
  // si la palabra termina en arr se le quitan los dos utlimos caracteres
  
  //endsWith te permite controlar los ultimos carateres de un string
  if (str.toLowerCase().endsWith('ar')){
    //slice nos permite cortar caracteres, en este caso solo dejara desde el caracter 0 hasta el antepenultimo
    translation = str.slice( 0, -2)
  }
  //ahora si l apalabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')){
    translation += 'pe'
  }
  
  //si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y poner un guion en el medio
  const length = translation.length
  
  if (translation.length >= 10){
    const firsHalf = translation.slice(0, Math.round(length / 2))
    const secondHalf = translation.slice( Math.round(length / 2))
    translation = firsHalf + '-' + secondHalf
    
  }
  //si la palabra es un palindromo, interalar entre caractres mayuculas y minusculas
  
  const reverse = (str) => str.split('').reverse().join('')
  
  minMay = (str) => {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++){
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
      
    }
    return translation
  }
  if (str == reverse (str)){
    return minMay(str)
  }
  return translation
}

