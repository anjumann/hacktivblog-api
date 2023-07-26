import {
  Podcast,
  createPodcast,
  getAllPodcasts,
  getPodcastById,
  getPodcastsByEmail,
} from "@/lib/db/podcastFunctions";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const data = (await request.json()) as Podcast;

  try {
    const newPodcast = await createPodcast(data);
    // console.log(newPodcast);
    return NextResponse.json(newPodcast, {
      status: 201,
    });
  } catch (error) {
    // console.log(error);
    return NextResponse.json(error);
  }
};

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const podcastId = searchParams.get("podcastId") as string;
  const email = searchParams.get("email") as string;


    if (!podcastId && !email) {
        try {
            const data = await getAllPodcasts();
            return NextResponse.json(data);
        } catch (error) {
            // console.log(error);
            return NextResponse.json(error);
        }
    }

    if (podcastId) {
        try {
            const data = await getPodcastById(podcastId);
            return NextResponse.json(data);
        } catch (error) {
            // console.log(error);
            return NextResponse.json(error);
        }
    }
    
    if (email) {
        try {
            const data = await getPodcastsByEmail(email);
            return NextResponse.json(data);
        } catch (error) {
            // console.log(error);
            return NextResponse.json(error);
        }
    }

  

};
