const aboutJsonUrl = require.context("../utils/", false, /\.json$/);

export default class AboutSection {
  getAlldata(jsonName) {
    const jsonData = this.getJsonUrl(jsonName);
    return jsonData;
  }

  getJsonUrl(jsonName) {
    return aboutJsonUrl("./" + jsonName);
  }
}
