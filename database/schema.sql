create database diss;

\c diss;

create table postagem(
    codigo uuid primary key,
    autor varchar(100) not null,
    descricao varchar(100) not null,
    imagem varchar(100) not null
);

create table cadastro(
    codigo uuid primary key,
    nome varchar (30) not null,
    email varchar(100) not null,
    nickname varchar (30) not null,
    senha varchar (100) not null
);

insert into postagem values(
    'eeea029f-7eb5-4a5d-8edb-243727bdd82d',
    'lucas',
    'lorem inpsum dolor asimet',
    'https://picsum.photos/800/800?random=1'
);

select * from postagem;
select * from cadastrar;

delete from postagem where codigo = 'eeea029f-7eb5-4a5d-8edb-243727bdd82d';

