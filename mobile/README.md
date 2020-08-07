# Proffy Mobile

Este é o App Mobile do Proffy, um aplicativo que permite a um estudante pesquisar professores e negociar com ele suas aulas privadas.

No aplicativo, o usuário pode informar a matéria que deseja estudar, e o dia e horário que pretende ter aulas. A plataforma então lista todos os Proffies disponíveis, com informações como bio e valor da hora/aula, e permite ao aluno entrar em contato diretamente com ele. Além disso, é possível salvar as os Proffies como favoritos para checar posteriormente, sem a necessidade de pesquisá-los novamente.

## 1 Telas

![home](../assets/mobile-home.jpg) ![list](../assets/mobile-list.jpg) ![fav](../assets/mobile-favorites.jpg)


## 2. Sobre o App

O App foi desenvolvido em React Native, utilizando o [Expo](https://expo.io/) para facilitar o desenvolvimento, além das opções que ele proporciona para acesso das ferramentas do dispositivo.

Além disso, as seguintes bibliotecas foram utilizadas:

- **[Axios:](https://www.npmjs.com/package/axios)** Um cliente HTTP baseado em Promises, o Axios foi utilizado para realizar as diversas chamadas a API.
- **[React Navigation:](https://reactnavigation.org/)** Pacote com **diversas** ferramentas para realizar o roteamento de telas no aplicativo, adequeando seu comportamento de acordo com o sistema operacional e outros fatores. No app, utilizamos navegação em pilha _(stack)_ e por abas _(tab)_.
- **Ferramentas do Expo:** O próprio Expo disponibiliza diversas ferramentas em pacotes a parte. Você pode ver quais estão disponíveis na [documentação do Expo](https://docs.expo.io/).
  - **Expo Font:** Pacote para a importação de maneira fácil de fontes externas da aplicação.
