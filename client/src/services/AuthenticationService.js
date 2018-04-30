import Api from './Api'
export default {
  register (data) {
    Api().post('register', data)
  }
}
