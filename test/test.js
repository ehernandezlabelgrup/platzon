const expect = require('chai').expect
const platzon = require('..').default

describe('#platzon', function (){
  it ('Si la palabra termina en arr se le quitan los dos utlimos caracteres', function (){
    const translation = platzon("Programar")
    expect(translation).to.equals("Program")
  })
  it ('Si l apalabra inicia con Z, se le añade "pe" al final', function (){
    const translation = platzon ("Zorro")
    const translation2 = platzon ("Zarpar")
    
    expect(translation).to.equals("Zorrope")
    expect(translation2).to.equals("Zarppe")
  })
  it ('Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y poner un guion en el medio', function (){
    const translation = platzon ("abecedario")
    expect(translation).to.equals("abece-dario")

  })
  it ('Si la palabra es un palindromo, interalar entre caractres mayuculas y minusculas', function (){
    const translation = platzon ("sometemos")
    expect(translation).to.equals("SoMeTeMoS")
  })       
})