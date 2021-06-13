export type ExampleLower = {
  id: number;
  name: string;
  exampleUpperiD: number;
};

export type PutExampleLower = {
  crudEntitySearchFilters: ExampleLower[];
  crudChangeResult: ExampleLower;
};
