import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { GraphQLError } from "graphql";

export const getAllVocabularies = async () => {
  try {
    const result = await prisma.vocabulary.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching vocabularies");
  }
};

export const getVocabulary = async (id: string) => {
  try {
    const result = await prisma.vocabulary.findUnique({
      where: { id },
      include: {
        words: true,
      },
    });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching vocabulary");
  }
};

export const createVocabulary = async (input: {
  title: string;
  words: Array<{
    image: string;
    word: string;
    translation: string;
    exampleSentence: string;
    isSaved: boolean;
  }>;
}) => {
  const data: Prisma.VocabularyCreateInput = {
    title: input.title,
    words: {
      createMany: {
        data: input.words.map((word) => ({
          image: word.image,
          word: word.word,
          translation: word.translation,
          exampleSentence: word.exampleSentence,
          isSaved: word.isSaved,
        })),
      },
    },
  };
  try {
    const result = await prisma.vocabulary.create({ data });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Errror creating vocabulary");
  }
};

export const updateVocabulary = async (
  id: string,
  input: {
    isSaved: boolean;
  }
) => {
  try {
    const result = await prisma.word.update({
      where: { id },
      data: input,
    });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error updating vocabulary");
  }
};
