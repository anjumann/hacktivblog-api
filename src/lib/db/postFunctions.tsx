import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export interface Post {
  title: string;
  content: string;
  authorEmail: string;
}

export const createPost = async (post: Post) => {
  const { title, content, authorEmail } = post;

  const newPost = await prisma.post.create({
    data: {
      title,
      content,
      author: {
        connectOrCreate: {
          where: { email: authorEmail },
          create: { email: authorEmail },
        },
      },
    },
  });

  return newPost;
};


export const getAllPosts = async () => {
    const allPosts = await prisma.post.findMany()
    return allPosts
}

export const getPostsByEmail = async (email: string) => {
    const posts = await prisma.post.findMany({
        where: {
            author:{
                email: email
            }
        }
    })
    return posts
}

export const getPostById = async (postId: string) => {
    const post = await prisma.post.findUnique({
        where: {
            postId: postId
        }
    })
    return post
}