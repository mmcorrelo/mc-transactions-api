import { ITransactionInput } from '@models/transaction.model';

interface IBreakdownStatsPayload {
  field: keyof ITransactionInput;
}

interface IBreakdownStatsResponse {
  name: string;
  value: number;
}

interface ITrendStatsPayload {
  startDate: string;
  endDate: string;
  period: 'days' | 'week' | 'month' | 'year';
  field: string;
  value?: string;
}

interface ITrendStatsResponse {
  field: string;
  total: string;
  time: string;
}

interface INUllableStatsPayload {
  startDate: string;
  endDate: string;
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