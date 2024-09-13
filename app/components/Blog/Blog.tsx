import { Content } from "@builder.io/react";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader = async () => {
  return json({
    builderApiKey: process.env.BUILDER_API_KEY,
  });
};

export default function Blog(content: any) {
  const { builderApiKey } = useLoaderData();
  return (
    <Content model="blog-article" apiKey={builderApiKey} content={content} />
  );
}
