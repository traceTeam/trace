== README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version
- System dependencies
- Configuration
- Database creation
- Database initialization
- How to run the test suite
- Services (job queues, cache servers, search engines, etc.)
- Deployment instructions
- ...

Please feel free to use a different markup language if you do not plan to run


Rails 4.2.10
ruby 2.3.4p301 (2017-03-30 revision 58214) [x86_64-linux]


### 1. 서버 사전 작업

- mysql-server 설치

  ```ruby
  sudo apt-get install mysql-server mysql-client libmysqlclient-dev
  ```

- Rails application 생성

  ```ruby
  rails new appname -d mysql
  ```

- Create the database

  ```ruby
  rake db:create
  ```



### 2. config/database.yml 수정

- Mysql password 등록

  ```ruby
  password: 1234 #mysql password 입력
  ```

- 접속 확인

  ```ruby
  http://localhost:3000/
  ```



  <!-- rails generate controller schedules create

#### Post(1)



- posts 컨트롤러  `rails g controller posts index new create show edit update destroy`
- post 모델  `rails g model post title:string content:text`



#### Comment(N)

- comment 모델  `rails g model comment content:string post_id:integer`

  417  bundle install
  418  rails generate devise:install
  419  rails generate devise user
  420  rake db:migrate -->



### devise 설치
# Gemfile
gem 'devise'
$ bundle install

rails generate devise:install

```ruby
      create  config/initializers/devise.rb
      create  config/locales/devise.en.yml
```





### user 모델 만들기

rails generate devise user

```ruby
      invoke  active_record
      create    db/migrate/20180712160104_add_devise_to_users.rb
      insert    app/models/user.rb
       route  devise_for :users
```

rails g devise:controllers users
 
### 게시판 글 작성 tinymce-r 추가




### Repository 구현 - 스캐폴딩으로 손쉽게 만들자
rails g scaffold repository title:string content:text user_id:integer
rake db:migrate
route 추가 
get '/repositories' => 'get#index'
 repository controller에 index 수정 


### Trip 구현 - 스캐폴딩으로 손쉽게 만들자
rails g scaffold tripplan title:string content:text repository_id:integer    
rake db:migrate
route 추가 
get '/tripplans' => 'tripplans#index'


### Trip - 이미지 업로드 
gem 'carrierwave'
bundle install
rails g uploader Img
rails g migration AddImgToRepository img:string

### Reference

- https://gorails.com/setup/ubuntu/16.04


[ /asset/stylesheet/main.css.erb ] 
/* =============================================
			Theme Styling
============================================= */
.tg-wrapper {
	height:13%;     <-- 100% 였는데 13%로 줄임
	overflow-y: hidden;
	position:relative;
}


[ /app/assets/stylesheets/amp.css ]
html, body{
    
    /*background-color: #008080;*/
    /*width: 100%;*/
    /*height: 100%;*/
    margin : 0;
}