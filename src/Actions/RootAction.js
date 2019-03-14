import axios from "axios";

// Fetch Items Data
export const loadItem = () => dispatch => {
    return axios({
        method:'get',
        url:'https://api.rss2json.com/v1/api.json?rss_url=http://www.abc.net.au/news/feed/51120/rss.xml',
    })
    .then(function (response) {
        dispatch(getItems(response.data.items))
    })
}

export const getItems = (items) => ({
  type: "ITEMS",
  items: items,
})

// Fetch Logo Data
export const loadLogo = () => dispatch => {
    return axios({
        method:'get',
        url:'https://api.rss2json.com/v1/api.json?rss_url=http://www.abc.net.au/news/feed/51120/rss.xml',
    })
    .then(function (response) {
        dispatch(getLogo(response.data.feed.image))
    });
}

export const getLogo = (logo) => ({
    type: "LOGO",
    logo: logo,
})