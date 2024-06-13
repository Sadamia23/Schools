export class APIBuilder {
  private static PROXY_SERVER = 'http://localhost:3000/proxy?targetUrl=';
  private static DOMAIN_URL = 'https://skolebi.emis.ge';
  private static BACK = '/back';
  private static CONTACT = '/contact';
  private static SCHOOL = '/school';
  private static GENERAL_DATA = '/generaldata';

  public static getContacts() {
    return `${this.PROXY_SERVER + this.DOMAIN_URL + this.BACK + this.CONTACT}`;
  }

  public static getGeneralData() {
    return `${
      this.PROXY_SERVER +
      this.DOMAIN_URL +
      this.BACK +
      this.SCHOOL +
      this.GENERAL_DATA
    }`;
  }
}
