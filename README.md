# SITE BLOG
Este projeto foi criado com [Sculpin Static Site Generator](https://sculpin.io/), 
para criação do meu [site portifólio, junto do meu blog particular](https://www.moisesfausto.com.br).

![Sculpin Static Site Generator](https://sculpin.io/css/sculpin-mascot-jackson-large.png)

## Instalando dependências

Depois de clonar o modelo gerado no disco local, você precisará
execute alguns comandos para instalar as dependências.

```
composer install
yarn install
```

O Composer exigirá uma instalação funcional do PHP. Yarn (ou NPM) irá
da mesma forma, requerem uma instalação funcional do NodeJS.

## Configurando

Depois que as dependências estiverem instaladas, o próximo passo é configurar seu
site e inicie o processo de personalização.

1. Abra o arquivo `app/config/sculpin_site.yml`
2. Altere o Título e o Subtítulo para corresponder ao nome do blog desejado
3. Alrere o campo `url: ~` ou `url: ''`, ao menos que você planeje 
   hospedar seu site em uma subpasta de um domínio existente. Subpasta
	 a hospedagem é atualmente demonstrada pela configuração incluída.
4. Opcionalmente, defina um ID do google analytics ID.
5. Modifique (ou remova) as entradas sob o titulo `social` para editar a barra lateral.

Depois de salvar o arquivo, você deverá conseguir gerar o site:

```
vendor/bin/sculpin generate --watch --server
```

Quando isso for bem-sucedido, ele tentará hospedar seu site para locais
visualizações em [http://localhost:8000](http://localhost:8000).

Quaisquer alterações feitas na configuração ou nos arquivos de origem devem ser acionadas
uma regeneração do site e uma atualização do navegador mostrarão as alterações.

Usando esta visualização auto-hospedada, você pode ajustar seu site antes de visualizá-lo.
para publicá-lo em outro lugar.

Se você planeja usar WebPack e Yarn para personalizar seu CSS/JS/Tailwind
experiência, o comando para regenerar esses arquivos é:

```
yarn run build
```
ou
```
yarn encore dev --watch
```

Por utilizar a lib do Tailwindcss, é necessário as vezes rodar o comando abaixo, 
para que os arquivos css sincronizem com as classes utilizadas

```
yarn run tail
```

## Gerar ambiente de produção

Para gerar o ambiente de produção é necessário o comando:

```
vendor/bin/sculpin generate --env=prod 
```

**ATENÇÃO**

Enviar somente para o repo de produção o diretorio `/output_prod`
