export type Post = {
  id:       number;
  title:    string;
  contents: string; // これは消す予定
  is_open:  boolean;
  pub_date: string; // 本当は datetime
};

export type Posts = Post[];

export type Categories = {
  category: {
    id:   number; 
    name: string;
  }[];
};