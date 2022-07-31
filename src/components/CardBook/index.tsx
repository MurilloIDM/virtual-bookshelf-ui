import React from "react";

import { ContainerCard, ContentCard, Title, Text, Image } from "./styles";

interface CardBookProps {
  title: string;
  author: string;
  coverUrl: string;
}

export function CardBook({ title, coverUrl, author }: CardBookProps): React.ReactElement {
  return (
    <ContainerCard>
      <Image src={coverUrl} alt={`Capa do livro ${title}`} />

      <ContentCard>
        <Title title={title}>{title}</Title>
        <Text>{author}</Text>
      </ContentCard>
    </ContainerCard>
  );
}