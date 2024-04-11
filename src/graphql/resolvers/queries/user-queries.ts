import { getUser, getUsers } from "@/services/user-service";

export const userQueries = {
  getUsers: () => getUsers(),
  getUser: (_: unknown, { title }: { title: string }) => getUser(title),
};
