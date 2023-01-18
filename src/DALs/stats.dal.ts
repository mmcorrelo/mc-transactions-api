import * as StatsDTO from '@dto/stats.dto';
import { fn, col, Op, literal, QueryTypes } from 'sequelize';

import Transaction from '@models/transaction.model';

export const breakdown = async (payload: StatsDTO.IBreakdownStatsPayload): Promise<any> => {
  return Transaction.findAll({
    attributes: [
      [literal('cast(count(*) as INTEGER)'), 'value'],
      [fn('COALESCE', col(payload.field), 'Unknown'), 'name'],
    ],
    group: [payload.field],
    raw: true,
  });
};

export const trend = async (payload: StatsDTO.ITrendStatsPayload): Promise<any> => {
  const startedDate = new Date(payload.startDate);
  const endDate = new Date(payload.endDate);

  return Transaction.findAll({
    attributes: [
      [fn('COALESCE', col(payload.field), 'Unknown'), 'name'],
      [literal(`cast(count(${payload.field}) as INTEGER)`), 'value'],
      [fn('date_trunc', payload.period, col('created_time')), 'date'],
    ],
    where: {
      created_time: {
        [Op.between]: [startedDate, endDate],
      },
      ...(payload.value ? { [payload.field]: { [Op.like]: payload.value } } : {}),
    },
    group: [payload.field, 'date'],
    order: [['date', 'DESC']],
    raw: true,
  });
};

export const nullablePercentage = async (payload: StatsDTO.INUllableStatsPayload): Promise<any> => {
  const startedDate = new Date(payload.startDate);
  const endDate = new Date(payload.endDate);
  const resolution: number = Math.min(payload.resolution, 20);

  return Transaction.findAll({
    attributes: [
      [fn('COALESCE', col(payload.field), 'Unknown'), 'value'],
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

