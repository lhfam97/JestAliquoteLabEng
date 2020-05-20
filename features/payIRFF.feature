Feature: Salario com Desconto do IRFF

  Scenario: Salario menor que R$1903.99
    When O salario do trabalhador utilizando IRFF é 1730 reais
    Then Ele recebe 1730 reais

  Scenario: Salario com valor maior que R$1903.99 e menor que R$2826.66
    When O salario do trabalhador utilizando IRFF é 2500 reais
    Then Ele recebe 2455.3 reais

  Scenario: Salario com valor maior que R$2826.66 e menor que R$3751.06
    When O salario do trabalhador utilizando IRFF é 3500 reais
    Then Ele recebe 3329.8 reais

  Scenario: Salario com valor maior que R$3751.06 e menor que R$4664.69
    When O salario do trabalhador utilizando IRFF é 4000 reais
    Then Ele recebe 3736.13 reais

  Scenario: Salario com valor maior que R$4664.69
    When O salario do trabalhador utilizando IRFF é 10000 reais
    Then Ele recebe 8119.36 reais