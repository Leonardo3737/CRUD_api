export default interface RepositoryProvider<Entity, IWhereOptions> {
  create(obj: Entity): Promise<Entity>
  getById(id:number): Promise<Entity>
  getAll(): Promise<Entity[]>
  update(obj: Entity, where: IWhereOptions): Promise<[number]>
  delete(where: IWhereOptions): Promise<number>
}