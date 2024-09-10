---
title: "ID Sequencial vs. UUID em SQL: qual é o melhor identificador para sua tabela?"
subtitle: "Você sabe diferenciar UUID para ID e sabe onde deve ser implementado? Leia o post de hoje e saiba mais."
author: 'Moisés Fausto'
internal_link: https://www.amazon.com.br/dp/B0BXQNRRFQ
internal_image: ''
internal_title: 'Curso de Programação com Javascript para Iniciantes: Guia Prático'
aside_link: https://www.amazon.com.br/dp/B0BXQNRRFQ
aside_image: ''
aside_title: 'Curso de Programação com Javascript para Iniciantes: Guia Prático'
tags:
    - SQL
    - Postgres
    - IDxUUID
categories:
  - arquiteture
---

![ID Sequencial vs. UUID em SQL: qual é o melhor identificador para sua tabela?](https://miro.medium.com/v2/resize:fit:720/format:webp/1*IU_rWat3qmb2snZldTH6cQ.png)

E ai, galera!

Recentemente eu estava estudando sobre Banco de Dados [PostegreSQL](https://www.postgresql.org/), e reparei que o instrutor estava se referenciando ao identificador da tabela de uma forma não comum para mim. Ele usava ao [UUID](https://www.postgresql.org/docs/current/datatype-uuid.html) ao invés de um ID, e por isso eu resolvi entender melhor e compartilhar esse breve conteúdo, espero que gostem.

Quando criamos tabelas em SQL, precisamos de um identificador exclusivo para cada linha da tabela. O ID sequencial é um número inteiro que é atribuído automaticamente pelo sistema de gerenciamento de banco de dados (DBMS) a cada nova linha adicionada à tabela. Esse número é geralmente incrementado em um valor fixo a cada nova linha adicionada.

Por exemplo:

```
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255)
);
```

Nesse exemplo, o ID é um inteiro que é gerado automaticamente pelo DBMS a cada nova linha adicionada à tabela clientes. O uso de IDs sequenciais é simples e fácil de implementar, e pode ser muito eficiente em termos de desempenho para grandes tabelas, pois não há necessidade de gerar um valor exclusivo complexo para cada nova linha.

Por outro lado, o UUID é um identificador exclusivo global que é gerado aleatoriamente e é garantido que nunca se repetirá. Isso significa que o valor do UUID é muito menos previsível do que um ID sequencial, e é muito improvável que duas linhas na mesma ou em tabelas diferentes tenham o mesmo valor de UUID. Por exemplo:

```
CREATE TABLE produtos (
    id UUID PRIMARY KEY,
    nome VARCHAR(255),
    preco DECIMAL(10,2)
);
```

Nesse exemplo, o ID é um UUID que é gerado aleatoriamente pelo DBMS a cada nova linha adicionada à tabela produtos. O uso de UUIDs garante que o valor exclusivo de cada linha na tabela seja mantido, mesmo se os dados forem distribuídos em vários servidores.

## ID Sequencial

### Pontos Positivos:

* Fácil de implementar
* Geralmente muito eficiente em termos de desempenho para grandes tabelas
* Possibilita uma ordenação das linhas de acordo com a ordem de inserção

### Pontos negativos:

* Não garante a exclusividade dos valores gerados, uma vez que valores duplicados podem ser gerados se houver alguma falha no sistema
* Torna mais fácil a tentativa de adivinhar valores de ID subsequentes e, portanto, menos seguro

## UUID

### Pontos positivos:

* Garante a exclusividade dos valores gerados, mesmo se os dados forem distribuídos em vários servidores
* É muito menos previsível do que um ID sequencial, tornando mais difícil a tentativa de adivinhar valores subsequentes e, portanto, mais seguro

### Pontos Negativos:

* Pode ser mais difícil de implementar em comparação com um ID sequencial
* Pode ter um desempenho um pouco pior em grandes tabelas, devido à complexidade dos valores gerados
* Não permite uma ordenação das linhas de acordo com a ordem de inserção, o que pode ser um problema em certas aplicações

Em resumo, a principal diferença entre o uso de um ID sequencial e um UUID para identificar tabelas em SQL é a previsibilidade do valor gerado. IDs sequenciais são previsíveis e fáceis de implementar, mas não são garantidos como exclusivos, enquanto os UUIDs são muito menos previsíveis e garantidos como exclusivos. A escolha entre usar um ID sequencial ou um UUID dependerá das necessidades específicas do sistema e das características de desempenho e segurança desejadas.