interface UseCaseCRUD<Entity, IWhereOptions> {
  register(vehicle: Entity): Promise<string>
  get(): Promise<Entity[]>
  getVehicleById(id:number): Promise<Entity | null>
  delete(queryOptions: IWhereOptions): Promise<string>
  update(vehicle: Entity, queryOptions: IWhereOptions): Promise<string>
}