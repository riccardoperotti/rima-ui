// import useSWR from 'swr';

// const fetcher = (...args: any[]) => fetch(...args).then(res => res.json());

export type RankedRhyme = {
  word: string;
  rank: number;
};

export type WordLookup = {
  word: string;
  type: string;
  syllables: string;
  sounds: string;
}

export interface FetchRhymesResults {
  rhymes: RankedRhyme[];
  lookup: WordLookup;
  error: string;
  count: number;
}

export const fetchRhymes = async (word: string): Promise<FetchRhymesResults> => {
  console.log("fetching....");

  const base = "http://localhost:8080/rima/";
  const apiURL = base + word;

  const response = await fetch(apiURL).then((res) => res.json());
  console.log(response);

  return {
    rhymes: response.rhymes,
    lookup: response.lookup,
    count: response.count,
    error: response.error,
  };
};

export function filterRhymes(rhymes: RankedRhyme[], threshold: number): string[] {
  const words = rhymes
    .filter((r: RankedRhyme) => r.rank >= threshold)
    .map((r: RankedRhyme) => r.word);

  return words;
}
