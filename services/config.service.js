export default class ConfigService {
  static NODE_ENV = process.env.NODE_ENV;

  static get(name) {
    return process.env[name];
  }
}