const jsonxml = require('jsontoxml');
const { generate } = require('gerador-validador-cpf');

const apiBling = require('../api/apiBling');
const { apiKey } = require('../config/blingApiConfig');

module.exports = {
  async execute(deals) {
    const orders = deals.map(async (deal) => {
      const xmlObject = jsonxml(
        {
          pedido: [
            {
              name: 'cliente',
              children: [
                { name: 'nome', text: deal.org_id.name || 'wiserecords' }, 
                {
                  name: 'cpf_cnpj',
                  text: generate(), // gerando cpf
                },
                { name: 'ie', text: '1121558879-2' },
                { name: 'endereco', text: 'Rua Sao Cristovao' },
                { name: 'numero', text: '23' },
                { name: 'bairro', text: 'Sao Cristovao 1' },
                { name: 'cep', text: '78850-000' },
                { name: 'cidade', text: 'Primavera do Leste' },
                { name: 'uf', text: 'MT' },
              ],
            },
            {
              name: 'volumes',
              children: [
                {
                  name: 'volume',
                  children: [{ name: 'servico', text: 'Sedex' }],
                },
              ],
            },
            {
              name: 'itens',
              children: [
                {
                  name: 'item',
                  children: [
                    { name: 'codigo', text: 1 },
                    { name: 'descricao', text: 'deal' },
                    { name: 'qtde', text: 1 },
                    { name: 'vlr_unit', text: deal.value || 0 },
                  ],
                },
              ],
            },
            {
              name: 'parcelas',
              children: [
                {
                  name: 'parcela',
                  children: [{ name: 'vlr', text: deal.value || 0 }],
                },
              ],
            },
          ],
        },
        false // xml header option
      );

      const dataOrder = await apiBling.post(
        `/pedido/json/&apikey=${apiKey}&xml=${xmlObject}`
      );
      const { pedido } = dataOrder.data.retorno.pedidos[0];

      pedido.value = deal.value;
      pedido.orgName = deal.org_id.name;

      return pedido;
    });

    const OrdersCreated = Promise.all(orders).then((resultOrderPromise) => {
      return resultOrderPromise;
    });
    return OrdersCreated;
  },
};