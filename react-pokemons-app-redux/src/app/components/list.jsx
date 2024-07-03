import { memo } from "react";

function List({ items, renderItem }) {
  return (
    <>
      {items.map((v) => renderItem(v))}
    </>
  );
}

export default memo(List);
// export default memo(List, (prevProps, nextProps) => prevProps.items === nextProps.items);
