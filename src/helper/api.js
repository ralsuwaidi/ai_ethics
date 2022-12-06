import axios from 'axios';

axios({
    method: "POST",
    url: "https://aidb.codershq.ae/api/database/rows/table/370/?user_field_names=true",
    headers: {
      Authorization: "Token YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    data: {
      "userId": "string",
      "key": "string",
      "generic 1": "string",
      "generic 2": "string",
      "generic 3": "string",
      "generic 4": "string",
      "generic 5": "string",
      "generic 6": "string",
      "generic 7": "string",
      "generic 8": "string",
      "generic 9": "string",
      "generic 10": "string",
      "generic 11": "string",
      "generic 12": "string",
      "generic 13": "string",
      "generic 14": "string",
      "generic 15": "string"
    }
  })