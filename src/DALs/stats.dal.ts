import { IBreakdownStats, ITrendStats } from '@dto/stats.dto';
import { fn, col, Op } from 'sequelize';

import Transaction from '@models/transaction.model';

export const breakdown = async (payload: IBreakdownStats): Promise<any> => {
  return Transaction.findAll({
    attributes: [
      [fn('COUNT', col('*')), 'count'],
      [fn('COALESCE', col(payload.field), 'Unknown'), 'field'],
    ],
    group: [payload.field],
    raw: true,
  });
};

export const trend = async (payload: ITrendStats): Promise<any> => {
  const startedDate = new Date(payload.startDate);
  const endDate = new Date(payload.endEnd);

  return Transaction.findAll({
    attributes: [
      [fn('COALESCE', col(payload.field), 'Unknown'), 'field'],
      [fn('count', col(payload.field)), 'total_transactions'],
      [fn('date_trunc', payload.period, col('created_time')), payload.period]],
    where: {
      created_time: {
        [Op.between]: [startedDate, endDate],
      },
    },
    group: [payload.field, payload.period],
    order: [[payload.period, 'ASC']],
    raw: true,
  });
};

