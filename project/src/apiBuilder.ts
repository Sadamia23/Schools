export class APIBuilder {
  private static PROXY_SERVER = 'http://localhost:3000/proxy?targetUrl=';
  private static DOMAIN_URL = 'https://skolebi.emis.ge';
  private static BACK = '/back';
  private static CONTACT = '/contact';
  private static SCHOOL = '/school';
  private static GENERAL_DATA = '/generaldata';
  private static EDUCATION_INFO = '/educationinfo';
  private static EDUCATION_INFO_TITLES = '/assets/lang/ka.json';
  private static REGIONS_SCHOOL_COUNT = '/regionschoolcount';

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
  public static getEducationInfo() {
    return `${
      this.PROXY_SERVER + this.DOMAIN_URL + this.BACK + this.EDUCATION_INFO
    }`;
  }
  public static getEducationInfoTitles() {
    return `${
      this.PROXY_SERVER + this.DOMAIN_URL + this.EDUCATION_INFO_TITLES
    }`;
  }
  public static getRegionsSchoolCount() {
    return `${
      this.PROXY_SERVER +
      this.DOMAIN_URL +
      this.BACK +
      this.SCHOOL +
      this.REGIONS_SCHOOL_COUNT
    }`;
  }
}
