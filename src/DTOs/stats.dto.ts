import { ITransactionInput } from '@models/transaction.model';

interface IBreakdownStatsPayload {
  field: keyof ITransactionInput;
}

interface IBreakdownStatsResponse {
  field: string;
  count: number
}

interface ITrendStatsPayload {
  startDate: string;
  endEnd: string;
  period: 'days' | 'week' | 'month' | 'year';
  field: string;
}

interface ITrendStatsResponse {
  field: string;
  total: string;
  time: string;
}

interface INUllableStatsPayload {
  startDate: string;
  endEnd: string;
  field: string;
  resolution: number;
  nullableField: string;
}

interface INUllableStatsResponse {
  field: string;
  count: number;
  avg: number;
  total: number;
}

export {
  IBreakdownStatsPayload,
  IBreakdownStatsResponse,
  ITrendStatsPayload,
  ITrendStatsResponse,
  INUllableStatsPayload,
  INUllableStatsResponse
};