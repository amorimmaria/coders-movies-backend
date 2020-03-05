### **UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE**

### **CENTRO DE ENSINO SUPERIOR DO SERIDÓ**

### **DEPARTAMENTO DE COMPUTAÇÃO E TECNOLOGIA**

### **CURSO DE BACHARELADO EM SISTEMAS DE INFORMAÇÃO**

**Jaine de Senna Santos**  
**José Geraldo de Medeiros Júnior**  
**José Rubens de Oliveira Júnior**  
**Maria das Graças Dias Amorim**  
**Paulo Vitor de Medeiros Brito**  
**Pedro Jonas da Silva Medeiros**

## **Coders Movies: Modelo Conceitual e Modelo de Dados**

**Caicó – RN**  
**2020**

# Documento de Visão

## Introdução

Este documento possui como objetivo definir e elencar as necessidades e características (requisitos) do sistema Coders Movies, assim como todos os elementos envolvidos em seu desenvolvimento e utilização, como perfis de usuário, tecnologias adotadas, riscos e dependências.

O projeto Coders Movies é uma aplicação direcionada ao público cinéfilo, focada em armazenar e apresentar informações sobre filmes, séries e programas de TV. Através da realização de um cadastro, o usuário pode acessar diversas informações relacionadas aos conteúdos audiovisuais, como ficha-técnica, trailers, classificação (dada pelo IMDB e usuários do sistema) e resenhas.
Possui diversas ferramentas, dentre elas: permitir ao utilizador não só marcar suas atrações favoritas, como também adicioná-las ao sistema; escolher atores, diretores e gêneros favoritos; marcar quais filmes e séries já assistidos; fazer resenhas e avaliações; personalizar seu perfil com seus favoritos marcados no sistema; as páginas de cada atração possuirão links para o acesso das mesmas nas plataformas de streaming (caso estejam disponíveis).
Com isso, o sistema fará uso da API do Internet Movie Database (IMDB) para pegar as informações sobre as atrações e elencos, como também a avaliação dada para cada um pelo site.


## Lista de Requisitos Funcionais

- CRUD de usuários pelo administrador;
- Login de usuário;
- Usuário pode criar uma conta;
- Usuário pode alterar seus dados;
- Usuário pode selecionar uma foto para seu perfil;
- Usuário terá uma página de perfil contendo informações relevantes;
- Usuário poderá adicionar filmes e séries aos favoritos;
- Usuário poderá criar suas próprias playlists e colocar seus filmes e séries dentro da playlist;
- Usuário poderá selecionar que filme assistiu e qual filme deseja assistir;
- Usuário poderá comentar na página de filmes;
- Usuário poderá pesquisar por filmes e acessar uma página contendo informações relevantes sobre o filme;
- Usuário poderá recomendar filmes para outro usuário;
- O sistema contará com recomendações de filmes para os usuários baseado em suas escolhas;
- O usuário poderá selecionar quais temporadas das séries já assistiu;
- Usuário poderá navegar da página do filme até o sistema de streaming que fornece o filme.

## Lista de Requisitos Não-Funcionais
- Utilizando de API externa;
- O sistema será desenvolvido na linguagem de programação JavaScript com os frameworks Node.js e Vue.js;
- O sistema deverá rodar no browser (aplicação web);
- O software terá uma interface de fácil navegação, onde os usuários poderão utilizá-lo sem muitas dificuldades;
- O Banco de Dados utilizado deverá ser relacional, mais especificamente PostgreeSQL.

## Perfis de Usuários
São dois os tipos de usuários do Coders Movies:

Perfil Administrador
No sistema, o administrador tem acesso ao CRUD de usuários, como também das páginas de filmes, séries, diretores e atores e moderar atividades de usuários.

Perfil Usuário
O usuário pode, criar um cadastro, personalizar seu perfil, com foto e biografia, adicionar página de filmes, séries, programas de TV, atores, diretores e etc., fazer resenhas e avaliações sobre atrações, favoritas atrações, atores e diretores, compartilhar atrações com os amigos.

## Riscos

|    Data    | Risco                                                                                 | Prioridade | Responsável | Status    | Providência/Solução                                                                                                                     |
| :--------: | :------------------------------------------------------------------------------------ | :--------: | :---------: | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| 27/02/2020 | Não aprendizado das ferramentas utilizadas pelos componentes do grupo a tempo         |    Alto    |    Todos    | Vigente   | Reforçar estudos sobre as ferramentas e aulas com o integrante que conhece a ferramenta                                                 |
| 27/02/2020 | Desistência de um dos integrantes por motivos de trabalho                             |    Alto    |   Gerente   | Vigente   | Replanejar o cronograma com base nas tarefas que ainda falta e realocar para os outros componentes                                      |
| 27/02/2020 | Ausência de componente por motivo de trabalho                                         |    Alto    |   Gerente   | Vigente   | Realizar reuniões virtuais                                                                                                              |
| 27/02/2020 | Encontrar dificuldades para aprender uma nova tecnologia em um curto período de tempo |    Alto    |    Todos    | Vigente   | Encontros presenciais com aula de quem domina a tecnologia e cursos online                                                              |
| 28/02/2020 | Componentes utilizando sistemas operacionais diferentes                               |   Médio    |    Todos    | Resolvido | Todas as ferramentas que serão utilizadas, foi instalada em ambos os sistemas operacionais                                              |
| 28/02/2020 | Pode ocorrer de não entregarmos o software                                            |   Médio    |    Todos    | Vigente   | Encontros presenciais e virtuais com mais frequência e ritmo de desenvolvimento mais intenso para que todos consiga entregar o software |
