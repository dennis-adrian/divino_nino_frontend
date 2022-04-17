import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';

function snakecaseBody(body) {
  if (!body) return null;

  return snakecaseKeys(body, { exclude: [/\[|\]|]|_destroy/] });
}

function snakecaseParams(options) {
  if (options.params) {
    options = { ...options, params: snakecaseBody(options.params) };
  }

  return options;
}

function makeRequest(method, ...args) {
  const instance = axios.create({
    // This is required for `request.xhr?` to return true in Rails-land
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
  });

  return instance[method](...args)
    .then((response) => {
      try {
        return camelcaseKeys(response.data, { deep: true });
      } catch (error) {
        return response.data;
      }
    })
    .catch((error) => {
      let errors;
      if (error.response) {
        errors = error.response.data.errors;
      }

      throw errors || error;
    });
}

export function put(path, body, options = {}) {
  return makeRequest('put', path, snakecaseBody(body), options);
}

export function post(path, body, options = {}) {
  return makeRequest('post', path, snakecaseBody(body), options);
}

export function patch(path, body, options = {}) {
  return makeRequest('patch', path, snakecaseBody(body), options);
}

export function get(path, options = {}) {
  return makeRequest('get', path, snakecaseParams(options));
}

export function deleteRequest(path, options = {}) {
  return makeRequest('delete', path, snakecaseParams(options));
}
