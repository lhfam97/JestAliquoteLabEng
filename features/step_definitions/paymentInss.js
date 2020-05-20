const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const app = require('../../src/app');
const request = require('supertest');
defineSupportCode(function ({ Then, When }) {
  let salario = 0;
  When('O salario do trabalhador utilizando o INSS é {float} reais', async function (input) {
    const response = await request(app)
      .post('/paymentDay1')
      .send({
        value: input
      });
    salario = response.body;
  });

  When('O salario do trabalhador utilizando IRFF é {float} reais', async function (input) {
    const response = await request(app)
      .post('/paymentDay2')
      .send({
        value: input
      });
    salario = response.body;
  });

  Then('Ele recebe {float} reais', function (input) {
    assert.equal(salario, input);
  });

});