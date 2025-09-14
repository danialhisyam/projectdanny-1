// resources/js/bootstrap.js

import _ from 'lodash'
window._ = _

import axios from 'axios'
window.axios = axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// Optional: if you add <meta name="csrf-token" content="..."> in your layout,
// this sets the header for non-GET requests.
const token = document.querySelector('meta[name="csrf-token"]')
if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.getAttribute('content')
}

// If you ever use Echo/Pusher later, you’ll wire it up here.
