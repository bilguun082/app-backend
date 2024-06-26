import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";

export const getUsers = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const getUser = async (username: string) => {
  try {
    const result = await prisma.user.findFirst({ where: { username } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const registerUser = async (input: {
  email: string;
  username: string;
}) => {
  try {
    const result = await prisma.user.create({ data: input });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating user");
  }
};
