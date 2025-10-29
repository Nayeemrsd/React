export const githubDataLoader = async () => {
  const response = await fetch("https://api.github.com/users/nayeemrsd");
  return response.json();
};
