import { CoverEntity } from '../entities/Cover';

export const coversTransform = (covers: CoverEntity | [CoverEntity]) => {
  if (!Array.isArray(covers)) {
    return transform(covers);
  }
  return covers.map((cover) => {
    return transform(cover);
  });
};

export const transform = (cover: CoverEntity) => {
  return {
    id: cover.id,
    registerDate: cover.registerDate,
    historicalNumber: cover.historicalNumber,
    totalAmount: cover.totalAmount,
    iteration: cover.iteration,
    invoiced: cover.invoiced,
    createdAt: cover.createdAt,
    updatedAt: cover.updatedAt,
  };
};
