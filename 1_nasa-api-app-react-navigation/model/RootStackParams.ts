import { NASAData } from "./NASAData";

export type RootStackParams = {
  Home: undefined;
  SelectedArticle: {
    data: NASAData,
    name: string
  };
}
