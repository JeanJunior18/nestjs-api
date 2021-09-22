export interface RepositoryPort<T> {
  create(entity: T): Promise<T>;
  update(id: string, entity: T): Promise<T>;
  list(): Promise<T[]>;
  findById(id: string): Promise<T | null>;
}
