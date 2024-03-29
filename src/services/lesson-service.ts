import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";

export const getAllLessons = async () => {
  try {
    const result = await prisma.lesson.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching lessons");
  }
};

export const getLesson = async (id: string) => {
  try {
    const result = await prisma.lesson.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching lesson");
  }
};

export const createLesson = async (input: {
  title: string;
  isSaved: boolean;
  facts: Array<{
    image: string;
    fact: string;
    exampleSentence: string;
  }>;
}) => {
  try {
    const result = await prisma.vocabulary.create({ data: input });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Errror creating vocabulary");
  }
};

export const updateLesson = async (
  id: string,
  input: {
    title: string;
    isSaved: boolean;
    facts: Array<{
      image: string;
      fact: string;
      exampleSentence: string;
    }>;
  }
) => {
  try {
    const result = await prisma.vocabulary.update({
      where: { id },
      data: input,
    });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating user");
  }
};
