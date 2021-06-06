export type ExampleUpper = {
  id: number;
  creationDate: Date;
  updateDate: Date;
  title: string;
  content: string;
  defaultDouble: number;
  nullableInt: number;
};

export type PutExampleUpper = {
  exampleUpperSearchFilters: ExampleUpper[];
  exampleUpperChangeResult: ExampleUpper;
};
