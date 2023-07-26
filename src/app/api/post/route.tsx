import {
    Post,
  createPost,
  getAllPosts,
  getPostById,
  getPostsByEmail,
} from "@/lib/db/postFunctions";
import { NextResponse } from "next/server";


export const POST = async (request: Request) => {
  const data = await request.json() as Post;

  try {

    const newPost = await createPost(data);
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
  const postId = searchParams.get("postId");
  const email = searchParams.get("email");

  if (!postId && !email) {
    try {
      const data = await getAllPosts();
      return NextResponse.json(data);
    } catch (error) {
      console.log(error);
      return NextResponse.json(error);
    }
  }

  if (email) {
    try {
      const data = await getPostsByEmail(email);
      return NextResponse.json(data);
    } catch (error) {
      console.log(error);
      return NextResponse.json(error);
    }
  }
  if (postId) {
    try {
      const data = await getPostById(postId);
      return NextResponse.json(data);
    } catch (error) {
      console.log(error);
      return NextResponse.json(error);
    }
  }
};
