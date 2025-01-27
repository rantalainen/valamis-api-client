import { ApiConfig } from './api';
import CacheableLookup from 'cacheable-lookup';
import https from 'https';

export interface ValamisApiClientOptions {
  grantType: string;
  clientId: string;
  clientSecret: string;
}

export interface ValamisApiClientConfig extends ApiConfig<any> {
  /**
   * API base url,
   * by default: `https://rantalainen.valamis.io`.
   */
  baseURL?: string;
  /** Request timeout in milliseconds, defaults to 120000 (120 secs) */
  timeout?: number;
  /** Instance of `https.Agent` or `true` to enable internal Keep Alive Agent, defaults to `true` */
  keepAliveAgent?: boolean | https.Agent;
  /** Instance of `cacheable-lookup` or `true` to enable internal DNS cache, defaults to `true` */
  dnsCache?: boolean | CacheableLookup;
}
