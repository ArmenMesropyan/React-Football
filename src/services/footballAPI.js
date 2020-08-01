class FootballAPIService {
    constructor() {
        this.baseUrl = 'https://allsportsapi.com/api/football/';
        this.apiKey = 'ff487bbb7223592c0b1882328d47430f647d75d6416517056a374c29f98c8871';
    }

    fetchData = async(endpoint) => {
        return await fetch(`${this.baseUrl}/${endpoint}&APIkey=${this.apiKey}`)
                          .then(resp => resp.json());
    }
}

export default FootballAPIService;