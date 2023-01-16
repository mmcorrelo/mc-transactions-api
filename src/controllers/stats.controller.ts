import * as StatsDAL from '@dal/stats.dal';
import * as StatsDTO from '@dto/stats.dto';

export const breakdown = (payload: StatsDTO.IBreakdownStats): Promise<Array<StatsDTO.IBreakdownStatsResult>> => StatsDAL.breakdown(payload);

export const trend = (payload: StatsDTO.ITrendStats): Promise<Array<StatsDTO.ITrendStatsResult>> => StatsDAL.trend(payload);

export const nullablePercentage = (payload: StatsDTO.INUllableStats ): Promise<Array<StatsDTO.INUllableStatsResult>> => StatsDAL.nullablePercentage(payload);
