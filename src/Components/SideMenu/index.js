import React from "react";
import { Menu, Ul, Anchor, ListItem } from "./style.js";

function SideMenu() {
  return (
    <Menu>
      <Ul>
        <Anchor href="null">
          <ListItem>
            <img src="images/logo_outline.png" alt="" />
          </ListItem>
        </Anchor>
        <Anchor href="null">
          <ListItem active ='1'>
            <img src="images/ico_conversation_png.png" alt="" />
          </ListItem>
        </Anchor>
        <Anchor href="null">
          <ListItem>
            <img src="images/ico_mylist_png.png" alt="" />
          </ListItem>
        </Anchor>
        <Anchor href="null">
          <ListItem>
            <img src="images/ico_profile_png.png" alt="" />
          </ListItem>
        </Anchor>
        <Anchor href="null">
          <ListItem>
            <img src="images/cog.png" alt="" />
          </ListItem>
        </Anchor>
      </Ul>

      <Ul>
        <Anchor href="null">
          <ListItem>
            <img src="images/logout.png" alt="" />
          </ListItem>
        </Anchor>
      </Ul>
    </Menu>
  );
}

export default SideMenu;
