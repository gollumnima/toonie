import React, { useState } from "react";
import { Peer } from "../../store/slices/peerSlices";
import { PopoverContainer } from "../Common/PopoverContainer";
import { BrushPopover } from "./BrushPopover";
import * as S from "./styles";

interface Props {
  activePeers: Peer[];
  user: Peer | undefined;
}

const Navbar = ({ activePeers, user }: Props) => {
  const [isBrushPopoverVisible, setIsBrushPopoverVisible] =
    useState<boolean>(false);
  return (
    <S.Container>
      <S.LogoContainer>
        <S.LogoName>toonie</S.LogoName>
      </S.LogoContainer>
      <S.UserColor
        color={user ? user.metadata.color : ""}
        onClick={() => {
          setIsBrushPopoverVisible(true);
        }}
      >
        brush
        <PopoverContainer
          isVisible={isBrushPopoverVisible}
          setIsVisible={setIsBrushPopoverVisible}
          extendDirection="BOTTOM"
        >
          <BrushPopover user={user} />
        </PopoverContainer>
      </S.UserColor>
      <S.PeersControlContainer>
        <S.ShareButton></S.ShareButton>
        <S.PeersContainer>
          {activePeers
            .filter((element, index) => index < 3)
            .map((peer, index) => {
              return (
                <S.PeerStatus
                  key={peer.id}
                  index={index}
                  color={peer.metadata.color}
                  peerCount={activePeers.length}
                >
                  {peer.metadata.username[0]}
                </S.PeerStatus>
              );
            })}
          {activePeers.length > 3 && (
            <S.PeerStatus
              index={4}
              color={"#ffffff"}
              peerCount={activePeers.length}
              style={{ color: "black", boxShadow: `0 0 0 2px #000 inset` }}
            >
              {"..."}
            </S.PeerStatus>
          )}
        </S.PeersContainer>
      </S.PeersControlContainer>
    </S.Container>
  );
};

export default Navbar;