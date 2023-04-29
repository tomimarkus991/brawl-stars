import { useQuery } from "@tanstack/react-query";

export const useGetPlayer = (playerTag: string) => {
  const getPlayer = async () => {
    const data = await fetch(`http://localhost:3000/api/players/99YCLGVJQ`);
    return data.json();
  };

  return useQuery([playerTag], () => getPlayer());
};
