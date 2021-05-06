import { Notify } from 'quasar';

export default class NotifyService {
  loading (message = 'Aguarde enquanto processamos') {
    return Notify.create({
      spinner: true,
      position: 'bottom-right',
      message,
      timeout: 0
    })
  }

  success(message) {
    Notify.create({
      type: 'positive',
      position: 'bottom-right',
      message
    })
  }
}
