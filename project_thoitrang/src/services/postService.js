const posts = [
	{
	  id: 1,
	  title: "Cách chọn áo sơ mi phù hợp",
	  content: "Áo sơ mi là một phần không thể thiếu trong tủ đồ...",
	  date: "2025-04-01",
	},
	{
	  id: 2,
	  title: "Bí quyết phối đồ với áo polo",
	  content: "Áo polo là lựa chọn hoàn hảo cho phong cách năng động...",
	  date: "2025-03-28",
	},
  ];
  
  export const getPosts = () => {
	return posts;
  };
  
  export const getPostById = (id) => {
	return posts.find((post) => post.id === id);
  };