import React from "react";
import { Flex, ListItem, UnorderedList, Link } from "@chakra-ui/react";

const NavBar = () => {
  const Links = [{ title: "HOME" }, { title: "COMICS" }, { title: "ABOUT" }];

  return (
    <Flex backgroundColor={"#131313"} height={"100px"}>
      <UnorderedList
        display={"flex"}
        alignItems={"center"}
        listStyleType={"none"}
        width={"100%"}
      >
        {Links.map((data) => {
          return (
            <ListItem padding={"1.2rem"}>
              <Link color="white" fontSize={"20px"}>
                {data.title}
              </Link>
            </ListItem>
          );
        })}
      </UnorderedList>
      <Flex></Flex>
    </Flex>
  );
};
export default NavBar;
