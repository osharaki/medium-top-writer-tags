export const tags = [
  "Journalism",
  "Technology",
  "Politics",
  "Writing",
  "Sports",
  "Ideas",
  "Advice",
  "Education",
  "Inspiration",
  "Health",
  "Fitness",
  "Finance",
];

export const writerCounts = ((tags) =>
  Array.from({ length: tags.length }, () => Math.floor(Math.random() * 51)))(
  tags
);
