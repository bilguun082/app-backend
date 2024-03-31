import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { GraphQLError } from "graphql";

export const getLessonTest = async (id: string) => {
  try {
    const result = await prisma.lessonTest.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching lesson test");
  }
};

export const createLessonTest = async (input: {
  selectionTests: Array<{
    type: string;
    words: string[];
    correctForm: string;
  }>;
  grade: string;
}) => {
  const data: Prisma.LessonTestCreateInput = {
    selectionTests: {
      createMany: {
        data: input.selectionTests.map((test) => ({
          type: test.type,
          words: test.words,
          correctForm: test.correctForm,
        })),
      },
    },
    grade: input.grade,
  };
  try {
    const result = await prisma.lessonTest.create({ data });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating Lesson test");
  }
};

export const updateLessonTest = async (
  id: string,
  input: {
    grade: string;
  }
) => {
  try {
    const result = await prisma.lessonTest.update({
      where: { id },
      data: input,
    });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error updating lesson test");
  }
};
