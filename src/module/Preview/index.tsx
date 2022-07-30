import { Main, ContentLinks } from "./styles";

import PreviewLink from "../../components/PreviewLink";

const Preview = () => {
  return (
    <Main>
      <h1>Preview Link</h1>

      <ContentLinks>
        <PreviewLink name="Strip" link="https://stripe.com/" />
        <PreviewLink name="NextJs" link="https://nextjs.org/" />
        <PreviewLink name="ReactJs" link="https://reactjs.org/" />
        <PreviewLink name="Flutter" link="https://flutter.dev/" />
      </ContentLinks>
    </Main>
  );
};

export default Preview;
