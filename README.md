# Workg Utils

Utilize essa módulo para fazer validações e/ou formatar valores.

Visualize o módulo no site [NPM](https://www.npmjs.com/package/workg-utils)

## Instalação
```sh
yarn add workg-utils
````
ou
```sh
npm i workg-utils
````

## Uso
```jsx
import React from 'react';
import { useValidation } from 'workg-utils';

function App() {
  const validation = useValidation();
  return (
    <div className="App">
      <span>{validation.validateCnpj("89885145000129") ? "TRUE" : "FALSE"}</span>
    </div>
  );
}

export default App;
```

## O que temos

##### Validation
* validateCpf
* validateCnpj
* validadeEmail

##### Normalize
* onlyNumbers
* onlyLetters
* phoneMask
* cepMask
* cnpjMask
* cpfMask

## Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.
