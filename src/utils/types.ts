export type Post = {
  id:       number;
  title:    string;
  contents: string; // これは消す予定
  is_open:  boolean | string;
  pub_date: Date;
};

export type Posts = Post[];

export type Categories = {
  category: {
    id:   number; 
    name: string;
  }[];
};