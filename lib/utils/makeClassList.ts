const makeClassList = (
  arr: (string | null | undefined)[]
): string | undefined => {
  return !arr || arr.length === 0 ? undefined : arr.filter(Boolean).join(" ");
};

export default makeClassList;
