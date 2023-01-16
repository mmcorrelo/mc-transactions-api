import * as StatsDTO from '@dto/stats.dto';
import { fn, col, Op, literal } from 'sequelize';

import Transaction from '@models/transaction.model';

export const breakdown = async (payload: StatsDTO.IBreakdownStatsPayload): Promise<any> => {
  return Transaction.findAll({
    attributes: [
      [fn('COUNT', col('*')), 'count'],
      [fn('COALESCE', col(payload.field), 'Unknown'), 'field'],
    ],
    group: [payload.field],
    raw: true,
  });
};

export const trend = async (payload: StatsDTO.ITrendStatsPayload): Promise<any> => {
  const startedDate = new Date(payload.startDate);
  const endDate = new Date(payload.endEnd);

  return Transaction.findAll({
    attributes: [
      [fn('COALESCE', col(payload.field), 'Unknown'), 'field'],
      [fn('count', col(payload.field)), 'total'],
      [fn('date_trunc', payload.period, col('created_time')), 'time'],
    ],
    where: {
      created_time: {
        [Op.between]: [startedDate, endDate],
      },
    },
    group: [payload.field, 'time'],
    order: [['time', 'DESC']],
    raw: true,
  });
};

export const nullablePercentage = async (payload: StatsDTO.INUllableStatsPayload): Promise<any> => {
  const startedDate = new Date(payload.startDate);
  const endDate = new Date(payload.endEnd);
  const resolution: number = Math.min(payload.resolution, 20);

  return Transaction.findAll({
    attributes: [
      [fn('COALESCE', col(payload.field), 'Unknown'), 'field'],
      [literal(`SUM(CASE WHEN ${payload.nullableField} IS NOT NULL THEN 1 ELSE 0 END)`), 'count'],
      [literal(`ROUND(AVG(CASE WHEN ${payload.nullableField} IS NULL THEN 0 ELSE 1 END), ${resolution})`), 'avg'],
      [fn('count', 1), 'total'],
    ],
    where: {
      created_time: {
        [Op.between]: [startedDate, endDate],
      },
    },
    group: [payload.field],
    raw: true,
  });
};

