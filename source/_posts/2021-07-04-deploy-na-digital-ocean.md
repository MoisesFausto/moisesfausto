---
title: Deploy na Digital Ocean MinhaExperiência
subtitle: Minha breve experiência em ambiente de deploy no serviço da Digital Ocean
author: 'Moisés Fausto'
tags:
    - Deploy
    - Digital Ocean
categories:
    - Deploy
---

![Deploy na Digital Ocean MinhaExperiência](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*dm2Lt6gajeN4mGS8g-eD9g.jpeg)

Por causa de uma possível demanda que está por vir, resolvi estudar a hospedagem da Digital Ocean, que é uma concorrente da AWS. Vendo alguns vídeos resolvi meter a mão, fiz alguns teste de configuração e já me deparei com a primeira pedra no caminho… como é “complexo” configurar o servidor do 0, logo eu que estava acostumado com Hostgator.

Depois de ter instalado Ubunto, Apache e o PHP com os diversos comandos, o MySql deu ruim… ahhh MySql sempre me dando uma rasteira. Passei um sufoco com a adição de privilégios que nunca dava certo, mas no final como sempre, era bobeira, bobeira essa que me fez lembrar meus tempos de Fedora. Enfim, o servidor ficou no esquema para receber a aplicação teste.

Próximo passo: pra ser mais ousado eu queria enviar a aplicação via git na qual já estava no GitLab. Depois de diversas horas configurando e testando, consegui finalmente enviar um arquivo .txt do local para o servidor e tudo ficou perfeito(eu acho).

Apesar da trabalheira, percebi que é mais fácil do que parece e minha aplicação nunca mais irá ver FileZilla na vida, uma aprendizado que ficou e que agora estou preparado para a demanda citada no inicio na qual acredito que não irei ter supressas o_o

Em breve vou fazer um passo a passo, explicando tudo o que eu fiz.