drop table teacher;
drop table subject;

create table teacher(
    id int(10) not null auto_increment,
    firstname varchar(30) not null,
    primary key (id)
);

create table subject(
    id int (10) not null auto_increment,
    subjectname varchar(30) not null,
    primary key (id)
);
