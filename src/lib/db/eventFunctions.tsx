import { prisma } from "./postFunctions";

export interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  authorEmail: string;
}

export const createEvent = async (event: Event) => {
  const { title, description, date, time, location, authorEmail } = event;

  const newevent = await prisma.events.create({
    data: {
      title,
      description,
      date,
      time,
      location,
      author: {
        connectOrCreate: {
          where: { email: authorEmail },
          create: { email: authorEmail },
        },
      },
    },
  });

  return newevent;
};



export const getAllEvents = async () => {
    const allEvents = await prisma.events.findMany()
    return allEvents
}

export const getEventsByEmail = async (email: string) => {
    const events = await prisma.events.findMany({
        where: {
            author:{
                email: email
            }
        }
    })
    return events
}

export const getEventById = async (id: string) => {
    const event = await prisma.events.findUnique({
        where: {
            id: id
        }
    })
    return event
}