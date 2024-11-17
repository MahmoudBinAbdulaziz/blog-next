import { NextResponse } from "next/server";

const IMGUR_CLIENT_ID = process.env.CLIENT_ID; // Replace with your actual Imgur Client ID

export async function POST(request) {
  try {
    const { imageData } = await request.json();

    // Upload the image to Imgur
    const response = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageData.split(",")[1] }), // removes "data:image/*;base64,"
    });

    const data = await response.json();

    if (!data.success) {
      return NextResponse.json(
        { error: "Failed to upload image to Imgur" },
        { status: 500 }
      );
    }

    // Return the URL of the uploaded image
    return NextResponse.json({ imageUrl: data.data.link });
  } catch (error) {
    console.error("Error uploading to Imgur:", error);
    return NextResponse.json(
      { error: "An error occurred while uploading" },
      { status: 500 }
    );
  }
}
