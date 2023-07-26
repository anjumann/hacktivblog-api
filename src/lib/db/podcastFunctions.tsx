import { prisma } from "./postFunctions";

export interface Podcast {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  authorEmail: string;
  youtubeLink: string;
}

export const createPodcast = async (podcast: Podcast) => {
  const { title, description, date, time, location, authorEmail, youtubeLink } =
    podcast;

  const newPodcast = await prisma.podcast.create({
    data: {
      title,
      date,
      description,
      time,
      location,
      youtubeLink,
      author: {
        connectOrCreate: {
          where: { email: authorEmail },
          create: { email: authorEmail },
        },
      },
    },
  });

  return newPodcast;
};

export const getAllPodcasts = async () => {
  const allPodcasts = await prisma.podcast.findMany();
  return allPodcasts;
};

export const getPodcastsByEmail = async (email: string) => {
  const podcasts = await prisma.podcast.findMany({
    where: {
      author: {
        email: email,
      },
    },
  });
  return podcasts;
};

export const getPodcastById = async (podcastId: string) => {
  const podcast = await prisma.podcast.findUnique({
    where: {
      podcastId: podcastId,
    },
  });
  return podcast;
};
