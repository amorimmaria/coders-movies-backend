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

## **Coders Movies: Lista de User Stories**

**Caicó – RN**  
**2020**

<div id='sumario'/>
## Sumário

1. [Descrição](#descricao)
2. [Lista de User Stories](#us)
   1. [User Story US01](#us01)
   2. [User Story US02](#us02)
3. [Referências](#referencias)



<div id='descricao'/>

## Descrição

O presente documento mostra uma breve descrição dos passos seguidos por um usuário do sistema ***Coders Movies*** ao acessar alguma das funcionalidades que estarão disponíveis.

### Histórico de revisões

| Data | Versão | Descrição | Autor |
| :--- | :----: | :---------| :---- |
| 16/03/2020 | 1.0 | Template e descrição do documento; descrição do User Story US01 | José Geraldo de Medeiros Júnior |
| 16/03/2020 |  -  |        |      |

[topo](#sumario)

<div id='us'/>

<div id='us01'/>

### **User Story US01 - Manter Usuário**

|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema deve manter um cadastro de usuário que tem acesso ao sistema via login e senha. Um usuário tem os atributos name, id, email, username, data de nascimento, tipo de usuário, status, password, avatarURL e WatchedMovies. O email será o login e ele pode registrar-se diretamente no sistema, o avatarURL é um link para uma foto de seu perfil. Além disso o usuário poderá alterar alguns dados, como o e-mail ou a senha. Para o usuário administrador do sistema, ele precisa de permissão de outro administrador em mesmo nível ou o superadmin. A superadmin não pode ser excluido, devendo ser criado junto com banco de dados. Os usuários administrador podem alterar o nível de permissão de um usuário comum ou de outro adminstrador. |
|**Requisitos envolvidos**| RF01, RF02, RF03, RF04, RF05, RNF03 |
|**Prioridade**| Essencial |
|**Estimativa**| 14h |
|**Tempo Gasto (real):**| |
|**Tamanho Funcional**| 18 PF |

### **Testes de Aceitação (TA)**

| Código | Descrição |
| ------ | --------- |
|**TA01.01**| |
|**TA01.02**| |
|**TA01.03**| |
|**TA01.04**| |


<div id='us02'/>

### **User Story US02 - Página de Perfil**


|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema fornecerá ao usuário uma página pessoal contendo algumas informações sobre o usuário, tais como comentários, filmes favoritos, playlists, dentre outros. O usuário deverá poderá tornar algumas informações públicas ou privadas, além da própria página. |
|**Requisitos envolvidos**| RF06 |
|**Prioridade**| Desejável |
|**Estimativa**| 8h |
|**Tempo Gasto (real):**| |
|**Tamanho Funcional**| 6PF |

### **Testes de Aceitação (TA)**

| Código | Descrição |
| ------ | --------- |
|**TA02.01**|  |
|**TA02.02**|  |

<div id='us03'/>

### **User Story US03 - Mídia**

|                    |      |
| ------------------ | ---- |
|**Descrição**| Mídia representa uma página que tem um link para o filme ou série e informações relevante sobre o mesmo. Um usuário pode adicionar uma mídia aos favoritos, a uma playlist, poderá dar opiniões comentando sobre a mesma. Caso um usuário já tenha assistido tal filme ele poderá dizer que já o assistiu, além de poder recomendar o mesmo. |
|**Requisitos envolvidos**| RF07, RF09, RF10, RF11, RF12, RF14, RF15 |
|**Prioridade**| Essencial |
|**Estimativa**| 24h |
|**Tempo Gasto (real):**| |
|**Tamanho Funcional**| 12 PF |

### **Testes de Aceitação (TA)**

| Código | Descrição |
| ------ | --------- |
|**TA03.01**| Ao comentar na Mídia, o usuário poderá ver seu comentário após enviá-lo. |
|**TA03.02**| Caso já tenha feito um comentário naquela mídia, ao clicar em “comentar” será criado um novo comentário. |
|**TA03.03**| Ao dizer que ja assistiu um filme ou série, o usuario poderá confirmar isso através de um sinal como uma bolinha verde ao lado do título, por exemplo. |

<div id='us04'/>

### **User Story US04 - Playlists**

|                    |      |
| ------------------ | ---- |
|**Descrição**| O sistema deve manter um cadastro de usuário que tem acesso ao sistema via login e senha. Um usuário tem os atributos name, id, email, password, avatarURL e WatchedMovies. O email será o login e ele pode registrar-se diretamente no sistema, o avatarURL é um link para uma foto de seu perfil. Além disso o usuário poderá alterar alguns dados, como o e-mail ou a senha. |
|**Requisitos envolvidos**| RF02, RF03, RF04, RF05, RNF03 |
|**Prioridade**| Essencial |
|**Estimativa**| 14h |
|**Tempo Gasto (real):**| |
|**Tamanho Funcional**| 10 PF |

### **Testes de Aceitação (TA)**

| Código | Descrição |
| ------ | --------- |
|**TA04.01**| |
|**TA04.02**| |
|**TA04.03**| |
|**TA04.04**| |


<div id='referencias'/>
