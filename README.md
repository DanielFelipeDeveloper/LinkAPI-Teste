# Teste Técnico realizado no processo seletivo da LinkAPI 

## :rocket: Sobre o que criei

<p> 
<h3>Construi uma API RESTful com node.js </h4>
- Fiz esse projeto como desafio do processo seletivo da empresa <a href="https://www.linkedin.com/company/linkapi/">LinkAPI</a></br> 
- Para realizar o projeto precisei criar contas testes nas plataformas <a href="https://www.pipedrive.com/pt">Pipedrive</a> e 
<a href="https://www.bling.com.br/">Bling</a> para através da api que construi em node.js fazer uma integração entre as plataformas. </br>
- Essa integração consistiu
em buscar as oportunidades com status igual a ganho no Pipedrive, depois ínseri-las como pedido no Bling
</br>

<h3> Um pouco do que aprendi:</h3>
- Aprendi a utilizar o banco de dados MongoDB Atlas para criar as collections agregando as oportunidades, inseridas no Bling por dia e valor total </br>
- Aprendi a fazer um post enviando um arquivo XML como parâmetro, utilizando a dependência jsontoxml. </br>
- Aprendi a gerar cpfs com a dependência gerador-validador-cpf. </br>
</p>

<h2> <img src="https://i.dlpng.com/static/png/6577858_preview.png" width="50px" align="center"/> Como usar/contribuir? </h2>
<p> Você precisa ter instalado o <a href="https://nodejs.org/en/">Node.js</a> </p>

<h3> Passos <h3>

<h4> 1. Clone o repositório <h4>

```
 $ git clone https://github.com/DanielFelipeDeveloper/LinkAPI-Teste.git
```

<h4> 2. Rode a aplicação no seu terminal <h4>

```
#Instale as Dependências
$ npm install ou yarn
#Inicie o Servidor
$ npm start ou yarn start
```
### :beginner: **Tecnologias:**
* JavaScript
* Node.js
* Express
* Axios
* MongoDB
* Cors
