import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { GraphQLError } from "graphql";
import { stringify } from "querystring";

export const getLessonTest = async (id: string) => {
  try {
    const result = await prisma.lessonTest.findUnique({
      where: { id },
      include: {
        selectionTests: true,
      },
    });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching lesson test");
  }
};

export const createLessonTest = async (input: {
  title: string;
  selectionTests: Array<{
    type: string;
    sentence: string;
    words: string[];
    correctForm: string;
    isLast: boolean;
  }>;
  grade: string;
}) => {
  const data: Prisma.LessonTestCreateInput = {
    title: input.title,
    selectionTests: {
      createMany: {
        data: input.selectionTests.map((test) => ({
          type: test.type,
          sentence: test.sentence,
          words: test.words,
          correctForm: test.correctForm,
          isLast: test.isLast,
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
