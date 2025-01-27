# valamis-api-client

**ValamisApiClient** is a third party Valamis API client for NodeJS. It is a wrapper around an API client that has been [automatically generated](https://www.npmjs.com/package/swagger-typescript-api).

## Installation

Add to project's package.json:

```
npm install @rantalainen/valamis-api-client
```

### Import

```javascript
import { ValamisApiClient } from '@rantalainen/valamis-api-client';
```

## Setup client with options

In order to obtain a client id and client secret, please contact Valamis Support.

```javascript
const valamis = new ValamisApiClient(
  {
    clientId: 'your-client-id',
    clientSecret: 'your-client-secret',
    grantType: 'read'
  },
  {
    baseURL: 'https://example.valamis.io'
  }
);
```

## Resources

- Valamis Integration Guide: https://www.valamis.com/platform/integrations
