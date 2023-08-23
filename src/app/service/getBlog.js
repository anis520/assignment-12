export const getBlog = () => {
  let data = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error("Error fetching data:", error));

  return data;
};
export const getSingleBlog = (id) => {
  let data = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error("Error fetching data:", error));

  return data;
};
