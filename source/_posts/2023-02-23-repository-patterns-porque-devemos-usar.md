---
title: "Repository Patterns: Porque devemos usar?"
subtitle: O Repository Pattern é um padrão de design de software que fornece uma abstração de alto nível para o acesso a dados. Ele é amplamente utilizado em projetos de software para separar a lógica de negócios da lógica de acesso a dados, tornando o código mais organizado, reutilizável e fácil de manter.
author: 'Moisés Fausto'
internal_link: https://www.amazon.com.br/dp/B0BXQNRRFQ
internal_image: ''
internal_title: 'Curso de Programação com Javascript para Iniciantes: Guia Prático'
aside_link: https://www.amazon.com.br/dp/B0BXQNRRFQ
aside_image: ''
aside_title: 'Curso de Programação com Javascript para Iniciantes: Guia Prático'
tags:
    - repository-patterns
    - DDD
    - nodejs
categories:
    - arquiteture
---

![Repository Patterns: Porque devemos usar?](https://miro.medium.com/v2/resize:fit:720/format:webp/1*OAFJOw3aphju1Fm7ksDrtA.png)

## Aqui estão algumas informações importantes sobre o Repository Pattern

### Importância

Separação de Responsabilidades: O Repository Pattern permite separar a lógica de acesso a dados da lógica de negócios, tornando o código mais organizado e fácil de manter.

Abstração: O Repository fornece uma abstração de alto nível para o acesso a dados, tornando-o mais fácil de usar e reduzindo a complexidade do código.

Testabilidade: Ao usar o Repository, é possível escrever testes de unidade para a lógica de negócios sem se preocupar com o acesso a dados. Isso torna o teste mais fácil e confiável.

### Pontos Fortes

Organização: O Repository torna o código mais organizado, separando as responsabilidades entre a lógica de negócios e o acesso a dados.

Reutilização: O Repository permite reutilizar o mesmo código de acesso a dados em diferentes partes do projeto, reduzindo a duplicação de código.

Testabilidade: O Repository torna o teste de unidade mais fácil e confiável, permitindo que os testes sejam escritos para a lógica de negócios sem se preocupar com o acesso a dados.

### Pontos Fracos

Complexidade: O Repository Pattern pode adicionar alguma complexidade ao código, especialmente se o projeto é pequeno e não requer separação de responsabilidades.

Overhead: A implementação do Repository Pattern pode adicionar algum overhead ao código, pois requer a criação de uma camada adicional de abstração.

### Por que usar em um projeto Repository Pattern

Separação de responsabilidades: O Repository Pattern separa a lógica de negócios da lógica de acesso a dados, tornando o código mais organizado e fácil de manter.

Reutilização de código: O Repository Pattern permite reutilizar o mesmo código de acesso a dados em diferentes partes do projeto, reduzindo a duplicação de código.

Testabilidade: O Repository Pattern torna o teste de unidade mais fácil e confiável, permitindo que os testes sejam escritos para a lógica de negócios sem se preocupar com o acesso a dados.

Facilidade de manutenção: O Repository Pattern torna o código mais fácil de manter, pois separa a lógica de negócios da lógica de acesso a dados, tornando mais fácil fazer alterações no código sem afetar outras partes do projeto.

### Vamos ver um exemplo feito em Node na prática!

```
listUsers(rquest, response) {
    const { order } = request.query
    
    const sortedUsers = user.sort((a, b) => {
        if (order === 'desc') return a.id < b.id ? 1 : -1
        
        return a.id > b.id ? 1 : -1
    })
    
    response.send(200, JSON.stringfy(sortedUsers))
}
```

Temos na imagem acima, um exemplo sem o uso de Repository Patterns, onde vemos que toda a lógica de manipulação dos dados fica sob responsabilidade do método do Controller.

Apesar de ser um código simples, se for uma aplicação escalável, devemos usar o padrão recomendando para tercerizar a responsabilidade dessa manipulação. Vamos ver como ficaria o resultado:

veja como o método que lista os usuários ficou mais clean e agora lida somente com a sua responsabilidade.

```
listUsers(rquest, response) {
    const { order } = request.query
    
    const sortedUsers = UserRepository.orderBy(order, users)
    
    response.send(200, JSON.stringfy(sortedUsers))
}
```

Criamos um novo diretório, repository/UserRepository, onde vamos lidar com o método de manipulação de ordenação.

```
class UserRepository {
    orderBy(order, users) {
        const sorted = users.sort((a, b) => {
            if (order === 'desc') return a.id < b.id ? 1 : -1
        
            return a.id > b.id ? 1 : -1
        })
        
        return sorted
    }
}

module.exports = new UserRepository();
```

Apesar de parecer mais trabalhoso, na prática iremos entender melhor a importância desse Domain-Driven Design, onde iremos ter muito mais produtividade e manutenção mais fácil no código.