# warmfood

## Study Objective
This project has the only go improve my knowledge about golang and typescript(with deno).
So I will mix the solucion with diferents languages.

## Objective
A warmfood is servered in a food box. Usually peoble eat warmfood at work.
project to help a small establishment to order food.

# Tecnologic

## Java
- Java 24
- Quarkus

## Typescript
- Deno

## Golang
- Only native libs

# Micro services

## List
- ms-auth
Deno

- ms-user
Golang

- ms-food
Java

# Top level arch

gateway -> ms-auth
        -> ms-menu
        -> ms-order
        -> ms-report

        14h -> move the data from day to a history record
            -> send financial data for financial department
