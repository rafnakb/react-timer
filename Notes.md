# Installed packages
```
$ npm i styled-components
$ npm i @types/styled-components
$ npm i eslint -D
$ npm i react-router-dom
$ npm i phosphor-react
$ npm i @hookform/resolvers
$ npm i date-fns
```
https://www.npmjs.com/package/styled-components
https://reactrouter.com/en/main/start/tutorial
https://react-hook-form.com/get-started

A biblioteca hook form integra com outas, como:
- Validação (zod, you, jpi)
Para isso, é necessário instalar @hookform/resolvers

---

# Unidades mais comuns

font-size => rem
width => rem
heigth => rem ou calc vh
border-radius => px
gao => rem

---

# Controlled (useStatue) vs. Uncontrolled
React Hook Form (https://react-hook-form.com/)

---

# Biblioteca para conhecer
1 - Biblioteca de validação de formulários, etc
- zod (mais adaptação com typescscript)
- yup npm
- jpi npm

---

# Hooks
### useState()
- Valores que dependem de estado enterior, é interessante ser setado no formato de função
```js
setCycles((state) => [...state, newCycle])
```
### useEffect() 
"Efeito colateral"
- Executa quando o componente é renderizado
- Executado quando há alteração na variável de dependência
- Se o useEffect está precisando atualizar o estado de forma síncrona, é possível que não esteja corretamente feito uso.
---

# Estudar mais tarde
- Spread operadtor syntax (...)
- Pomodoro