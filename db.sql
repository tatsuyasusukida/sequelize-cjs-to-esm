create database tech_blog_db charset utf8;
create user tech_blog_user@localhost identified by 'tech_blog_pass';
grant all privileges on tech_blog_db.* to tech_blog_user@localhost;
  