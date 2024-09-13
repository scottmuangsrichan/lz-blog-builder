import { Content } from "@builder.io/react";
export default function Blog(content: any) {
  return (
    <Content
      model="blog-article"
      apiKey="ec94ceb5f4634518a1af4fbcfda066e5"
      content={content}
    />
  );
}
