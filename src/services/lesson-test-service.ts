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

export const createLessonTest = async (input: Prisma.LessonTestCreateInput) => {
  try {
    const result = await prisma.lessonTest.create({ data: input });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating Lesson test");
  }
};

export const updateLessonTest = async (
  id: string,
  input: Prisma.LessonTestUpdateInput
) => {
  try {
    const result = await prisma.lessonTest.update({
      where: { id },
      data: input,
    });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating lesson test");
  }
};

export const deleteLessonTest = async (id: string) => {
  try {
    const result = await prisma.lessonTest.delete({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error deleting lesson test");
  }
};
