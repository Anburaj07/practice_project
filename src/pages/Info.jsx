import { Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Info = () => {
  const [state, setState] = useState("");
  return (
    <div>
      <Flex w={"40%"} m="auto" mt={"20px"}>
        <Input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          maxLength={132}
          minLength={2}
          spellCheck="true"
        />
      </Flex>
      <Text contentEditable="true">
        Hey dude whatsup , I am trying this new
      </Text>

      {/* <!-- Opens in the same frame --> */}
      <a href="https://shefali.dev" target="_self">
        Open
      </a>
      {/* _blank ,_parent,_top,framename */}

      <p title="World Health Organization">WHO</p>

      {/* <abbr title="World Health Organization">WHO</abbr> */}
      {/* The title attribute can be used to provide additional information about an element when a user hovers over it. */}
      
      <input type="file" accept="image/png, image/jpeg" />
    </div>
  );
};

export default Info;
