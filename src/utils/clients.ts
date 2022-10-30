import { ClientType } from '../types/client.type';

export const getClients = async () => {
  const res = await fetch('/data.json');
  const { data }: { data: ClientType[] } = await res.json();
  return data;
};
