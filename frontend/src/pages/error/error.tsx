import sus from "./assets/sus.png";

import { errorSusStyle, errorWrapperStyle } from "./error.css";
import {Button} from "../../shared/components/button/button";

export const Error = () => {
  return (
    <div className={errorWrapperStyle}>
        <h1>You shouldn't be here</h1>
        <Button href="/" size="large">Return home</Button>
        <img alt="Among us 'sus' meme" className={errorSusStyle} src={sus} />
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Error;

