import * as StatsDAL from '@dal/stats.dal';
import * as StatsDTO from '@dto/stats.dto';

export const breakdown = (payload: StatsDTO.IBreakdownStatsPayload): Promise<Array<StatsDTO.IBreakdownStatsResponse>> => StatsDAL.breakdown(payload);

export const trend = (payload: StatsDTO.ITrendStatsPayload): Promise<Array<StatsDTO.ITrendStatsResponse>> => StatsDAL.trend(payload);

export const nullablePercentage = (payload: StatsDTO.INUllableStatsPayload ): Promise<Array<StatsDTO.INUllableStatsResponse>> => StatsDAL.nullablePercentage(payload);
