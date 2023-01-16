import * as StatsDAL from '@dal/stats.dal';
import { IBreakdownStats, IBreakdownStatsResult, ITrendStats } from '@dto/stats.dto';

export const breakdown = (payload: IBreakdownStats): Promise<Array<IBreakdownStatsResult>> => StatsDAL.breakdown(payload);

export const trend = (payload: ITrendStats): Promise<Array<any>> => StatsDAL.trend(payload);
