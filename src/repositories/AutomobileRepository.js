import NumberPrimitive from 'src/Primitives/NumberPrimitive';

export default class AutomobileRepository {
  constructor (api) {
    this.api = api;
  }

  async getGroups () {
    const response = await this.api.get('groups');
    return response.data.data;
  }

  async getAvailableFeatures () {
    const response = await this.api.get('features');
    return response.data.data;
  }

  async getAutomobiles () {
    const include = 'group';
    const response = await this.api.get('automobiles', { params: { include } });
    return response.data.data;
  }

  async findAutomobile (id) {
    const include = 'group,automobiles.agency,features';
    const response = await this.api.get(`automobiles/${id}`, { params: { include } });
    return response.data.data;
  }

  async updateAutomobileTemplate (id, template) {
    const body = this.makeBody(template, await this.toBase64(template.thumbnail));
    const response = await this.api.put(`automobiles/${id}`, body);
    return response.data;
  }

  async deleteAutomobile (id, templateId) {
    const response = await this.api.delete(`automobiles/${templateId}/automobile/${id}`);
    return response.data;
  }

  async saveAutomobileTemplate (template) {
    const body = this.makeBody(template, await this.toBase64(template.thumbnail));
    const response = await this.api.post('automobiles', body);
    return response.data;
  }

  toBase64 (file) {
    return new Promise((resolve, reject) => {
      if (file !== null) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        return;
      }

      resolve(null);
    });
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
          };
        });
      }).flat()
    };
  }


  getTableColumns () {
    return [
      { name: 'protocol', required: true, label: 'Protocolo', align: 'center', field: row => row.protocol },
      { name: 'name', required: true, label: 'Nome', align: 'center', field: row => row.name },
      { name: 'group', required: true, label: 'Grupo', align: 'center', field: row => row.group === undefined ? '-' : row.group.data.name },
      { name: 'quantity', required: true, label: 'Quantidade', align: 'center', field: row => row.quantity },
      { name: 'actions', required: true, label: 'Ações', align: 'center', field: row => row.name }
    ];
  }

  getAutomobileColumns () {
    return [
      { name: 'protocol', required: true, label: 'Protocolo', align: 'center', field: row => row.protocol },
      { name: 'agency', required: true, label: 'Agencia', align: 'center', field: row => row.agency === undefined ? '-' : row.agency.data.name },
      { name: 'price', required: true, label: 'Preço/Dia', align: 'center', field: row => row.price, format: value => `R$ ${NumberPrimitive.toReal(value)}` },
      { name: 'status', required: true, label: 'Status', align: 'center', field: row => row.status },
      { name: 'actions', required: true, label: 'Ações', align: 'center', field: row => row.name }
    ];
  }
}
