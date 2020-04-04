const request = require('supertest');
const app = require('../../src/app');

describe('payment2', () => {

  it('Check aliquote discount1', async () => {
    const response = await request(app)
      .post('/paymentDay2')
      .send({
       value: 1730
      });
      expect(parseFloat(response.body)).toBe(1730);
  });
  it('Check aliquote discount2', async () => {
    const response = await request(app)
      .post('/paymentDay2')
      .send({
       value: 2500
      });
      expect(parseFloat(response.body)).toBe(2455.3);
  });
  it('Check aliquote discount3', async () => {
    const response = await request(app)
      .post('/paymentDay2')
      .send({
       value: 3500
      });
      expect(parseFloat(response.body)).toBe(3329.8);
  });
  it('Check aliquote discount4', async () => {
    const response = await request(app)
      .post('/paymentDay2')
      .send({
       value: 4000
      });
      expect(parseFloat(response.body)).toBe(3736.13);
  });
  it('Check aliquote discount5', async () => {
    const response = await request(app)
      .post('/paymentDay2')
      .send({
       value: 10000
      });
      expect(parseFloat(response.body)).toBe(8119.36);
  });
});
