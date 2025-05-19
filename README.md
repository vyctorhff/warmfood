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

CHANGE: add only the feature of each ms and move the endpoints to its own ms

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

### Endpoints
GET  - food/meet
GET  - food/suice
GET  - food/beans
GET  - food/optional


## ms-menu

### Endpoints

PATCH - menu/id/publish
POST  - menu/next
GET   - menu/next/dash
GET   - menu/previous
GET   - menu/daily


## ms-order

### Endpoints

GET  - order/daily
GET  - order/{user}/daily
POST - order/
PUT  - order/id
DELETE - order/id
GET  - order/delivery/daily
GET  - order/delivery/{id}/done
GET  - order/last

# User cases