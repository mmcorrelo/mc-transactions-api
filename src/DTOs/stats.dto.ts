import { ITransactionInput } from '@models/transaction.model';

interface IBreakdownStats {
  field: keyof ITransactionInput;
}

interface IBreakdownStatsResult {
  field: string;
  count: number
}

interface ITrendStats {
  startDate: string;
  endEnd: string;
  period: 'days' | 'week' | 'month' | 'year';
  field: string;
}

interface ITrendStatsResult {
  field: string;
  total: string;
  time: string;
}

interface INUllableStats {
  startDate: string;
  endEnd: string;
  field: string;
  resolution: number;
  nullableField: string;
}

interface INUllableStatsResult {
  field: string;
  count: number;
  avg: number;
  total: number;
}

export {
  IBreakdownStats,
  IBreakdownStatsResult,
  ITrendStats,
  ITrendStatsResult,
  INUllableStats,
  INUllableStatsResult,
};