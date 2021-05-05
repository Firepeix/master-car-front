export default class AutomobileRepository {
  constructor (api) {
    this.api = api
  }


  async getGroups () {
    const response = await this.api.get('groups');
    return response.data.data
  }

  async getAvailableFeatures () {
    const response = await this.api.get('features');
    return response.data.data
  }

  async saveAutomobileTemplate (template) {
    const body = this.makeBody(template, await this.toBase64(template.thumbnail))
    const response = await this.api.post('automobiles', body)
    return response.data;
  }

  toBase64 (file) {
   return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    })
  }

  makeBody (template, thumbnail) {
    return {
      name: template.name,
      groupId: template.group.id,
      features: template.features.map(feature => feature.id),
      thumbnail,
      automobiles: template.availability.map(agency => {
        return Array(Number(agency.quantity)).fill(null).map(() => {
          return {
            agencyId: agency.id,
            price: agency.price.replace(/\D/gm, '')
          }
        })
      }).flat()
    }
  }
}
