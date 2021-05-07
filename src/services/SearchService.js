
export default class SearchService {
  constructor (api) {
    this.api = api
  }

  async begin (body) {
    const response = await this.api.post('search', body)
    return response.data.id
  }

  async getAutomobiles (id) {
    const response = await this.api.get(`search/${id}/automobiles`)
    const data = response.data
    return {automobiles: data.data, criteria: data.meta.criteria}
  }

  async getAgencies (id, groupId) {
    const response = await this.api.get(`search/${id}/agencies/${groupId}`)
    const data = response.data
    return {agencies: data.data, automobile: data.meta.automobile, criteria: data.meta.criteria}
  }

  async getCheckout (id, groupId, agencyId) {
    const response = await this.api.get(`search/${id}/agencies/${groupId}/checkout/${agencyId}`)
    return response.data
  }
}
