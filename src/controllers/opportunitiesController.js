const apiPipeDrive = require("../api/apiPipeDrive")
const { apiToken } = require('../config/pipeDriveApiConfig'); 
const createOrder = require("../services/createOrder");
const dealRepository = require("../database/repositories/dealRepository");


module.exports = {
  async index(req, res) {
    try {
      const opportunitiesWon = await apiPipeDrive.get(
        `/deals?status=won&start=0&api_token=${apiToken}`
      );
      
      const { data } = opportunitiesWon.data;
    
      const orders = await createOrder.execute(data);

      await dealRepository.createOpportunity(orders);

      const orderedOrders = await dealRepository.sortOpportunitiesPerDate()
      return res.status(200).json(orderedOrders);
    } catch (err) {
      return res.status(404).json(err.message);
    }
  },
  async indexClient(req, res) {
    try {
      const data = await dealRepository.sortOpportunitiesPerClient();
      return res.status(200).json(data);
    } catch (err) {
      return res.status(404).json(err.message);
    }
  },
  async findClient(req, res) {
    try {
      const { clientName } = req.params;

      const client = await dealRepository.findClient(clientName);

      if (!client) {
        return res.status(404).json({ error: 'User not exists' });
      }

      return res.status(200).json(client);
    } catch (err) {
      return res.status(400).json(err.meessage);
    }
  },
};