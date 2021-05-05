export default class AgencyRepository {
  constructor (api) {
    this.api = api
  }

  async getAgencies () {
    const response = await this.api.get('agencies');
    return response.data.data
  }


  getAvailabilityColumns () {
    return [
      { name: 'name', required: true, label: 'Agencia', align: 'center', field: row => row.name },
      { name: 'quantity', required: true, label: 'Quantidade', align: 'center', field: row => row.name },
      { name: 'price', required: true, label: 'Preço', align: 'center', field: row => row.name },
      { name: 'actions', required: true, label: 'Ações', align: 'center', field: row => row.name },
    ]
  }
}
