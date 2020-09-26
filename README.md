# projetoSoftPlanCypress
Projeto de automação desafio  SoftPlan, desenvolvido em Cypress

Pré requisito: 
Versão:
Node: 6.14.6
Cypress: 5.0.0
Cypress-cucumber-preprocessor: 2.5.4

Estruturando o projeto:
O Cypress pode ser utilizado sem Cucumber com uma estrutura simples explicada na documentação. Porém Eu utilizei na estrutura ferramenta de escrita de testes em BDD com sintax do Gherkin.
Principais Pastas:
Integration: coloquei o arquivo "projectAutomation\cypress\integration\cenariosDesafioCubos.feature" com os cenários de teste escritos no formato BDD.
Steps_definition: nesta pasta coloquei os passos que faz conexao com a Feature escrita em BDD e os mêtodos que fiz em Cypress.
Page_objects: nesta pasta coloquei os metodos feito com o Cypress.
Elements: nesta pasta coloquei os elementos da página, apenas para melhorar reutilizaçao e manutenção.


Comandos de Execução: 
1- npm run test:all  (Para executar todo os cenarios da feature)
2- npm run test:TC01 (Para executar todo os cenarios TC-01 da feature)
3- npm run test:TC02 (Para executar todo os cenarios TC-02 da feature) 
