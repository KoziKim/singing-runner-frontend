import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../../../commons/contexts/SocketContext";
import { useRecoilState } from "recoil";
import { userIdState } from "../../../../commons/store";
import { S3_PATH } from "../../../../commons/constants/Constants";

const ITEM_GET_INTERVAL = 10000; // 아이템 발생 텀

export default function ItemList(props: { preventEvent?: boolean }) {
  // 소켓 가져오기
  const socketContext = useContext(SocketContext);
  if (!socketContext) return <div>Loading...</div>;
  const { socket } = socketContext;

  const [userId] = useRecoilState(userIdState);

  const [itemList, setItemList] = useState<string[]>([]);

  const useItemAudio = new Audio(`/sound/effect/use_item.mp3`);
  const getItemAudio = new Audio(`/sound/effect/get_item.mp3`);

  useEffect(() => {
    // ITEM_GET_INTERVAL 간격으로 아이템 획득 요청
    const interval = setInterval(() => {
      if (props.preventEvent) return;
      socket?.emit("get_item", userId);
    }, ITEM_GET_INTERVAL);

    socket?.on("get_item", (item: string) => {
      getItem(item);
    });

    return () => {
      clearInterval(interval); // 컴포넌트가 언마운트될 때 interval을 정리합니다.
      socket?.off("get_item");
    };
  }, [socket]);

  /** 아이템 획득 함수 */
  const getItem = (item: string) => {
    setItemList((prev) => {
      if (prev.length >= 2) return prev;
      return [...prev, item];
    });
    getItemAudio.play();
  };

  /** 아이템 사용 함수 */
  const useItem = (item: string) => {
    if (props.preventEvent) return;
    socket?.emit("use_item", { item, userId });
    setItemList((prev) => {
      // 같은 아이템이 두 개 있으면 하나만 제거
      if (prev[0] === prev[1]) return prev.slice(1);
      return prev.filter((i) => i !== item); // itemList에서 해당 아이템을 제외한 나머지만 반환
    });
    useItemAudio.play();
  };

  return (
    <ItemWrapper>
      {itemList
        .filter((item) => item)
        .map((item, i) => (
          <img
            key={i}
            src={`${S3_PATH}/game/item/${item}.png`}
            onClick={() => useItem(item)}
          />
        ))}
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  right: 0;
  img {
    width: 84px;
    height: 84px;
    margin-bottom: -8px;
  }
`;
