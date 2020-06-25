import React from "react";
import { SvgIcon } from "@material-ui/core";

/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  enable-background="new 0 0 1000 1000" xml:space="preserve">
<metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>

</svg> */

export default function Crosshair(props) {
  return (
    <SvgIcon x="0px" y="0px" viewBox="0 0 1000 1000" {...props}>
      <g>
        <g>
          <g>
            <path d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M539.9,896.8V676.6h-79.8v220.2c-188.4-18.7-338.2-168.5-356.9-357h220.2v-79.8H103.2c18.7-188.4,168.5-338.2,356.9-356.9v220.2h79.8V103.2c188.4,18.7,338.3,168.5,357,356.9H676.6v79.8h220.2C878.1,728.3,728.3,878.1,539.9,896.8z" />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}
