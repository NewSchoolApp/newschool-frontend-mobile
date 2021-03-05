## Novo App NewSchool

### O que é?

Esse repositório contém a implementação de uma versão inicial da rearquitetura do projeto **[NewSchoolApp](https://github.com/NewSchoolApp/newschool-frontend)**. Se trata de uma tentativa de migração do projeto em produção, construído com Nextjs (Vue) e cordova, para React Native.  
A ideia inicial é propor uma estrutura inicial para que possamos dar sequência ao projeto.  
Se você quiser saber mais sobre o projeto newschool, o **[LinkedIn](https://www.linkedin.com/company/newschoolapp/)** do projeto contém mais informações.

### Stack

O projeto está sendo construído utilizando as seguintes tecnologias:  

- **TypeScript** como linguagem
- **React Native** como framework
- **Styled Components** como biblioteca de estilização
- **React Native Paper** como biblioteca de componentes
- **Axios** como biblioteca para acesso a rede (http)
- **Fastlane** para scripts de automação de builds
- **Github Actions** para CI

### Como executar?

Para rodar o projeto, é necessário configurar o ambiente para usar o React Native.  
Caso ainda não tenha configurado, basta seguir a documentação oficial (https://reactnative.dev/docs/environment-setup)
Uma vez configurado, instale as dependências com o comando:  

```yarn install``` ou  ```npm install``` 

Para executar o projeto, use:

```react-native run-android```


### Estrutura

A pasta **app** contém o código do projeto, e as pastas android e ios contém os projetos nativos de cada plataforma.  
O projeto é divido em pastas, de acordo com a responsabilidade dos componentes do sistema  

- **app/assets** - Agrupa os assets estáticos da aplicação
- **app/components** - Agrupa os componentes reaproveitáveis da aplicação (Botões, Inputs etc)
    - **atoms** - Agrupa componentes simples, os mais básicos e mais reaproveitáveis da aplicação
    - **molecules** - Agrupa componentes um pouvo mais complexos, possivelmente formado por um conjunto de átomos ou outras moléculas. Esses componentes não devem ter "inteligência" (preferencialmente stateless)
    - **organisms** - Agrupa componentes mais complexos, potencialmente reaproveitáveis, e com alguma inteligência
- **app/core** - Agrupa os hooks e contexts da aplicação, responsáveis pela comunicação entre a camada de UI e as fontes externas de informação e pela centralização das regras de negócio
- **app/environment** - Agrupa módulos responsáveis por servir de camada de comunicação entre as camadas externas (fontes de dados externas e recursos nativos) e a camada **core**. O objetivo principal dessa camada é diminuir o acoplamento entre as regras de negócio e as dependências externas do projeto, modularizando o código e facilitando possíveis migrações e atualizações de dependências externas
- **app/modules** - Contém os componentes e telas que são mais específicos de cada módulo (tela de login, tela inicial, tela de cadastro, etc.)
- **app/navigation** - Contém o arquivo routes.tsx, responsável por agrupar as telas da aplicação
- **app/utils.ts** - Contém funções utilitárias para o projeto
