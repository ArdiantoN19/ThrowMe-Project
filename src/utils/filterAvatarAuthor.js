const filterAvatarAuthor = (id, datas) => {
  const filtered = datas.find((data) => data.id === id);
  return filtered?.attributes?.avatar?.data?.attributes?.url;
};

export { filterAvatarAuthor };
