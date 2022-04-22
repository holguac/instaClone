import { useEffect, useState } from "react";

const Story = () => {
	const [posts, setPosts] = useState([]);


	const getPics = async () => {
		const response = await fetch("https://picsum.photos/v2/list?page=2&limit=10");
		const data = await response.json();
		console.log(data);
		setPosts(data);
	};

  useEffect(() => {
		getPics();
	}, []);

  return (
    <div className="story">
    <div className="individualstory">
    {posts.map((item) => {
    return (
      <div>
        <img 
        src={item.download_url} 
        />
      </div>
    )
    })}
    </div>
    </div>
  )

};

export default Story;