# Warmfood - In progress

## About

Project for study angular 17 or higher. Not comercial.

## Project Strutecture

stubs       -> request mocks
pages       -> screens access by navegation
services    -> services that it can be used in any pages
components  -> included in pages

## Local using stubs

- Install npm run all

`npm install -g npm-run-all`

- Run local with mocks requests

`npm run dev.local`

## Desing pages

Navegations for pages

Page Login  -> Page Create User
            -> Page Home (perfil user)
            -> Page Admin (perfil admin)

Page Home (admin) -> Page Meet
                  -> Page Juice
                  -> Page Complements

Page Home (user) -> Page Cart

Page Cart -> Page Checkout

Page Checkout -> Page Home

### Details

--------------------
Page Login

Fields

- email
- pass

--------------------
Page Create User

Create the user for access the app

Fields

- email
- pass
- name
- phone
- delivary

--------------------
Page Home (user)

If user perfil, shows the daily menu with all options set by the admin

--------------------
Page Home (admin)

Show buttons for admin user

Buttons

- Meets
- Juices
- ...
- Reports

--------------------
Page Checkout

Fields

- Total amount
- Details the order

--------------------
Page Meet

Show all meet options in grid.
