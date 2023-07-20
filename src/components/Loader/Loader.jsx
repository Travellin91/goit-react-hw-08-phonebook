import { Audio } from 'react-loader-spinner';
import { StyledLoader } from './LoaderStyles';

export default function Loader() {
  return (
    <StyledLoader>
      <Audio
        height="100"
        width="100"
        color="#ff6b6b"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </StyledLoader>
  );
}
