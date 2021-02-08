import React from "react";
import { Stack } from "../../component/Stack";

import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { CountOperate } from "./CountOperate";

const testPic =
  "https://cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/TTTT_900x.jpg?v=1611564612";

export const ProductItem = ({ onClick }) => {
  return (
    <Stack>
      <ButtonBase
        css={{ margin: "0 1em", padding: "1em 2em", borderRadius: "5px" }}
        onClick={() => {
          onClick && onClick();
        }}
      >
        <img src={testPic} css={{ maxWidth: "100%" }} />
      </ButtonBase>
      <ButtonBase css={{ margin: "0 1em", padding: ".3em 0" }}>
        <Typography variant={"subtitle1"}>详情简介</Typography>
      </ButtonBase>
      <Typography variant={"caption"} css={{ textAlign: "center" }}>
        — $22.9
      </Typography>
    </Stack>
  );
};

export const ProductItemLine = ({ ...otherProps }) => {
  return (
    <Stack inline css={{ padding: ".5em 0" }} {...otherProps}>
      <img
        css={{ width: "4em" }}
        src={
          "https://cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012462293_572990573_small.jpg?v=1611564633"
        }
      />
      <Stack justify={"center"} css={{ flexGrow: 1, marginLeft: ".8em" }}>
        <Typography variant={"subtitle1"}>产品名称</Typography>
        <Typography variant={"subtitle2"}>产品简介</Typography>
        <Stack inline justify={"space-between"} css={{ marginTop: ".3em" }}>
          <CountOperate />
          <Typography variant={"caption"} css={{ textAlign: "center" }}>
            — $22.9
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};