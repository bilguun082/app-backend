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
    title: string;
    image: string;
    word: string;
    translation: string;
    exampleSentence: string;
    isSaved: boolean;
    isLast: boolean;
  }>;
  isStarted: boolean;
  isDone: boolean;
}) => {
  const data: Prisma.VocabularyCreateInput = {
    title: input.title,
    words: {
      createMany: {
        data: input.words.map((word) => ({
          title: word.title,
          image: word.image,
          word: word.word,
          translation: word.translation,
          exampleSentence: word.exampleSentence,
          isSaved: word.isSaved,
          isLast: word.isLast,
        })),
      },
    },
    isStarted: input.isStarted,
    isDone: input.isDone,
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
    isStarted: boolean | undefined;
    isDone: boolean | undefined;
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
    throw new GraphQLError("Error updating vocabulary");
  }
};

export const updateWord = async (
  id: string,
  wordId: string,
  input: {
    isSaved: boolean;
  }
) => {
  const vocabulary = await prisma.vocabulary.findUnique({
    where: {
      id: id,
    },
    include: {
      words: true,
    },
  });

  if (!vocabulary) {
    throw new Error("Vocabulary not found");
  }

  const wordToUpdate = vocabulary.words.find((word) => word.id === wordId);

  if (!wordToUpdate) {
    throw new Error("Word not found in the Vocabulary");
  }

  console.log("Updating word:", wordToUpdate.id);

  try {
    const updatedWord = await prisma.word.update({
      where: {
        id: wordToUpdate.id,
      },
      data: input,
    });

    if (!updatedWord) {
      throw new Error("Failed to update word");
    }

    console.log("Word updated successfully:", updatedWord.id);

    return updatedWord;
  } catch (error) {
    console.error("Error updating word:", error);
    throw new Error("Error updating word");
  }
};
