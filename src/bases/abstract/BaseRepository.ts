export abstract class BaseRepository {
  protected abstract store(data: any);
  protected abstract fetch(conditions: any);
  protected abstract find(field: string, value: any);
  protected abstract modify(id: number, data: any);
  protected abstract delete(id: number);
}
