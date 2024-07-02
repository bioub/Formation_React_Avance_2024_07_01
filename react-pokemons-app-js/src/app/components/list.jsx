function List({ items, renderItem }) {
  return (
    <>
      {items.map((v) => renderItem(v))}
    </>
  );
}

export default List;
