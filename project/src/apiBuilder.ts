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
  private static GENERAL_EDUCATION_DATA = '/generaleducation?page=1&size=10';

  public static useProxy() {
    return this.PROXY_SERVER;
  }

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
  public static getEducationInfoDetails(key: string) {
    return `${
      this.PROXY_SERVER +
      this.DOMAIN_URL +
      this.BACK +
      this.EDUCATION_INFO +
      '/' +
      key
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

  // needs encodeURIComponent()
  public static getGeneralEducationData() {
    return `${this.DOMAIN_URL + this.BACK + this.GENERAL_EDUCATION_DATA}`;
  }
}
