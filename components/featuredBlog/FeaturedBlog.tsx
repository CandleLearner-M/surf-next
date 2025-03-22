"use client"

import styles from './FeaturedBlog.module.scss'

import Image from "next/image";
import { ReactNode } from "react";
import { ParagraphElement } from '../InfoBlock/InfoBlock';
import Markdown from 'react-markdown';


interface FeaturedBlogProps {
  data: {
    title: string;
    imageSrc: string;
    postBody: ParagraphElement[];
    buttonCPN: ReactNode;
  };
}

function FeaturedBlog({ data }: FeaturedBlogProps) {
  const { title, buttonCPN, imageSrc, postBody } = data;

  console.log(postBody)

  return (
    <section className={styles.featured}>
      <div className={styles.featured__paragraph}>
        <h1>{title}</h1>
        <Markdown>{postBody.map((paragraph) => paragraph.children[0].text + "\n").join(' ') }</Markdown>
        {buttonCPN}
      </div>
      <Image src={imageSrc} alt="some img" height={1200} width={1900} />
    </section>
  );
}
export default FeaturedBlog;
