export interface RepositoryPort<T> {
  create(entity: T): Promise<T>;
}
