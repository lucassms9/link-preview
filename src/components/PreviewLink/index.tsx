import { Link, ContentImage, Content, ContainerImage } from "./styles";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import https from "https";

const PreviewLink = ({ link, name }: { link: string; name: string }) => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [destroyImage, setDestroyImage] = useState(false);

  const onMouseEnter = async () => {
    setDestroyImage(false);
    setShowImage(true);
  };
  const onMouseLeave = () => {
    setShowImage(false);
    setTimeout(() => {
      setDestroyImage(true);
    }, 100);
  };

  const getImage = useCallback(async () => {
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    const url = `https://shot.screenshotapi.net/screenshot?token=G26RH0V-X28MPTC-G5RYGKT-Y6F02BF&url=${link}&output=json&file_type=png&wait_for_event=load`;

    try {
      const {
        data: { screenshot },
      } = await axios.get(url, {
        httpsAgent: agent,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      setImage(screenshot);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [link]);

  useEffect(() => {
    getImage();
  }, [link, getImage]);
  if (loading) {
    return null;
  }
  return (
    <Content>
      {!destroyImage && (
        <ContainerImage>
          <ContentImage showImage={showImage}>
            <Image
              title="link"
              alt="link"
              width={400}
              height={200}
              src={image}
            />
          </ContentImage>
        </ContainerImage>
      )}

      <Link onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} href={link}>
        {name}
      </Link>
    </Content>
  );
};

export default PreviewLink;
