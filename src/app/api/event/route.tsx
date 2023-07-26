import { Event, createEvent, getAllEvents, getEventById, getEventsByEmail } from "@/lib/db/eventFunctions";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const data = (await request.json()) as Event;

  try {
    const newPost = await createEvent(data);
    console.log(newPost);
    return NextResponse.json(newPost, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
};

export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url);
    const eventId = searchParams.get("eventId")  as string;
    const email = searchParams.get("email")  as string;
    
    if (!eventId && !email) {
        try {
        const data = await getAllEvents();
        return NextResponse.json(data);
        } catch (error) {
        console.log(error);
        return NextResponse.json(error);
        }
    }
    
    if (email) {
        try {
        const data = await getEventsByEmail(email);
        return NextResponse.json(data);
        } catch (error) {
        console.log(error);
        return NextResponse.json(error);
        }
    }
    if (eventId) {
        try {
        const data = await getEventById(eventId);
        return NextResponse.json(data);
        } catch (error) {
        console.log(error);
        return NextResponse.json(error);
        }
    }
    }