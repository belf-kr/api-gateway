export type ExampleLower = {
  id: number;
  name: string;
  exampleUpperId: number;
};

export type PutExampleLower = {
  crudEntitySearchFilters: ExampleLower[];
  crudChangeResult: ExampleLower;
};
