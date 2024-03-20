export type Dictionary = {
  [key: string]: any;
};

export type Reputation = {
  faction: {
    key: {
      href: string;
    };
    name: string;
    id: number;
  };
  standing: {
    raw: number;
    value: number;
    max: number;
    name: string;
    renown_level: number;
  };
};
