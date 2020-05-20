Feature: Salario com Desconto do INSS

  Scenario: Salario menor que R$1830,30
    When O salario do trabalhador utilizando o INSS é 1730 reais
    Then Ele recebe 1591.6 reais

  Scenario: Salario com valor maior que R$ 1830,30 e menor que 3050.53
    When O salario do trabalhador utilizando o INSS é 2500 reais
    Then Ele recebe 2275 reais

  Scenario: Salario com valor maior que R$3050.53 e menor que 6101.07
    When O salario do trabalhador utilizando o INSS é 5100 reais
    Then Ele recebe 4539 reais

  Scenario: Salario com valor maior que R$6101.07
    When O salario do trabalhador utilizando o INSS é 7300 reais
    Then Ele recebe 6628.89 reais