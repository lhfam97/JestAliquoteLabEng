const request = require('supertest');
const app = require('../../src/app');

describe('payment', () => {
  // beforeEach(async () => {
  //   await connection.migrate.rollback();
  //   await connection.migrate.latest();
  // });

  // afterAll(async () => {
  //   await connection.destroy();
  // });

  it('Check aliquote discount1', async () => {
    const response = await request(app)
      .post('/paymentDay1')
      .send({
       value: 1730
      });
      expect(parseFloat(response.body)).toBe(1591.6);
  });
  it('Check aliquote discount2', async () => {
    const response = await request(app)
      .post('/paymentDay1')
      .send({
       value: 2500
      });
      expect(parseFloat(response.body)).toBe(2275);
  });
  it('Check aliquote discount3', async () => {
    const response = await request(app)
      .post('/paymentDay1')
      .send({
       value: 5100
      });
      expect(parseFloat(response.body)).toBe(4539);
  });
  it('Check aliquote discount4', async () => {
    const response = await request(app)
      .post('/paymentDay1')
      .send({
       value: 7300
      });
      expect(parseFloat(response.body)).toBe(6628.89);
  });
});
