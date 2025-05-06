# warmfood

Study only: project to help a small establishment to order food.
A warmfood is servered in a food box. Usually peoble eat warmfood at work.

# Tecnologic

## Java

- Java 24
- Quarkus

## Typescript

- Deno

## Golang

- Native libs

# Micro services

## ms-auth

### Endpoints
POST - auth/
GET  - auth/login

## ms-user

### Endpoints
POST - user/
GET  - user/id
GET  - user/login
GET  - user/perfil
GET  - user/perfil/check

## ms-food

Micro service for foods in the warmfood

### Endpoints
GET  - food/meet
GET  - food/suice
GET  - food/beans
GET  - food/optional

## ms-menu


### Endpoints
POST - menu/next
PATCH - menu/id/publish
GET - menu/next/dash
GET - menu/previous


## ms-order
???
### Endpoints


# User cases