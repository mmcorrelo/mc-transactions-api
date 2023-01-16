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

export {
  IBreakdownStats,
  IBreakdownStatsResult,
  ITrendStats,
};