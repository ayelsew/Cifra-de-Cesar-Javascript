# Cifra de César em Javascript

O objetivo desse projeto experimental é: testar em prática o funcionamento da cifra de césar.
Como um exemplo de introdução a criptográfia em geral.


**Não requer dependências do NPM apenas NodeJS instalado.**

## Uso
### Para embaralhar

`nodejs Crypter.js <valor de rotação> "Texto a ser ofuscado"`

`<valor de rotação>`: É o valor que o rotor terá que se deslocar para modificar o alfabeto.

### Para desembaralhar

`nodejs Decrypter.js <valor de rotação> "Texto já ofuscado"`

**O valor de rotação deve ser o mesmo usado para ofuscar!**

## Observações.

Atualmente convete o texto de entrada para lowercase antes da ofuscação.
O alfabeto é padrão lowercase e sem acentuação.
Caracteres não presentes no alfabeto são preservados.