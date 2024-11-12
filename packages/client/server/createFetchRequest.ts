import { Request as ExpressRequest } from 'express';

export const createFetchRequest = (req: ExpressRequest) => {
  const origin = `${req.protocol}://${req.get('host')}`;
  const url = new URL(req.originalUrl || req.url, origin);

  const controller = new AbortController();
  req.on('close', () => controller.abort());

  const headers = new Headers();

  Object.entries(req.headers).forEach(([key, values]) => {
    if (values) {
      if (Array.isArray(values)) {
        values.forEach((value) => {
          headers.append(key, value);
        });
      } else {
        headers.set(key, values);
      }
    }
  });

  const init: {
    method: string;
    headers: Headers;
    signal: AbortSignal;
    body?: any;
  } = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req.body;
  }

  return new Request(url.href, init);
};
