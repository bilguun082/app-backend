import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";
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
    const result = await prisma.lesson.findUnique({
      where: { id },
      include: {
        facts: true,
      },
    });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching lesson");
  }
};

export const createLesson = async (input: {
  title: string;
  isSaved: boolean;
  isStarted: boolean;
  isDone: boolean;
  facts: Array<{
    title: string;
    image: string;
    fact: string;
    exampleSentence: string;
    isLast: boolean;
  }>;
}) => {
  const data: Prisma.LessonCreateInput = {
    title: input.title,
    isSaved: input.isSaved,
    isStarted: input.isStarted,
    isDone: input.isDone,
    facts: {
      createMany: {
        data: input.facts.map((item) => ({
          title: item.title,
          image: item.image,
          fact: item.fact,
          exampleSentence: item.exampleSentence,
          isLast: item.isLast,
        })),
      },
    },
  };
  try {
    const result = await prisma.lesson.create({ data });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Errror creating vocabulary");
  }
};

export const updateLesson = async (
  id: string,
  input: {
    isSaved: boolean | undefined;
    isStarted: boolean | undefined;
    isDone: boolean | undefined;
  }
) => {
  try {
    const result = await prisma.lesson.update({
      where: { id },
      data: input,
    });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error updating lesson test");
  }
};
