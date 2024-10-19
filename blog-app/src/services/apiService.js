class ApiService {
  static async #fetchReq(url, method, body) {
    const fetchHeaders = { "Content-Type": "application/json" };

    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: fetchHeaders,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(typeof res, "typeeee");
        return res;
      })
      .catch((err) => err);
  }

  static getReq(url) {
    return this.#fetchReq(url, "GET");
  }

  static postReq(url, body) {
    return this.#fetchReq(url, "POST", body);
  }
}

export { ApiService };
