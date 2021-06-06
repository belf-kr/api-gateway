export type ExampleLower = {
  id: number;
  name: string;
  exampleUpperID: number;
};

export type PutExampleLower = {
  crudEntitySearchFilters: ExampleLower[];
  crudChangeResult: ExampleLower;
};
