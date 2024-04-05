import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { GraphQLError } from "graphql";

export const getVocabularyTest = async (title: string) => {
  try {
    const result = await prisma.vocabularyTest.findFirst({
      where: { title },
      include: {
        vocabularySelectionTests: true,
      },
    });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching Vocabulary test");
  }
};

export const createVocabularyTest = async (input: {
  title: string;
  vocabularySelectionTests: Array<{
    question: string;
    words: string[];
    correctAnswer: string;
  }>;
  grade: string;
}) => {
  const data: Prisma.VocabularyTestCreateInput = {
    title: input.title,
    vocabularySelectionTests: {
      createMany: {
        data: input.vocabularySelectionTests.map((test) => ({
          question: test.question,
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
