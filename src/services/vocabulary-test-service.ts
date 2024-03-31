import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { GraphQLError } from "graphql";

export const getVocabularyTest = async (id: string) => {
  try {
    const result = await prisma.vocabularyTest.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching Vocabulary test");
  }
};

export const createVocabularyTest = async (input: {
  vocabularySelectionTests: Array<{
    words: string[];
    correctAnswer: string;
  }>;
  grade: string;
}) => {
  const data: Prisma.VocabularyTestCreateInput = {
    vocabularySelectionTests: {
      createMany: {
        data: input.vocabularySelectionTests.map((test) => ({
          words: test.words,
          correctAnswer: test.correctAnswer,
        })),
      },
    },
    grade: input.grade,
  };
  try {
    const result = await prisma.vocabularyTest.create({ data });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating Vocabulary test");
  }
};

export const updateVocabularyTest = async (
  id: string,
  input: {
    grade: string;
  }
) => {
  try {
    const result = await prisma.vocabularyTest.update({
      where: { id },
      data: input,
    });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error updating lesson test");
  }
};
