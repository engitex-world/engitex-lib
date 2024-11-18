export enum RouteAPI {
  Auth = '/auth',
  Business = '/business',
  User = '/users',
  Fabric = '/fabrics',
  FabricInventory = '/fabric-inventories',
  Color = '/colors',
  ColorFabric = '/color-fabric',
  ColorRequest = '/color-requests',
  ColorTrial = '/color-trials',
  FabricColorRecipe = '/fabric-color-recipe',
  Product = '/products',
  DyeingProcess = '/dyeing-processes',
  SpecificationSheet = '/specification-sheets',
  SystemCodes = '/system-codes',
}

export enum MethodAPI {
  POST = 'POST',
  PUT = 'PUT',
  GET = 'GET',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export enum BooleanAPIParams {
  TRUE = 'true',
  FALSE = 'false',
}
