---
title: "Arrumando a casa com sort-imports do ESLint"
subtitle: "Se você, assim como eu, preza pela organização, a partir de hoje você vai começar a usar o plugin do ESLint. Se quiser aprender como utilizá-lo, siga o post abaixo."
author: 'Moisés Fausto'
internal_link: https://www.amazon.com.br/dp/B0BXQNRRFQ
internal_image: ''
internal_title: 'Curso de Programação com Javascript para Iniciantes: Guia Prático'
aside_link: https://www.amazon.com.br/dp/B0BXQNRRFQ
aside_image: ''
aside_title: 'Curso de Programação com Javascript para Iniciantes: Guia Prático'
tags:
    - nodejs
    - eslint
    - javascript
    - vuejs
    - reactjs
categories:
  - Tutorial
---

![Arrumando a casa com sort-imports do ESLint](https://miro.medium.com/v2/resize:fit:720/format:webp/1*IBILU5G3Gj7Tn8a_7FJSXA.png)

Você já imaginou como, ao longo do tempo, sua aplicação cresce em tamanho e suas importações se tornam cada vez mais caóticas, a ponto de se tornarem completamente incompreensíveis? À medida que a complexidade da sua aplicação aumenta, a falta de organização das importações deixa de fazer sentido, como se você tivesse uma casa bagunçada que nunca é arrumada.

Se você, assim como eu, preza pela organização, a partir de hoje você vai começar a usar o plugin do ESLint. Se quiser aprender como utilizá-lo, siga o post abaixo. 😉

Primeiro de tudo, confira o exemplo de um arquivo com as importações sem organização.


```
import dois from 'numeros.js'
import A from 'alfabeto.js'

import { SaoPaulo, EspiritoSanto, RioDeJaneiro, MinasGerais  } from 'cidades.js'
import * as estados from 'estados.js'
import { brasil, nigeria, alemanha } from 'paises.js'

import { LadyGaga } from 'artistas.js'
```

Para organizarmos as importações, precisamos usar o plugin do ESLint chamado [sort-imports](https://eslint.org/docs/latest/rules/sort-imports). É com ele que iremos analisar todas as importações do nosso projeto e, com um simples comando, verificar o que podemos corrigir.

Para isso, instale o ESLint, como comando:

```
yarn add --dev eslint
```

Após a instalação iremos configurar o ESLint, para isso rode o comando:

```
npx eslint --init
```
Apos rodar o comando, irá aparecer em seu terminal as seguintes perguntas:

![resultado do comando acima](https://miro.medium.com/v2/resize:fit:640/format:webp/1*aBktbVm5c18fLP74oVGMcg.png)

Isso vai variar de acordo com o seu projeto. Se você já quiser adicioná-lo a um projeto existente, pule para o próximo tópico.

Agora, voltando à configuração, após responder às perguntas da instalação, deixe seu arquivo **package.json** de acordo com o de baixo:

```
{
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "yarn run lint --fix"
    },
    "devDependencies": {
        "eslint": "^8.48.0"
    },
    "license": "MIT"
}
```

## É hora de de solucionar o problema (finalmente)

Agora chegou a hora de resolver o nosso problema principal, que é organizar nossas importações. Para isso, precisamos adicionar o plugin sort-imports no arquivo .eslintrc, como mostrado na imagem abaixo:

```
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parsetOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    // Adicione dentro de rules o plugin
    "rules": {
        "sort-imports": "error"
    }
}
```

Basicamente, essa regra verifica todas as declarações de importação e garante que todas as importações sejam organizadas primeiro de acordo com a sintaxe dos elementos utilizados e, em seguida, de forma alfabética pelo primeiro elemento ou nome de alias..

Só com isso já conseguimos ter uma correção de lint ocorrendo. Para corrigir, basta rodar o comando:

```
yarn run lint:fix
```

Mas não para por aí, ainda podemos fazer algo ainda mais personalizado. Vamos adicionar as seguintes linhas:

```
// Adiocione dentro de rules o plugin
"rules": {
    "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclareSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["all", "single", "multiple", "none"],
        "allowSeparateGroup": true
    }]
}
```

Como diria Jack, o Estripador: “Vamos por partes!”

## O que cada linha faz

Linha 4: Quando true, a regra ignora a distinção entre maiúsculas e minúsculas no nome local das importações.

Linhas 5: Ignora a classificação das instruções de declaração de importação.

Linha 6: Ignora a classificação dos elementos em uma declaração de importação com vários membros.

Linha 7: Existem quatro estilos diferentes, e a ordem de classificação da sintaxe de um elemento padrão é:

* none - módulo de importação sem ligações exportadas.
* all - importe todos os membros fornecidos pelas ligações exportadas.
* multiple - importar vários membros.
* single - importar um membro.

Todas as quatro opções devem ser especificadas no array, mas você pode personalizar a sua ordem.

Linha 8: Quando _true_, a regra verifica a classificação das declarações de importação apenas para aquelas que aparecem em linhas consecutivas.

Em termos simples, se houver uma linha em branco, uma linha com um comentário ou qualquer outra instrução após uma declaração de importação, isso afetará a ordenação das declarações de importação.

Agora vamos rodar o comando de lint para que ele nos mostre os erros, como mostrado abaixo:

```
yarn lint
```

![erros informados a partir do comando acima](https://miro.medium.com/v2/resize:fit:720/format:webp/1*codmJEj7r-xmKiKoCP4oVQ.png)

Podemos corrigir manualmente ou podemos deixar o comando corrigir para nós, usando o seguinte comando:

```
yarn lint:fix
```

![Alguns dos erros corrigidos a partir do comando acima](https://miro.medium.com/v2/resize:fit:720/format:webp/1*vNW94YnoIo2-HUgSNWMqHQ.png)

Vimos que ele corrigiu a maioria dos problemas. Agora, conseguimos corrigir manualmente o restante e obter o seguinte resultado:

```
import A from 'alfabeto.js'
import dois from 'numeros.js'

import * as estados from 'estados.js'
import { EspiritoSanto, MinasGerais, RioDeJaneiro, SaoPaulo } from 'cidades.js'
import { alemanha, brasil, nigeria } from 'paises.js'

import { LadyGaga } from 'artistas.js'
```

Aposto que com essa dica, seu projeto vai ter uma aparência diferente. Espero ter ajudado você com este passo a passo. Se gostou ou acredita que posso melhorar algo, deixe algum comentário abaixo!

Obrigado e até a próxima…

fonte: [https://eslint.org/docs/latest/rules/sort-imports](https://eslint.org/docs/latest/rules/sort-imports)